import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import thirdweb provider and Mumbai ChainId
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

// Wrap your app with the thirdweb provider
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain = "mumbai" desiredChainId={activeChainId} clientId='3239e8289710b41fdda572169e41d3ff'>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);