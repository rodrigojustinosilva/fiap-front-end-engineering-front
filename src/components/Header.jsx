import { BookOpen, RefreshCw } from 'lucide-react';

const Header = ({ onLoadWords, loading }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-xl">
              <BookOpen className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Vocabulary Builder
              </h1>
            </div>
          </div>
          
          <button
            onClick={onLoadWords}
            disabled={loading}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            {loading ? 'Loading...' : 'Load New Words'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;