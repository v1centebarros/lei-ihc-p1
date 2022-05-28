import {PlayArrow, Pause} from '@mui/icons-material/';
import {useState} from "react"
import useLocalStorage from 'react-use-localstorage';
const RadioInformation = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [followingRadios, setFollowingRadios] = useLocalStorage('radios', "[]");

    const updateFollowingRadios = (id) => {
        let newFollowingRadios = JSON.parse(followingRadios);
        if (newFollowingRadios.includes(id)) {
            newFollowingRadios = newFollowingRadios.filter(item => item !== id);
        } else {
            newFollowingRadios.push(id);
        }
        setFollowingRadios(JSON.stringify(newFollowingRadios));
    }

    return(
        <>
            <div className="flex flex-wrap w-full h-min items-end">
                <h1 className="mt-8 text-7xl font-bold pb-2">{props.name}</h1>
                
                { followingRadios.includes(props.radioId) ? 
                        
                    <button onClick={() => updateFollowingRadios(props.radioId)} type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Following
                    </button>
                    :
                    <button onClick={() => updateFollowingRadios(props.radioId)} type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Follow
                    </button>
                }

            
            </div>

            <div className="flex flex-wrap w-full h-min items-center">
                
                <div className="rounded-full bg-red-800 h-5 w-5"></div>
                <span className="pl-2 font-bold text-xl">Live now:</span>
                <span className="pl-2 font-light text-xl">{props.live}</span>
                { isPlaying 
                ? 
                <PlayArrow onClick={() => setIsPlaying(!isPlaying)} className="border-2  text-soft-red border-soft-red relative rounded-full  my-auto ml-3" sx={{ fontSize: 50 }}/>
                    :
                <Pause onClick={() => setIsPlaying(!isPlaying)} className="border-2  text-soft-red  border-soft-red relative rounded-full   my-auto ml-3" sx={{ fontSize: 50 }}/>
                }
            </div>
        </>
    )
}

export default RadioInformation