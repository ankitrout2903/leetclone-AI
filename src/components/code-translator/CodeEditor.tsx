import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

interface CodeEditorProps {
  code?: string;
  editable?: boolean;
  setCode: (code: string) => void;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code = '',
  editable = false,
  setCode,
  language,
}) => {
  const [copyText, setCopyText] = useState('Copy');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [copyText]);

  const config = {
    lineNumbers: true,
    mode: language,
    indentUnit: 4,
    smartIndent: true,
    indentWithTabs: false,
    electricChars: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    theme: vscodeDark,
    indent: {
      auto: true,
    },
  };

  return (
    <div className="relative border-2 border-t-0 border-black rounded-b-lg">
      <button
        className="absolute right-1 top-1 z-10 rounded bg-[#2da035] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopyText('Copied!');
        }}
      >
        {copyText}
      </button>

      <CodeMirror
        editable={editable}
        value={code}
        minHeight="300px"
        maxHeight="300px"
        extensions={[StreamLanguage.define(go)]}
        config={config}
        onChange={(value) => setCode(value)}
        className="rounded-b-xl"
      />
    </div>
  );
};

export default CodeEditor;
