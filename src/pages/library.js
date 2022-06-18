import Sidebar from "../components/Sidebar"
import LibraryContentBar from "../components/LibraryContentBar"
import Player from "../components/Player"
import { fullData } from "../data/fullData"
import useLocalStorage from "react-use-localstorage"
import { useState } from "react"


const Library = (props) => {

    const [followingRadios, setFollowingRadios] = props.radioData


    const compileData = () => {
        let newData = []
        let newRadios = JSON.parse(radios)
        let newFavourites = JSON.parse(favourites)
        let newWatchLater = JSON.parse(watchLater)
        let newPrograms = JSON.parse(programs)

        newRadios.forEach(item => {
            newData.push({type:"radio",name: fullData[item].name,image:fullData[item].icon, path: "/radio/"+item})
        })

        newFavourites.forEach(item => {
            if(!newData.some(item2 => item2.name === fullData[item.radio].programs[item.program].episodes[item.episode].name)) {
                newData.push({type:["favourite"],name: fullData[item.radio].programs[item.program].episodes[item.episode].name,image:fullData[item.radio].programs[item.program].icon, path: "/radio/"+item.radio+"/program/"+item.program})
            } else {
                newData.forEach(item2 => {
                    if(item2.name === fullData[item.radio].programs[item.program].episodes[item.episode].name) {
                        item2.type.push("favourite")
                    }
                })
            }
        })

        newWatchLater.forEach(item => {
            if(!newData.some(item2 => item2.name === fullData[item.radio].programs[item.program].episodes[item.episode].name)) {
                newData.push({type:["watchLater"],name: fullData[item.radio].programs[item.program].episodes[item.episode].name,image:fullData[item.radio].programs[item.program].icon, path: "/radio/"+item.radio+"/program/"+item.program})
            } else {
                newData.forEach(item2 => {
                    if(item2.name === fullData[item.radio].programs[item.program].episodes[item.episode].name) {
                        item2.type.push("watchLater")
                    }
                })
            }

        })

        newPrograms.forEach(item => {
            newData.push({type:["program"],name: fullData[item.radio].programs[item.program].name,image:fullData[item.radio].programs[item.program].icon, path: "/radio/"+item.radio+"/program/"+item.program})
        })

        return newData
    }   
    
    
    const [option, setOption] = useState("All")
    const [radios] = useLocalStorage("radios", "[]")
    const [favourites] = useLocalStorage("favourites", "[]")
    const [programs] = useLocalStorage("programs", "[]")
    const [watchLater] = useLocalStorage("watchLater", "[]")

    const libraryData = compileData()
    const [data, setData] = useState(libraryData)
    const filterMode = (option) =>{
        switch (option) {
            case "all":
                setOption("All")
                setData(libraryData)
                break

            case "favourites":
                setOption("Favourites")
                setData(libraryData.filter(item => item.type.includes("favourite")))
                break

            case "watchLater":
                setOption("Watch Later")
                setData(libraryData.filter(item => item.type.includes("watchLater")))
                break

            case "radios":
                setOption("Radios")
                setData(libraryData.filter(item => item.type.includes("radio")))
                break

            case "programs":
                setOption("Shows")
                setData(libraryData.filter(item => item.type.includes("program")))
                break

            default:
                setData(libraryData)
        }
    }
    return (
        <div className="flex h-screen">
            <Sidebar radioData={[followingRadios,setFollowingRadios]}/>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="flex flex-wrap h-min items-start w-full mt-4 my-4">
                <div className="flex pl-20 mt-3 overflow-y-auto scrollbar-hide mb-auto">
                    { option === "All" ?
                        <div onClick={()=>{filterMode("all")}} className="h-11 w-40 pt-2 mr-2 text-center text-white bg-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red focus:outline-none focus:ring-0 transition duration-150 ease-in-out">All</div>
                        :
                        <div onClick={()=>{filterMode("all")}} className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">All</div>

                    } 
                    { option === "Favourites" ?
                        <div onClick={()=>{filterMode("favourites")}} className="h-11 w-40 pt-2 mr-2 text-center text-white bg-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Favourites</div>
                        :
                        <div onClick={()=>{filterMode("favourites")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Favourites</div>
                    }
                    { option === "Watch Later" ?
                        <div onClick={()=>{filterMode("watchLater")}} className="h-11 w-40 pt-2 mr-2 text-center text-white bg-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Watch Later</div>
                    :
                        <div onClick={()=>{filterMode("watchLater")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Watch Later</div>
                    }
                    { option === "Radios" ?
                        <div onClick={()=>{filterMode("radios")}} className="h-11 w-40 pt-2 mr-2 text-center text-white bg-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Radios</div>
                        :
                        <div onClick={()=>{filterMode("radios")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Radios</div>
                    }
                    { option === "Shows" ?
                        <div onClick={()=>{filterMode("programs")}} className="h-11 w-40 pt-2 mr-2 text-center text-white bg-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Shows</div>
                        :
                        <div onClick={()=>{filterMode("programs")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Shows</div>
                    }
                    </div>
                </div>
                <div className="pl-20 overflow-y-auto scrollbar-hide mb-auto">
                    <LibraryContentBar title={option} content={data}/>
                </div>
                <Player playingData={props.playingData}/>

            </div>
        </div>
    )
}

export default Library