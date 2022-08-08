
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/productos" element={<ItemListContainer greeting = "Tu PokeTienda!" />}></Route>
        <Route path="/categoria/:category" element={<ItemListContainer greeting = "Tu PokeTienda!" />}></Route>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/cart" element={<h1>Productos agregados correctamente!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
