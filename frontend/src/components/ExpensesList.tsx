
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Camera, Calendar, Euro, FileText } from 'lucide-react';

interface ExpensesListProps {
  onBack: () => void;
  onAddReceipt: () => void;
}

const ExpensesList: React.FC<ExpensesListProps> = ({ onBack, onAddReceipt }) => {
  // Mock expenses data
  const expenses = [
    {
      id: 1,
      date: '2024-06-15',
      amount: 89.50,
      note: 'Werkzeuge - Baumarkt',
      hasImage: true
    },
    {
      id: 2,
      date: '2024-06-14',
      amount: 45.00,
      note: 'Benzin',
      hasImage: true
    },
    {
      id: 3,
      date: '2024-06-12',
      amount: 12.50,
      note: 'Büromaterial',
      hasImage: true
    },
    {
      id: 4,
      date: '2024-06-10',
      amount: 150.00,
      note: 'Material für Projekt ABC',
      hasImage: true
    },
    {
      id: 5,
      date: '2024-06-08',
      amount: 25.80,
      note: 'Parkgebühren',
      hasImage: false
    }
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              onClick={onBack}
              className="btn-large btn-secondary mr-4"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-display">📋 Ausgaben</h1>
              <p className="text-large text-muted-foreground">Alle Belege im Überblick</p>
            </div>
          </div>
          
          <Button
            onClick={onAddReceipt}
            className="btn-large btn-primary"
          >
            <Camera className="h-6 w-6 mr-2" />
            📸 Beleg hinzufügen
          </Button>
        </div>

        {/* Summary Card */}
        <Card className="warm-card mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <Euro className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h3 className="text-heading text-red-600 mb-2">Gesamtausgaben (Juni)</h3>
          <p className="text-4xl font-bold text-red-700">
            {totalExpenses.toFixed(2).replace('.', ',')} €
          </p>
          <p className="text-muted-foreground mt-2">{expenses.length} Belege</p>
        </Card>

        {/* Expenses List */}
        <div className="space-y-4">
          {expenses.map((expense) => (
            <Card key={expense.id} className="warm-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {expense.hasImage ? (
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                        <Camera className="h-8 w-8 text-primary" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
                        <FileText className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {expense.note}
                    </h4>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-lg">
                        {new Date(expense.date).toLocaleDateString('de-DE', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">
                    -{expense.amount.toFixed(2).replace('.', ',')} €
                  </p>
                  {expense.hasImage && (
                    <p className="text-sm text-green-600 mt-1">
                      ✅ Beleg fotografiert
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {expenses.length === 0 && (
          <Card className="warm-card text-center py-12">
            <Camera className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-heading mb-4">Noch keine Ausgaben</h3>
            <p className="text-large text-muted-foreground mb-8">
              Fügen Sie Ihren ersten Beleg hinzu, um Ihre Ausgaben zu verfolgen.
            </p>
            <Button
              onClick={onAddReceipt}
              className="btn-large btn-primary"
            >
              📸 Ersten Beleg hinzufügen
            </Button>
          </Card>
        )}

        {/* Monthly Filter */}
        <Card className="warm-card mt-8">
          <h3 className="text-heading mb-4">📅 Filter</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="btn-large btn-primary">Juni 2024</Button>
            <Button className="btn-large btn-secondary">Mai 2024</Button>
            <Button className="btn-large btn-secondary">April 2024</Button>
            <Button className="btn-large btn-secondary">Alle anzeigen</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExpensesList;
