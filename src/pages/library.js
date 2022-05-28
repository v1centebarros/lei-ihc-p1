import Sidebar from "../components/Sidebar"
import ContentBar from "../components/Contentbar"
import { libraryData } from "../data/libraryData"
import Player from "../components/Player"
import { fullData } from "../data/fullData"
import useLocalStorage from "react-use-localstorage"
import { useState } from "react"


const Library = () => {
    const [option, setOption] = useState("All")
    const [data, setData] = useState(libraryData)
    const [radios, setRadios] = useLocalStorage("radios", "[]")

    const filterMode = (option) =>{
        switch (option) {
            case "all":
                setOption("All")
                setData(libraryData)
                break

            case "favourites":
                setOption("Favourites")
                setData(libraryData)
                break

            case "watchLater":
                setOption("Watch Later")
                setData(libraryData)
                break

            case "radios":
                setOption("Radios")
                setData(fullData.filter(item => JSON.parse(radios).includes(item.id)))
                break

            case "shows":
                setOption("Shows")
                setData(libraryData.filter(item => item.type === "show"))
                break

            default:
                //setOption("All")
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