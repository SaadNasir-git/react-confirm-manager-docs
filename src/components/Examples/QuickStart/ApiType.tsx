const ApiType = () => {
  return (
    <section id="api-return-type" className="py-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Return Type
      </h3>
      
      {/* Promise wrapper indicator */}
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md">
        <div className="flex items-center">
          <div className="w-32 flex-shrink-0">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-mono font-medium border border-blue-200 dark:border-blue-800">
              Promise
            </span>
          </div>
          <span className="text-gray-700 dark:text-gray-300 ml-3">
            The API always returns a Promise
          </span>
        </div>
      </div>
      
      <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
        Promise resolves to:
      </h4>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-24 flex-shrink-0">
            <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-mono font-medium border border-green-200 dark:border-green-800">
              true
            </span>
          </div>
          <span className="text-gray-700 dark:text-gray-300 ml-3">
            User clicked OK button
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="w-24 flex-shrink-0">
            <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-mono font-medium border border-red-200 dark:border-red-800">
              false
            </span>
          </div>
          <span className="text-gray-700 dark:text-gray-300 ml-3">
            User clicked Cancel button
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="w-24 flex-shrink-0">
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-mono font-medium border border-gray-300 dark:border-gray-700">
              null
            </span>
          </div>
          <span className="text-gray-700 dark:text-gray-300 ml-3">
            User pressed ESC or clicked outside (if is enabled)
          </span>
        </div>
      </div>
    </section>
  );
};

export default ApiType;