import { useEffect, useState, useRef, useCallback } from 'react';
import { X, ChevronUp, ChevronDown, Terminal, Trash2, Copy } from 'lucide-react';

export function Console() {
    const [localLogs, setLocalLogs] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [drawerHeight, setDrawerHeight] = useState(300); // Default height in pixels
    const dragStartY = useRef(0);
    const startHeight = useRef(0);
    const isDraggingRef = useRef(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateLogs = () => {
            setLocalLogs([...(window as any).capturedLogs || []]);
        };

        window.addEventListener('new-log-added', updateLogs);
        updateLogs(); // Initial load

        return () => window.removeEventListener('new-log-added', updateLogs);
    }, []);

    useEffect(() => {
        // Auto-scroll to bottom when new logs arrive
        if (contentRef.current && isOpen) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [localLogs, isOpen]);

    const startDrag = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        isDraggingRef.current = true;
        dragStartY.current = e.clientY;
        startHeight.current = isOpen ? drawerHeight : 0;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!isDraggingRef.current) return;

            const deltaY = dragStartY.current - moveEvent.clientY;
            let newHeight = startHeight.current + deltaY;

            // Clamp height between 0 and max
            newHeight = Math.max(0, Math.min(window.innerHeight - 100, newHeight));

            // If height is less than 50px, consider it closed
            if (newHeight < 50) {
                setDrawerHeight(300); // Reset to default
                setIsOpen(false);
            } else {
                setDrawerHeight(newHeight);
                if (!isOpen) {
                    setIsOpen(true);
                }
            }
        };

        const handleMouseUp = () => {
            isDraggingRef.current = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [isOpen, drawerHeight]);

    const clearLogs = () => {
        if ((window as any).capturedLogs) {
            (window as any).capturedLogs = [];
            setLocalLogs([]);
        }
    };

    const copyLogs = () => {
        const logText = localLogs
            .map(log => `[${log.time}] ${log.type}: ${JSON.stringify(log.data)}`)
            .join('\n');
        navigator.clipboard.writeText(logText);
    };

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const formatLogData = (data: any[]): string => {
        return data.map(item => {
            if (typeof item === 'object') {
                try {
                    return JSON.stringify(item, null, 2);
                } catch {
                    return String(item);
                }
            }
            return String(item);
        }).join(' ');
    };

    const getLogIcon = (type: string) => {
        switch (type) {
            case 'error': return '🔴';
            case 'warn': return '🟡';
            default: return '🔵';
        }
    };

    const getLogClass = (type: string) => {
        switch (type) {
            case 'error': return 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800';
            case 'warn': return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
            default: return 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';
        }
    };    

    return (
        <>
            <div
                className={`fixed bottom-0 left-0 right-0 z-40 h-8 cursor-ns-resize flex items-center justify-center transition-opacity duration-300 opacity-100`}
                onMouseDown={startDrag}
                style={{
                    bottom: isOpen ? `${drawerHeight}px` : '0px'
                }}
            >
                {isOpen ? (
                    <span className='p-1 rounded-lg w-40 hover:bg-gray-700 bg-gray-800 transition'>
                    </span>
                ) : ''}
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleDrawer}
                className="fixed bottom-10 right-4 z-50 p-3 rounded-full bg-gray-900 dark:bg-gray-800 text-white shadow-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all flex items-center gap-2 group"
                style={{ bottom: isOpen ? `${drawerHeight + 10}px` : '10px' }}
            >
                <Terminal className="w-5 h-5" />
                <span className="hidden group-hover:inline text-sm font-medium">
                    Console ({localLogs.length})
                </span>
                {isOpen ? (
                    <ChevronDown className="w-4 h-4" />
                ) : (
                    <ChevronUp className="w-4 h-4" />
                )}
            </button>

            {/* Drawer */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl ${isOpen ? 'translate-y-0 pb-6' : 'translate-y-full'} ${!isDraggingRef.current ? 'transition' : ''}`}
                style={{ height: isOpen ? `${drawerHeight}px` : '0px' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Console Output
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {localLogs.length} logs • Drag bottom edge to resize
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={copyLogs}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            title="Copy all logs"
                        >
                            <Copy className="w-4 h-4" />
                        </button>
                        <button
                            onClick={clearLogs}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            title="Clear all logs"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={toggleDrawer}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            title="Close console"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Logs Content */}
                <div
                    ref={contentRef}
                    className="h-[calc(100%-64px)] overflow-y-auto p-4 space-y-2"
                >
                    {localLogs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                            <Terminal className="w-12 h-12 mb-3 opacity-50" />
                            <p className="text-sm">No logs captured yet</p>
                            <p className="text-xs mt-1">Console logs will appear here</p>
                        </div>
                    ) : (
                        localLogs.map((log, i) => (
                            <div
                                key={i}
                                className={`p-3 rounded-lg border ${getLogClass(log.type)} text-sm font-mono`}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-lg">{getLogIcon(log.type)}</span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold capitalize">{log.type}</span>
                                                <span className="text-xs opacity-70">{log.time}</span>
                                            </div>
                                            <span className="text-xs opacity-50">#{i + 1}</span>
                                        </div>
                                        <div className="whitespace-pre-wrap break-words">
                                            {formatLogData(log.data)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Bottom Status Bar */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span>Log: {localLogs.filter(l => l.type === 'log').length}</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span>Warn: {localLogs.filter(l => l.type === 'warn').length}</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span>Error: {localLogs.filter(l => l.type === 'error').length}</span>
                        </span>
                    </div>
                    <button
                        onClick={() => contentRef.current?.scrollTo({
                            top: contentRef.current.scrollHeight,
                            behavior: 'smooth'
                        })}
                        className="text-xs hover:text-gray-700 dark:hover:text-gray-300"
                    >
                        Scroll to bottom
                    </button>
                </div>
            </div>
        </>
    );
}