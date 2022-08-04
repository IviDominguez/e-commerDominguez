import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <nav className="navBar">
            <Link to="/"> 
                    <img src="/logoPoke.png" alt="logo" className="logo"></img>
            </Link>
            <div className="items">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/productos">Productos</Link>
                <Link className="link" to="/pokemons">150 o más!</Link>
                
            </div>
            <CartWidget />

        </nav>
            
    )

}


export default NavBar;


