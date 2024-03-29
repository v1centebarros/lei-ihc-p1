import { useState } from "react"
import { Search as SearchIcon }  from "@mui/icons-material" 
import RecentBar from "../components/Recentbar"
import ContentBar from "../components/Contentbar"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { fullData } from "../data/fullData"
import { genreData } from "../data/genreData"
import { homeData } from "../data/homeData"
const Search = (props) => {
    const [followingRadios, setFollowingRadios] = props.radioData

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
            <Sidebar radioData={[followingRadios,setFollowingRadios]}/>

            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="flex w-1/2 pl-20 mt-8 items-center h-12 rounded">
                    <input onInput={(e) => searchFunction(e)} type="text" className="bg-light-gray h-12 px-3 w-96 italic bg-transparent text-very-dark-red text-xl rounded" placeholder=""/>
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
                                <RecentBar title={"Recently Searched"} content={homeData[1].content}/>
                            </div>
                        
                            <h1 className="pl-20 my-8 text-6xl font-bold pb-2">Top Genres</h1>
                            <div className="flex flex-wrap gap-4">

                                <div className="flex pl-20 mt-3 overflow-y-auto scrollbar-hide mb-auto">   
                                    { genreData.map((item,index) => {
                                        return (
                                            <div key={index} className="h-11 w-40 pt-2 mr-2 text-center border-2 text-white font-bold text-lg leading-tight uppercase rounded-lg" style={{ backgroundColor:`${item.color}`,borderColor:`${item.color}`}}>
                                                {item.name}
                                            </div>
                                            
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    }
                </div>
                <Player playingData={props.playingData}/>

            </div>
        </div>
    )
}

export default Search