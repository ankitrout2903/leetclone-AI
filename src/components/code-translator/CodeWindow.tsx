import CodeEditor from './CodeEditor';
import LanguageSelect from './LanguageSelect';

interface CodeWindowProps {
  code: string;
  setCode: (code: string) => void;
  loading: boolean;
  handleLanguageChange: (option: { value: string }) => void;
  language: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({
  code,
  setCode,
  loading,
  handleLanguageChange,
  language,
}) => {
  return (
    <div className="mx-20 my-5 w-2/5">
      {/* Rendering the LanguageSelect component with necessary props */}
      <LanguageSelect handleLanguageChange={handleLanguageChange} language={language} disabled={loading} />
      {/* Rendering the CodeEditor component with necessary props */}
      <CodeEditor code={code} setCode={setCode} editable={!loading} />
    </div>
  );
};

export default CodeWindow;
