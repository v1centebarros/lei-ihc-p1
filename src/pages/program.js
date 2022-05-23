
import Banner from "../components/Banner"
import SmallSidebar from "../components/SmallSidebar"
import Player from "../components/Player"
import {PlayArrow, Favorite, AccessTime } from '@mui/icons-material';
import { episodesData } from "../data/episodesData"

const Program = () => {
    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
                <SmallSidebar></SmallSidebar>
                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url="https://gruporenascencamultimedia.com/wp-content/uploads/2021/12/extre-desagradavel_base-002.jpg"/>

                    <div className="overflow-y-hidden h-full flex">
                        
                        <div className="pl-10 flex-1 w-full overflow-y-auto scrollbar-hide">

                            <div className="flex flex-wrap w-full h-min items-end">
                                <h1 className="mt-8 text-7xl font-bold pb-2">Extremamente Desagradável</h1>
                                <button type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</button>
                            </div>

                            <div className="flex flex-wrap w-6/12 h-min items-center">
                                <p className="mb-4 text-2xl text-justify font-light text-[#858585]">A rubrica de humor de “As Três da Manhã” está a cargo de Joana Marques, que se esforça sempre por ser “extremamente desagradável”, agora na Renascença. De segunda a sexta, às 8h15 com repetição às 16h20, 20h30 e às 6h45.</p>
                                <div className="h-11 w-40 pt-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Comedy</div>
                                <div className="h-11 w-40 pt-2 text-center ml-3 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Comedy</div>

                            </div>

                            <div className="flex flex-col mb-8">
                                <h1 className="mt-8 text-4xl font-bold w-full">Episodes</h1>

                            { episodesData.map((item, index) => {
                                return (
                                    <div key={index} className="flex h-56 w-1/2 mt-2">
                                        <img src={item.image_url} className="p-1 max-w-sm" alt="..."/>
                                        <div className="pl-4">
                                            <p className="text-lg text-justify font-light text-[#858585]">{item.date}</p>
                                            <p className="text-2xl pb-2 text-justify text-very-dark-red">{item.title}</p>
                                            <p className="text-xl text-justify font-light text-[#858585]">{item.description}</p>
                                            <div className="flex flex-row flex-wrap align-bottom pt-10">
                                                <PlayArrow className="border-2 text-soft-red border-soft-red relative rounded-full " sx={{ fontSize: 50 }}/>
                                                <p className="pl-2 text-2xl mt-auto text-justify text-soft-red">{item.time} min.</p>
                                                <div className="ml-auto">
                                                    <AccessTime className="text-soft-red relative rounded-full " sx={{ fontSize: 44 }}/>
                                                    <Favorite className="text-soft-red  relative rounded-full " sx={{ fontSize: 44 }}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}


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