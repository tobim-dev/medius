import React, { useEffect, useState } from 'react';
import { useAccount, useIsAuthenticated, useMsal } from '@azure/msal-react';

export function Index() {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          scopes: [
            'https://mediusapp.onmicrosoft.com/dbe6187a-d704-47c2-b5f3-5bb88aaacbba/Files.Read',
          ],
          account: account,
        })
        .then((response) => {
          if (response) {
            setApiData(JSON.stringify(response));
          }
        });
    }
  }, [account, instance]);

  const handleLogin = () => {
    instance.loginPopup();
  };

  if (accounts.length > 0) {
    return (
      <>
        <span>There are currently {accounts.length} users signed in!</span>
        {apiData && (
          <span>Data retreived from API: {JSON.stringify(apiData)}</span>
        )}
      </>
    );
  } else if (inProgress === 'login') {
    return <span>Login is currently in progress!</span>;
  } else {
    return <button onClick={handleLogin}>Login</button>;
  }
}

export default Index;
