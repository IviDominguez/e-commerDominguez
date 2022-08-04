

const products = [
    {
        id: "1",
        name: "Pikachu",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color amarillo.",
        price: 100,
        stock: 10,
        img: "https://i.postimg.cc/QxXGQvQq/D-NQ-NP-904692-MLA50566360688-072022-O.webp",
        category: "Peluches",
    },
    {
        id: "2",
        name: "Eevee",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color marrón.",
        price: 80,
        stock: 4,
        img: "https://i.postimg.cc/3Rq8Hd91/eevee.webp",
        category: "Peluches",

    },
    {
        id: "3",
        name: "Vulpix",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color naranja.",
        price: 100,
        stock: 7,
        img: "https://i.postimg.cc/TPXQC06q/vulpix.webp",
        category: "Peluches",

    },
    {
        id: "4",
        name: "Bulbasaur",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color verde.",
        price: 80,
        stock: 7,
        img: "https://i.postimg.cc/qMhLrSBx/bulbasaur.webp",
        category: "Peluches",

    },
    {
        id: "5",
        name: "Vaporeon",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color azul.",
        price: 150,
        stock: 1,
        img: "https://i.postimg.cc/Hk0bsCqX/vaporeon.webp",
        category: "Unicos",

    },
    {
        id: "6",
        name: "Mr. Mime",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color rosa.",
        price: 150,
        stock: 1,
        img: "https://i.postimg.cc/GmzJxCXr/mrMime.webp",
        category: "Unicos",

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
console.log (data)

