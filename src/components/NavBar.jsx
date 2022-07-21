import CartWidget from "./CartWidget";


const NavBar = () =>{
    return(
        <nav className="navbar">
            <a href="index.html"> 
                    <img src="/logoPoke.png" alt="logo" className="logo"></img>
            </a>
            <div className="items">
                <a className="link" href="#">Productos</a>

                <a className="link" href="#">150 o más!</a>

                <a className="link" href="#">Contacto</a>
            </div>
            <CartWidget />

        </nav>
        

        
    )

}


export default NavBar;





//no me toma los estilos utilizando nav ul li

/* const NavBar = () =>{
    return(
        <nav className="navbar">


                <a href="index.html"> 
                    <img src="/logoPoke.png" alt="logo" className="logo" />
                </a>
                <ul className="items">
                    <li>
                        <a className="link" href="#">Productos</a>
                    </li>
                    <li>
                        <a className="link" href="#">150 o más!</a>
                    </li>
                    <li>
                        <a className="link" href="#">Contacto</a>
                    </li>
                </ul>

        </nav>
    )

}*/