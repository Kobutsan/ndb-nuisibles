export default function DevisLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="animate-pulse">
            {/* Title */}
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-8"></div>
            
            {/* Form fields */}
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
            
            {/* Submit button */}
            <div className="h-12 bg-gray-200 rounded mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}