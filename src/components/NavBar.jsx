import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Categories from "./Categories";


const NavBar = () =>{
  const { cart } = useCart()
  
    return(
        <nav className="navbar navbar-expand-lg navBar">
          <div className="container-fluid">
            <Link to="/"><img src="/logoPoke.png" alt="logo" className="logo"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse divLink" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <Categories/>
                <li className="link">
                  <Link className="dropdown-item" to="/productos">Todos los productos</Link>
                </li>
              </ul>
            </div>
          </div>
          <CartWidget />
        </nav>
            
    )

}


export default NavBar;
