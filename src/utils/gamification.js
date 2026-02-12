// Sistema de pontuação
export const POINTS = {
  WORD_LEARNED: 10,
  CARD_FLIPPED: 1,
  PRONUNCIATION_USED: 2,
  NEW_VOCABULARY_LOADED: 5,
  STREAK_BONUS: 20,
};

// Calcular nível baseado em pontos
export const calculateLevel = (points) => {
  return Math.floor(points / 100) + 1;
};

// Pontos necessários para próximo nível
export const pointsToNextLevel = (currentPoints) => {
  const currentLevel = calculateLevel(currentPoints);
  const nextLevelPoints = currentLevel * 100;
  return nextLevelPoints - currentPoints;
};

// Título baseado em nível
export const getLevelTitle = (level) => {
  if (level >= 50) return '🏆 Vocabulary Master';
  if (level >= 40) return '👑 Word Champion';
  if (level >= 30) return '⭐ Expert Learner';
  if (level >= 20) return '🎯 Advanced Student';
  if (level >= 10) return '📚 Intermediate';
  if (level >= 5) return '🌱 Growing Learner';
  return '🐣 Beginner';
};

// Conquistas
export const ACHIEVEMENTS = {
  FIRST_WORD: { id: 'first_word', name: 'First Steps', description: 'Learn your first word', icon: '🎯' },
  FIVE_WORDS: { id: 'five_words', name: 'Quick Learner', description: 'Learn 5 words', icon: '⭐' },
  TEN_WORDS: { id: 'ten_words', name: 'Dedicated Student', description: 'Learn 10 words', icon: '🌟' },
  STREAK_3: { id: 'streak_3', name: 'Three-Day Streak', description: 'Learn for 3 days in a row', icon: '🔥' },
  STREAK_7: { id: 'streak_7', name: 'Week Warrior', description: 'Learn for 7 days in a row', icon: '💪' },
  LEVEL_5: { id: 'level_5', name: 'Rising Star', description: 'Reach level 5', icon: '✨' },
  LEVEL_10: { id: 'level_10', name: 'Vocabulary Pro', description: 'Reach level 10', icon: '🚀' },
};

// Verificar conquistas desbloqueadas
export const checkAchievements = (masteredCount, streak, level) => {
  const unlocked = [];
  
  if (masteredCount >= 1) unlocked.push(ACHIEVEMENTS.FIRST_WORD);
  if (masteredCount >= 5) unlocked.push(ACHIEVEMENTS.FIVE_WORDS);
  if (masteredCount >= 10) unlocked.push(ACHIEVEMENTS.TEN_WORDS);
  if (streak >= 3) unlocked.push(ACHIEVEMENTS.STREAK_3);
  if (streak >= 7) unlocked.push(ACHIEVEMENTS.STREAK_7);
  if (level >= 5) unlocked.push(ACHIEVEMENTS.LEVEL_5);
  if (level >= 10) unlocked.push(ACHIEVEMENTS.LEVEL_10);
  
  return unlocked;
};