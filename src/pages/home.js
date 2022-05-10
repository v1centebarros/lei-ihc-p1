import Sidebar from "../components/Sidebar"
const Home = () => {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="h-screen flex-1 mt-3">
                <div class=" mx-auto lg:w-1/2 md:w-3/4 sm:w-56 container grid grid-flow-row-dense gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                            </a>
                            <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>
                    <div className="bg-yellow-500 square">02</div>
                    <div className="bg-yellow-500 square">03</div>
                    <div className="bg-yellow-500 square">04</div>
                    <div className="bg-yellow-500 square">05</div>
                    <div className="bg-yellow-500 square">06</div>
                    <div className="bg-yellow-500 square">07</div>
                </div>
            </div>
        </div>
    )
} 
export default Home