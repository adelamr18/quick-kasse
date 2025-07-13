import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languageOptions: { value: Language; label: string; flag: string }[] = [
  { value: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'pl', label: 'Polski', flag: '🇵🇱' },
  { value: 'ru', label: 'Русский', flag: '🇷🇺' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
  { value: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { value: 'ar', label: 'العربية', flag: '🇸🇦' },
  { value: 'zh', label: '中文', flag: '🇨🇳' },
  { value: 'ko', label: '한국어', flag: '🇰🇷' },
  { value: 'ja', label: '日本語', flag: '🇯🇵' },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languageOptions.find(lang => lang.value === language);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-2">
        <Globe className="inline h-4 w-4 mr-1" />
        {t('settings.language')}
      </label>
      <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
        <SelectTrigger className="w-full">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span>{currentLanguage?.flag}</span>
              <span>{currentLanguage?.label}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <span>{option.flag}</span>
                <span>{option.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};