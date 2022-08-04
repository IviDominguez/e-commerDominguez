import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";


const NavBar2 = () =>{
    return(
        <nav className="navbar navbar-expand-lg navBar">
            <div className="container-fluid">
                <Link to="/">
                    <img src="/logoPoke.png" alt="logo" className="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse item" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link link" to="/pokemons">150 o más!</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" 
                            to="/productos" role="button" data-bs-toggle="dropdown" 
                            aria-expanded="false">Productos</p>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Peluches</Link></li>
                                    <li><Link className="dropdown-item" href="#">Unicos</Link></li>
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


export default NavBar2;