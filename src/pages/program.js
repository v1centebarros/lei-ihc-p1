
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar"
import Player from "../components/Player"
import Episodes from "../components/Episodes"
import { programData } from "../data/programData"
import ProgramInformation from "../components/ProgramInformation"
const Program = () => {
    return (
        <div className="h-screen flex flex-col overflow-y-hidden">
            <div className="flex">
                <Sidebar/>
                <div className="w-screen h-screen overflow-y-hidden flex flex-col">
                    <Banner img_url="https://gruporenascencamultimedia.com/wp-content/uploads/2021/12/extre-desagradavel_base-002.jpg"/>

                    <div className="overflow-y-hidden h-full flex">
                        
                        <div className="pl-10 flex-1 w-full overflow-y-auto scrollbar-hide">

                            <ProgramInformation title={programData.title} description={programData.description} categories={programData.categories}/>

                            <div className="flex flex-col mb-8">
                                <h1 className="mt-8 text-4xl font-bold w-full">Episodes</h1>
                                <Episodes />
                            </div>                            
                        </div>
                    </div>
                    <Player/>
                </div>
            </div>
        </div>
    )
}

export default Program