import React from 'react';
import Home from './components/pages/Home';
import NavBarMenu from './components/Nav/navBarMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarMenu />
      </header>
      <Home />
    </div>
  );
}

export default App;
