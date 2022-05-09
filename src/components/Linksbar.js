import { Link, Outlet } from "react-router-dom"
function Linksbar () {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/search">Search</Link>
                </li>

                <li>
                    <Link to="/library">Library</Link>
                </li>
        
            </ul>

            < Outlet />
        </ >
    )
} 
export default Linksbar