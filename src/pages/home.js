import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { homeData } from "../data/homeData"
import ContentBar from "../components/Contentbar"
const Home = () => {
    return (
        <div className="flex h-screen">
            <Sidebar></Sidebar>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="mx-auto mt-3 overflow-y-auto scrollbar-hide mb-auto">
                    <ContentBar title={"For You"} content={homeData}/>
                    <ContentBar title={"Your Radios"} content={homeData}/>
                    <ContentBar title={"Keep Watching"} content={homeData}/>
                </div>
                <Player></Player>
            </div>
        </div>
    )
}
export default Home