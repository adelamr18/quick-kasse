
import React, { useState } from 'react';
import AuthPage from '@/components/AuthPage';
import Dashboard from '@/components/Dashboard';
import CreateInvoice from '@/components/CreateInvoice';
import UploadReceipt from '@/components/UploadReceipt';
import ExpensesList from '@/components/ExpensesList';
import Settings from '@/components/Settings';

type AppPage = 'auth' | 'dashboard' | 'create-invoice' | 'upload-receipt' | 'expenses' | 'settings';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>('auth');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleNavigation = (page: AppPage) => {
    setCurrentPage(page);
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  switch (currentPage) {
    case 'dashboard':
      return <Dashboard onNavigate={handleNavigation} />;
    case 'create-invoice':
      return <CreateInvoice onBack={handleBackToDashboard} />;
    case 'upload-receipt':
      return <UploadReceipt onBack={handleBackToDashboard} />;
    case 'expenses':
      return (
        <ExpensesList 
          onBack={handleBackToDashboard} 
          onAddReceipt={() => handleNavigation('upload-receipt')}
        />
      );
    case 'settings':
      return <Settings onBack={handleBackToDashboard} />;
    default:
      return <Dashboard onNavigate={handleNavigation} />;
  }
};

export default Index;
