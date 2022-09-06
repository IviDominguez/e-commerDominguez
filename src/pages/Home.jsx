import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="divHome">
            <h1 className="h1Home">TU POKETIENDA!</h1>
            <Link to="/productos"><img className="imgHome" src="https://i.postimg.cc/PqCMb9M4/portada.jpg" alt="name" /></Link>
        </div>
    )
}

export default Home;