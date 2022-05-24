import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Palindromos from "./components/palindromo";
import Caixa from "./components/caixa";
import Veiculo from "./components/veiculo";
import Ceps from './components/cep';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3333';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/palindromos' element={<Palindromos />} />
        <Route path='/caixa' element={<Caixa />} />
        <Route path='/veiculos' element={<Veiculo />} />
        <Route path='/ceps' element={<Ceps />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);