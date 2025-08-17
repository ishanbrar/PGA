import React, { useState, useEffect } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';
import firebaseService from '../services/firebaseService';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = firebaseService.onAuthStateChanged((user: any) => {
      if (user) {
        setIsAuthenticated(true);
        setAdminUser(user.email || user.displayName || 'Admin User');
      } else {
        setIsAuthenticated(false);
        setAdminUser('');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = (username: string) => {
    setIsAuthenticated(true);
    setAdminUser(username);
  };

  const handleLogout = async () => {
    try {
      await firebaseService.logout();
      setIsAuthenticated(false);
      setAdminUser('');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-golf-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default Admin;
