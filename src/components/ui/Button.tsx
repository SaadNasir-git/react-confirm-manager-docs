type func = () => void

const Button = ({ children, onClick }: { children: string , onClick: func }) => {
    return (
        <button onClick={onClick} className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 active:bg-gray-950 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-800">
            {children}
        </button>
    );
};

export default Button;