
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, Lock, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AuthPageProps {
  onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/register
    onLogin();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-display text-primary mb-2">📋 {t('app.title')}</h1>
          <p className="text-large text-muted-foreground">
            {t('app.subtitle')}
          </p>
        </div>

        <Card className="warm-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <h2 className="text-heading mb-2">
                {isLogin ? t('auth.login') : t('auth.register')}
              </h2>
              <p className="text-muted-foreground">
                {isLogin 
                  ? t('auth.welcome') 
                  : t('auth.create_account')
                }
              </p>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  {t('auth.name')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-large pl-12"
                    placeholder={t('auth.name_placeholder')}
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {t('auth.email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-large pl-12"
                  placeholder={t('auth.email_placeholder')}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {t('auth.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-large pl-12"
                  placeholder={t('auth.password_placeholder')}
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="btn-large btn-primary w-full"
            >
              {isLogin ? t('auth.login_button') : t('auth.register_button')}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary/80 font-medium"
              >
                {isLogin 
                  ? t('auth.switch_to_register') 
                  : t('auth.switch_to_login')
                }
              </button>
            </div>
          </form>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>🌍 {t('app.description')}</p>
          <p>{t('app.target')}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
