import Sidebar from "../components/Sidebar"
import ContentBar from "../components/Contentbar"
import Player from "../components/Player"
import { fullData } from "../data/fullData"
import useLocalStorage from "react-use-localstorage"
import { useState } from "react"


const Library = () => {
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
            newData.push({type:"favourite",name: fullData[item.radio].programs[item.program].episodes[item.episode].name,image:fullData[item.radio].programs[item.program].icon, path: "/radio/"+item.radio+"/program/"+item.program})
        })

        newWatchLater.forEach(item => {
            newData.push({type:"watchLater",name: fullData[item.radio].programs[item.program].episodes[item.episode].name,image:fullData[item.radio].programs[item.program].icon, path: "/radio/"+item.radio+"/program/"+item.program})
        })

        newPrograms.forEach(item => {
            newData.push({type:"show",name: fullData[item.radio].programs[item.program].name,image:fullData[item.radio].programs[item.program].icon, path: "/radio/"+item.radio+"/program/"+item.program})
        })

        return newData
    }   
    
    
    const [option, setOption] = useState("All")
    const [radios, setRadios] = useLocalStorage("radios", "[]")
    const [favourites, setFavourites] = useLocalStorage("favourites", "[]")
    const [programs, setPrograms] = useLocalStorage("programs", "[]")
    const [watchLater, setWatchLater] = useLocalStorage("favourites", "[]")

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
                setData(libraryData.filter(item => item.type === "favourite"))
                break

            case "watchLater":
                setOption("Watch Later")
                setData(libraryData.filter(item => item.type === "watchLater"))
                break

            case "radios":
                setOption("Radios")
                setData(libraryData.filter(item => item.type === "radio"))
                break

            case "shows":
                setOption("Shows")
                setData(libraryData.filter(item => item.type === "show"))
                break

            default:
                setData(libraryData)
        }
    }
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="flex flex-wrap h-min items-start w-full mt-4 my-4">
                <div className="flex pl-20 mt-3 overflow-y-auto scrollbar-hide mb-auto">   
                        <div onClick={()=>{filterMode("all")}} className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">All</div>
                        <div onClick={()=>{filterMode("favourites")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Favourites</div>
                        <div onClick={()=>{filterMode("watchLater")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Watch Later</div>
                        <div onClick={()=>{filterMode("radios")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Radios</div>
                        <div onClick={()=>{filterMode("shows")}}className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Shows</div>
                    </div>
                </div>
                <div className="pl-20 overflow-y-auto scrollbar-hide mb-auto">
                    <ContentBar title={option} content={data}/>
                </div>
                <Player></Player>
            </div>
        </div>
    )
}

export default Library