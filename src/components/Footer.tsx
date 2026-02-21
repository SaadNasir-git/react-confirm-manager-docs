import { Zap } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-gray-900 text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-6 md:mb-0">
                        <Zap className="h-6 w-6 text-blue-400" />
                        <span className="text-xl font-bold">React Confirm Manager</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
                        <a href="#examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
                        <a href="#github" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
                        <a href="#license" className="text-gray-300 hover:text-white transition-colors">License</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>Made with ❤️ by the open-source community. Released under the MIT License.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer