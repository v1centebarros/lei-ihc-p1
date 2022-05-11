import Sidebar from "../components/Sidebar"
import { homeData } from "../data/homeData"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="h-screen flex-1 mt-3 container mx-auto max-w-7xl">
                <div className="grid gap-1 grid-cols-1 lg:grid-cols-3 p-1 auto-rows-min gap-y-4 overflow-y-auto">
                    <h1 className="text-6xl font-bold lg:col-span-3 md:text-5xl:text-6xl pb-2">For You</h1>
                    { homeData.map((item,index) => {
                        return(
                            <div className="w-64 flex justify-center">
                                <Link to="/program">
                                    <div className="rounded-lg shadow-xl max-w-sm bg-light-gray pb-2">
                                        <img className="hover:saturate-50 rounded-t-lg p-4" src={item.image} alt=""/>
                                        <h5 className="text-very-dark-red text-center text-lg font-medium mb-2">{item.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
} 
export default Home