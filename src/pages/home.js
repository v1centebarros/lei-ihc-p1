import { SidebarData } from "../components/SidebarData"
const Home = () => {
    return (
        <div className="flex">
            <div className={`w-60 h-screen bg-light-gray shadow`}>
                <ul>
                    {SidebarData.map((item) => {
                        return (
                            <li className="flex p-2 cursor-pointer items-start">
                                {item.icon}
                                <span>{item.name}</span>
                            </li>)
                    })}
                </ul>
            </div>
        </div>      
    )
} 
export default Home