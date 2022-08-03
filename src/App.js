
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Tu PokeTienda!" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
