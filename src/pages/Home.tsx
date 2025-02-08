import { useAuthStore } from '../lib/store';
import { MessageSquare, Phone, Tv, Wallet, Wifi, BellElectric } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function Home() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md space-y-6">
        {/* Welcome Message */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome {user?.username}!
          </h1>
        </div>

        {/* Wallet Balance */}
        <div className="flex justify-between items-center bg-white text-blue-600 p-4 rounded-lg shadow-md">
          <div>
            <h2 className="text-lg font-semibold">Wallet Balance</h2>
            <p className="text-2xl font-bold">₦{user?.balance || "0.00"}</p>
          </div>
          <button 
            onClick={() => navigate('/fund-wallet')} 
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-700 transition"
            title="Fund Wallet"
          >
            <Wallet size={32} className="text-white" />
          </button>
        </div>

        {/* Virtual Account Details */}
        {/* <div className="bg-blue-500 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Virtual Account</h2>
          <p className="text-sm">Use this account to top up your wallet.</p>
          <div className="mt-3 bg-white p-4 rounded-md text-blue-600">
            <p className="text-sm">
              <span className="font-semibold">Bank Name:</span> XYZ Bank
            </p>
            <p className="text-sm">
              <span className="font-semibold">Account Number:</span> 1234567890
            </p>
            <p className="text-sm">
              <span className="font-semibold">Account Name:</span> {user?.username}
            </p>
          </div>
        </div> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Link to='/' className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-gray-200 rounded-full"><Wifi /></div>
            <h2 className="text-sm lg:text-lg font-semibold">Buy Data</h2>
          </div>
        </Link>
        <Link to='/' className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-gray-200 rounded-full"><Phone /></div>
            <h2 className="text-sm lg:text-lg  font-semibold">Buy Airtime</h2>
          </div>
        </Link>
        <Link to='/' className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-gray-200 rounded-full"><Tv /></div>
            <h2 className="text-sm lg:text-lg font-semibold">Buy Cable</h2>
          </div>
        </Link>
        <Link to='/' className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-gray-200 rounded-full"><BellElectric /></div>
            <h2 className="text-xs lg:text-lg  sm:text-xs font-semibold">Buy Electricity</h2>
          </div>
        </Link>
        <Link to='/' className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-gray-200 rounded-full"><MessageSquare /></div>
            <h2 className="text-sm lg:text-lg font-semibold">Bulk SMS</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}