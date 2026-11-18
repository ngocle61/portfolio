import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { i18nReady } from '@/core/libs/i18n';

import { App } from './app';
import './index.css';

await i18nReady;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
