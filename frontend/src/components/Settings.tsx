import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Crown, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface SettingsProps {
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            onClick={onBack}
            className="btn-large btn-secondary mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t('settings.back')}
          </Button>
          <h1 className="text-display">{t('settings.title')}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Language Settings */}
          <Card className="warm-card">
            <LanguageSelector />
          </Card>

          {/* Subscription Card */}
          <Card className="warm-card">
            <h3 className="text-heading mb-6">💳 {t('settings.subscription')}</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-accent/50 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{t('settings.current_plan')}</span>
                  <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">
                    {t('settings.free_plan')}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Bis zu 10 Rechnungen pro Monat
                </p>
              </div>

              <Button className="btn-large btn-primary w-full">
                <Crown className="h-5 w-5 mr-2" />
                {t('settings.upgrade')}
              </Button>

              <div className="text-sm text-muted-foreground">
                <h4 className="font-medium mb-2">{t('settings.features')}:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    {t('settings.feature1')}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    {t('settings.feature2')}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    {t('settings.feature3')}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    {t('settings.feature4')}
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;