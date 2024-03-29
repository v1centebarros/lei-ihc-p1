import { defaultOptions } from "../data/SidebarData"
import { fullData } from "../data/fullData"
import {Link} from "react-router-dom"
import { Tooltip } from "@material-tailwind/react";
// import {Add} from '@mui/icons-material';
const Sidebar = (props) => {
    const [followingRadios] = props.radioData

    return (
        <div className="pt-3 w-20 h-full shadow-md bg-light-gray relative">
                    <ul className="relative">
                        {defaultOptions.map((item,index) => {
                        return (
                            <Link key={index} to={item.path}>  
                                <Tooltip content={item.name} placement="right" className="text-lg">

                                    <li className="flex items-center py-4 px-2 text-sm h-12 overflow-hidden whitespace-nowrap rounded hover:text-gray-900 hover:bg-soft-red transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                        {item.icon}
                                    </li>
                                </Tooltip>
                            </Link>
                        )
                        })}
                    </ul>

                    <hr className="mx-auto border-solid bg-soft-black h-0.5 w-4/5 content-center mb-2 mt-2"/>

                    <ul className="relative">
                        {JSON.parse(followingRadios).map((item,index) => {
                        return (
                            <Link key={index} to={"/radio/"+item}>
                                <Tooltip content={fullData[item].name} placement="right" className="text-lg">
                                    <li className="flex px-2 items-center text-sm whitespace-nowrap rounded hover:text-gray-900 hover:bg-soft-red transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                        <img src={fullData[item].icon}  className="p-2 h-14 w-14 rounded-full" alt=""/>
                                    </li>
                                </Tooltip>
                            </Link>
                        )
                        })}
                        {/* <li className="flex px-2 items-center text-sm whitespace-nowrap rounded hover:text-gray-900 hover:bg-soft-red transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <Add className="ml-2 rounded-full text-very-dark-red" sx={{ fontSize: "2.8rem" }}/>
                        </li> */}
                    </ul>
                    <div className="flex absolute left-0 bottom-0 mb-1 pb-2 items-center">
                        <img src="https://robohash.org/YourFM" className="p-2 h-16 w-16 rounded-full" alt=""/>
                    </div>
                </div>
    )
}

export default Sidebar