import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import Recherche from './views/Recherche';
import Accueil from './views/Accueil';
import Favoris from './views/Favoris';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="accueil" element={<Accueil />}/>
          <Route path="favoris" element={<Favoris />}/>
          <Route path="recherche" element={<Recherche />}/>
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

