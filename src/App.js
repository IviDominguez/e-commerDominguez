
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Tu PokeTienda!" />
      <ItemCount />
    </div>
  );
}

export default App;
