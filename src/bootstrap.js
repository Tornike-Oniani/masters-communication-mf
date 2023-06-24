import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HistoryMemoryRouter from './helpers/history-memory-router';
import App from './App';

const mount = (el, { onNavigate }) => {
  const memoryHistory = createMemoryHistory();

  const root = createRoot(el);
  root.render(
    <HistoryMemoryRouter history={memoryHistory}>
      <App onNavigate={onNavigate} />
    </HistoryMemoryRouter>
  );

  return {
    onParentNavigate(trailingRoute) {
      const { pathname } = memoryHistory.location;

      if (pathname !== trailingRoute) {
        memoryHistory.push(trailingRoute);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_communication-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
