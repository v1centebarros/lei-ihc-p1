import useLocalStorage from 'react-use-localstorage';
import { fullData } from '../data/fullData';
const Tests = () => {
    const [favourites, setFavourites] = useLocalStorage('favourites', "[]");
   
    const updateFavourites = (id) => {
        let newFavourites = JSON.parse(favourites);
        if (newFavourites.includes(id)) {
            newFavourites = newFavourites.filter(item => item !== id);
        } else {
            newFavourites.push(id);
        }
        setFavourites(JSON.stringify(newFavourites));
    }

    return (
        <>
            <h1>DANGER ZONE!</h1>
            <button onClick={ ()=>updateFavourites(1)}>Clica</button>
            <ul>
                { fullData.filter(item => JSON.parse(favourites).includes(item.id)).map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.icon} alt=""/>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default Tests