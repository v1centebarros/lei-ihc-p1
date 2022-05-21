
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { homeData } from "../data/homeData"
import { chatData } from "../data/chatData"
import {Link} from "react-router-dom"
const Radio = () => {
    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
                <Sidebar></Sidebar>
                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url="https://images.rfm.sapo.pt/cafe_da_manha_2020_fb59699d93.png"/>

                    <div className="overflow-y-hidden flex h-full">
                        
                        <div className="pl-10 flex-1 w-2/3 overflow-y-auto scrollbar-hide">

                            <div className="flex flex-wrap w-full h-min items-end">
                                <h1 className="mt-8 text-6xl font-bold pb-2">Radio Comercial</h1>
                                <button type="button" className="h-8 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-xs leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</button>
                            </div>

                            <div className="flex flex-wrap w-full h-min items-center">
                                <div className="rounded-full bg-red-800 h-5 w-5"></div>
                                <span className="pl-2 font-bold text-xl">Live now:</span>
                                <span className="pl-2 font-light text-xl">Café da manhã</span>
                            </div>

                            <div className="flex flex-wrap w-full mb-8">
                                <h1 className="mt-8 text-4xl font-bold pb-1 w-full">Popular Shows</h1>
                                <div className="flex flex-wrap gap-4">
                                    { homeData.map((item,index) => {
                                        return (
                                            <div key={index} className="w-48">
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
                                
                                
                                <h1 className="mt-8 text-4xl font-bold pb-1 w-full">Popular Shows</h1>
                                <div className="flex flex-wrap gap-4">
                                    { homeData.map((item,index) => {
                                        return (
                                            <div key={index} className="w-48">
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

                                <h1 className="mt-8 text-4xl font-bold pb-1 w-full">Popular Shows</h1>
                                <div className="flex flex-wrap gap-4">
                                    { homeData.map((item,index) => {
                                        return (
                                            <div key={index} className="w-48">
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

                        <div className="flex w-1/3 mb-2">
                            <div className="mx-auto w-10/12 bg-light-gray mt-4 rounded-3xl overflow-y-hidden">
                                <h1 className="pt-3 pb-2 text-very-dark-red text-center text-4xl font-medium">Radio Chat</h1>
                                <hr className="mx-auto border-t border-gray-400"/>
                                <div className="overflow-y-auto h-5/6">
                                    <p className="text-gray-400 text-lg pt-2 pl-4">Welcome to the chat room!</p>
                                    {
                                        chatData.map((item,index) => {
                                            return(
                                                <p className="pl-3 pb-1" key={index}>
                                                    <span className="text-xl text-very-dark-red font-bold">{item.name}: </span>
                                                    <span className="text-very-dark-red text-lg font-light">{item.message}</span>
                                                </p> 
                                            )
                                        } )
                                    }
                                </div>

                                <div className="mx-auto items-center rounded-3xl h-full">
                                    <input type="text" className="px-3 h-14 block w-full italic bg-transparent text-gray-700 text-xl rounded " placeholder="Write your message here"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Player></Player>
                </div>
            </div>
        </div>
    )
}

export default Radio