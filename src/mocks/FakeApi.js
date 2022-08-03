

const products = [
    {
        id: 1,
        name: "Pikachu",
        description: "Peluche pokemon. Tamaño: 27cm de alto y 15cm de ancho (aprox.). Color amarillo.",
        price: 50,
        stock: 5,
        img: "https://i.postimg.cc/QxXGQvQq/D-NQ-NP-904692-MLA50566360688-072022-O.webp",
    },
    {
        id: 2,
        name: "Eevee",
        description: "Peluche pokemon",
        price: 50,
        stock: 5,
        img: "https://i.postimg.cc/QxXGQvQq/D-NQ-NP-904692-MLA50566360688-072022-O.webp",

    },
    {
        id: 3,
        name: "Vulpix",
        description: "Peluche pokemon",
        price: 50,
        stock: 5,
        img: "https://i.postimg.cc/QxXGQvQq/D-NQ-NP-904692-MLA50566360688-072022-O.webp",

    },
    {
        id: 4,
        name: "Bulbasaur",
        description: "Peluche pokemon",
        price: 50,
        stock: 5,
        img: "https://i.postimg.cc/QxXGQvQq/D-NQ-NP-904692-MLA50566360688-072022-O.webp",

    },
    {
        id: 5,
        name: "Golduck",
        description: "Peluche pokemon",
        price: 50,
        stock: 5,
        img: "https://i.postimg.cc/QxXGQvQq/D-NQ-NP-904692-MLA50566360688-072022-O.webp",

    },
    {
        id: 6,
        name: "Mr. Mime",
        description: "Peluche pokemon",
        price: 50,
        stock: 5,
        img: "https://i.postimg.cc/QxXGQvQq/D-NQ-NP-904692-MLA50566360688-072022-O.webp",

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
