const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((n) => (
      <div key={n} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="flex justify-between mb-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="mt-6 h-20 bg-gray-100 rounded"></div>
        <div className="mt-4 h-10 bg-gray-200 rounded"></div>
      </div>
    ))}
  </div>
);

export default LoadingSkeleton;