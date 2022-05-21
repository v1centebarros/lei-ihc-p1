import { Link } from "react-router-dom"
import { defaultOptions,userOptions } from "../data/SidebarData"
  
const Sidebar = () => {
    return (

        <div className="pt-3 w-60 min-h-screen shadow-md bg-light-gray px-1 relative">
            <ul className="relative">
                {defaultOptions.map((item,index) => {
                    return (
                        <Link key={index} to={item.path}>
                            <li className="flex items-center text-sm py-4 px-2 h-12 overflow-hidden text-soft-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-soft-red transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            {item.icon}
                                <span className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-soft-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 transition duration-300 ease-in-out">{item.name}</span>
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
                            <li className="flex items-center text-sm py-4 px-2 h-12 text-soft-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-soft-red transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <img src={item.imgPath} className="p-2 h-14 w-14 rounded-full" alt=""/>
                                <span className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-soft-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 transition duration-300 ease-in-out">{item.name}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>

            <div className="flex absolute left-0 bottom-0 mb-1 px-2 pb-2 items-center">
                <img src="https://robohash.org/teste" className="p-2 h-16 w-16 rounded-full" alt=""/>
                <span className="pl-2 text-xl">Bob Boss</span>
            </div>
        </div>
       
      );
}

export default Sidebar