export { }

declare global {
  interface Window {
    capturedLogs: Array<{
      type: 'log' | 'warn' | 'error';
      time: string;
      data: any[];
    }>;
  }
  interface String {
    capitalize(): string;
  }
}