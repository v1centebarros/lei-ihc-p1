import Sidebar from "../components/Sidebar"

const Library = () => {
    return (
        <div className="flex h-screen">
            <Sidebar></Sidebar>
            <div className="bg-lime-300 h-screen w-screen overflow-y-hidden flex flex-col">
            </div>
        </div>
    )
}

export default Library