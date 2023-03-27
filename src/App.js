
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import Body from './components/Body.js'
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"

const App=()=>{
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}
export default App;
