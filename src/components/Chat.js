import { chatData } from "../data/chatData"
const Chat = () => {
    return ( 
        <div className="mx-auto w-10/12 bg-light-gray mt-4 rounded-3xl overflow-y-hidden">
                                <h1 className="pt-3 pb-2 text-very-dark-red text-center text-3xl font-medium">Radio Chat</h1>
                                <hr className="mx-auto border-t border-gray-400"/>
                                <div className="overflow-y-auto h-5/6">
                                    <p className="text-gray-400 text-lg pt-2 pl-4">Welcome to the chat room!</p>
                                    {
                                        chatData.map((item,index) => {
                                            return(
                                                <p className="pl-3 pb-1" key={index}>
                                                    <span className="text-xl text-very-dark-red font-bold">{item.name}: </span>
                                                    <span className="text-very-dark-red text-lg font-light">{item.message}</span>
                                                </p> 
                                            )
                                        } )
                                    }
                                </div>

                                <div className="mx-auto items-center rounded-3xl pb-5">
                                    <input type="text" className="pb-4 mb-5 px-3 h-16 block w-full italic bg-transparent text-gray-700 text-xl rounded " placeholder="Write your message here"/>
                                </div>
                            </div>
    )
}
export default Chat