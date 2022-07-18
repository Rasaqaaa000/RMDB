import React from 'react';
// import './style.css'
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
