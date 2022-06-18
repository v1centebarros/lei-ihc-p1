import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import ContentBar from "../components/Contentbar"
import { homeData } from "../data/homeData"
const Home = (props) => {
    const [followingRadios, setFollowingRadios] = props.radioData
    return (
        <div className="flex h-screen">
            <Sidebar radioData={[followingRadios,setFollowingRadios]}></Sidebar>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="mx-auto mt-3 overflow-y-auto scrollbar-hide mb-auto pb-4">
                    <ContentBar title={homeData[0].title} content={homeData[0].content}/>
                    <ContentBar title={homeData[1].title} content={homeData[1].content}/>
                    <ContentBar title={homeData[2].title} content={homeData[2].content}/>
                </div>
                <Player playingData={props.playingData}/>


            </div>
        </div>
    )
}
export default Home