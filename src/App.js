import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Gold from './Components/Gold';
import Msg from './Components/Msg';
import Works from './Components/Works';
import Articals from './Components/Articals';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='overlay'></div>
      <Header />
      <Home />
      <Gold />
      <Msg />
      <Works />
      <Articals />
      <Footer />
    </div>
  );
}

export default App;
