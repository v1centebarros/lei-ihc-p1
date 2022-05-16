import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { homeData } from "../data/homeData"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="flex h-screen">
            <Sidebar></Sidebar>
            <div className="h-screen w-screen overflow-y-hidden flex flex-col">
                <div className="mx-auto mt-3 overflow-y-auto scrollbar-hide mb-auto">
                    <h1 className="text-6xl font-bold pb-2">For You</h1>
                    <div className="flex flex-wrap gap-4 justify-center">
                        { homeData.map((item,index) => {
                            return (
                                <div key={index} className="w-64">
                                    <Link to="/program">
                                        <div className="rounded-lg shadow-xl max-w-sm bg-light-gray hover:bg-soft-red pb-2">
                                            <img className="rounded-t-lg p-4" src={item.image} alt=""/>
                                            <h5 className="text-very-dark-red text-center text-lg font-medium mb-2">{item.name}</h5>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }) }
                    </div>

                </div>
                <Player></Player>
            </div>
        </div>
    )
}
export default Home