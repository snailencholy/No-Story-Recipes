import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import AppContainer from './components/Browser/AppContainer';
import SplashPage from './components/Browser/SplashPage';
import MobileSplashPage from './components/Mobile/MobileSplashPage';


const App = () => {

  // TODO: build login system
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <AppContainer />
    )
  }

  if (isMobile) {
    return (
      <MobileSplashPage />
    )
  }

  return (
    <SplashPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  )
};

export default App;
