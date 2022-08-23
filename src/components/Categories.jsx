import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";



const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const categoriesCollection = collection(db, "categories")

        getDocs(categoriesCollection)
        .then((snapshot) =>{
            setCategories(snapshot.docs.map((doc) => doc.data().name))
        })
        .catch((error) => console.error(error))

    }, [])
    return(
        <>
        {categories.map((el) =>(
            <li className="nav-item dropdown link" key={el}>
                <Link className="dropdown-item" to={"/categoria/" + el}>
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                </Link>
            </li>
        ))}
        </>
    )
}


export default Categories