import { languages } from '@/constants/languages';
import Select from 'react-select';

interface LanguageSelectProps {
  language: string;
  handleLanguageChange: (option: { value: string, label:string }) => void;
  disabled: boolean;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  language,
  handleLanguageChange,
  disabled,
}) => {
  const formatOptionLabel = ({ label } : {label : string}) => (
    <div className="flex flex-row justify-between items-center">
      <p>{label}</p>
      {language === label && <p className="text-xs text-slate-400">Select</p>}
    </div>
  );

  return (
    <Select
      className="w-full rounded-t-lg border-2 border-black"
      value={language ? { label: language, value: language } : undefined}
      onChange={(e) => handleLanguageChange(e as { value: string, label: string })}
      isDisabled={disabled}
      options={languages.sort((a, b) => a.label.localeCompare(b.label))}
      formatOptionLabel={formatOptionLabel}
    />
  );
};

export default LanguageSelect;
