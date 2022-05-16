import { PlayIcon } from "@heroicons/react/solid"


const Player = () => {
    return(
        <div className="flex h-16 bg-very-dark-red inset-x-0">
            <PlayIcon className="text-soft-red relative -top-10 h-24 w-24 rounded-full" alt=""/>
            <svg xmlns="http://www.w3.org/2000/svg" className="my-auto text-soft-red h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
            <input type="range" class="my-auto pl-3 w-24 form-range appearance-none h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none " id="customRange1" />
            <span className="uppercase font-weight-bold text-white my-auto text-2xl pl-3">Playing: </span>
            <span class="ml-auto my-auto text-white font-weight-bold text-3xl pr-4">YourFM&trade;</span>
</div>)
}
export default Player