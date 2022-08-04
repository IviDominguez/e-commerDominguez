import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navBar">
  <div className="container-fluid">
  <Link to="/"><img src="/logoPoke.png" alt="logo" className="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="link" to="/pokemons">150 o más!</Link>
        </li>
        <li className="nav-item dropdown">
        <p className="link dropdown-toggle" role="button" data-bs-toggle="dropdown" 
            aria-expanded="false">Productos</p>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/categoria/Peluches">Peluches</Link></li>
            <li><Link className="dropdown-item" to="/categoria/Unicos">Unicos</Link></li>
            <li><Link className="dropdown-item" to="/productos">Todos los productos</Link></li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
            
    )

}


export default NavBar;


