
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Euro, TrendingUp, Receipt, FileText, Camera, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  // Mock data for the chart
  const monthlyData = [
    { month: 'Jan', einnahmen: 2400, ausgaben: 1200 },
    { month: 'Feb', einnahmen: 1800, ausgaben: 900 },
    { month: 'Mär', einnahmen: 3200, ausgaben: 1600 },
    { month: 'Apr', einnahmen: 2800, ausgaben: 1400 },
    { month: 'Mai', einnahmen: 3600, ausgaben: 1800 },
    { month: 'Jun', einnahmen: 4200, ausgaben: 2100 },
  ];

  const totalIncome = 18000;
  const totalExpenses = 9000;
  const profit = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-display">{t('dashboard.title')}</h1>
            <p className="text-large text-muted-foreground">{t('dashboard.current_month')}</p>
          </div>
          <Button
            onClick={() => onNavigate('settings')}
            className="btn-large btn-secondary"
          >
            <Settings className="h-6 w-6 mr-2" />
            {t('dashboard.settings')}
          </Button>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="warm-card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-100 rounded-full">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-heading text-green-600 mb-2">{t('dashboard.income')}</h3>
            <p className="text-4xl font-bold text-green-700 mb-1">
              {totalIncome.toLocaleString('de-DE')} €
            </p>
            <p className="text-muted-foreground">{t('dashboard.this_month')}</p>
          </Card>

          <Card className="warm-card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-100 rounded-full">
                <Receipt className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-heading text-red-600 mb-2">{t('dashboard.expenses')}</h3>
            <p className="text-4xl font-bold text-red-700 mb-1">
              {totalExpenses.toLocaleString('de-DE')} €
            </p>
            <p className="text-muted-foreground">{t('dashboard.this_month')}</p>
          </Card>

          <Card className="warm-card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/20 rounded-full">
                <Euro className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-heading text-primary mb-2">{t('dashboard.profit')}</h3>
            <p className="text-4xl font-bold text-primary mb-1">
              {profit.toLocaleString('de-DE')} €
            </p>
            <p className="text-muted-foreground">{t('dashboard.this_month')}</p>
          </Card>
        </div>

        {/* Chart */}
        <Card className="warm-card mb-8">
          <h3 className="text-heading mb-6">{t('dashboard.monthly_overview')}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="einnahmen" fill="#10b981" name="Einnahmen" />
                <Bar dataKey="ausgaben" fill="#ef4444" name="Ausgaben" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button
            onClick={() => onNavigate('create-invoice')}
            className="btn-large btn-primary h-24 text-xl"
          >
            <FileText className="h-8 w-8 mr-3" />
            <div className="text-left">
              <div>{t('dashboard.create_invoice')}</div>
              <div className="text-sm opacity-80">{t('dashboard.create_invoice_desc')}</div>
            </div>
          </Button>

          <Button
            onClick={() => onNavigate('upload-receipt')}
            className="btn-large btn-secondary h-24 text-xl"
          >
            <Camera className="h-8 w-8 mr-3" />
            <div className="text-left">
              <div>{t('dashboard.take_photo')}</div>
              <div className="text-sm opacity-80">{t('dashboard.take_photo_desc')}</div>
            </div>
          </Button>
        </div>

        {/* Recent Activity */}
        <Card className="warm-card mt-8">
          <h3 className="text-heading mb-4">{t('dashboard.recent_activity')}</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <div>
                <p className="font-medium">Rechnung #2024-015</p>
                <p className="text-sm text-muted-foreground">Max Mustermann</p>
              </div>
              <p className="font-semibold text-green-600">+450,00 €</p>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <div>
                <p className="font-medium">Materialkosten</p>
                <p className="text-sm text-muted-foreground">Baumarkt Beleg</p>
              </div>
              <p className="font-semibold text-red-600">-89,50 €</p>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-medium">Rechnung #2024-014</p>
                <p className="text-sm text-muted-foreground">Firma ABC GmbH</p>
              </div>
              <p className="font-semibold text-green-600">+1.200,00 €</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
