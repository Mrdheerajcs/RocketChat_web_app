import React, { useEffect, useState } from 'react'
import WrittenChatCard from '../written_chat_card/WrittenChatCard'
import { useSocket } from "../../context/SocketProvider";
import { newMessage, getMessage } from "../../api/Api"
import { AttachFile, Send, SentimentSatisfiedAlt } from '@material-ui/icons';
import { getTranslate } from '../../api/Api';

const ChatBox = ({ person, conversation }) => {

    // const [translatedMessage, setTranslatedMessage] = useState([]);

    // ................................
    let Text = "What are you doing";
  

    // let apiUrl = `https:api.mymemory.translated.net/get?q=${encodeURIComponent(Text)}&langpair=en|fr`;

    const [message, setMessag] = useState('');
    const [incomingMessage, setIcomingMessage] = useState(null);

    const [chatMessages, setChatMessages] = useState([]);
    const { account, socket } = useSocket();

    // useEffect(() => {

    //     chatMessages.map(element => {
    //         // console.log(element.text)
    //         let translatedFrom = "en";
    //         let translatedTo = "fr";

    //         let apiUrl = `https:api.mymemory.translated.net/get?q=${element.text}&langpair=${translatedFrom}|${translatedTo}`;

    //         const getTransalte = async () => {
    //             try {
    //                 const response = await fetch(`${apiUrl}`)
    //                 const json = await response.json();


    //                 // console.log(json.responseData.translatedText)
    //                 // console.log(JSON.stringify(json.matches[1].translation))
    //                 const data =await  json.responseData.translatedText

    //                 // console.log(json.responseData.translatedText)
    //                 element.text = data;
    //                 // setTranslatedMessage(prev => [...prev, data])
    //                 // console.log(data)
    //                 // return json.matches[1].translation;

    //             } catch (error) {
    //                 console.log('Error while calling get message API ', error);
    //             }
    //         }

    //         getTransalte()
    //     });

    //     // console.log(getTransalte())
    // }, [person])

    // ...........................


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
            text: message
        }

        socket.current.emit('sendMessage', MessagesObject);

        await newMessage(MessagesObject);

        setMessag("");
        setToggle(!toggle);
    }

    useEffect(() => {
        // const getMessageDetails = async () => {
        //     let data = await getMessage(conversation._id);
        //     console.log(data);
        // }

        const getMessageDetails = async () => {
            if (conversation && conversation._id) {
                let data = await getMessage(conversation._id);
                // console.log(data);
                setChatMessages(data)
            }
        };

        if (conversation && conversation._id) {
            getMessageDetails();
        }
    }, [person._id, conversation, toggle]);

    // useEffect(() => {
    //     const getTranslateDetails = async () => {
    //         const data = await getTranslate({ msg: 'what are you doing', target: 'en' })
    //         console.log(data)
    //     }
    //     getTranslateDetails();

    // }, [person]);


    // useEffect(() => {
        // const getTranslateDetails = async () => {
        //     const data = await getTranslate({ msg: 'आप क्या कर रहे', target: 'fr' })
        //     console.log(data)
        // }
        // getTranslateDetails();

    //     console.log(chatMessages);

    // }, [person])


    return (
        <>
            <div className="chatting-container p-4 h-[76vh] ">
                {/* <WrittenChatCard /> */}
                {/* <WrittenChatCard sender={true} name="nitin" message="Vo hi kr rha" />
                <WrittenChatCard name="pavan" message="ss bhej group me kitna kiya" />

                <WrittenChatCard sender={true} name="nitin" message="Krta hu" />
                <WrittenChatCard name="pavan" message="Kab krega bhai" />
                
            <WrittenChatCard sender={true} name="nitin" message="hmm" /> */}

                {
                    chatMessages && chatMessages.map(msg => {
                        return (
                            <WrittenChatCard message={msg} />
                        )
                    })
                }
        

            </div>

            <div className="w-[70%] chat-send-container p-4 position-fixed bottom-[0px] bg-white">

                <div className="chat-send-innerbox shadow-sm border-[1px]  h-[50px] rounded-[88px] flex items-center justify-center">

                    <form className="flex items-center justify-between w-[100%]">
                        <div className='left-side-sendbox'>


                            <SentimentSatisfiedAlt className="fa-smile" style={{ fontSize: '25px' }} />

                            <AttachFile style={{ fontSize: '20px' }} />
                            <input value={message} onChange={(e) => setMessag(e.target.value)} className='mx-4 border-none outline-none' placeholder='Enter message...' type="text" />
                        </div>

                        <div className='right-side-sendbox'>
                            <button onClick={sendText} type='button' className=' send-button rounded-full bg-[#ee00ab] text-white   m-1 p-[9px] flex items-center justify-center'>
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
