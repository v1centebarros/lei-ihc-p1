import { userOptions, defaultOptions } from "../data/SidebarData"
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="pt-3 w-20 h-full shadow-md bg-light-gray relative">
                    <ul className="relative">
                        {defaultOptions.map((item,index) => {
                        return (
                            <Link key={index} to={item.path}>
                                <li className="flex items-center py-4 px-2 text-sm h-12 overflow-hidden whitespace-nowrap rounded hover:text-gray-900 hover:bg-soft-red transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    {item.icon}
                                </li>
                            </Link>
                        )
                        })}
                    </ul>

                    <hr className="mx-auto border-solid bg-soft-black h-0.5 w-4/5 content-center mb-2 mt-2"/>

                    <ul className="relative">
                        {userOptions.map((item,index) => {
                        return (
                            <Link key={index} to={item.path}>
                                <li className="flex px-2 items-center text-sm whitespace-nowrap rounded hover:text-gray-900 hover:bg-soft-red transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <img src={item.imgPath} className="p-2 h-14 w-14 rounded-full" alt=""/>
                                </li>
                            </Link>
                        )
                        })}
                    </ul>
                    <div className="flex absolute left-0 bottom-0 mb-1 pb-2 items-center">
                        <img src="https://robohash.org/teste" className="p-2 h-16 w-16 rounded-full" alt=""/>
                    </div>
                </div>
    )
}

export default Sidebar