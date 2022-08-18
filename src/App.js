
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import Cart from './views/Cart';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";



function App() {
  const [value, setValue] = useState("")

  useEffect(() => {
    const db = getFirestore()

    const pikachuRef = doc(db, "items", "vveSsyjFlZsGnT3OCGUf")
    getDoc(pikachuRef)
      .then((snapshot) => {
        if(snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data()
          }
          console.log(data)
          setValue(data)
          
        }

      })
      .catch((error) => console.error(error))
  }, [])


  return (

      <BrowserRouter>
          <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/productos" element={<ItemListContainer greeting = "Tu PokeTienda!" />}></Route>
          <Route path="/categoria/:category" element={<ItemListContainer greeting = "Tu PokeTienda!" />}></Route>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
        </CartProvider>
      </BrowserRouter>

  );
}

export default App;
