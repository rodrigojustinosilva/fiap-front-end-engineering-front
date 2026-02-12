import { AlertCircle, RefreshCw, Wifi, WifiOff } from 'lucide-react';

const ErrorMessage = ({ message, onRetry }) => {
  const isConnectionError = message.includes('connect') || message.includes('network') || message.includes('internet');

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center shadow-lg">
        {/* Ícone */}
        <div className="mb-6">
          {isConnectionError ? (
            <WifiOff className="mx-auto text-red-500" size={64} />
          ) : (
            <AlertCircle className="mx-auto text-red-500" size={64} />
          )}
        </div>

        {/* Título */}
        <h3 className="text-2xl font-bold text-red-800 mb-3">
          {isConnectionError ? 'Connection Error' : 'Something went wrong'}
        </h3>

        {/* Mensagem */}
        <p className="text-red-700 mb-6 leading-relaxed">{message}</p>

        {/* Dicas */}
        <div className="bg-white rounded-lg p-4 mb-6 text-left">
          <p className="text-sm font-semibold text-gray-700 mb-2">💡 Try these solutions:</p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Check your internet connection</li>
            <li>Verify if the API is available</li>
            <li>Wait a moment and try again</li>
            <li>Clear your browser cache</li>
          </ul>
        </div>

        {/* Botão de Retry */}
        <button
          onClick={onRetry}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <RefreshCw size={20} />
          Try Again
        </button>

        {/* Link de suporte */}
        <p className="mt-4 text-xs text-gray-500">
          Problem persists?{' '}
          <a href="mailto:support@example.com" className="text-red-600 hover:text-red-700 underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;