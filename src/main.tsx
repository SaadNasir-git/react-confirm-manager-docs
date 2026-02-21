import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Console } from './components/Console.tsx';
import { showClosest } from 'react-confirm-lite';

showClosest();

(window as any).capturedLogs = [];

const methods = ['log', 'warn', 'error'] as const;

methods.forEach((method) => {
    const original = console[method as keyof Console];

    (console[method as keyof Console] as any) = (...args: any[]) => {
        (window as any).capturedLogs.push({
            type: method,
            time: new Date().toLocaleTimeString(),
            data: args
        });

        original.apply(console, args);
        window.dispatchEvent(new CustomEvent('new-log-added'));
    };
});

if (!String.prototype.capitalize) {
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
}

createRoot(document.getElementById('root')!).render(
    <>
        <App />
        <Console />
    </>
)
