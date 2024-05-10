import React from 'react'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const UserProfile = ({ onClick, profileActive, person }) => {


    // console.log(person)
    return (
        <>
            <div className={`${profileActive ? 'w-[76vh]' : 'none'} bg-[#fafbff] px-4 py-2 overflow-y-scroll h-[100vh] z-[1] profile-container`}>

                <div className='border-[1px] border-[#cecccc]  '>
                    <div className="modal-header px-3">
                        <li className="flex">
                            <h5 className="modal-title fs-6" id="exampleModalLabel">Profile</h5>
                        </li>

                        <img onClick={onClick} className="w-[20px] cursor-pointer" src="./images/close-window-icon.png" />
                    </div>
                    <div className="user-mid bg-[#fafbff] flex items-center justify-center flex-col py-3">
                        <div className="user-profile rounded-full bg-[#e8e2f5] p-2 w-[106px] ">
                            {/* <img className="rounded-full " src="./images/avatar-7.jpg" alt=""></img> */}

                            {

                                (person.profile && profileActive) ?
                                    <img src={"./images/" + person?.profile?.profilePic} alt="" className="  rounded-full object-cover h-[90px] w-[102px]" /> :
                                    <img src="./images/profile.png" alt="" className="h-[90px] w-[102px] rounded-full object-cover" />
                            }
                        </div>

                        <p className="mb-0 text-[black] font-semibold">Name</p>
                        {!(person && person?.name) ?
                            <h5 className="mt-3 profile-name mb-1">Unknown</h5>
                            :
                            <h5 className="mb-1 text-[15px] text-[#5a078b]">{person?.name}</h5>
                        }

                    </div>
                    <div className="user-footer">

                        {!(person && person?.profile?.bio) ?
                            <p className="user-bio text-center px-3 pb-3 text-[#949393]">No Bio </p>
                            :
                            <p className="user-bio text-justify px-3 pb-3 text-[#949393]">{person?.profile?.bio} </p>
                        }


                        <div className="text-center mb-4">
                            <p className="mb-0 text-[black] font-semibold">Phone</p>
                            {!(person && person?.profile?.phoneNumber) ?
                                <h5 className=" mb-1 text-[15px] text-[#5a078b] font-semibold">9999999999</h5>
                                :
                                <h5 className="mb-1 text-[15px] text-[#5a078b]">{person?.profile?.phoneNumber}</h5>
                            }

                        </div>
                        <div className="text-center mb-4">
                            <p className="mb-0 text-[black] font-semibold">Nickname</p>
                            {!(person && person?.profile?.nickName) ?
                                <h5 className=" mb-1 text-[15px] text-[#5a078b] font-semibold">Demo</h5>
                                :
                                <h5 className=" mb-1 text-[15px] text-[#5a078b] font-semibold">{person?.profile?.nickName}</h5>
                            }

                        </div>
                        <div className="text-center mb-4">
                            <p className="mb-0 text-[black] font-semibold">Email</p>
                            {!(person && person?.email) ?
                                <h5 className="mb-1 text-[15px] text-[#5a078b]">Demo@gmail.com</h5>
                                :
                                <h5 className="mb-1 text-[15px] text-[#5a078b]">{person?.email}</h5>
                            }

                        </div>

                        {/* social link */}
                        <ul className=" p-0  text-center mb-5 flex  items-center justify-center">
                            <li>
                                {!(person && person?.profile?.facebook) ?
                                    <Link to="#" className='text-[var(--themeColor)]'><Facebook /></Link>
                                    :
                                    <Link to={person?.profile?.facebook} className='text-[var(--themeColor)]'><Facebook /></Link>
                                }
                            </li>
                            <li>
                                {!(person && person?.profile?.instagram) ?
                                    <Link to="#" className='text-[var(--themeColor)]'><Instagram /></Link>
                                    :
                                    <Link to={person?.profile?.Instagram} className='text-[var(--themeColor)]'><Instagram /></Link>
                                }
                            </li>
                            <li>
                                {!(person && person?.profile?.linkedin) ?
                                    <Link to="#" className='text-[var(--themeColor)]'><LinkedIn className='text-[var(--themeColor)]' /></Link>
                                    :
                                    <Link to={person?.profile?.linkedin} className='text-[var(--themeColor)]'><LinkedIn className='text-[var(--themeColor)]' /></Link>
                                }
                            </li>
                            <li>
                                {!(person && person?.profile?.twitter) ?
                                    <Link to="#" className='text-[var(--themeColor)]'><Twitter /></Link>
                                    :
                                    <Link to={person?.profile?.twitter} className='text-[var(--themeColor)]'><Twitter /></Link>
                                }
                            </li>
                            <li>
                                {!(person && person?.profile?.youtube) ?
                                    <Link to="#" className='text-[var(--themeColor)]'><YouTube /></Link>
                                    :
                                    <Link to={person?.profile?.youtube} className='text-[var(--themeColor)]'><YouTube /></Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
