import { Link } from "react-router-dom"
import { defaultOptions,userOptions } from "../data/SidebarData"
  
const Sidebar = () => {
    return (
        <div className={`relative w-60 h-screen bg-light-gray shadow-[0px_0px_6px_0px]`}>
            <ul>
                {defaultOptions.map((item,index) => {
                    return (
                        <Link key={index} to={item.path}>
                            <li className="flex p-2 cursor-pointer items-center hover:bg-soft-red">
                            {item.icon}
                                <span className="pl-2 text-xl">{item.name}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <hr className="mx-auto border-solid bg-black h-0.5 w-4/5 content-center"/>
            <ul>
                {userOptions.map((item,index) => {
                    return (
                        <Link key={index} to={item.path}>
                            <li className="flex p-2 cursor-pointer items-center hover:bg-soft-red ">
                            <img src={item.imgPath} className="p-2 h-16 w-16 rounded-full" alt=""/>
                                <span className="pl-2 text-xl">{item.name}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <div className="flex absolute left-0 bottom-0 mb-1 p-2 cursor-pointer items-center">
                <img src="https://robohash.org/teste" className="p-2 h-16 w-16 rounded-full" alt=""/>
                <span className="pl-2 text-xl">Bob Boss</span>
            </div>
        </div>
      );
}

export default Sidebar