import { BookOpen, Code, Download, Play, Star, Rocket } from 'lucide-react';
import QuickStart from './components/Examples/QuickStart';
import Customization from './components/Examples/Customization';
import Api from './components/Examples/Api';
import Contributing from './components/Contributing';
import SidebarHandler from './components/SidebarHandler';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

      {/* Main Layout */}
      <div>
        {/* Sidebar */}
        <SidebarHandler />

        {/* Main Content */}
        <div className="lg:ml-64">

          {/* Hero Section */}
          <section className="py-20 px-4" id="home">
            <div className="mx-auto max-w-6xl text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Async · Scoped · Customizable
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                A confirmation manager
                <span className="block text-blue-400">for React applications</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                React Confirm Manager provides an async, container-scoped confirmation system
                for React. Trigger confirmations imperatively, control where they render,
                and fully customize the dialog UI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  onClick={() => (window.location.href = '#quick-start')}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Get Started
                </button>

                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="https://stackblitz.com/edit/vitejs-vite-bfthlpmw?file=src%2FApp.tsx"
                  target="_blank"
                >
                  <Rocket className="h-5 w-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    10KB
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Gzipped Size</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Zero
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Dependencies</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Customizable UI</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="pt-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="mb-12 text-center">Why React Confirm Manager?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="mb-4">Imperative Async API</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Trigger confirmations with a promise-based <code>confirm()</code> API —
                    no JSX, no hooks required at call sites.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                    <Download className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Scoped Containers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Render confirmations globally, target a specific container,
                    or automatically resolve the closest container to the trigger.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Fully Customizable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Customize layout, content, and behavior while keeping confirmation
                    logic centralized and predictable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Docs Sections */}
          <QuickStart />
          <Api />
          <Customization />
          <Contributing />
        </div>
      </div>
    </div>
  );
};

export default App;