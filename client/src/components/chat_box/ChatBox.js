import React, { useEffect, useState } from 'react'
import WrittenChatCard from '../written_chat_card/WrittenChatCard'
import { useSocket } from "../../context/SocketProvider";
import { newMessage, getMessage, uploadFile } from "../../api/Api"
import { AttachFile, Send, SentimentSatisfiedAlt } from '@material-ui/icons';
import EmojiPicker from 'emoji-picker-react';

// import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';
// import 'emoji-mart/css/emoji-mart.css';

const ChatBox = ({ person, conversation }) => {

    // const [translatedMessage, setTranslatedMessage] = useState([]);

    const [message, setMessag] = useState('');

    const [file, setFile] = useState('');

    const [incomingMessage, setIcomingMessage] = useState(null);

    const [chatMessages, setChatMessages] = useState([]);
    const { account, socket, profile } = useSocket();

    const [selectEmoji, setSelectEmoji] = useState(null)

    const [toggleEmoji, setToggleEmoji] = useState(false)

    const handleToggleEmoji = () => {
        setToggleEmoji(!toggleEmoji);
    }


    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIcomingMessage({
                ...data,
                createdAt: Date.now(),
            })
        })
    }, [])

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setChatMessages(prev => [...prev, incomingMessage]);
    }, [incomingMessage, conversation])

    const sendText = async () => {


        let MessagesObject = {
            senderId: account._id,
            receiverId: person._id,
            conversationId: conversation._id,
            type: 'text',
            text: message,
            language: profile?.language
        }

        socket.current.emit('sendMessage', MessagesObject);

        await newMessage(MessagesObject);

        setMessag("");
        setToggle(!toggle);
        // After toggle message will fatch
    }

    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            sendText();
        }
    };

    useEffect(() => {
        const getMessageDetails = async () => {
            if (conversation && conversation._id) {
                let data = await getMessage(conversation._id);
                setChatMessages(data)
            }
        };

        if (conversation && conversation._id) {
            getMessageDetails();
        }
    }, [person._id, conversation, toggle]);

    // Emoji Selection Fucntion 
    const handleEmojiClick = (event, emojiObject) => {
        const emoji = emojiObject.emoji;
        setMessag(emoji);
        console.log(emoji);
    };

    const onFileChnage = (e) => {
        setFile(e.target.files[0]);
        setMessag(e.target.files[0].name)
        // console.log(e.target.files[0]);
    }

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('uploadFile', file);
                console.log(data);

                let res = await uploadFile(data);
            }
        }
        getImage();
    }, [file])


    return (
        <>
            <div className="chatting-container p-4 h-[76vh] ">
                {
                    chatMessages && chatMessages.map(msg => {
                        return (
                            <WrittenChatCard message={msg} />
                        )
                    })
                }

            </div>

            <div className="chat-send-container p-4 position-fixed bottom-[0px] bg-white">
                <div className="chat-send-innerbox shadow-sm border-[1px]  h-[50px] rounded-[88px] flex items-center justify-center">
                    <form className="flex items-center justify-between w-[100%]">
                        <div className='left-side-sendbox flex'>

                            <div className='relative'>
                                {/* <Picker onSelect={handleEmojiSelect} /> */}
                                <div>
                                    {
                                        toggleEmoji && <EmojiPicker onEmojiClick={handleEmojiClick} className="absolute bottom-[13vh] h-[354px]" style={{ position: "absolute", bottom: "7vh", height: "354px" }} />

                                    }
                                </div>

                                <SentimentSatisfiedAlt onClick={handleToggleEmoji} className="fa-smile cursor-pointer" style={{ fontSize: '25px' }} />
                            </div>


                            <label htmlFor='fileInput'>
                                <AttachFile style={{ fontSize: '20px' }} className="cursor-pointer" />
                            </label>
                            <input id="fileInput" className='none' type="file" onChange={onFileChnage}></input>

                            <input
                                onKeyPress={handlePressEnter}
                                value={message}
                                onChange={(e) => setMessag(e.target.value)}
                                className='mx-4 border-none outline-none'
                                placeholder='Enter message...'
                                type="text"
                            />
                        </div>

                        <div className='right-side-sendbox'>
                            <button onClick={sendText} type='button' className=' send-button rounded-full bg-[#ee00ab] text-white   m-1 p-[9px] flex items-center justify-center' tabIndex="0">
                                <Send />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatBox
