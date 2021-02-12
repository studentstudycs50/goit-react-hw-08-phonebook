import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header"
import Main from '../Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main/>
    </BrowserRouter>
  )
}

export default App;


