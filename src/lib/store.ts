import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
  } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email: string, password: string) => {
    // In a real app, you would make an API call here
    set({
      isAuthenticated: true,
      user: {
        name: 'John Doe',
        email: email,
      },
    });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));