import { useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
const ProgramInformation = (props) => {
    let { rid,pid } = useParams();

    const [programs, setPrograms] = useLocalStorage('programs', "[]");
    
    const updatePrograms = (radio_id,program_id) => {
        let newPrograms = JSON.parse(programs);
        if (newPrograms.some(item => (item.radio === radio_id && item.program ===program_id))) {
            newPrograms = newPrograms.filter(function(item) {
                return !(item.radio === radio_id && item.program ===program_id);
            })
        } else {
            newPrograms.push({radio:radio_id, program:program_id});
        }
        setPrograms(JSON.stringify(newPrograms));
    }
    return (

        <>
            <div className="flex flex-wrap w-full h-min items-end">
                <h1 className="mt-8 text-7xl font-bold pb-2">{props.title}</h1>                
                { JSON.parse(programs).some(item => (item.radio === rid && item.program === pid)) ? 
                        
                    <button onClick={() => updatePrograms(rid,pid)} type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 text-white bg-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Following
                    </button>
                    :
                    <button onClick={() => updatePrograms(rid,pid)} type="button" className="h-11 w-44 inline-block ml-3 mb-3 px-6 border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Follow
                    </button>
                }
            
            
            
            
            </div>

            <div className="flex flex-wrap w-6/12 h-min items-center">
                <p className="mb-4 text-2xl text-justify font-light text-[#858585]">{props.description}</p>
                { props.genres.map((category, index)=>{
                    return (
                        <div key={index} className="h-11 w-40 pt-2 mr-2 text-center border-2 border-soft-red text-soft-red font-bold text-lg leading-tight uppercase rounded-lg hover:bg-soft-red hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">{category}</div>
                    )
                })}
            </div>
        </>
    )
}

export default ProgramInformation