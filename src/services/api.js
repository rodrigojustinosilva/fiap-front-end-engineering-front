const API_URL = import.meta.env.VITE_API_URL || 'https://fiap-bff-9aojr.onrender.com/ask';

// Timeout para requisições (30 segundos)
const TIMEOUT = 30000;

// Função auxiliar para timeout
const fetchWithTimeout = (url, options = {}, timeout = TIMEOUT) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    ),
  ]);
};

// Buscar vocabulário da API
export const fetchVocabulary = async () => {
  try {
    const response = await fetchWithTimeout(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Validar estrutura dos dados
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format received from API');
    }

    return data;
  } catch (error) {
    console.error('Error fetching vocabulary:', error);
    
    // Mensagens de erro customizadas
    if (error.message === 'Request timeout') {
      throw new Error('The request took too long. Please check your connection and try again.');
    }
    
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Unable to connect to the server. Please check your internet connection.');
    }
    
    throw error;
  }
};

// Verificar status da API
export const checkAPIStatus = async () => {
  try {
    const response = await fetchWithTimeout(API_URL, {}, 5000);
    return response.ok;
  } catch (error) {
    return false;
  }
};