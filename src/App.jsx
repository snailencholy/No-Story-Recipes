import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import AppContainer from './components/Browser/AppContainer';
import SplashPage from './components/Browser/SplashPage';
import MobileSplashPage from './components/Mobile/MobileSplashPage';


const App = () => {

  // Create the mobile view for now. Users and Auth
  // is for another day.
  const [loggedIn, isLoggedIn] = useState(true);

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
    <SplashPage />
  )
};

export default App;
