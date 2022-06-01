import {Link } from "react-router-dom"

const ContentBar = (props) => {
    return (
        < >
            <h1 className="my-8 text-6xl font-bold pb-2">{props.title}</h1>
                    <div className="flex flex-wrap gap-4 ml-0">
                        { props.content.map((item,index) => {
                            return (
                                <div key={index} className="w-64">
                                    <Link to={item.path}>
                                        <div className="rounded-lg shadow-xl max-w-sm bg-light-gray hover:bg-soft-red pb-2">
                                            <img className="rounded-t-lg p-4" src={item.image} alt=""/>
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

export default ContentBar