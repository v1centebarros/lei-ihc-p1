
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import Chat from "../components/Chat"
import RadioContentBar from "../components/RadioContentBar"
import RadioInformation from "../components/RadioInformation"
import { fullData } from "../data/fullData"
import { useParams } from "react-router-dom"
const Radio = (props) => {
    let { id } = useParams();
    let radioData = fullData[id]
    const [followingRadios, setFollowingRadios] = props.radioData
    const [playing] = props.playingData
    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
            <Sidebar radioData={[followingRadios,setFollowingRadios]}/>

                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url={radioData.banner}/>

                    <div className="overflow-y-hidden flex h-full">
                        <div className="pl-10 flex-1 w-2/3 overflow-y-auto scrollbar-hide">

                            <RadioInformation radioData={[followingRadios,setFollowingRadios]} playingData={props.playingData} name={radioData.name} liveNow={radioData.liveNow} radioId={id}/>

                            <div className="flex flex-wrap w-full mb-8">
                                <RadioContentBar title={"Popular Shows"} content={radioData.programs} radioId={id}/>
                                <RadioContentBar title={"Hot Episodes"} content={radioData.programs} radioId={id}/>
                                {/* <RadioContentBar title={""} content={radioData.programs} radioId={id}/> */}
                            </div>
                        </div>

                        <div className="flex w-1/3 mb-2">
                            { id === JSON.parse(playing)[0] && JSON.parse(playing).length === 1 ?
                                <Chat messages={radioData.chat}/>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <Player playingData={props.playingData}/>

                </div>
            </div>
        </div>
    )
}

export default Radio