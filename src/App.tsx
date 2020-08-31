import React from 'react';
import { Stack, CookbookProvider, grubhubRestaurant } from '@gh/cookbook-react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <CookbookProvider theme={grubhubRestaurant}>
      <header className="App-header">
        <Stack y={4}>
          <img src={logo} className="App-logo" alt="logo" />
        </Stack>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </CookbookProvider>
    </div>
  );
}

export default App;
