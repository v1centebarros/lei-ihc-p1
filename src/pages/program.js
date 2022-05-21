
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import { homeData } from "../data/homeData"
import {Link} from "react-router-dom"
const Program = () => {
    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
                <Sidebar></Sidebar>
                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url="https://gruporenascencamultimedia.com/wp-content/uploads/2021/12/extre-desagradavel_base-002.jpg"/>

                    <div className="overflow-y-hidden h-full flex">
                        
                        <div className="pl-10 flex-1 w-full overflow-y-auto scrollbar-hide">

                            <div className="flex flex-wrap w-full h-min items-end">
                                <h1 className="mt-8 text-7xl font-bold pb-2">Extremamente Desagradável</h1>
                                <button type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</button>
                            </div>

                            <div className="flex flex-wrap w-5/12 h-min items-center">
                                <p className="text-2xl text-justify font-light text-[#858585]">A rubrica de humor de “As Três da Manhã” está a cargo de Joana Marques, que se esforça sempre por ser “extremamente desagradável”, agora na Renascença. De segunda a sexta, às 8h15 com repetição às 16h20, 20h30 e às 6h45.</p>
                                <div className="h-11 w-44 text-center align-middle ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</div>

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
                            </div>

                            
                        </div>
                    </div>
                    <Player></Player>
                </div>
            </div>
        </div>
    )
}

export default Program