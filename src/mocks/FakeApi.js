

export const products = [
    /*{
        id: "1",
        name: "Pikachu",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color amarillo.",
        price: 100,
        stock: 15,
        img: "https://i.postimg.cc/xCyFrTxJ/pikachu.jpg",
        category: "originales",
    },
    {
        id: "2",
        name: "Eevee",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color marrón.",
        price: 80,
        stock: 4,
        img: "https://i.postimg.cc/DwhxCmXs/eevee.jpg",
        category: "originales",

    },*/
    {
        
        name: "Vulpix",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color naranja.",
        price: 100,
        stock: 7,
        img: "https://i.postimg.cc/jd0c5Cv9/vulpix.jpg",
        category: "originales",

    },
    {
        
        name: "Bulbasaur",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color verde.",
        price: 80,
        stock: 7,
        img: "https://i.postimg.cc/2Sj4bWWH/Bulbasaur.jpg",
        category: "originales",

    },
    {
        
        name: "Vaporeon",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color azul.",
        price: 150,
        stock: 1,
        img: "https://i.postimg.cc/CxQ3J1Xw/Vaporeon.jpg",
        category: "originales",

    },
    {
        
        name: "Mr. Mime",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color rosa.",
        price: 150,
        stock: 1,
        img: "https://i.postimg.cc/jdxWZbj2/Mr-Mime.jpg",
        category: "originales",

    },
    {
        
        name: "Pikazard",
        description: "Peluche pokemon. Pikachu disfrazado de Charizard. Tamaño: 30cm de alto y 17cm de ancho (aprox.). Color amarillo y naranja.",
        price: 500,
        stock: 2,
        img: "https://i.postimg.cc/TYNB015C/pikachu-charizard.jpg",
        category: "disfrazados",

    },
    {
        
        name: "Pikavee",
        description: "Peluche pokemon. Pikachu disfrazado de Eevee. Tamaño: 30cm de alto y 17cm de ancho (aprox.). Color amarillo y marrón.",
        price: 400,
        stock: 3,
        img: "https://i.postimg.cc/YCP95QjV/pikachu-eevee.jpg",
        category: "disfrazados",

    },
    {
        
        name: "Pikapix",
        description: "Peluche pokemon. Pikachu disfrazado de Vulpix. Tamaño: 30cm de alto y 17cm de ancho (aprox.). Color amarillo y naranja.",
        price: 400,
        stock: 3,
        img: "https://i.postimg.cc/Y0TDcnK0/pikachu-vulpix.jpg",
        category: "disfrazados",

    },
    {
        
        name: "Ditto-Bulbasaur",
        description: "Peluche pokemon. Ditto tranformado en Bulbasaur. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color celeste.",
        price: 300,
        stock: 5,
        img: "https://i.postimg.cc/7ZTg5Pv5/ditto-bulbasaur.jpg",
        category: "dittos",

    },
    {
        
        name: "Ditto-Lapras",
        description: "Peluche pokemon. Ditto tranformado en Lapras. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color celeste.",
        price: 300,
        stock: 4,
        img: "https://i.postimg.cc/sXRFk2z7/ditto-lapras.jpg",
        category: "dittos",

    },
    {
        
        name: "Ditto-Squirtle",
        description: "Peluche pokemon. Ditto tranformado en Squirtle. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color celeste.",
        price: 300,
        stock: 4,
        img: "https://i.postimg.cc/xTB6x4nb/ditto-squirtle.jpg",
        category: "dittos",

    },

]


export const data = new Promise((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
        if (condition) {
            resolve(products)
        }else{
            reject("Algo salió mal")
        }

    },2000)
})


