import React from 'react';
import "./sidebar.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import { LibraryBooks } from '@material-ui/icons';
import PersonAddAltIcon from '@material-ui/icons/PowerSettingsNew';
import Settings from '@material-ui/icons/Settings';
import Public from '@material-ui/icons/Public';
import PersonAdd from '@material-ui/icons/PersonAdd';
import { useSocket } from "../../context/SocketProvider";
// import { styled } from '@material-ui/core';
// import SwitchAccount from '@material-ui/icons/SwitchAccount';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PublicIcon from '@mui/icons-material/Public';


// import UnarchiveIcon from '@mui/icons-material/Unarchive';

const SIdebar = () => {

    const { logout, setLogout} = useSocket();

    let navigate = useNavigate();

    const [toggleProfileClick, setToggleProfileClick] = useState(false);
    const [toggleLaguageClick, setToggleLaguageClick] = useState(false);

    const logoutUser = async () => {
        await localStorage.removeItem('token');
        setLogout(!logout)
        navigate("/login")
    }

    const toggleProfile = () => {
        setToggleProfileClick(!toggleProfileClick);
    }

    const onLanguageToggle = () => {
        setToggleLaguageClick(!toggleLaguageClick);
    }

    const [selectInput, setSelectInput] = useState('');

    const handleInputChange = (e) => {
        setSelectInput(e.target.value)
    }

    useEffect(() => {
        console.log(selectInput);
    }, [selectInput])


    return (
        <>
            <div className="sidebar w-[100px]">
                <div className="logo mt-2 flex items-center justify-center flex-col">
                    <img className='' src="/images/logo.png"></img>

                    <div className="first-menu">
                        <ul className="">
                            <li className=" main-li cursor-pointer"><Link to="/"><ChatIcon className='sidebar-icons' /></Link></li>

                            <li className="text-[#570786]  main-li cursor-pointer">
                                <LibraryBooks />
                            </li>

                            <li className="text-[#570786]  main-li cursor-pointer">
                                <PersonAdd />
                            </li>

                            <li onClick={onLanguageToggle} className="text-[#570786]  main-li cursor-pointer relative">
                                <Public />

                                <div className={`${toggleLaguageClick ? 'block' : 'none'}  cursor-pointer profile-hover-sidebar shadow-sm `}>
                                    {/* <li className='cursor-pointer flex items-center justify-between my-2'>
                                        <div>
                                            English
                                        </div>
                                        <div>
                                            <Public style={{ fontSize: '17px' }} />
                                        </div>
                                    </li>
                                    <li className='cursor-pointer flex  items-center justify-between my-2'>
                                        <div>
                                            Hindi
                                        </div>
                                        <div>
                                            <Settings style={{ fontSize: '17px' }} />
                                        </div>
                                    </li>
                                    <li className='cursor-pointer flex  items-center justify-between my-2'>
                                        <div>
                                            Russian
                                        </div>
                                        <div>
                                            <Settings style={{ fontSize: '17px' }} />
                                        </div>
                                    </li>
                                    <li className='cursor-pointer flex  items-center justify-between my-2'>
                                        <div>
                                            Gujrati
                                        </div>
                                        <div>
                                            <Settings style={{ fontSize: '17px' }} />
                                        </div>
                                    </li> */}

                                    <select id="selectInput" onChange={handleInputChange} value={selectInput}>
                                        <option value="gn">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    English
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="gn">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    English
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="gn">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    English
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        
                                        
                                    </select>


                                </div>
                            </li>

                            <li className="text-[#570786]  main-li cursor-pointer">
                                <Link to="/profile">
                                    <Settings />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-menu">

                    <div className="second-menu mb-3">
                        <ul>

                            <li className="relative">
                                <img onClick={toggleProfile} className='rounded-full cursor-pointer' src="/images/avatar-13.jpg" alt="img..."></img>

                                <ul className={`${toggleProfileClick ? 'block' : 'none'}  cursor-pointer profile-hover-sidebar shadow-sm`}>
                                    <li className='cursor-pointer flex items-center justify-between my-2'>
                                        <div>
                                            Profile
                                        </div>
                                        <div>
                                            <Public style={{ fontSize: '17px' }} />
                                        </div>
                                    </li>
                                    <li className='cursor-pointer flex  items-center justify-between my-2'>
                                        <div>
                                            Settings
                                        </div>
                                        <div>
                                            <Settings style={{ fontSize: '17px' }} />
                                        </div>
                                    </li>
                                    <li onClick={logoutUser} className='flex items-center justify-between my-2 cursor-pointer'>
                                        <div className='text-[red]'>
                                            Logout
                                        </div>
                                        <div>
                                            <PersonAddAltIcon style={{ fontSize: '17px', color: "red" }} />
                                        </div>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SIdebar
