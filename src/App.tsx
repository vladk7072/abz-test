import React from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Index } from './pages';

function App() {
  return (
    <div className="main">
      <Header />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
