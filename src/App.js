import React from 'react';
import Home from './components/pages/Home';
import NavBarMenu from './components/Nav/navBarMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarMenu />
        <h1>Team Generator</h1>
        <p>Random Team Generator. Assigns names to assignments as teams or alone.</p>
      </header>
      <Home />
    </div>
  );
}

export default App;
