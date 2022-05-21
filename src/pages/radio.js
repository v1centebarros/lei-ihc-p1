
import Banner from "../components/Banner"
import SmallSidebar from "../components/SmallSidebar"
const Radio = () => {
    return (
        <div className="h-screen flex flex-col">
            <Banner></Banner>
            <div className="w-screen bg-light-gray h-screen overflow-y-hidden flex">
                <SmallSidebar></SmallSidebar>
                <div className="overflow-y-auto flex flex-col">                
                    
                </div>
            </div>


        </div>
    )
}

export default Radio