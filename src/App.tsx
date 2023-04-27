import React from 'react';
import './App.css';
import AppThemeProvider from './components/AppThemeProvider';
import AppGrid from './components/AppGrid';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <AppGrid>
      <AppThemeProvider>
        <>
          <Dashboard />
        </>
      </AppThemeProvider>

    </AppGrid>
  );
}

export default App;
