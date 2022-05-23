
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { homeData } from "../data/homeData"
import Chat from "../components/Chat"
import RadioContentBar from "../components/RadioContentBar"

const Radio = () => {
    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
                <Sidebar/>
                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url="https://images.rfm.sapo.pt/cafe_da_manha_2020_fb59699d93.png"/>

                    <div className="overflow-y-hidden flex h-full">
                        
                        <div className="pl-10 flex-1 w-2/3 overflow-y-auto scrollbar-hide">

                            <div className="flex flex-wrap w-full h-min items-end">
                                <h1 className="mt-8 text-7xl font-bold pb-2">Radio Comercial</h1>
                                <button type="button" className="h-8 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-xs leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</button>
                            </div>

                            <div className="flex flex-wrap w-full h-min items-center">
                                <div className="rounded-full bg-red-800 h-5 w-5"></div>
                                <span className="pl-2 font-bold text-xl">Live now:</span>
                                <span className="pl-2 font-light text-xl">Café da manhã</span>
                            </div>

                            <div className="flex flex-wrap w-full mb-8">
                                
                                <RadioContentBar title={"Popular Shows 1"} content={homeData} />
                                <RadioContentBar title={"Popular Shows 2"} content={homeData} />
                                <RadioContentBar title={"Popular Shows 3"} content={homeData} />
                            </div>
                        </div>

                        <div className="flex w-1/3 mb-2">
                            <Chat/>
                        </div>
                    </div>
                    <Player/>
                </div>
            </div>
        </div>
    )
}

export default Radio