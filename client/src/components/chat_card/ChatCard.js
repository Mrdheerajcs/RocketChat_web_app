import React, { useEffect } from 'react'
import { useSocket } from "../../context/SocketProvider";
import { setConversation } from "../../api/Api"
import "./chat_card.css";

const ChatCard = ({ user }) => {

    const { setPerson, account, activeUser, person } = useSocket();


    const getPerson = async () => {

        if (!account || !person || !user) {
            console.error('Account or person is null or undefined');
            return;
        }
        
        setPerson(user)
        await setConversation({ senderId: account._id, receiverId: user._id })
    }

   
    // console.log(activeUser)
    // console.log(user)

    return (
        <>

            {/* #1 */}
            <div onClick={getPerson} className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                <div className="chat-card-left flex items-center rounded-md">
                    <div className="chat-profile relative">

                        {
                            user.profile ?
                                <img src={"./images/" + user.profile.profilePic} alt="" className="w-[45px] rounded-full object-cover h-[45px]" /> :
                                <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                    <h3 className="font-bold text-[var(--themeColor)] ">{user.name[0].toUpperCase()}</h3>
                                </div>
                        }

                        {
                            activeUser?.find(users => users._id === user._id) ?
                                <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#7ae27a] border-[2px] border-white rounded-full"></span> : <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                        }

                    </div>

                    <div className="chat-content mx-2">
                        <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                            {user.name}</div>
                        <p className="text-[12px]">It seems logical that the</p>
                    </div>
                </div>
                <div className="chat-card-right">
                    <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                    {/* <span className="rounded-full bg-blue-700 text-white fle items-center justify-center  text-[9px] py-[4px] px-[5px] w-[10px] h-[10px] ">11</span> */}
                </div>
            </div>
        </>
    )
}

export default ChatCard
