import { Trophy, TrendingUp, Target, Flame } from 'lucide-react';
import { useGamification } from '../contexts/GamificationContext';
import { getLevelTitle, pointsToNextLevel } from '../utils/gamification';

const GamificationPanel = () => {
  const { points, level, streak, masteredWords } = useGamification();
  const nextLevelPoints = pointsToNextLevel(points);
  const levelTitle = getLevelTitle(level);
  const progress = ((points % 100) / 100) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Título e Nível */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Your Progress</h2>
          <p className="text-sm text-gray-500">{levelTitle}</p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl">
          <Trophy size={20} />
          <span className="font-bold">Level {level}</span>
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600">Progress to Level {level + 1}</span>
          <span className="text-sm text-gray-500">{nextLevelPoints} XP needed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
            style={{ width: `${progress}%` }}
          >
            {progress > 10 && (
              <span className="text-xs text-white font-bold">{Math.round(progress)}%</span>
            )}
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Pontos */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-blue-600" size={20} />
            <span className="text-xs font-semibold text-blue-600">POINTS</span>
          </div>
          <p className="text-2xl font-bold text-blue-700">{points}</p>
        </div>

        {/* Palavras Aprendidas */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Target className="text-green-600" size={20} />
            <span className="text-xs font-semibold text-green-600">MASTERED</span>
          </div>
          <p className="text-2xl font-bold text-green-700">{masteredWords.size}</p>
        </div>

        {/* Streak */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="text-orange-600" size={20} />
            <span className="text-xs font-semibold text-orange-600">STREAK</span>
          </div>
          <p className="text-2xl font-bold text-orange-700">{streak} days</p>
        </div>

        {/* Nível */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="text-purple-600" size={20} />
            <span className="text-xs font-semibold text-purple-600">LEVEL</span>
          </div>
          <p className="text-2xl font-bold text-purple-700">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default GamificationPanel;