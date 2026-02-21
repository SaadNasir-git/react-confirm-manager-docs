import { useEffect, useState } from "react";
import Sidebar from "./Sidebar"
import { Menu } from "lucide-react";

const SidebarHandler = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            const large = window.innerWidth >= 1024;
            if (isLargeScreen !== large) {
                setIsLargeScreen(large);
            }

            if (large) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        if (isLargeScreen && !sidebarOpen) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(prev => !prev);
        }
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 lg:hidden z-40 p-3 rounded-lg 
                 bg-blue-600 text-white shadow-lg hover:bg-blue-700 
                 transition-colors"
                aria-label="Open menu"
            >
                <Menu size={24} />
            </button>

            <div className="lg:w-64 lg:fixed lg:inset-y-0 lg:z-30">
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
            </div>
        </>
    )
}

export default SidebarHandler