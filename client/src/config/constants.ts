export const NODE_ENV = import.meta.env.VITE_NODE_ENV as
  | 'development'
  | 'production';
export const APP_MODE = import.meta.env.VITE_APP_MODE as
  | 'development'
  | 'production';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const LOG_LEVEL = import.meta.env.VITE_LOG_LEVEL;

export const HeaderLinks = [
  {
    name: 'Home',
    link: '/',
  },
];
