
import {PlayArrow, VolumeUp, Pause} from '@mui/icons-material/';
import Marquee from "react-fast-marquee";
import {useState} from "react"
const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <div className="flex h-16 bg-very-dark-red inset-x-0">
            
            { isPlaying ? 
            <PlayArrow onClick={()=>setIsPlaying(!isPlaying)} className="text-very-dark-red bg-soft-red relative -top-9 ml-5 rounded-full" sx={{ fontSize: 70 }}/>
            :
            <Pause onClick={()=>setIsPlaying(!isPlaying)} className="text-very-dark-red bg-soft-red relative -top-9 ml-5 rounded-full" sx={{ fontSize: 70 }}/>
            }
            <VolumeUp className="text-soft-red my-auto" sx={{ fontSize: 40 }}/>
            <input type="range" className="my-auto pl-3 w-24 form-range appearance-none h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "/>
            <span className="uppercase text-white my-auto text-2xl pl-3">Playing: </span>
            <Marquee delay="2" gradientWidth="0" pauseOnHover="True" className="text-soft-red my-auto font-extralight text-lg ml-2 w-1/2 pr-4">Um dia destes compro umas bifanas </Marquee>
            <span className="ml-auto my-auto text-white text-3xl pr-4">YourFM&trade;</span>
        </div>
    )
}
export default Player

