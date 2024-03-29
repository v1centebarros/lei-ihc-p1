import {Link} from "react-router-dom"
const RadioContentBar = (props) =>{
    return (
        <>
            <h1 className="mt-8 text-4xl font-bold pb-1 w-full">{props.title}</h1>
            <div className="flex flex-wrap gap-4">
                { props.content.map((item,index) => {
                    return (
                        <div key={index} className="w-48">
                            <Link to={"/radio/"+props.radioId+"/program/"+index}>
                                <div className="rounded-lg shadow-xl max-w-sm bg-light-gray hover:bg-soft-red pb-2">
                                    <img className="rounded-t-lg p-4" src={item.icon} alt=""/>
                                    <h5 className="text-very-dark-red text-center text-lg font-medium mb-2 line-clamp-1">{item.name}</h5>
                                </div>
                            </Link>
                        </div>
                    )
                }) }
            </div>
        </>
    )
}

export default RadioContentBar