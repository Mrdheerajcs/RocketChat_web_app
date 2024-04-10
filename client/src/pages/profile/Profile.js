import React, { useEffect, useState } from 'react'
import SIdebar from '../../components/sidebar/Sidebar';
import "./profile.css"

import { useSocket } from "../../context/SocketProvider";
import { Search } from '@material-ui/icons';
import GenerateTab from '../../components/general_tab/GenerateTab';
import NotificationTab from '../../components/nitification_tab/NotificationTab';
import History_tab from '../../components/history_tab/History_tab';
import SecurityTab from '../../components/security_tab/SecurityTab';
import SettingControl from '../../components/setting_control/SettingControl';
import SettingFooter from '../../components/setting_footer/SettingFooter';
import SocialNav from '../../components/social_nav/SocialNav';


const Profile = () => {

    const { account, profile, setUpdate, update } = useSocket();

    const [generalUpdate, setGeneralUpdate] = useState(false);

    // console.log(profile)

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <div className="main-wrapper ">

                <SIdebar />

                <div id="slider-scroll" className="sidebar-group ml-[83px] p-3  w-[407px] bg-[#fafbff] overflow-y-scroll h-[100vh]">
                    {/* top header components */}
                    <div className="flex justify-between items-center px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">profile </div>
                        <div className="">

                        </div>
                    </div>
                    {/* top header components */}

                    <div className="inputFormFeilds px-2">
                        <form action="" className="">
                            <div className="my-2 flex items-center justify-center  w-[100%]  placeholder:text-[12px]   border-[#f3f3f3] border-[1px]  rounded-sm shadow-sm text-black focus:outline-none bg-white">
                                <label htmlFor="" className="flex items-center justify-center m-0 pl-2 "><Search style={{ fontSize: '18px' }} /></label>
                                <input type="text" placeholder="Search Contacts" className="w-[100%]  placeholder:text-[12px] p-2  rounded-sm   text-black focus:outline-none" />
                            </div>
                            <div class="settings-option">
                                <a href="nav-tab" class="user-list-item">Edit Settings</a>
                            </div>
                        </form>
                    </div>


                    <div className="profile-card mt-3">
                        <div className="profile-cover text-center mb-3">
                            <label className="profile-cover-avatar" for="avatar_upload">

                                {/* {

                                    !profile.profilePic ? <img className="avatar-img" src="/images/profile.png" alt="Profile Image" /> : <img className="avatar-img" src={"/images/" + profile.profilePic} alt="Profile Image" />


                                } */}

                                {!profile ?
                                    <img className="avatar-img " src="./images/profile.png" alt="Profile Image" />
                                    :
                                    <img className="avatar-img  " src={"./images/" + profile.profilePic} alt="Profile Image" />
                                }

                                <input type="file" id="avatar_upload" />
                                <span className="avatar-edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-edit-2 avatar-uploader-icon shadow-soft">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                        </path>
                                    </svg>
                                </span>
                            </label>
                            <h5 className="mt-3 profile-name mb-1">Rocket chat</h5>
                            {!(account || account?.email) ?
                                <p className="profile-email mb-1"> </p>
                                :
                                <p className="profile-email mb-1">{account?.email}</p>
                            }

                            <h5 className="profile-country mb-0">IND</h5>
                        </div>
                        <div className="profile-info">
                            <div className="text-center mb-4">
                                <p className="info-title mb-0">Phone</p>
                                {!(profile || profile?.phoneNumber) ?
                                    <span className="info-text">+91 </span>
                                    :
                                    <span className="info-text">+91 {profile?.phoneNumber}</span>
                                }

                            </div>
                            <div className="text-center mb-4">
                                <p className="info-title mb-0">Nick Name</p>
                                {!(profile || profile?.fullName) ?
                                    <span className="info-text"> </span>
                                    :
                                    <span className="info-text">{profile?.fullName}</span>
                                }

                            </div>
                            <div className="text-center mb-4">
                                <p className="info-title mb-0">Email</p>
                                {!(account || account?.email) ?
                                    <span className="info-text"> </span>
                                    :
                                    <span className="info-text">{account?.email}</span>
                                }

                            </div>

                            <SocialNav />
                        </div>
                    </div>

                    <div className="settings-card mt-3">
                        <SettingControl />
                        <SettingFooter />
                    </div>
                </div>

                <div className="chat w-[75vw]   overflow-y-scroll">
                    <div className="chat settings-main p-3" id="middle" >
                        <div className="slimScrollDiv"  >
                            <div className="slimscroll" style={{ width: "100%", height: "650px" }}>
                                <div className="page-header d-flex align-items-center">
                                    <div className="me-3 d-md-block d-lg-none">
                                        <a className="text-muted px-0 left_side" href="#">
                                            <i className="fas fa-arrow-left"></i>
                                        </a>
                                    </div>
                                    <div className='flex items-start justify-center flex-col'>
                                        <h5>SETTINGS</h5>
                                        <p>Last Update your profile: 29 Aug 2020</p>
                                    </div>
                                </div>

                                <div className="settings-tab my-4">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab">
                                            <button onClick={() => handleTabClick('tab1')} className={`nav-item nav-link  cursor-pointer ${activeTab === 'tab1' ? 'active' : ''}`}
                                            >General Settings</button >
                                            <button onClick={() => handleTabClick('tab2')} className={`nav-item nav-link cursor-pointer ${activeTab === 'tab2' ? 'active' : ''}`}
                                            >Notification</button >
                                            <button onClick={() => handleTabClick('tab3')} className={`nav-item nav-link   cursor-pointer ${activeTab === 'tab3' ? 'active' : ''}`}
                                            >Device History</button >
                                            <button onClick={() => handleTabClick('tab4')} className={`nav-item nav-link   cursor-pointer ${activeTab === 'tab4' ? 'active' : ''}`}
                                            >Security</button >
                                        </div>
                                    </nav>

                                    <div className="tab-content settings-form">
                                        <GenerateTab activeTab={activeTab} setUpdate={setUpdate} update={update} />
                                        <NotificationTab activeTab={activeTab} />
                                        <History_tab activeTab={activeTab} />
                                        <SecurityTab activeTab={activeTab} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
