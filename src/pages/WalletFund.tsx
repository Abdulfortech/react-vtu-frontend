import { useAuthStore } from '../lib/store';
import { CreditCard, Wallet as WalletIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function WalletFund() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md space-y-6">

        {/* Wallet Balance */}
        <div className="flex justify-between items-center bg-white text-blue-600 p-4 rounded-lg shadow-md">
          <div>
            <h2 className="text-lg font-semibold">Wallet Balance</h2>
            <p className="text-2xl font-bold">₦{user?.balance || "0.00"}</p>
          </div>
          <button 
            onClick={() => navigate('/wallet-fund')} 
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-700 transition"
            title="Fund Wallet"
          >
            <WalletIcon size={32} className="text-white" />
          </button>
        </div>

        {/* Virtual Account Details */}
        <div className="bg-grey-500 p-4 rounded-lg shadow-md">
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
        </div>
      </div>

    </div>
  );
}