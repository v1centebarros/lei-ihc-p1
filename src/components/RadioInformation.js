const RadioInformation = (props) => {
    return(
        <>
            <div className="flex flex-wrap w-full h-min items-end">
                <h1 className="mt-8 text-7xl font-bold pb-2">{props.name}</h1>
                {/* Ver se está following */}
                <button type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</button>
            </div>

            <div className="flex flex-wrap w-full h-min items-center">
                <div className="rounded-full bg-red-800 h-5 w-5"></div>
                <span className="pl-2 font-bold text-xl">Live now:</span>
                <span className="pl-2 font-light text-xl">{props.live}</span>
            </div>
        </>
    )
}

export default RadioInformation