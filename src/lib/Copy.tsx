import { Check, CopyIcon } from "lucide-react";
import { useState } from "react"

interface CopyProps {
    text: string;
}

const Copy = ({ text }: CopyProps) => {
    const [copiedText, setCopiedText] = useState<string>('');

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(''), 2000);
    };

    return (
        <button
            className="flex items-center space-x-2 px-3 py-1.5 text-sm rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-white"
            onClick={() => handleCopy(text)}
            aria-label={copiedText === text ? "Copied to clipboard" : "Copy to clipboard"}
            title="Copy to clipboard"
        >
            {copiedText === text ? (
                <>
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 dark:text-green-400 font-medium">Copied!</span>
                </>
            ) : (
                <>
                    <CopyIcon className="h-4 w-4" />
                    <span>Copy</span>
                </>
            )}
        </button>
    )
}

export default Copy;