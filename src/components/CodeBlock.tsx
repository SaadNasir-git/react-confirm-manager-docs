import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Copy from '../lib/Copy';
import Button from './ui/Button';
import { useState, type ReactNode } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  preview?: ReactNode;
  height?: string;
}

const CodeBlock = ({
  code,
  language,
  showLineNumbers = true,
  preview,
  height = 'h-96'
}: CodeBlockProps) => {
  const [tab, setTab] = useState<'code' | 'preview'>('code');
  return (
    <div className={`relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700`}>
      {/* Header with copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        {!preview ? (
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              {language}
            </span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
        ) : (
          <div className='flex gap-2'>
            <Button onClick={() => {
              if (tab !== 'code') {
                setTab('code')
              }
            }}>
              Code
            </Button>
            <Button onClick={() => {
              if (tab !== 'preview') {
                setTab('preview')
              }
            }}>
              Preview
            </Button>
          </div>
        )}
        <Copy text={code} />
      </div>

      {/* Code block */}
      {tab === 'code' ? (
        <div className={`relative overflow-auto ${height}`}>
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            showLineNumbers={showLineNumbers}
            lineNumberStyle={{
              minWidth: '3em',
              paddingRight: '1em',
              color: '#6b7280',
              textAlign: 'right',
              userSelect: 'none'
            }}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '14px',
              background: '#1f2937',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className={`p-4 ${height}`}>
          {preview}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;