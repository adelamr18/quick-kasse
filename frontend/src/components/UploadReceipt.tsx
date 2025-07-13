
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Camera, Upload, Euro, Calendar } from 'lucide-react';

interface UploadReceiptProps {
  onBack: () => void;
}

const UploadReceipt: React.FC<UploadReceiptProps> = ({ onBack }) => {
  const [receiptImage, setReceiptImage] = useState<string | null>(null);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleImageCapture = () => {
    // Simulate camera capture - in real app this would open camera
    const dummyImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJlbGVnIEZvdG88L3RleHQ+PC9zdmc+';
    setReceiptImage(dummyImage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('📸 Beleg wurde erfolgreich gespeichert!');
    onBack();
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
            <h1 className="text-display">📸 Beleg hinzufügen</h1>
            <p className="text-large text-muted-foreground">Ausgabe dokumentieren</p>
          </div>
        </div>

        <Card className="warm-card">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Camera Section */}
            <div className="text-center">
              {!receiptImage ? (
                <div className="space-y-6">
                  <div className="bg-accent p-12 rounded-2xl border-2 border-dashed border-border">
                    <Camera className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-xl text-muted-foreground mb-6">
                      Fotografieren Sie Ihren Beleg
                    </p>
                    <Button
                      type="button"
                      onClick={handleImageCapture}
                      className="btn-large btn-primary text-2xl py-6"
                    >
                      📸 Foto vom Beleg machen
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">oder</p>
                    <Button
                      type="button"
                      className="btn-large btn-secondary"
                    >
                      <Upload className="h-6 w-6 mr-2" />
                      📁 Datei hochladen
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-accent p-4 rounded-2xl">
                    <img 
                      src={receiptImage} 
                      alt="Beleg Foto" 
                      className="w-full max-w-xs mx-auto rounded-xl shadow-lg"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() => setReceiptImage(null)}
                    className="btn-large btn-secondary"
                  >
                    🔄 Neues Foto machen
                  </Button>
                </div>
              )}
            </div>

            {receiptImage && (
              <>
                {/* Amount */}
                <div className="space-y-2">
                  <label className="block text-xl font-medium text-foreground">
                    💰 Betrag (optional)
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

                {/* Note */}
                <div className="space-y-2">
                  <label className="block text-xl font-medium text-foreground">
                    📝 Notiz (optional)
                  </label>
                  <Textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="input-large text-xl min-h-[100px] resize-none"
                    placeholder="z.B. Büromaterial, Benzin, Werkzeug..."
                  />
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
                    💾 Beleg speichern
                  </Button>
                </div>
              </>
            )}
          </form>
        </Card>

        {/* Quick Tips */}
        <Card className="warm-card mt-8">
          <h3 className="text-heading mb-4">💡 Tipps für bessere Fotos</h3>
          <div className="space-y-3 text-lg">
            <p>• 📱 Halten Sie das Handy gerade über den Beleg</p>
            <p>• 💡 Sorgen Sie für gute Beleuchtung</p>
            <p>• 🔍 Achten Sie darauf, dass der gesamte Beleg sichtbar ist</p>
            <p>• ✨ Vermeiden Sie Schatten und Reflexionen</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UploadReceipt;
