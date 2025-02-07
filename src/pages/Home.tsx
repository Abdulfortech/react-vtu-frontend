import React from 'react';

import { useAuthStore } from '../lib/store';

export function Home() {
  const { user, logout } = useAuthStore();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to MufalData Sub {user?.username}</h1>
      <p className="text-gray-600">
        This is your dashboard home page. Start adding your content here.
      </p>
    </div>
  );
}