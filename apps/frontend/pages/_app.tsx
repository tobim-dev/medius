import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { MsalProvider } from '@azure/msal-react';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';

// MSAL configuration
const msalConfig: Configuration = {
  auth: {
    clientId: 'dbe6187a-d704-47c2-b5f3-5bb88aaacbba',
    authority:
      'https://mediusapp.b2clogin.com/mediusapp.onmicrosoft.com/B2C_1_SIGNUP_IN',
    knownAuthorities: [
      'https://mediusapp.b2clogin.com/mediusapp.onmicrosoft.com/B2C_1_SIGNUP_IN',
    ],
    redirectUri: '/',
    postLogoutRedirectUri: '/',
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};

const pca = new PublicClientApplication(msalConfig);

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={pca}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default CustomApp;
