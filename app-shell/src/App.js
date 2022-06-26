import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const AppOne = React.lazy(() => import('app1/AppOneMain'));

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Module federation POC</h1>
      </header>
      <ErrorBoundary>
        <React.Suspense fallback={<div>loading...</div>}>
          <AppOne />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
