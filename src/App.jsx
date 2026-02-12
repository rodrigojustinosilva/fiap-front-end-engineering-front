import { useEffect } from 'react';
import { GamificationProvider, useGamification } from './contexts/GamificationContext';
import { useVocabulary } from './hooks/useVocabulary';
import Header from './components/Header';
import GamificationPanel from './components/GamificationPanel';
import VocabularyCard from './components/VocabularyCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import LevelUpModal from './components/LevelUpModal';
import { POINTS } from './utils/gamification';

function AppContent() {
  const { vocabulary, loading, error, loadVocabulary } = useVocabulary();
  const { addPoints, incrementStreak } = useGamification();

  useEffect(() => {
    // Incrementar streak ao carregar app
    incrementStreak();
  }, []);

  const handleLoadWords = async () => {
    await loadVocabulary();
    if (!error) {
      addPoints(POINTS.NEW_VOCABULARY_LOADED);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header onLoadWords={handleLoadWords} loading={loading} />

      <main className="container mx-auto px-4 py-8">
        {/* Painel de Gamificação */}
        <GamificationPanel />

        {/* Loading State */}
        {loading && <LoadingSkeleton />}

        {/* Error State */}
        {error && !loading && (
          <ErrorMessage message={error} onRetry={handleLoadWords} />
        )}

        {/* Empty State */}
        {!loading && !error && vocabulary.length === 0 && (
          <EmptyState onLoadWords={handleLoadWords} />
        )}

        {/* Vocabulary Grid */}
        {!loading && !error && vocabulary.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabulary.map((item, index) => (
              <VocabularyCard
                key={`${item.word}-${index}`}
                word={item.word}
                description={item.description}
                useCase={item.useCase}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs mt-2">
            Powered by Front-End Engineering FIAP Student
          </p>
        </div>
      </footer>

      {/* Modal de Level Up */}
      <LevelUpModal />
    </div>
  );
}

function App() {
  return (
    <GamificationProvider>
      <AppContent />
    </GamificationProvider>
  );
}

export default App;