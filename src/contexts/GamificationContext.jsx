import { createContext, useContext, useState, useEffect } from 'react';
import {
  getUserPoints,
  saveUserPoints,
  getUserLevel,
  saveUserLevel,
  getStreak,
  saveStreak,
  getMasteredWords,
  saveMasteredWords,
} from '../utils/localStorage';
import { calculateLevel, POINTS } from '../utils/gamification';

const GamificationContext = createContext();

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within GamificationProvider');
  }
  return context;
};

export const GamificationProvider = ({ children }) => {
  const [points, setPoints] = useState(getUserPoints());
  const [level, setLevel] = useState(getUserLevel());
  const [streak, setStreak] = useState(getStreak());
  const [masteredWords, setMasteredWords] = useState(getMasteredWords());
  const [showLevelUp, setShowLevelUp] = useState(false);

  // Atualizar nível quando pontos mudarem
  useEffect(() => {
    const newLevel = calculateLevel(points);
    if (newLevel > level) {
      setLevel(newLevel);
      saveUserLevel(newLevel);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    }
  }, [points, level]);

  // Adicionar pontos
  const addPoints = (amount) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    saveUserPoints(newPoints);
  };

  // Marcar palavra como aprendida
  const markWordAsMastered = (word) => {
    if (!masteredWords.has(word)) {
      const newMastered = new Set(masteredWords);
      newMastered.add(word);
      setMasteredWords(newMastered);
      saveMasteredWords(newMastered);
      addPoints(POINTS.WORD_LEARNED);
      return true;
    }
    return false;
  };

  // Desmarcar palavra
  const unmarkWord = (word) => {
    if (masteredWords.has(word)) {
      const newMastered = new Set(masteredWords);
      newMastered.delete(word);
      setMasteredWords(newMastered);
      saveMasteredWords(newMastered);
      return true;
    }
    return false;
  };

  // Incrementar streak
  const incrementStreak = () => {
    const today = new Date().toDateString();
    const streakData = localStorage.getItem('learning_streak');
    
    if (streakData) {
      const { lastDate } = JSON.parse(streakData);
      if (lastDate !== today) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        saveStreak(newStreak);
        if (newStreak % 7 === 0) {
          addPoints(POINTS.STREAK_BONUS);
        }
      }
    } else {
      setStreak(1);
      saveStreak(1);
    }
  };

  const value = {
    points,
    level,
    streak,
    masteredWords,
    showLevelUp,
    addPoints,
    markWordAsMastered,
    unmarkWord,
    incrementStreak,
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
};