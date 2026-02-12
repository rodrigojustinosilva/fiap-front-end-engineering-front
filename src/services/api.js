const API_URL = import.meta.env.VITE_API_URL;
const TIMEOUT = 300000;

// Timeout helper
const fetchWithTimeout = (url, options = {}, timeout = TIMEOUT) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    ),
  ]);
};

// Fetch vocabulary
export const fetchVocabulary = async () => {
  try {
    console.log('🔄 Fetching vocabulary from:', API_URL);
    
    const response = await fetchWithTimeout(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('📡 Response status:', response.status);
    console.log('📄 Response headers:', response.headers.get('content-type'));

    // Verificar se a resposta é OK
    if (!response.ok) {
      // Tentar ler a mensagem de erro
      const errorText = await response.text();
      console.error('❌ API Error Response:', errorText);
      throw new Error(`API returned status ${response.status}: ${errorText.substring(0, 100)}`);
    }

    // Verificar se o content-type é JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const htmlResponse = await response.text();
      console.error('❌ Received HTML instead of JSON:', htmlResponse.substring(0, 200));
      throw new Error('API returned HTML instead of JSON. The service might be down or the URL is incorrect.');
    }

    // Tentar parsear o JSON
    const text = await response.text();
    console.log('📦 Raw response:', text.substring(0, 200));
    
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseError) {
      console.error('❌ JSON Parse Error:', parseError);
      console.error('📄 Response text:', text.substring(0, 500));
      throw new Error('Invalid JSON response from API');
    }

    // Validar estrutura
    if (!Array.isArray(data)) {
      console.error('❌ Invalid data structure:', data);
      throw new Error('API response is not an array');
    }

    if (data.length === 0) {
      throw new Error('API returned empty array');
    }

    // Validar cada item
    const isValid = data.every(item => 
      item.word && item.description && item.useCase
    );

    if (!isValid) {
      console.error('❌ Invalid item structure in array:', data);
      throw new Error('API response has invalid item structure');
    }

    console.log('✅ Successfully fetched vocabulary:', data.length, 'words');
    return data;

  } catch (error) {
    console.error('💥 Error fetching vocabulary:', error);
    
    // Mensagens de erro customizadas
    if (error.message === 'Request timeout') {
      throw new Error('⏱️ Request timeout. The API is taking too long to respond. Please try again.');
    }
    
    if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
      throw new Error('🌐 Network error. Please check your internet connection or verify if the API is accessible.');
    }

    if (error.message.includes('CORS')) {
      throw new Error('🚫 CORS error. The API is blocking requests from this origin.');
    }
    
    // Re-throw com mensagem original se for um erro customizado
    throw error;
  }
};

// Verificar status da API
export const checkAPIStatus = async () => {
  try {
    const response = await fetchWithTimeout(API_URL, {
      method: 'HEAD',
    }, 5000);
    return response.ok;
  } catch (error) {
    console.error('API Status Check Failed:', error);
    return false;
  }
};