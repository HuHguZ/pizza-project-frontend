import React from 'react';
import './App.css';
import Header from '../Header'
import Footer from '../Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">Тут пиццы</main>
      <Footer />
    </div>
  );
}

export default App;
