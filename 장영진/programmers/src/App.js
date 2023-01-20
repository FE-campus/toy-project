import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Contents from './components/Contents';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [userName] = useState('장영진')

  return (
    <div className="App">
      <Header userName={userName} />
      <Contents userName={userName} />
      <Footer />
    </div >
  );
}

export default App;
