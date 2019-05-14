import React from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import CurrentMeds from './components/CurrentMeds';
import Footer from './components/Footer';

function App() {
  return (
    <Wrapper>
    <Navbar></Navbar>
    <CurrentMeds></CurrentMeds>
    <Footer></Footer>
    </Wrapper>
  );
}

export default App;
