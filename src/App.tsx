import React, { useEffect, useState } from 'react';

import Loading from './components/Loading';
import Home from './pages/Home';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  return (
    <>
      {loading ? <Home /> : <Loading />}
      <GlobalStyles />
    </>
  );
};

export default App;
