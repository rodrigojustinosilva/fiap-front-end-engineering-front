// Chaves do LocalStorage
const KEYS = {
  VOCABULARY_HISTORY: 'vocabulary_history',
  MASTERED_WORDS: 'mastered_words',
  USER_STATS: 'user_stats',
  POINTS: 'user_points',
  LEVEL: 'user_level',
  STREAK: 'learning_streak',
};

// Salvar histórico de vocabulário
export const saveVocabularyHistory = (vocabulary) => {
  try {
    const history = getVocabularyHistory();
    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      words: vocabulary,
    };
    const updatedHistory = [newEntry, ...history].slice(0, 10); // Mantém últimas 10 consultas
    localStorage.setItem(KEYS.VOCABULARY_HISTORY, JSON.stringify(updatedHistory));
    return true;
  } catch (error) {
    console.error('Error saving vocabulary history:', error);
    return false;
  }
};

// Obter histórico
export const getVocabularyHistory = () => {
  try {
    const history = localStorage.getItem(KEYS.VOCABULARY_HISTORY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error getting vocabulary history:', error);
    return [];
  }
};

// Salvar palavras dominadas
export const saveMasteredWords = (words) => {
  try {
    localStorage.setItem(KEYS.MASTERED_WORDS, JSON.stringify(Array.from(words)));
    return true;
  } catch (error) {
    console.error('Error saving mastered words:', error);
    return false;
  }
};

// Obter palavras dominadas
export const getMasteredWords = () => {
  try {
    const words = localStorage.getItem(KEYS.MASTERED_WORDS);
    return words ? new Set(JSON.parse(words)) : new Set();
  } catch (error) {
    console.error('Error getting mastered words:', error);
    return new Set();
  }
};

// Salvar pontos do usuário
export const saveUserPoints = (points) => {
  try {
    localStorage.setItem(KEYS.POINTS, JSON.stringify(points));
    return true;
  } catch (error) {
    console.error('Error saving user points:', error);
    return false;
  }
};

// Obter pontos
export const getUserPoints = () => {
  try {
    const points = localStorage.getItem(KEYS.POINTS);
    return points ? JSON.parse(points) : 0;
  } catch (error) {
    console.error('Error getting user points:', error);
    return 0;
  }
};

// Salvar nível
export const saveUserLevel = (level) => {
  try {
    localStorage.setItem(KEYS.LEVEL, JSON.stringify(level));
    return true;
  } catch (error) {
    console.error('Error saving user level:', error);
    return false;
  }
};

// Obter nível
export const getUserLevel = () => {
  try {
    const level = localStorage.getItem(KEYS.LEVEL);
    return level ? JSON.parse(level) : 1;
  } catch (error) {
    console.error('Error getting user level:', error);
    return 1;
  }
};

// Salvar streak (sequência de dias)
export const saveStreak = (streak) => {
  try {
    const data = {
      count: streak,
      lastDate: new Date().toDateString(),
    };
    localStorage.setItem(KEYS.STREAK, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving streak:', error);
    return false;
  }
};

// Obter e atualizar streak
export const getStreak = () => {
  try {
    const data = localStorage.getItem(KEYS.STREAK);
    if (!data) return 0;
    
    const { count, lastDate } = JSON.parse(data);
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    // Se for hoje, retorna count atual
    if (lastDate === today) return count;
    
    // Se for ontem, mantém streak
    if (lastDate === yesterday) return count;
    
    // Se passou mais de um dia, reseta
    saveStreak(0);
    return 0;
  } catch (error) {
    console.error('Error getting streak:', error);
    return 0;
  }
};

// Limpar todos os dados
export const clearAllData = () => {
  try {
    Object.values(KEYS).forEach(key => localStorage.removeItem(key));
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};