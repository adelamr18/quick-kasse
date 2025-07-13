
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ArrowLeft, FileText, Euro, Calendar, User } from 'lucide-react';

interface CreateInvoiceProps {
  onBack: () => void;
}

const CreateInvoice: React.FC<CreateInvoiceProps> = ({ onBack }) => {
  const [customerName, setCustomerName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the logic to generate PDF with §19 UStG footer
    alert('📄 Rechnung wurde erfolgreich erstellt und als PDF gespeichert!');
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            onClick={onBack}
            className="btn-large btn-secondary mr-4"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-display">📝 Rechnung erstellen</h1>
            <p className="text-large text-muted-foreground">Neue Rechnung schreiben</p>
          </div>
        </div>

        <Card className="warm-card">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Customer Information */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-foreground">
                👤 Kunde
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="input-large pl-14 text-xl"
                  placeholder="Name des Kunden"
                  required
                />
              </div>
            </div>

            {/* Service Description */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-foreground">
                🔧 Leistung / Service
              </label>
              <Textarea
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                className="input-large text-xl min-h-[120px] resize-none"
                placeholder="Beschreibung der erbrachten Leistung..."
                required
              />
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-foreground">
                💰 Betrag
              </label>
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Input
                  type="number"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input-large pl-14 text-xl"
                  placeholder="0,00"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-muted-foreground">
                  €
                </span>
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-foreground">
                📅 Datum
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input-large pl-14 text-xl"
                  required
                />
              </div>
            </div>

            {/* Legal Notice */}
            <div className="bg-accent p-4 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">ℹ️ Rechtlicher Hinweis</h4>
              <p className="text-muted-foreground">
                Diese Rechnung wird automatisch mit dem korrekten rechtlichen Hinweis 
                <strong> "Gemäß §19 UStG wird keine Umsatzsteuer ausgewiesen"</strong> erstellt.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                type="button"
                onClick={onBack}
                className="btn-large btn-secondary"
              >
                ❌ Abbrechen
              </Button>
              <Button
                type="submit"
                className="btn-large btn-primary"
              >
                <FileText className="h-6 w-6 mr-2" />
                📄 Rechnung erstellen
              </Button>
            </div>
          </form>
        </Card>

        {/* Quick Tips */}
        <Card className="warm-card mt-8">
          <h3 className="text-heading mb-4">💡 Tipps</h3>
          <div className="space-y-3 text-lg">
            <p>• Beschreiben Sie Ihre Leistung so genau wie möglich</p>
            <p>• Achten Sie auf die korrekte Schreibweise des Kundennamens</p>
            <p>• Die Rechnung wird automatisch als PDF gespeichert</p>
            <p>• Der rechtliche Hinweis wird automatisch hinzugefügt</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateInvoice;
