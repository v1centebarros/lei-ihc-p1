import { episodesData } from "../data/episodesData"
import {PlayArrow, Favorite, AccessTime } from '@mui/icons-material';

const   Episodes = () => {
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
                                    <AccessTime className="text-soft-red relative rounded-full " sx={{ fontSize: 44 }}/>
                                    <Favorite className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
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