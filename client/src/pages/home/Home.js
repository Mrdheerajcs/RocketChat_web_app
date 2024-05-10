import React, { useEffect, useState, useRef } from 'react';
import "./home.css";
import Sidebar from '../../components/sidebar/Sidebar';
import ChatCard from '../../components/chat_card/ChatCard';
import Header from '../../components/header/Header';
import { useSocket } from "../../context/SocketProvider";
import AddFriend from '../../components/add_friend/AddFriend';
import { getContactList } from '../../api/Api'
import ChatBox from '../../components/chat_box/ChatBox';
import { useNavigate } from 'react-router-dom';
import { getConversation } from "../../api/Api"
import OnlineStatus from '../../components/online_status/OnlineStatus';
import { Search, Toll } from '@material-ui/icons';
import EmptyChat from '../../components/empty_chat/EmptyChat';
import UserProfile from '../../components/user_profile/UserProfile';


const Home = () => {

    let navigate = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/signup')
    }, [localStorage.getItem('token')])

    const { person, account } = useSocket();


    const [modalActive, setModalActive] = useState(false);

    const [profileActive, setProfileActive] = useState(false);

    const [ContactList, setContactList] = useState([]);

    const [text, setText] = useState('');

    const [conversation, setConversation] = useState({})

    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        // scrollRef.scrollTop = scrollRef.scrollHeight;
        // console.log(scrollRef.current?.scrollIntoView())
    }, [person])

    const modalActiveFunction = () => {
        return setModalActive(!modalActive);
    }

    const handleProfilePopup = ()=>{
        return setProfileActive(!profileActive);
    }

    useEffect(() => {
        const getContactListDetails = async () => {
            let data = await getContactList();
            // filter out by search 

            let filterContact;
            if (data.contactLists) {
                filterContact = data.contactLists.filter(contact => contact.name.toLowerCase().
                    includes(text.toLowerCase()))
            }

            setContactList(filterContact);
            // console.log(data.contactLists);
        }
        getContactListDetails();
    }, [text, modalActive])
    // call  if whenever change text state....

    // useEffect(() => {
    //     const getConversationDetails = async () => {

    //         let data = await getConversation({ senderId: account._id, receiverId: person._id })
    //         // console.log(data, person._id, account._id);
    //         setConversation(data);

    //     }
    //     getConversationDetails()
    // }, [person._id])

    useEffect(() => {
        const getConversationDetails = async () => {
            if (!account || !person || !person._id) {
                console.error('Account or person is null or undefined');
                return;
            }

            let data = await getConversation({ senderId: account._id, receiverId: person._id });
            setConversation(data);
        };

        getConversationDetails();
    }, [person]);


    return (
        <>
            <div className="main-wrapper ">

                <Sidebar modalActiveFunction={modalActiveFunction} />

                <div id="slider-scroll" className={`sidebar-group ml-[83px] p-3  w-[407px] bg-[#fafbff] overflow-y-scroll h-[100vh]  ${modalActive ? 'z-[1]' : 'z-[-1]'}`}>
                    {/* top header components */}
                    <div className="flex justify-between items-center px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">chats </div>
                        <div className="">
                            <ul className="flex">
                                <li className=""><i className="fa-solid fa-users text-[--themeColor] text-[12px] mx-1 border-[#f3f3f3] border-[1px] p-1 rounded-sm"></i></li>

                                <li onClick={modalActiveFunction} className=""><i className="fa-solid fa-plus text-[--themeColor] mx-1 text-[12px] border-[#f3f3f3] border-[1px] p-1 rounded-sm cursor-pointer" ></i></li>

                                {modalActive && <AddFriend onClick={modalActiveFunction} setModalActive={setModalActive} />}
                            </ul>
                        </div>
                    </div>
                    {/* top header components */}

                    <div className="inputFormFeilds px-2">
                        <form action="" className="">
                            <div className="my-2 flex items-center justify-center  w-[100%]  placeholder:text-[12px]   border-[#f3f3f3] border-[1px]  rounded-sm shadow-sm text-black focus:outline-none bg-white">
                                <label htmlFor="" className="flex items-center justify-center m-0 pl-2 "><Search style={{ fontSize: '18px' }} /></label>
                                <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Search Contacts" className="w-[100%]  placeholder:text-[12px] p-2  rounded-sm   text-black focus:outline-none" />
                            </div>
                        </form>
                    </div>

                    {/* Online status */}

                    <OnlineStatus />

                    <div className="flex justify-between items-center my-3 px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">RECENT CHATS</div>
                        <div className="">
                            <ul className="flex">
                                <Toll className="bg-[#ee00ab] p-2  text-white rounded-full" style={{ fontSize: '31px' }} />
                            </ul>
                        </div>
                    </div>

                    {/* chats container */}
                    <div className="chat-container px-2">

                        {
                            ContactList && ContactList.map((item) => {
                                return (
                                    <ChatCard user={item} />
                                )
                            })
                        }
                    </div>


                </div>

                <div className="chat w-[75vw] h-[82vh] overflow-y-scroll flex" ref={scrollRef} >

                    <div className='w-[100%]'>
                        {
                            Object.keys(person).length ? <Header person={person}  onClick={handleProfilePopup} /> : null
                        }
                        {
                            Object.keys(person).length ? <ChatBox person={person} conversation={conversation}/> : <EmptyChat />
                        }
                    </div>


                </div>

                <UserProfile onClick={handleProfilePopup} profileActive={profileActive} person={person} />

            </div>
        </>
    )
}

export default Home
