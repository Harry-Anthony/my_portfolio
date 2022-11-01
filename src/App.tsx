import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Test } from './components/Test';
import { Contact } from './components/Contact';
import { Work } from './components/Work';

function App() {
  return (
    <div className='h-full'>
      {/* <Test></Test> */}
      <Header></Header>
      <About></About>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
