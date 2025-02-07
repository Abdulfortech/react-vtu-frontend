import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { useAuthStore } from './lib/store';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="profile" element={<div>Profile Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="buy-data" element={<div>Buy Data Page</div>} />
          <Route path="buy-airtime" element={<div>Buy Airtime Page</div>} />
          <Route path="buy-cable" element={<div>Buy Cable Page</div>} />
          <Route path="electricity" element={<div>Electricity Bill Page</div>} />
          <Route path="transactions" element={<div>Transactions Page</div>} />
          <Route path="wallet" element={<div>Wallet Page</div>} />
          <Route path="fund-wallet" element={<div>Fund Wallet Page</div>} />
        </Route>

        {/* Redirect root to landing for non-authenticated users */}
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;