import React from 'react';
import './App.css';
import { Button, Skeleton } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Skeleton variant="rectangular" width={210} height={118} />
      <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
