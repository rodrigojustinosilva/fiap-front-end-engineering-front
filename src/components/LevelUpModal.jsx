import { Trophy, X } from 'lucide-react';
import { useGamification } from '../contexts/GamificationContext';
import { getLevelTitle } from '../utils/gamification';

const LevelUpModal = () => {
  const { level, showLevelUp } = useGamification();
  const levelTitle = getLevelTitle(level);

  if (!showLevelUp) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-bounce shadow-2xl">
        {/* Troféu Animado */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse-slow">
            <Trophy className="text-white" size={48} />
          </div>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Level Up! 🎉
        </h2>
        
        {/* Nível */}
        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Level {level}
        </div>

        {/* Título do Nível */}
        <p className="text-xl text-gray-600 mb-6">{levelTitle}</p>

        {/* Mensagem */}
        <p className="text-gray-500 mb-6">
          Keep up the great work! You're making amazing progress in your vocabulary journey.
        </p>

        {/* Efeito de Confetes */}
        <div className="text-4xl mb-4">
          🎊 🎉 ✨ 🌟 ⭐
        </div>
      </div>
    </div>
  );
};

export default LevelUpModal;