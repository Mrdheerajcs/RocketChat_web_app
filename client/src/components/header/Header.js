import React from 'react';
import "./header.css";
import { MoreHoriz, Person, Search } from '@material-ui/icons';
import { useSocket } from "../../context/SocketProvider";

const Header = ({ person }) => {

    const { activeUser } = useSocket();
    // console.log(activeUser)
    // console.log(activeUser.find(user => user.socketId === person._id))
    // console.log(activeUser.find(user => user._id === person._id))

    return (
        <>
            <div className="header-section border-[1px] shadow-sm p-3 m-3 flex justify-between  rounded-md">
                <div className='header-left flex items-center justify-center'>

                    {
                         person.profile ?
                            <img src={"./images/" + person.profile.profilePic} alt="" className="w-[45px] h-[45px] rounded-full object-cover" /> :
                            <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                <h3 className="font-bold text-[var(--themeColor)] ">{person.name[0].toUpperCase()}</h3>
                            </div>
                    }


                    {/* <img src="./images/avatar-13.jpg" alt="" className="w-[45px] rounded-full" /> */}

                    <div className="chat-content mx-2">
                        <div className="  text-[15px] text-[--themeColor] font-bold">
                            {person.name}</div>
                        <p className="text-[12px] text-left">{activeUser?.find(user => user._id === person._id) ? <span className="text-[green] font-semibold">online</span> : <span className=" font-semibold">offline</span>}</p>
                    </div>
                </div>
                <div className='header-right flex items-center justify-center'>
                    <ul className="flex items-center justify-center">
                        <li className='mx-1 bg-[#f4f4fa] rounded-full  p-[10px] flex items-center justify-center'>
                            <Search className=' text-[#c8c8d8]  text-[14px]' style={{ fontSize: '17px' }} />
                        </li>
                        <li className='mx-1 bg-[#f4f4fa] rounded-full  p-[10px] flex items-center justify-center'>
                            <Person className=' text-[#c8c8d8]  text-[14px]' style={{ fontSize: '17px' }} />
                        </li>

                        <li className='mx-1 bg-[#f4f4fa] rounded-full  p-[10px] flex items-center justify-center'>


                            <MoreHoriz className=' text-[#c8c8d8]  text-[14px]' style={{ fontSize: '17px' }} />


                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
