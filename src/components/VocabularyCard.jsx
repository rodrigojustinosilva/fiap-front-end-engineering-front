import { useState } from 'react';
import { Volume2, CheckCircle, Circle, Sparkles } from 'lucide-react';
import { useGamification } from '../contexts/GamificationContext';
import { POINTS } from '../utils/gamification';

const VocabularyCard = ({ word, description, useCase }) => {
  const [flipped, setFlipped] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const { masteredWords, markWordAsMastered, unmarkWord, addPoints } = useGamification();
  
  const isMastered = masteredWords.has(word);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      setSpeaking(true);
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
      
      // Adicionar pontos por usar pronúncia
      addPoints(POINTS.PRONUNCIATION_USED);
    }
  };

  const handleFlip = () => {
    if (!flipped) {
      addPoints(POINTS.CARD_FLIPPED);
    }
    setFlipped(!flipped);
  };

  const handleMaster = (e) => {
    e.stopPropagation();
    if (isMastered) {
      unmarkWord(word);
    } else {
      markWordAsMastered(word);
    }
  };

  return (
    <div className="group relative perspective">
      <div 
        className={`relative bg-white rounded-2xl shadow-lg card-hover overflow-hidden border-2 transition-all duration-300 ${
          isMastered ? 'border-green-400 bg-green-50' : 'border-transparent'
        }`}
        style={{ minHeight: '340px' }}
      >
        {/* Badge de Status */}
        {isMastered && (
          <div className="absolute top-3 right-3 z-20">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg animate-bounce-slow">
              <Sparkles size={12} />
              Mastered
            </div>
          </div>
        )}

        {/* Frente do Card */}
        <div 
          className={`relative transition-all duration-500 cursor-pointer ${
            flipped ? 'opacity-0 absolute inset-0' : 'opacity-100'
          }`}
          onClick={handleFlip}
        >
          <div className="p-6">
            {/* Palavra Principal */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 break-words">
                  {word}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(word);
                }}
                className={`p-2 rounded-full transition-all flex-shrink-0 ${
                  speaking 
                    ? 'bg-blue-500 text-white scale-110' 
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
                title="Pronounce word"
              >
                <Volume2 size={20} />
              </button>
            </div>

            {/* Definição */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Definition
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>

            {/* Hint */}
            <div className="text-center text-xs text-gray-400 mt-4 animate-pulse">
              👆 Click to see example
            </div>
          </div>
        </div>

        {/* Verso do Card */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleFlip}
        >
          <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-3">
                Example in Context
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-purple-500">
                <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
                  "{useCase}"
                </p>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(useCase);
                }}
                className="mt-4 flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Volume2 size={16} />
                <span className="text-sm font-medium">Listen to example</span>
              </button>
            </div>

            <div className="text-center text-xs text-gray-400 animate-pulse">
              👆 Click to see definition
            </div>
          </div>
        </div>

        {/* Botão de Marcar */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <button
            onClick={handleMaster}
            className={`w-full py-2.5 rounded-lg font-medium transition-all shadow-md ${
              isMastered
                ? 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isMastered ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle size={18} />
                Learned
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Circle size={18} />
                Mark as learned
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;