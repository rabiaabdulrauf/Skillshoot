import React from 'react';
import './App.css';
import Bar from './Components/Bar';
import About from './Components/About';
import Learning from './Components/Learning';
import Discount from './Components/Discount';
import Faqs from './Components/Faqs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Bar/>
      <About/>
      <Learning/> 
      <Discount/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
