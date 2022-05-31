import { useState } from "react"
import { Link} from "react-router-dom"
import { Search as SearchIcon }  from "@mui/icons-material" 
import RecentBar from "../components/Recentbar"
import ContentBar from "../components/Contentbar"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { fullData } from "../data/fullData"
import { genreData } from "../data/genreData"
const Search = () => {

    const [isSearching, setIsSearching] = useState(false)
    const [results, setResults] = useState("")

    const searchFunction = (e) => {
        if (e.target.value.length < 1 || e.target.value.match(/^\s+$/)) {
            setIsSearching(false)
            setResults("")
        } else {
            setIsSearching(true)
            let searchResult = []
            fullData.forEach(radio => {               
                if (radio.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                    searchResult.push({name: radio.name, path: `/radio/${radio.id}`, image:radio.icon})
                }

                radio.programs.forEach(program => {
                    if (program.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                        searchResult.push({name: program.name, path: `/radio/${radio.id}/program/${program.id}`,image:program.icon})
                    }

                    program.episodes.forEach(episode => {
                        if (episode.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                            searchResult.push({name: episode.name, path: `/radio/${radio.id}/program/${program.id}`,image:program.icon})
                        }
                    })
                })
            })
            setResults(searchResult)
        }
    }
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="flex w-1/2 ml-16 mt-8 items-center h-12 rounded">
                    <input onInput={(e) => searchFunction(e)} type="text" className="bg-neutral-200 h-12 px-3 w-96 italic bg-transparent text-very-dark-red text-xl rounded" placeholder=""/>
                    <SearchIcon sx={{ fontSize: 45 }} />
                </div>
                <div className="h-screen overflow-y-auto scrollbar-hide">
                     { isSearching ?
                        <div className="pl-20 mb-auto">
                            <ContentBar title={"Search Results"} content={results}/>
                        </div>
                     :
                        < >
                            <div className="pl-20 mb-auto">
                                {/* <RecentBar title={"Recently Searched"} content={homeData}/> */}
                            </div>
                        
                            <h1 className="pl-20 my-8 text-6xl font-bold pb-2">Top Genres</h1>
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
                        </>
                    }
                </div>
                <Player></Player>
            </div>
        </div>
    )
}

export default Search