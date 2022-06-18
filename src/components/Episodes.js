import {PlayArrow, Favorite, AccessTime, AccessTimeFilledRounded,FavoriteBorderRounded } from '@mui/icons-material';
import {useParams} from 'react-router-dom'
import useLocalStorage from "react-use-localstorage"
import { fullData } from '../data/fullData';
import { Tooltip } from "@material-tailwind/react";

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
            { fullData[rid].programs[pid].episodes.map((item, index) => {
                return (
                    <div key={index} className="flex h-56 w-1/2 mt-2 mb-10">
                        <img src={fullData[rid].programs[pid].icon} className="p-1 w-1/3" alt="..."/>
                        <div className="pl-4 w-2/3">
                            <p className="text-lg text-justify font-light text-[#858585] ">{item.date}</p>
                            <p className="text-2xl pb-2 text-justify text-very-dark-red">{item.name}</p>
                            <div className="text-xl text-justify font-light text-[#858585] h-fit line-clamp-4">{item.description}</div>
                            <div className="flex flex-row flex-wrap align-bottom">
                                <PlayArrow className="border-2 text-soft-red border-soft-red relative rounded-full " sx={{ fontSize: 50 }}/>
                                <p className="pl-2 text-2xl mt-auto text-justify text-soft-red">{item.time} min.</p>
                                <div className="ml-auto">
                                        {
                                            JSON.parse(favourites).some(item => item.radio === rid && item.program === pid && item.episode === index) ?
                                            <Tooltip content="Remove from Favourites" className="text-lg">
                                                <Favorite onClick={()=>updateFavourites(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                            </Tooltip>
                                                :
                                            <Tooltip content="Add to Favourites" className="text-lg">
                                                <FavoriteBorderRounded onClick={()=>updateFavourites(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                            </Tooltip>
                                        }
                                        { JSON.parse(watchLater).some(item => item.radio === rid && item.program === pid && item.episode === index) ?
                                            <Tooltip content="Remove from WatchLater" className="text-lg">
                                                <AccessTimeFilledRounded onClick={()=>updateWatchLater(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                            </Tooltip>
                                                    :
                                            <Tooltip content="Add to WatchLater" className="text-lg">
                                                <AccessTime onClick={()=>updateWatchLater(index)} className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                            </Tooltip>
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