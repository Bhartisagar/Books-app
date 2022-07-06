import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { Auth0Provider } from '@auth0/auth0-react';

const domain= 'dev-21h32891.us.auth0.com';
const clientId= 'jV0fw9MPU8DTjVHF3Gcq0OGIsMT90lTI';

ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={`${window.location.origin}/library`}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
