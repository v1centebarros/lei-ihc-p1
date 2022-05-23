import RecentBar from "../components/Recentbar"
import Sidebar from "../components/Sidebar"
import { homeData } from "../data/homeData"
import { Link} from "react-router-dom"
import { genreData } from "../data/genreData"
import { Search as SearchIcon }  from "@mui/icons-material" 
import Player from "../components/Player"


const Search = () => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="flex w-1/2 ml-16 mt-8 items-center h-12 rounded">
                    <input type="text" className="bg-neutral-200 h-12 px-3 w-96 italic bg-transparent text-very-dark-red text-xl rounded" placeholder=""/>
                    <SearchIcon sx={{ fontSize: 45 }} />
                </div>
                <div className="h-screen overflow-y-auto scrollbar-hide">
                    <div className="pl-20 mb-auto">
                        <RecentBar title={"Recently Searched"} content={homeData}/>
                    </div>
                
                    <h1 className="ml-16 my-8 text-6xl font-bold pb-2">Top Genres</h1>
                    <div className="flex flex-wrap gap-4 justify-center">

                        { genreData.map((item,index) => {
                            return (
                                <Link key={index} to="/program">
                                    <div  className="relative w-96 h-72 rounded-lg" style={{ backgroundColor:`${item.color}`}}>
                                        <span className="pl-4 font-extrabold text-4xl text-white">{item.name}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <Player></Player>
            </div>
        </div>
    )
}

export default Search