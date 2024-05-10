import React from 'react'
import EmptyChat from '../../components/empty_chat/EmptyChat'

import SIdebar from '../../components/sidebar/Sidebar'


import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import LightGallery from 'lightgallery/react/Lightgallery.es5'

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import { Search  } from '@material-ui/icons';

const Status = () => {
    return (
        <>

            <div className="main-wrapper ">
                {/* <div className="image">
                    
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgVideo, lgShare, lgRotate]}>


                        <a href="images/a1.jpg">
                            <img alt="img1" src="./images/a1.jpg" />
                        </a>
                        <a href="images/a2.jpg">
                            <img alt="img2" src="./images/a2.jpg" />
                        </a>
                        <a href="images/a3.jpg">
                            <img alt="img3" src="./images/a3.jpg" />
                        </a>
                        <a href="images/a4.jpg">
                            <img alt="img4" src="./images/a4.jpg" />
                        </a>
                    </LightGallery>


                </div> */}

                <SIdebar />

                <div id="slider-scroll" className={`sidebar-group ml-[83px] p-3  w-[407px] bg-[#fafbff] overflow-y-scroll h-[100vh]  `}>
                    {/* top header components */}
                    <div className="flex justify-between items-center px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">Status </div>
                        <div className="">
                            <ul className="flex">
                                <li className=""><i className="fa-solid fa-users text-[--themeColor] text-[12px] mx-1 border-[#f3f3f3] border-[1px] p-1 rounded-sm"></i></li>


                            </ul>
                        </div>
                    </div>
                    {/* top header components */}

                    <div className="inputFormFeilds px-2">
                        <form action="" className="">
                            <div className="my-2 flex items-center justify-center  w-[100%]  placeholder:text-[12px]   border-[#f3f3f3] border-[1px]  rounded-sm shadow-sm text-black focus:outline-none bg-white">
                                <label htmlFor="" className="flex items-center justify-center m-0 pl-2 "><Search style={{ fontSize: '18px' }} /></label>
                                <input type="text" placeholder="Search Contacts" className="w-[100%]  placeholder:text-[12px] p-2  rounded-sm   text-black focus:outline-none" />
                            </div>
                        </form>
                    </div>


                    <div className="flex justify-between items-center my-3 px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">RECENT CHATS</div>
                        <div className="">
                            <ul className="flex">

                            </ul>
                        </div>
                    </div>

                    {/* chats container */}
                    <div className="chat-container px-2">
                        <div className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                            <div className="chat-card-left flex items-center rounded-md">
                                <div className="chat-profile relative">

                                    <img src="./images/avatar-7.jpg" alt="" className="w-[45px] rounded-full object-cover h-[45px]" />
                                    <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                                </div>

                                <div className="chat-content mx-2">
                                    <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                                        Rahul</div>
                                    <p className="text-[12px]">It seems logical that the</p>
                                </div>
                            </div>
                            <div className="chat-card-right">
                                <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                            </div>
                        </div>
                        <div className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                            <div className="chat-card-left flex items-center rounded-md">
                                <div className="chat-profile relative">

                                    <img src="./images/avatar-7.jpg" alt="" className="w-[45px] rounded-full object-cover h-[45px]" />
                                    <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                                </div>

                                <div className="chat-content mx-2">
                                    <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                                        Rahul</div>
                                    <p className="text-[12px]">It seems logical that the</p>
                                </div>
                            </div>
                            <div className="chat-card-right">
                                <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                            </div>
                        </div>
                        <div className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                            <div className="chat-card-left flex items-center rounded-md">
                                <div className="chat-profile relative">

                                    <img src="./images/avatar-7.jpg" alt="" className="w-[45px] rounded-full object-cover h-[45px]" />
                                    <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                                </div>

                                <div className="chat-content mx-2">
                                    <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                                        Rahul</div>
                                    <p className="text-[12px]">It seems logical that the</p>
                                </div>
                            </div>
                            <div className="chat-card-right">
                                <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                            </div>
                        </div>
                        <div className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                            <div className="chat-card-left flex items-center rounded-md">
                                <div className="chat-profile relative">

                                    <img src="./images/avatar-7.jpg" alt="" className="w-[45px] rounded-full object-cover h-[45px]" />
                                    <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                                </div>

                                <div className="chat-content mx-2">
                                    <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                                        Rahul</div>
                                    <p className="text-[12px]">It seems logical that the</p>
                                </div>
                            </div>
                            <div className="chat-card-right">
                                <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-3 px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">VIEWD CHATS</div>
                        <div className="">
                            <ul className="flex">

                            </ul>
                        </div>
                    </div>

                    <div className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                        <div className="chat-card-left flex items-center rounded-md">
                            <div className="chat-profile relative">

                                <img src="./images/avatar-7.jpg" alt="" className="w-[45px] rounded-full object-cover h-[45px]" />
                                <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                            </div>

                            <div className="chat-content mx-2">
                                <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                                    Rahul</div>
                                <p className="text-[12px]">It seems logical that the</p>
                            </div>
                        </div>
                        <div className="chat-card-right">
                            <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                        </div>
                    </div>
                    <div className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                        <div className="chat-card-left flex items-center rounded-md">
                            <div className="chat-profile relative">

                                <img src="./images/avatar-7.jpg" alt="" className="w-[45px] rounded-full object-cover h-[45px]" />
                                <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                            </div>

                            <div className="chat-content mx-2">
                                <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                                    Rahul</div>
                                <p className="text-[12px]">It seems logical that the</p>
                            </div>
                        </div>
                        <div className="chat-card-right">
                            <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                        </div>
                    </div>
                    <div className="chat-card flex items-center   p-3 py-2 my-1 justify-between cursor-pointer">
                        <div className="chat-card-left flex items-center rounded-md">
                            <div className="chat-profile relative">

                                <img src="./images/avatar-7.jpg" alt="" className="w-[45px] rounded-full object-cover h-[45px]" />
                                <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                            </div>

                            <div className="chat-content mx-2">
                                <div className="text-left  text-[15px] text-[--themeColor] font-bold">
                                    Rahul</div>
                                <p className="text-[12px]">It seems logical that the</p>
                            </div>
                        </div>
                        <div className="chat-card-right">
                            <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                        </div>
                    </div>
                </div>



                <div className="chat w-[75vw] h-[82vh] overflow-y-scroll flex"   >
                    <div className='w-[100%]'>
                        <EmptyChat />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Status
