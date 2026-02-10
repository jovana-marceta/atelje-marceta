import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages: { code: Language; label: string; short: string }[] = [
  { code: 'sr-latn', label: 'Srpski (Lat)', short: 'LAT' },
  { code: 'sr-cyrl', label: 'Српски (Ћир)', short: 'ЋИР' },
  { code: 'en', label: 'English', short: 'EN' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLang?.short}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 py-2 bg-background border border-border shadow-lg min-w-[140px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm font-body transition-colors duration-200 ${
                language === lang.code
                  ? 'text-primary bg-primary/5'
                  : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
