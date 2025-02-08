import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  Home,
  Settings,
  LogOut,
  User,
  Bell,
  ChevronDown,
  Phone,
  Database,
  Tv,
  Zap,
  History,
  Wallet,
  PlusCircle
} from 'lucide-react';
import { useAuthStore } from '../lib/store';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', path: '/' },
    { icon: <Database className="w-5 h-5" />, label: 'Buy Data', path: '/buy-data' },
    { icon: <Phone className="w-5 h-5" />, label: 'Buy Airtime', path: '/buy-airtime' },
    { icon: <Tv className="w-5 h-5" />, label: 'Buy Cable', path: '/buy-cable' },
    { icon: <Zap className="w-5 h-5" />, label: 'Electricity Bill', path: '/electricity' },
    { icon: <History className="w-5 h-5" />, label: 'Transactions', path: '/transactions' },
    { icon: <Wallet className="w-5 h-5" />, label: 'Wallet', path: '/wallet' },
    { icon: <PlusCircle className="w-5 h-5" />, label: 'Fund Wallet', path: '/fund-wallet' },
    { icon: <User className="w-5 h-5" />, label: 'Profile', path: '/profile' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-white border-r border-gray-200`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-semibold">Mufal Data Sub</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-0'} flex flex-col min-h-screen`}>
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-200 h-16">
          <div className="flex justify-between items-center px-4 w-full h-full">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`${sidebarOpen ? 'lg:hidden' : ''}`}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-end w-full space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <User className="w-6 h-6" />
                  <div className="flex flex-col text-left content-start">
                    <span className="font-bold">{user?.username}</span>
                    <span className="text-sm text-gray-600">₦{user?.balance || "0.00"}</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                    <div className="py-1">
                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                      <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 p-4">
          <div className="text-center text-gray-600">
            © 2024 VTU Platform. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}