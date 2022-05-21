
import Banner from "../components/Banner"
import SmallSidebar from "../components/SmallSidebar"
import Player from "../components/Player"
import { homeData } from "../data/homeData"
import {Link} from "react-router-dom"
const Radio = () => {
    return (
        <div className="h-screen flex flex-col">
            <Banner></Banner>
            <div className="w-screen h-screen overflow-y-hidden flex">
                <SmallSidebar></SmallSidebar>
                <div className="overflow-y-hidden flex w-full">

                    <div className="pl-3 flex-1 w-3/5 overflow-y-auto scrollbar-hide">

                        <div className="flex flex-wrap w-full h-min items-end">
                            <h1 className="mt-8 text-6xl font-bold pb-2">Radio Comercial</h1>
                            <button type="button" className="h-8 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-xs leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</button>
                        </div>

                        <div className="flex flex-wrap w-full h-min items-center">
                            <div className="rounded-full bg-red-800 h-5 w-5"></div>
                            <span className="pl-2 font-bold text-xl">Live now:</span>
                            <span className="pl-2 font-light text-xl">Café da manhã</span>
                        </div>

                        <div className="flex flex-wrap w-full h-full">
                            <h1 className="mt-8 text-4xl font-bold pb-1 w-full">Popular Shows</h1>
                            <div className="flex flex-wrap gap-4">
                                { homeData.map((item,index) => {
                                    return (
                                        <div key={index} className="w-80">
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

                        
                    </div>

                    <div className="flex w-2/5 bg-lime-500">
                        aa
                    </div>

                </div>
                { /*<Player></Player>*/ }
            </div>


        </div>
    )
}

export default Radio