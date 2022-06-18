
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import Episodes from "../components/Episodes"
import ProgramInformation from "../components/ProgramInformation"
import { fullData } from "../data/fullData"
import { useParams } from "react-router-dom"
const Program = (props) => {
    let { rid,pid } = useParams();
    let programData = fullData[rid].programs[pid]
    
    const [followingRadios, setFollowingRadios] = props.radioData
    

    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
            <Sidebar radioData={[followingRadios,setFollowingRadios]}/>

                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url={programData.banner}/>

                    <div className="overflow-y-hidden h-full flex">
                        
                        <div className="pl-10 flex-1 w-full overflow-y-auto scrollbar-hide">

                            <ProgramInformation title={programData.name} description={programData.description} genres={programData.genres}/>

                            <div className="flex flex-col mb-8">
                                <h1 className="mt-8 text-4xl font-bold w-full">Episodes</h1>
                                <Episodes />
                            </div>                            
                        </div>
                    </div>
                    <Player playingData={props.playingData}/>
                </div>
            </div>
        </div>
    )
}

export default Program