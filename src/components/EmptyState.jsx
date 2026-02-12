import { BookOpen } from 'lucide-react';

const EmptyState = ({ onLoadWords }) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="mb-6">
        <BookOpen className="mx-auto text-gray-300" size={80} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        No Vocabulary Loaded Yet
      </h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Click the "Load New Words" button to start learning amazing new English vocabulary powered by AI.
      </p>
      <button
        onClick={onLoadWords}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all"
      >
        Load Your First Words
      </button>
    </div>
  );
};

export default EmptyState;