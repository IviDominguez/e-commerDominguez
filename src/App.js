
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Tu PokeTienda!" />
    </div>
  );
}

export default App;
