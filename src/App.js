import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <Header />
      <Projects />
      <Contact />
    </div>
    
  );
}


const appStyle = {
  fontFamily: 'helvetica',
  backgroundColor: 'black',
  margin: 0,
  overflowX: 'hidden',
};


export default App;

