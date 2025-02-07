import { create } from 'zustand';
import { api } from './api';

interface User {
  // id: string;
  // name: string;
  // email: string;
  username: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  initializeAuth: () => {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');
    
    if (token && user) {
      set({
        isAuthenticated: true,
        token,
        user: JSON.parse(user),
      });
    }
  },

  login: async (username: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token, user } = response.data;
      
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));
      
      set({
        isAuthenticated: true,
        token,
        user,
      });
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },

  register: async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
      });
      
      const { token, user } = response.data;
      
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));
      
      set({
        isAuthenticated: true,
        token,
        user,
      });
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  },

  logout: () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    set({
      isAuthenticated: false,
      token: null,
      user: null,
    });
  },
}));