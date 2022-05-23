
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { homeData } from "../data/homeData"
import Chat from "../components/Chat"
import RadioContentBar from "../components/RadioContentBar"
import RadioInformation from "../components/RadioInformation"

const Radio = () => {
    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
                <Sidebar/>
                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url="https://images.rfm.sapo.pt/cafe_da_manha_2020_fb59699d93.png"/>

                    <div className="overflow-y-hidden flex h-full">
                        
                        <div className="pl-10 flex-1 w-2/3 overflow-y-auto scrollbar-hide">

                            <RadioInformation name={"Rádio Comercial"} live={"Que barulho é este?"}/>

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