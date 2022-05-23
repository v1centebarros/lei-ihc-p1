const ProgramInformation = (props) => {
    return (
        <>
            <div className="flex flex-wrap w-full h-min items-end">
                <h1 className="mt-8 text-7xl font-bold pb-2">{props.title}</h1>
                {/* É preciso ver se a pessoa está a seguir */}
                <button type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Following</button>
            </div>

            <div className="flex flex-wrap w-6/12 h-min items-center">
                <p className="mb-4 text-2xl text-justify font-light text-[#858585]">{props.description}</p>
                { props.categories.map((category, index)=>{
                    return (
                        <div className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">{category}</div>
                    )
                })}
            </div>
        </>
    )
}

export default ProgramInformation