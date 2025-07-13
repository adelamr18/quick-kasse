import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en' | 'pl' | 'ru' | 'es' | 'tr' | 'ar' | 'zh' | 'ko' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  de: {
    // App Title
    'app.title': 'RechnungsProfi',
    'app.subtitle': 'Einfache Rechnungen für Ihr Unternehmen',
    'app.description': 'Speziell für deutsche Kleinbetriebe entwickelt',
    'app.target': 'Bäcker • Reinigungskräfte • Handwerker',

    // Auth Page
    'auth.login': 'Anmelden',
    'auth.register': 'Registrieren',
    'auth.welcome': 'Willkommen zurück! Melden Sie sich an.',
    'auth.create_account': 'Erstellen Sie Ihr kostenloses Konto.',
    'auth.name': 'Name',
    'auth.email': 'E-Mail-Adresse',
    'auth.password': 'Passwort',
    'auth.name_placeholder': 'Ihr vollständiger Name',
    'auth.email_placeholder': 'ihre@email.de',
    'auth.password_placeholder': 'Mindestens 8 Zeichen',
    'auth.login_button': '🔓 Anmelden',
    'auth.register_button': '✨ Konto erstellen',
    'auth.switch_to_register': 'Noch kein Konto? Jetzt registrieren',
    'auth.switch_to_login': 'Bereits ein Konto? Anmelden',

    // Dashboard
    'dashboard.title': '📊 Übersicht',
    'dashboard.current_month': 'Juni 2024',
    'dashboard.settings': 'Einstellungen',
    'dashboard.income': 'Einnahmen',
    'dashboard.expenses': 'Ausgaben',
    'dashboard.profit': 'Gewinn',
    'dashboard.this_month': 'Diesen Monat',
    'dashboard.monthly_overview': '📈 Monatliche Übersicht',
    'dashboard.create_invoice': 'Rechnung erstellen',
    'dashboard.create_invoice_desc': 'Neue Rechnung schreiben',
    'dashboard.take_photo': '📸 Beleg fotografieren',
    'dashboard.take_photo_desc': 'Ausgabe hinzufügen',
    'dashboard.recent_activity': '📝 Letzte Aktivitäten',

    // Create Invoice
    'invoice.title': '📄 Neue Rechnung',
    'invoice.customer_name': 'Kundenname',
    'invoice.customer_placeholder': 'Max Mustermann',
    'invoice.service': 'Leistung/Produkt',
    'invoice.service_placeholder': 'Beschreibung der erbrachten Leistung',
    'invoice.amount': 'Betrag (€)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': 'Rechnungsdatum',
    'invoice.create_button': '📄 Rechnung erstellen',
    'invoice.back': 'Zurück',

    // Upload Receipt
    'receipt.title': '📸 Beleg hochladen',
    'receipt.take_photo': '📸 Foto vom Beleg machen',
    'receipt.upload_file': '📁 Datei hochladen',
    'receipt.amount': 'Betrag (€)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': 'Notiz (optional)',
    'receipt.note_placeholder': 'Beschreibung der Ausgabe',
    'receipt.save_button': '💾 Beleg speichern',
    'receipt.back': 'Zurück',

    // Expenses List
    'expenses.title': '🧾 Ausgaben',
    'expenses.add_receipt': '📸 Neuen Beleg hinzufügen',
    'expenses.back': 'Zurück',
    'expenses.total': 'Gesamte Ausgaben',
    'expenses.no_expenses': 'Noch keine Ausgaben vorhanden',
    'expenses.add_first': 'Fügen Sie Ihren ersten Beleg hinzu',

    // Settings
    'settings.title': '⚙️ Einstellungen',
    'settings.language': 'Sprache',
    'settings.subscription': 'Abonnement',
    'settings.current_plan': 'Aktueller Plan',
    'settings.free_plan': 'Kostenlos',
    'settings.premium_plan': 'Premium',
    'settings.upgrade': '⭐ Auf Premium upgraden',
    'settings.features': 'Premium-Funktionen',
    'settings.feature1': '• Unbegrenzte Rechnungen',
    'settings.feature2': '• Automatische Backups',
    'settings.feature3': '• Email-Support',
    'settings.feature4': '• Export-Funktionen',
    'settings.back': 'Zurück',

    // Common
    'common.save': 'Speichern',
    'common.cancel': 'Abbrechen',
    'common.delete': 'Löschen',
    'common.edit': 'Bearbeiten',
    'common.close': 'Schließen',
  },
  en: {
    // App Title
    'app.title': 'InvoicePro',
    'app.subtitle': 'Simple invoices for your business',
    'app.description': 'Specially developed for small businesses',
    'app.target': 'Bakers • Cleaners • Handymen',

    // Auth Page
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.welcome': 'Welcome back! Please sign in.',
    'auth.create_account': 'Create your free account.',
    'auth.name': 'Name',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.name_placeholder': 'Your full name',
    'auth.email_placeholder': 'your@email.com',
    'auth.password_placeholder': 'At least 8 characters',
    'auth.login_button': '🔓 Sign In',
    'auth.register_button': '✨ Create Account',
    'auth.switch_to_register': 'No account yet? Register now',
    'auth.switch_to_login': 'Already have an account? Sign in',

    // Dashboard
    'dashboard.title': '📊 Overview',
    'dashboard.current_month': 'June 2024',
    'dashboard.settings': 'Settings',
    'dashboard.income': 'Income',
    'dashboard.expenses': 'Expenses',
    'dashboard.profit': 'Profit',
    'dashboard.this_month': 'This month',
    'dashboard.monthly_overview': '📈 Monthly Overview',
    'dashboard.create_invoice': 'Create Invoice',
    'dashboard.create_invoice_desc': 'Write new invoice',
    'dashboard.take_photo': '📸 Take Receipt Photo',
    'dashboard.take_photo_desc': 'Add expense',
    'dashboard.recent_activity': '📝 Recent Activity',

    // Create Invoice
    'invoice.title': '📄 New Invoice',
    'invoice.customer_name': 'Customer Name',
    'invoice.customer_placeholder': 'John Doe',
    'invoice.service': 'Service/Product',
    'invoice.service_placeholder': 'Description of service provided',
    'invoice.amount': 'Amount ($)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': 'Invoice Date',
    'invoice.create_button': '📄 Create Invoice',
    'invoice.back': 'Back',

    // Upload Receipt
    'receipt.title': '📸 Upload Receipt',
    'receipt.take_photo': '📸 Take Photo of Receipt',
    'receipt.upload_file': '📁 Upload File',
    'receipt.amount': 'Amount ($)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': 'Note (optional)',
    'receipt.note_placeholder': 'Description of expense',
    'receipt.save_button': '💾 Save Receipt',
    'receipt.back': 'Back',

    // Expenses List
    'expenses.title': '🧾 Expenses',
    'expenses.add_receipt': '📸 Add New Receipt',
    'expenses.back': 'Back',
    'expenses.total': 'Total Expenses',
    'expenses.no_expenses': 'No expenses yet',
    'expenses.add_first': 'Add your first receipt',

    // Settings
    'settings.title': '⚙️ Settings',
    'settings.language': 'Language',
    'settings.subscription': 'Subscription',
    'settings.current_plan': 'Current Plan',
    'settings.free_plan': 'Free',
    'settings.premium_plan': 'Premium',
    'settings.upgrade': '⭐ Upgrade to Premium',
    'settings.features': 'Premium Features',
    'settings.feature1': '• Unlimited invoices',
    'settings.feature2': '• Automatic backups',
    'settings.feature3': '• Email support',
    'settings.feature4': '• Export functions',
    'settings.back': 'Back',

    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.close': 'Close',
  },
  pl: {
    // App Title
    'app.title': 'FakturaPro',
    'app.subtitle': 'Proste faktury dla Twojej firmy',
    'app.description': 'Specjalnie opracowane dla małych firm',
    'app.target': 'Piekarze • Sprzątanie • Rzemieślnicy',

    // Auth Page
    'auth.login': 'Zaloguj się',
    'auth.register': 'Zarejestruj się',
    'auth.welcome': 'Witaj ponownie! Zaloguj się.',
    'auth.create_account': 'Utwórz darmowe konto.',
    'auth.name': 'Imię i nazwisko',
    'auth.email': 'Adres e-mail',
    'auth.password': 'Hasło',
    'auth.name_placeholder': 'Twoje pełne imię i nazwisko',
    'auth.email_placeholder': 'twoj@email.pl',
    'auth.password_placeholder': 'Co najmniej 8 znaków',
    'auth.login_button': '🔓 Zaloguj się',
    'auth.register_button': '✨ Utwórz konto',
    'auth.switch_to_register': 'Nie masz konta? Zarejestruj się',
    'auth.switch_to_login': 'Masz już konto? Zaloguj się',

    // Dashboard
    'dashboard.title': '📊 Przegląd',
    'dashboard.current_month': 'Czerwiec 2024',
    'dashboard.settings': 'Ustawienia',
    'dashboard.income': 'Przychody',
    'dashboard.expenses': 'Wydatki',
    'dashboard.profit': 'Zysk',
    'dashboard.this_month': 'W tym miesiącu',
    'dashboard.monthly_overview': '📈 Przegląd miesięczny',
    'dashboard.create_invoice': 'Utwórz fakturę',
    'dashboard.create_invoice_desc': 'Napisz nową fakturę',
    'dashboard.take_photo': '📸 Zrób zdjęcie paragonu',
    'dashboard.take_photo_desc': 'Dodaj wydatek',
    'dashboard.recent_activity': '📝 Ostatnia aktywność',

    // Create Invoice
    'invoice.title': '📄 Nowa faktura',
    'invoice.customer_name': 'Nazwa klienta',
    'invoice.customer_placeholder': 'Jan Kowalski',
    'invoice.service': 'Usługa/Produkt',
    'invoice.service_placeholder': 'Opis świadczonej usługi',
    'invoice.amount': 'Kwota (zł)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': 'Data faktury',
    'invoice.create_button': '📄 Utwórz fakturę',
    'invoice.back': 'Wstecz',

    // Upload Receipt
    'receipt.title': '📸 Dodaj paragon',
    'receipt.take_photo': '📸 Zrób zdjęcie paragonu',
    'receipt.upload_file': '📁 Prześlij plik',
    'receipt.amount': 'Kwota (zł)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': 'Notatka (opcjonalne)',
    'receipt.note_placeholder': 'Opis wydatku',
    'receipt.save_button': '💾 Zapisz paragon',
    'receipt.back': 'Wstecz',

    // Expenses List
    'expenses.title': '🧾 Wydatki',
    'expenses.add_receipt': '📸 Dodaj nowy paragon',
    'expenses.back': 'Wstecz',
    'expenses.total': 'Łączne wydatki',
    'expenses.no_expenses': 'Brak wydatków',
    'expenses.add_first': 'Dodaj swój pierwszy paragon',

    // Settings
    'settings.title': '⚙️ Ustawienia',
    'settings.language': 'Język',
    'settings.subscription': 'Subskrypcja',
    'settings.current_plan': 'Aktualny plan',
    'settings.free_plan': 'Darmowy',
    'settings.premium_plan': 'Premium',
    'settings.upgrade': '⭐ Przejdź na Premium',
    'settings.features': 'Funkcje Premium',
    'settings.feature1': '• Nieograniczone faktury',
    'settings.feature2': '• Automatyczne kopie zapasowe',
    'settings.feature3': '• Wsparcie e-mail',
    'settings.feature4': '• Funkcje eksportu',
    'settings.back': 'Wstecz',

    // Common
    'common.save': 'Zapisz',
    'common.cancel': 'Anuluj',
    'common.delete': 'Usuń',
    'common.edit': 'Edytuj',
    'common.close': 'Zamknij',
  },
  ru: {
    // App Title
    'app.title': 'СчетПро',
    'app.subtitle': 'Простые счета для вашего бизнеса',
    'app.description': 'Специально разработано для малого бизнеса',
    'app.target': 'Пекари • Уборщики • Мастера',

    // Auth Page
    'auth.login': 'Войти',
    'auth.register': 'Регистрация',
    'auth.welcome': 'С возвращением! Войдите в систему.',
    'auth.create_account': 'Создайте бесплатный аккаунт.',
    'auth.name': 'Имя',
    'auth.email': 'Email адрес',
    'auth.password': 'Пароль',
    'auth.name_placeholder': 'Ваше полное имя',
    'auth.email_placeholder': 'your@email.ru',
    'auth.password_placeholder': 'Минимум 8 символов',
    'auth.login_button': '🔓 Войти',
    'auth.register_button': '✨ Создать аккаунт',
    'auth.switch_to_register': 'Нет аккаунта? Зарегистрироваться',
    'auth.switch_to_login': 'Уже есть аккаунт? Войти',

    // Dashboard
    'dashboard.title': '📊 Обзор',
    'dashboard.current_month': 'Июнь 2024',
    'dashboard.settings': 'Настройки',
    'dashboard.income': 'Доходы',
    'dashboard.expenses': 'Расходы',
    'dashboard.profit': 'Прибыль',
    'dashboard.this_month': 'В этом месяце',
    'dashboard.monthly_overview': '📈 Месячный обзор',
    'dashboard.create_invoice': 'Создать счет',
    'dashboard.create_invoice_desc': 'Написать новый счет',
    'dashboard.take_photo': '📸 Сфотографировать чек',
    'dashboard.take_photo_desc': 'Добавить расход',
    'dashboard.recent_activity': '📝 Последняя активность',

    // Create Invoice
    'invoice.title': '📄 Новый счет',
    'invoice.customer_name': 'Имя клиента',
    'invoice.customer_placeholder': 'Иван Иванов',
    'invoice.service': 'Услуга/Товар',
    'invoice.service_placeholder': 'Описание оказанной услуги',
    'invoice.amount': 'Сумма (₽)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': 'Дата счета',
    'invoice.create_button': '📄 Создать счет',
    'invoice.back': 'Назад',

    // Upload Receipt
    'receipt.title': '📸 Загрузить чек',
    'receipt.take_photo': '📸 Сфотографировать чек',
    'receipt.upload_file': '📁 Загрузить файл',
    'receipt.amount': 'Сумма (₽)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': 'Примечание (опционально)',
    'receipt.note_placeholder': 'Описание расхода',
    'receipt.save_button': '💾 Сохранить чек',
    'receipt.back': 'Назад',

    // Expenses List
    'expenses.title': '🧾 Расходы',
    'expenses.add_receipt': '📸 Добавить новый чек',
    'expenses.back': 'Назад',
    'expenses.total': 'Общие расходы',
    'expenses.no_expenses': 'Пока нет расходов',
    'expenses.add_first': 'Добавьте ваш первый чек',

    // Settings
    'settings.title': '⚙️ Настройки',
    'settings.language': 'Язык',
    'settings.subscription': 'Подписка',
    'settings.current_plan': 'Текущий план',
    'settings.free_plan': 'Бесплатный',
    'settings.premium_plan': 'Премиум',
    'settings.upgrade': '⭐ Обновить до Премиум',
    'settings.features': 'Функции Премиум',
    'settings.feature1': '• Неограниченные счета',
    'settings.feature2': '• Автоматические резервные копии',
    'settings.feature3': '• Поддержка по email',
    'settings.feature4': '• Функции экспорта',
    'settings.back': 'Назад',

    // Common
    'common.save': 'Сохранить',
    'common.cancel': 'Отмена',
    'common.delete': 'Удалить',
    'common.edit': 'Редактировать',
    'common.close': 'Закрыть',
  },
  es: {
    // App Title
    'app.title': 'FacturaPro',
    'app.subtitle': 'Facturas simples para tu negocio',
    'app.description': 'Especialmente desarrollado para pequeñas empresas',
    'app.target': 'Panaderos • Limpieza • Artesanos',

    // Auth Page
    'auth.login': 'Iniciar sesión',
    'auth.register': 'Registrarse',
    'auth.welcome': '¡Bienvenido de nuevo! Inicia sesión.',
    'auth.create_account': 'Crea tu cuenta gratuita.',
    'auth.name': 'Nombre',
    'auth.email': 'Dirección de email',
    'auth.password': 'Contraseña',
    'auth.name_placeholder': 'Tu nombre completo',
    'auth.email_placeholder': 'tu@email.com',
    'auth.password_placeholder': 'Al menos 8 caracteres',
    'auth.login_button': '🔓 Iniciar sesión',
    'auth.register_button': '✨ Crear cuenta',
    'auth.switch_to_register': '¿No tienes cuenta? Regístrate',
    'auth.switch_to_login': '¿Ya tienes cuenta? Inicia sesión',

    // Dashboard
    'dashboard.title': '📊 Resumen',
    'dashboard.current_month': 'Junio 2024',
    'dashboard.settings': 'Configuración',
    'dashboard.income': 'Ingresos',
    'dashboard.expenses': 'Gastos',
    'dashboard.profit': 'Ganancia',
    'dashboard.this_month': 'Este mes',
    'dashboard.monthly_overview': '📈 Resumen mensual',
    'dashboard.create_invoice': 'Crear factura',
    'dashboard.create_invoice_desc': 'Escribir nueva factura',
    'dashboard.take_photo': '📸 Fotografiar recibo',
    'dashboard.take_photo_desc': 'Añadir gasto',
    'dashboard.recent_activity': '📝 Actividad reciente',

    // Create Invoice
    'invoice.title': '📄 Nueva factura',
    'invoice.customer_name': 'Nombre del cliente',
    'invoice.customer_placeholder': 'Juan Pérez',
    'invoice.service': 'Servicio/Producto',
    'invoice.service_placeholder': 'Descripción del servicio prestado',
    'invoice.amount': 'Cantidad (€)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': 'Fecha de factura',
    'invoice.create_button': '📄 Crear factura',
    'invoice.back': 'Atrás',

    // Upload Receipt
    'receipt.title': '📸 Subir recibo',
    'receipt.take_photo': '📸 Fotografiar recibo',
    'receipt.upload_file': '📁 Subir archivo',
    'receipt.amount': 'Cantidad (€)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': 'Nota (opcional)',
    'receipt.note_placeholder': 'Descripción del gasto',
    'receipt.save_button': '💾 Guardar recibo',
    'receipt.back': 'Atrás',

    // Expenses List
    'expenses.title': '🧾 Gastos',
    'expenses.add_receipt': '📸 Añadir nuevo recibo',
    'expenses.back': 'Atrás',
    'expenses.total': 'Gastos totales',
    'expenses.no_expenses': 'Aún no hay gastos',
    'expenses.add_first': 'Añade tu primer recibo',

    // Settings
    'settings.title': '⚙️ Configuración',
    'settings.language': 'Idioma',
    'settings.subscription': 'Suscripción',
    'settings.current_plan': 'Plan actual',
    'settings.free_plan': 'Gratuito',
    'settings.premium_plan': 'Premium',
    'settings.upgrade': '⭐ Actualizar a Premium',
    'settings.features': 'Características Premium',
    'settings.feature1': '• Facturas ilimitadas',
    'settings.feature2': '• Copias de seguridad automáticas',
    'settings.feature3': '• Soporte por email',
    'settings.feature4': '• Funciones de exportación',
    'settings.back': 'Atrás',

    // Common
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.close': 'Cerrar',
  },
  tr: {
    // App Title
    'app.title': 'FaturaPro',
    'app.subtitle': 'İşiniz için basit faturalar',
    'app.description': 'Küçük işletmeler için özel geliştirilmiştir',
    'app.target': 'Fırıncılar • Temizlikçiler • Zanaatkarlar',

    // Auth Page
    'auth.login': 'Giriş Yap',
    'auth.register': 'Kayıt Ol',
    'auth.welcome': 'Tekrar hoş geldiniz! Giriş yapın.',
    'auth.create_account': 'Ücretsiz hesabınızı oluşturun.',
    'auth.name': 'Ad',
    'auth.email': 'E-posta Adresi',
    'auth.password': 'Şifre',
    'auth.name_placeholder': 'Tam adınız',
    'auth.email_placeholder': 'email@adresiniz.com',
    'auth.password_placeholder': 'En az 8 karakter',
    'auth.login_button': '🔓 Giriş Yap',
    'auth.register_button': '✨ Hesap Oluştur',
    'auth.switch_to_register': 'Hesabınız yok mu? Kayıt olun',
    'auth.switch_to_login': 'Zaten hesabınız var mı? Giriş yapın',

    // Dashboard
    'dashboard.title': '📊 Genel Bakış',
    'dashboard.current_month': 'Haziran 2024',
    'dashboard.settings': 'Ayarlar',
    'dashboard.income': 'Gelir',
    'dashboard.expenses': 'Giderler',
    'dashboard.profit': 'Kar',
    'dashboard.this_month': 'Bu ay',
    'dashboard.monthly_overview': '📈 Aylık Genel Bakış',
    'dashboard.create_invoice': 'Fatura Oluştur',
    'dashboard.create_invoice_desc': 'Yeni fatura yaz',
    'dashboard.take_photo': '📸 Fiş Fotoğrafı Çek',
    'dashboard.take_photo_desc': 'Gider ekle',
    'dashboard.recent_activity': '📝 Son Aktivite',

    // Create Invoice
    'invoice.title': '📄 Yeni Fatura',
    'invoice.customer_name': 'Müşteri Adı',
    'invoice.customer_placeholder': 'Ahmet Yılmaz',
    'invoice.service': 'Hizmet/Ürün',
    'invoice.service_placeholder': 'Verilen hizmetin açıklaması',
    'invoice.amount': 'Tutar (₺)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': 'Fatura Tarihi',
    'invoice.create_button': '📄 Fatura Oluştur',
    'invoice.back': 'Geri',

    // Upload Receipt
    'receipt.title': '📸 Fiş Yükle',
    'receipt.take_photo': '📸 Fiş Fotoğrafı Çek',
    'receipt.upload_file': '📁 Dosya Yükle',
    'receipt.amount': 'Tutar (₺)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': 'Not (isteğe bağlı)',
    'receipt.note_placeholder': 'Gider açıklaması',
    'receipt.save_button': '💾 Fiş Kaydet',
    'receipt.back': 'Geri',

    // Expenses List
    'expenses.title': '🧾 Giderler',
    'expenses.add_receipt': '📸 Yeni Fiş Ekle',
    'expenses.back': 'Geri',
    'expenses.total': 'Toplam Giderler',
    'expenses.no_expenses': 'Henüz gider yok',
    'expenses.add_first': 'İlk fişinizi ekleyin',

    // Settings
    'settings.title': '⚙️ Ayarlar',
    'settings.language': 'Dil',
    'settings.subscription': 'Abonelik',
    'settings.current_plan': 'Mevcut Plan',
    'settings.free_plan': 'Ücretsiz',
    'settings.premium_plan': 'Premium',
    'settings.upgrade': '⭐ Premium\'a Yükselt',
    'settings.features': 'Premium Özellikler',
    'settings.feature1': '• Sınırsız fatura',
    'settings.feature2': '• Otomatik yedekleme',
    'settings.feature3': '• E-posta desteği',
    'settings.feature4': '• Dışa aktarma özellikleri',
    'settings.back': 'Geri',

    // Common
    'common.save': 'Kaydet',
    'common.cancel': 'İptal',
    'common.delete': 'Sil',
    'common.edit': 'Düzenle',
    'common.close': 'Kapat',
  },
  ar: {
    // App Title
    'app.title': 'فاتورة برو',
    'app.subtitle': 'فواتير بسيطة لعملك',
    'app.description': 'مطور خصيصاً للشركات الصغيرة',
    'app.target': 'الخبازون • عمال النظافة • الحرفيون',

    // Auth Page
    'auth.login': 'تسجيل الدخول',
    'auth.register': 'إنشاء حساب',
    'auth.welcome': 'مرحباً بعودتك! سجل دخولك.',
    'auth.create_account': 'أنشئ حسابك المجاني.',
    'auth.name': 'الاسم',
    'auth.email': 'عنوان البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.name_placeholder': 'اسمك الكامل',
    'auth.email_placeholder': 'email@example.com',
    'auth.password_placeholder': '8 أحرف على الأقل',
    'auth.login_button': '🔓 تسجيل الدخول',
    'auth.register_button': '✨ إنشاء حساب',
    'auth.switch_to_register': 'لا تملك حساباً؟ سجل الآن',
    'auth.switch_to_login': 'تملك حساباً؟ سجل دخولك',

    // Dashboard
    'dashboard.title': '📊 نظرة عامة',
    'dashboard.current_month': 'يونيو 2024',
    'dashboard.settings': 'الإعدادات',
    'dashboard.income': 'الإيرادات',
    'dashboard.expenses': 'المصروفات',
    'dashboard.profit': 'الربح',
    'dashboard.this_month': 'هذا الشهر',
    'dashboard.monthly_overview': '📈 النظرة الشهرية',
    'dashboard.create_invoice': 'إنشاء فاتورة',
    'dashboard.create_invoice_desc': 'كتابة فاتورة جديدة',
    'dashboard.take_photo': '📸 تصوير الإيصال',
    'dashboard.take_photo_desc': 'إضافة مصروف',
    'dashboard.recent_activity': '📝 النشاط الأخير',

    // Create Invoice
    'invoice.title': '📄 فاتورة جديدة',
    'invoice.customer_name': 'اسم العميل',
    'invoice.customer_placeholder': 'أحمد محمد',
    'invoice.service': 'الخدمة/المنتج',
    'invoice.service_placeholder': 'وصف الخدمة المقدمة',
    'invoice.amount': 'المبلغ (ر.س)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': 'تاريخ الفاتورة',
    'invoice.create_button': '📄 إنشاء فاتورة',
    'invoice.back': 'رجوع',

    // Upload Receipt
    'receipt.title': '📸 رفع إيصال',
    'receipt.take_photo': '📸 تصوير الإيصال',
    'receipt.upload_file': '📁 رفع ملف',
    'receipt.amount': 'المبلغ (ر.س)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': 'ملاحظة (اختيارية)',
    'receipt.note_placeholder': 'وصف المصروف',
    'receipt.save_button': '💾 حفظ الإيصال',
    'receipt.back': 'رجوع',

    // Expenses List
    'expenses.title': '🧾 المصروفات',
    'expenses.add_receipt': '📸 إضافة إيصال جديد',
    'expenses.back': 'رجوع',
    'expenses.total': 'إجمالي المصروفات',
    'expenses.no_expenses': 'لا توجد مصروفات بعد',
    'expenses.add_first': 'أضف إيصالك الأول',

    // Settings
    'settings.title': '⚙️ الإعدادات',
    'settings.language': 'اللغة',
    'settings.subscription': 'الاشتراك',
    'settings.current_plan': 'الخطة الحالية',
    'settings.free_plan': 'مجاني',
    'settings.premium_plan': 'مميز',
    'settings.upgrade': '⭐ الترقية للمميز',
    'settings.features': 'مميزات الخطة المميزة',
    'settings.feature1': '• فواتير غير محدودة',
    'settings.feature2': '• نسخ احتياطية تلقائية',
    'settings.feature3': '• دعم البريد الإلكتروني',
    'settings.feature4': '• وظائف التصدير',
    'settings.back': 'رجوع',

    // Common
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.delete': 'حذف',
    'common.edit': 'تعديل',
    'common.close': 'إغلاق',
  },
  zh: {
    // App Title
    'app.title': '发票专家',
    'app.subtitle': '为您的企业提供简单的发票',
    'app.description': '专为小企业开发',
    'app.target': '面包师 • 清洁工 • 手工艺人',

    // Auth Page
    'auth.login': '登录',
    'auth.register': '注册',
    'auth.welcome': '欢迎回来！请登录。',
    'auth.create_account': '创建您的免费账户。',
    'auth.name': '姓名',
    'auth.email': '邮箱地址',
    'auth.password': '密码',
    'auth.name_placeholder': '您的全名',
    'auth.email_placeholder': 'your@email.com',
    'auth.password_placeholder': '至少8个字符',
    'auth.login_button': '🔓 登录',
    'auth.register_button': '✨ 创建账户',
    'auth.switch_to_register': '还没有账户？立即注册',
    'auth.switch_to_login': '已有账户？登录',

    // Dashboard
    'dashboard.title': '📊 概览',
    'dashboard.current_month': '2024年6月',
    'dashboard.settings': '设置',
    'dashboard.income': '收入',
    'dashboard.expenses': '支出',
    'dashboard.profit': '利润',
    'dashboard.this_month': '本月',
    'dashboard.monthly_overview': '📈 月度概览',
    'dashboard.create_invoice': '创建发票',
    'dashboard.create_invoice_desc': '编写新发票',
    'dashboard.take_photo': '📸 拍摄收据',
    'dashboard.take_photo_desc': '添加支出',
    'dashboard.recent_activity': '📝 最近活动',

    // Create Invoice
    'invoice.title': '📄 新发票',
    'invoice.customer_name': '客户姓名',
    'invoice.customer_placeholder': '张三',
    'invoice.service': '服务/产品',
    'invoice.service_placeholder': '提供服务的描述',
    'invoice.amount': '金额 (¥)',
    'invoice.amount_placeholder': '150.00',
    'invoice.date': '发票日期',
    'invoice.create_button': '📄 创建发票',
    'invoice.back': '返回',

    // Upload Receipt
    'receipt.title': '📸 上传收据',
    'receipt.take_photo': '📸 拍摄收据照片',
    'receipt.upload_file': '📁 上传文件',
    'receipt.amount': '金额 (¥)',
    'receipt.amount_placeholder': '25.50',
    'receipt.note': '备注（可选）',
    'receipt.note_placeholder': '支出描述',
    'receipt.save_button': '💾 保存收据',
    'receipt.back': '返回',

    // Expenses List
    'expenses.title': '🧾 支出',
    'expenses.add_receipt': '📸 添加新收据',
    'expenses.back': '返回',
    'expenses.total': '总支出',
    'expenses.no_expenses': '暂无支出',
    'expenses.add_first': '添加您的第一张收据',

    // Settings
    'settings.title': '⚙️ 设置',
    'settings.language': '语言',
    'settings.subscription': '订阅',
    'settings.current_plan': '当前计划',
    'settings.free_plan': '免费',
    'settings.premium_plan': '高级',
    'settings.upgrade': '⭐ 升级到高级版',
    'settings.features': '高级版功能',
    'settings.feature1': '• 无限发票',
    'settings.feature2': '• 自动备份',
    'settings.feature3': '• 邮件支持',
    'settings.feature4': '• 导出功能',
    'settings.back': '返回',

    // Common
    'common.save': '保存',
    'common.cancel': '取消',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.close': '关闭',
  },
  ko: {
    // App Title
    'app.title': '인보이스프로',
    'app.subtitle': '비즈니스를 위한 간단한 인보이스',
    'app.description': '소상공인을 위해 특별히 개발',
    'app.target': '제빵사 • 청소업체 • 수리공',

    // Auth Page
    'auth.login': '로그인',
    'auth.register': '회원가입',
    'auth.welcome': '다시 오신 것을 환영합니다! 로그인하세요.',
    'auth.create_account': '무료 계정을 만드세요.',
    'auth.name': '이름',
    'auth.email': '이메일 주소',
    'auth.password': '비밀번호',
    'auth.name_placeholder': '성명',
    'auth.email_placeholder': 'your@email.com',
    'auth.password_placeholder': '최소 8자',
    'auth.login_button': '🔓 로그인',
    'auth.register_button': '✨ 계정 만들기',
    'auth.switch_to_register': '계정이 없으신가요? 지금 가입하세요',
    'auth.switch_to_login': '이미 계정이 있으신가요? 로그인',

    // Dashboard
    'dashboard.title': '📊 개요',
    'dashboard.current_month': '2024년 6월',
    'dashboard.settings': '설정',
    'dashboard.income': '수입',
    'dashboard.expenses': '지출',
    'dashboard.profit': '이익',
    'dashboard.this_month': '이번 달',
    'dashboard.monthly_overview': '📈 월간 개요',
    'dashboard.create_invoice': '인보이스 생성',
    'dashboard.create_invoice_desc': '새 인보이스 작성',
    'dashboard.take_photo': '📸 영수증 촬영',
    'dashboard.take_photo_desc': '지출 추가',
    'dashboard.recent_activity': '📝 최근 활동',

    // Create Invoice
    'invoice.title': '📄 새 인보이스',
    'invoice.customer_name': '고객 이름',
    'invoice.customer_placeholder': '홍길동',
    'invoice.service': '서비스/제품',
    'invoice.service_placeholder': '제공된 서비스 설명',
    'invoice.amount': '금액 (₩)',
    'invoice.amount_placeholder': '150000',
    'invoice.date': '인보이스 날짜',
    'invoice.create_button': '📄 인보이스 생성',
    'invoice.back': '뒤로',

    // Upload Receipt
    'receipt.title': '📸 영수증 업로드',
    'receipt.take_photo': '📸 영수증 사진 찍기',
    'receipt.upload_file': '📁 파일 업로드',
    'receipt.amount': '금액 (₩)',
    'receipt.amount_placeholder': '25500',
    'receipt.note': '메모 (선택사항)',
    'receipt.note_placeholder': '지출 설명',
    'receipt.save_button': '💾 영수증 저장',
    'receipt.back': '뒤로',

    // Expenses List
    'expenses.title': '🧾 지출',
    'expenses.add_receipt': '📸 새 영수증 추가',
    'expenses.back': '뒤로',
    'expenses.total': '총 지출',
    'expenses.no_expenses': '아직 지출이 없습니다',
    'expenses.add_first': '첫 번째 영수증을 추가하세요',

    // Settings
    'settings.title': '⚙️ 설정',
    'settings.language': '언어',
    'settings.subscription': '구독',
    'settings.current_plan': '현재 플랜',
    'settings.free_plan': '무료',
    'settings.premium_plan': '프리미엄',
    'settings.upgrade': '⭐ 프리미엄으로 업그레이드',
    'settings.features': '프리미엄 기능',
    'settings.feature1': '• 무제한 인보이스',
    'settings.feature2': '• 자동 백업',
    'settings.feature3': '• 이메일 지원',
    'settings.feature4': '• 내보내기 기능',
    'settings.back': '뒤로',

    // Common
    'common.save': '저장',
    'common.cancel': '취소',
    'common.delete': '삭제',
    'common.edit': '편집',
    'common.close': '닫기',
  },
  ja: {
    // App Title
    'app.title': 'インボイスプロ',
    'app.subtitle': 'ビジネス向けのシンプルな請求書',
    'app.description': '小規模企業向けに特別開発',
    'app.target': 'パン職人 • 清掃業者 • 職人',

    // Auth Page
    'auth.login': 'ログイン',
    'auth.register': '登録',
    'auth.welcome': 'おかえりなさい！ログインしてください。',
    'auth.create_account': '無料アカウントを作成します。',
    'auth.name': '名前',
    'auth.email': 'メールアドレス',
    'auth.password': 'パスワード',
    'auth.name_placeholder': 'フルネーム',
    'auth.email_placeholder': 'your@email.com',
    'auth.password_placeholder': '8文字以上',
    'auth.login_button': '🔓 ログイン',
    'auth.register_button': '✨ アカウント作成',
    'auth.switch_to_register': 'アカウントをお持ちでない方は登録',
    'auth.switch_to_login': 'すでにアカウントをお持ちの方はログイン',

    // Dashboard
    'dashboard.title': '📊 概要',
    'dashboard.current_month': '2024年6月',
    'dashboard.settings': '設定',
    'dashboard.income': '収入',
    'dashboard.expenses': '支出',
    'dashboard.profit': '利益',
    'dashboard.this_month': '今月',
    'dashboard.monthly_overview': '📈 月間概要',
    'dashboard.create_invoice': '請求書作成',
    'dashboard.create_invoice_desc': '新しい請求書を作成',
    'dashboard.take_photo': '📸 レシート撮影',
    'dashboard.take_photo_desc': '支出を追加',
    'dashboard.recent_activity': '📝 最近のアクティビティ',

    // Create Invoice
    'invoice.title': '📄 新しい請求書',
    'invoice.customer_name': '顧客名',
    'invoice.customer_placeholder': '田中太郎',
    'invoice.service': 'サービス/製品',
    'invoice.service_placeholder': '提供されたサービスの説明',
    'invoice.amount': '金額 (¥)',
    'invoice.amount_placeholder': '15000',
    'invoice.date': '請求書日付',
    'invoice.create_button': '📄 請求書作成',
    'invoice.back': '戻る',

    // Upload Receipt
    'receipt.title': '📸 レシートアップロード',
    'receipt.take_photo': '📸 レシートの写真を撮る',
    'receipt.upload_file': '📁 ファイルアップロード',
    'receipt.amount': '金額 (¥)',
    'receipt.amount_placeholder': '2550',
    'receipt.note': 'メモ（任意）',
    'receipt.note_placeholder': '支出の説明',
    'receipt.save_button': '💾 レシート保存',
    'receipt.back': '戻る',

    // Expenses List
    'expenses.title': '🧾 支出',
    'expenses.add_receipt': '📸 新しいレシートを追加',
    'expenses.back': '戻る',
    'expenses.total': '総支出',
    'expenses.no_expenses': 'まだ支出がありません',
    'expenses.add_first': '最初のレシートを追加してください',

    // Settings
    'settings.title': '⚙️ 設定',
    'settings.language': '言語',
    'settings.subscription': 'サブスクリプション',
    'settings.current_plan': '現在のプラン',
    'settings.free_plan': '無料',
    'settings.premium_plan': 'プレミアム',
    'settings.upgrade': '⭐ プレミアムにアップグレード',
    'settings.features': 'プレミアム機能',
    'settings.feature1': '• 無制限の請求書',
    'settings.feature2': '• 自動バックアップ',
    'settings.feature3': '• メールサポート',
    'settings.feature4': '• エクスポート機能',
    'settings.back': '戻る',

    // Common
    'common.save': '保存',
    'common.cancel': 'キャンセル',
    'common.delete': '削除',
    'common.edit': '編集',
    'common.close': '閉じる',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};