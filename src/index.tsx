import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import './styles/index.css';
import '@radix-ui/themes/styles.css';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
