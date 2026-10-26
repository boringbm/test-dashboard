import React from 'react';
import Login from './Login';

interface AppProps {
  children?: React.ReactNode;
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Login />
    </div>
  );
};

export default App;
