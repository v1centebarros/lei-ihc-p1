import { chatData } from "../data/chatData"
import { useState} from "react"
const Chat = () => {
    const [messages, setMessage] = useState(chatData)
    
    return ( 
        <div className="mx-auto w-10/12 bg-light-gray mt-4 rounded-3xl overflow-y-hidden">
            <h1 className="pt-3 pb-2 text-very-dark-red text-center text-3xl font-medium">Radio Chat</h1>
            <hr className="mx-auto border-t border-gray-400"/>
            <div className="overflow-y-auto h-5/6">
                <p className="text-gray-400 text-lg pt-2 pl-4">Welcome to the chat room!</p>
                {
                    messages.map((item,index) => {
                        return(
                            <p className="pl-3 pb-1" key={index}>
                                <span className="text-xl text-very-dark-red font-bold">{item.name}: </span>
                                <span className="text-very-dark-red text-lg font-light">{item.message}</span>
                            </p> 
                        )
                    } )
                }
            </div>

            <div className="items-center bg-neutral-100 ">
                <input 
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            if (e.target.value.length > 0) {
                                setMessage([...messages,{
                                    name: "Bob Boss",
                                    message: e.target.value,
                                }]);
                                e.target.value = ""
                            }
                        }
                    }}
                    type="text" className="px-3 block w-full italic bg-transparent text-very-dark-red text-xl rounded " placeholder="Write your message here"/>
            </div>
        </div>
    )
}
export default Chat