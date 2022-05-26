import Sidebar from "../components/Sidebar"
import ContentBar from "../components/Contentbar"
import { libraryData } from "../data/libraryData"
import Player from "../components/Player"
const Library = () => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="flex flex-wrap h-min items-start w-full mt-4 my-4">
                <div className="flex pl-20 mt-3 overflow-y-auto scrollbar-hide mb-auto">   
                        <div className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">All</div>
                        <div className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Favourites</div>
                        <div className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Watch Later</div>
                        <div className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Radios</div>
                    </div>
                </div>
                <div className="pl-20 overflow-y-auto scrollbar-hide mb-auto">

                    <ContentBar title={"All"} content={libraryData}/>
                </div>
                <Player></Player>
            </div>
        </div>
    )
}

export default Library