import { episodesData } from "../data/episodesData"
import {PlayArrow, Favorite, AccessTime, AccessTimeFilledRounded,FavoriteBorderRounded } from '@mui/icons-material';
import {useParams} from 'react-router-dom'
import useLocalStorage from "react-use-localstorage"
const Episodes = () => {
    let { rid, pid } = useParams();
    const [favourites,setFavourites] = useLocalStorage('favourites', "[]");
    const [watchLater,setWatchLater] = useLocalStorage('watchLater', "[]");

    const updateFavourites = (id) => {
        let newFavourites = JSON.parse(favourites);
        if (newFavourites.some(item => item.radio === rid && item.program === pid && item.episode === id)) {
            newFavourites = newFavourites.filter(function(item) {
                return !(item.radio === rid && item.program ===pid && item.episode === id);
            })
        } else {
            newFavourites.push({radio:rid, program:pid, episode:id});
        }
        setFavourites(JSON.stringify(newFavourites));    
    }

    const updateWatchLater = (id) => {
        let newWatchLater = JSON.parse(watchLater);
        if (newWatchLater.some(item => item.radio === rid && item.program === pid && item.episode === id)) {
            newWatchLater = newWatchLater.filter(function(item) {
                return !(item.radio === rid && item.program ===pid && item.episode === id);
            })
        } else {
            newWatchLater.push({radio:rid, program:pid, episode:id});
        }
        setWatchLater(JSON.stringify(newWatchLater));
    }



    return (
        < >
            { episodesData.map((item, index) => {
                return (
                    <div key={index} className="flex h-56 w-1/2 mt-2">
                        <img src={item.image_url} className="p-1 w-64" alt="..."/>
                        <div className="pl-4">
                            <p className="text-lg text-justify font-light text-[#858585]">{item.date}</p>
                            <p className="text-2xl pb-2 text-justify text-very-dark-red">{item.title}</p>
                            <p className="text-xl text-justify font-light text-[#858585]">{item.description}</p>
                            <div className="flex flex-row flex-wrap align-bottom pt-10">
                                <PlayArrow className="border-2 text-soft-red border-soft-red relative rounded-full " sx={{ fontSize: 50 }}/>
                                <p className="pl-2 text-2xl mt-auto text-justify text-soft-red">{item.time} min.</p>
                                <div className="ml-auto">

                                    {
                                        JSON.parse(favourites).some(item => item.radio === rid && item.program === pid && item.episode === index) ?
                                        <Favorite onClick={()=>updateFavourites(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                            :
                                        <FavoriteBorderRounded onClick={()=>updateFavourites(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                    }

                                    { JSON.parse(watchLater).some(item => item.radio === rid && item.program === pid && item.episode === index) ?
                                        <AccessTimeFilledRounded onClick={()=>updateWatchLater(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                            :
                                        <AccessTime onClick={()=>updateWatchLater(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </>
    )
}

export default Episodes