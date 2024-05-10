import React from 'react';
import "./sidebar.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
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

const SIdebar = ({ modalActiveFunction }) => {

    const { logout, setLogout, profile, setMyLanguage } = useSocket();

    let navigate = useNavigate();

    const [toggleProfileClick, setToggleProfileClick] = useState(false);
    const [toggleLaguageClick, setToggleLaguageClick] = useState(false);

    const profileRef = useRef();

    // After outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setToggleProfileClick(false);
                // setToggleLaguageClick(false)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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

    // On change event for input language fields 
    const handleInputChange = (e) => {
        setSelectInput(e.target.value)
    }

    const updateLanguageDetails = async () => {
        const formData = new FormData();
        formData.append('language', selectInput);

        const response = await fetch('http://localhost:5000/api/profile/updateprofile', {
            method: 'PUT',
            body: formData,
            headers: {
                'auth-token': localStorage.getItem('token'),
            }
        });
        const json = await response.json();
        // console.log(json);
    }

    useEffect(() => {
        // console.log(selectInput);
        setMyLanguage(selectInput)
        // Api for Add language in database  With profile by defalut set English laguage
        updateLanguageDetails()

    }, [selectInput]) // After change input in selectInput the run that fucntion.. 

    return (
        <>
            <div className="sidebar w-[100px]">
                <div className="logo mt-2 flex items-center justify-center flex-col">
                <a href="/"><img className='' src="/images/logo.png" alt='logo'></img></a>
                    {/* <Link to="/">
                        <img className='' src="/images/logo.png"></img>
                    </Link> */}


                    <div className="first-menu">
                        <ul className="">
                            <li className="text-[#570786]  main-li cursor-pointer relative "><Link to="/">
                                <ChatIcon />
                                <span className='tooltiptext'>Chat</span>
                            </Link></li>


                            <li className="text-[#570786]  main-li cursor-pointer relative "><Link to="/status">
                                <LibraryBooks />
                                <span className='tooltiptext'>Status</span>
                            </Link></li>



                            <li className="text-[#570786]  main-li cursor-pointer relative " onClick={modalActiveFunction}>
                                <PersonAdd />
                                <span className=' after:ml-[-5px] tooltiptext'>AddPerson</span>
                            </li>

                            <li onClick={onLanguageToggle} className="text-[#570786]  main-li cursor-pointer relative"  >
                                <Public />
                                {/* <span className='tooltiptext'>Languages</span> */}

                                <div className={`${toggleLaguageClick ? 'block' : 'none'}  cursor-pointer profile-hover-sidebar shadow-sm left-[52px] top-[0px] absolute bg-white`}>


                                    <select id="selectInput" onChange={handleInputChange} value={selectInput}>
                                        <option value="en">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Select Languages
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="gu">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Gujrati
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="fr">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Franch
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ru">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Russian
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="hi">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Hindi
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ja">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Japanese
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="mr">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Marathi
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ta">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Tamil
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ur">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Urdu
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="en">
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

                            <li className="text-[#570786]  main-li cursor-pointer relative">
                                <Link to="/profile">
                                    <Settings />
                                    <span className='absolute top-[9px] left-[53px] tooltiptext'>Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-menu">

                    <div className="second-menu mb-3">
                        <ul>

                            <li className="relative" ref={profileRef}>

                                {!profile ?
                                    <img onClick={toggleProfile} className='rounded-full cursor-pointer' src="/images/avatar-13.jpg" alt="img..."></img>
                                    :
                                    <img onClick={toggleProfile} className='rounded-full cursor-pointer h-[45px] object-cover w-[45px]' src={"./images/" + profile.profilePic} alt="img..."></img>
                                }

                                {/* <img onClick={toggleProfile} className='rounded-full cursor-pointer' src="/images/avatar-13.jpg" alt="img..."></img> */}

                                <ul className={`${toggleProfileClick ? 'block' : 'none'}  cursor-pointer profile-hover-sidebar shadow-sm`}>
                                    <Link className='cursor-pointer flex items-center justify-between hover:no-underline hover:text-[black]' to="/profile">
                                        <li className='cursor-pointer flex items-center justify-between my-2'>
                                            <div>
                                                Profile
                                            </div>
                                            <div>
                                                <Public className='mx-5' style={{ fontSize: '17px' }} />
                                            </div>
                                        </li>
                                    </Link>
                                    <Link className='cursor-pointer flex items-center justify-between hover:no-underline hover:text-[black]' to="/profile">
                                        <li className='cursor-pointer flex items-center justify-between my-2'>
                                            <div>
                                                Setting
                                            </div>
                                            <div className="">
                                                <Settings className='ml-[42px]' style={{ fontSize: '17px' }} />
                                            </div>
                                        </li>
                                    </Link>

                                    <li onClick={logoutUser} className='flex items-center justify-between my-2 cursor-pointer'>
                                        <div className='text-[red]'>
                                            Logout
                                        </div>
                                        <div>
                                            <PersonAddAltIcon style={{ fontSize: '17px', color: "red" }} className='ml-[42px]' />
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
