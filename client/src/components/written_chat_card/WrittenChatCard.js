import React, { useState, useEffect } from 'react'
import { useSocket } from "../../context/SocketProvider";
import { AccessTime, MoreVert } from '@material-ui/icons';

const WrittenChatCard = ({ message }) => {

    const { person, account, myLanguage, profile } = useSocket();

    const [personLaguage, setPersonLaguage] = useState('en');


    useEffect(() => {

    }, [])


    const formateTimerFunc = (date) => {
        let hours = new Date(date).getHours();
        const minutes = new Date(date).getMinutes();

        if (hours > 12) {
            hours -= 12;
            return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} PM`
        }
        else
            return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} AM`
    }


    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        // console.log(element.text)

        // from database
        let translatedFrom
        // if (!(account || account?.language))
        // translatedFrom = personLaguage;
        if (!person.profile.language)
            translatedFrom = "en"   //mylanguage
        else
            translatedFrom = person?.profile?.language;
        // To language
        let translatedTo;
        if (!profile.language)
            translatedTo = "hi"   //mylanguage
        else
            translatedTo = profile?.language;
        let apiUrl = `https:api.mymemory.translated.net/get?q=${message.text}&langpair=${message?.language}|${translatedTo}`;

        // console.log(translatedFrom, translatedTo)

        const getTransalte = async () => {

            try {

                if (translatedTo === message?.language) {
                    setTranslatedText(message?.text)
                }
                else {

                    const response = await fetch(`${apiUrl}`)
                    const json = await response.json();

                    // console.log(json.responseData.translatedText)
                    // console.log(JSON.stringify(json.matches[1].translation))
                    const data = await json.responseData.translatedText

                    // console.log(json.responseData.translatedText)

                    // setTranslatedMessage(prev => [...prev, data])
                    // console.log(data)
                    // return json.matches[1].translation;
                    // console.log(data)
                    setTranslatedText(data)
                }

            } catch (error) {
                console.log('Error while calling get message API ', error);
            }
        }

        getTransalte()
        // console.log(getTransalte())
    }, [message])

    // ...........................

    return (
        <>
            {
                person._id == message.senderId ?
                    <div className="flex items-start my-2  ">
                        <div className="profile-picture flex justify-between flex-col-reverse  ">
                            <div>
                                {/* <img src="./images/avatar-13.jpg" alt="" className="w-[38px] rounded-full" /> */}
                                {
                                    person.profile ?
                                        <img src={"./images/" + person.profile.profilePic} alt="" className="w-[45px] rounded-full object-cover h-[45px]" /> :
                                        <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                            <h3 className="font-bold text-[var(--themeColor)] ">{person.name[0]}</h3>
                                        </div>
                                }
                            </div>
                            <div className=" w-[20px] h-[51px]">

                            </div>
                        </div>

                        <div className="messages max-w-[70%]">
                            <div className="mx-3 message bg-[#5a078b] text-white flex flex-col items-start p-3 px-4">
                                {/* <p className='text-white ' >{message.text}</p> */}
                                <p className='text-white text-left' >{translatedText}</p>
                                <span className='text-white text-[11px]'><AccessTime style={{ fontSize: '11px' }} className='mr-1' /> {formateTimerFunc(message.createdAt)}</span>
                            </div>
                            <div className="mx-3 mt-1 text-left  text-[15px] text-[--themeColor] font-bold">
                                {person.name}</div>
                        </div>
                        <div>
                            <MoreVert className='cursor-pointer' />
                        </div>
                    </div>
                    : <div className="flex items-start  my-2 flex-row-reverse ">
                        <div className="profile-picture flex justify-between flex-col-reverse  ">
                            <div>
                                {
                                    account.profile ?
                                        <img src={"./images/" + account.profile.profilePic} alt="" className="w-[45px] rounded-full object-cover h-[45px]" /> :
                                        <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                            <h3 className="font-bold text-[var(--themeColor)] ">{account.name[0]}</h3>
                                        </div>
                                }
                            </div>
                            <div className=" w-[20px] h-[51px]">

                            </div>
                        </div>

                        <div className="message  max-w-[70%] ">
                            <div className="mx-3 message2 bg-[#e7eefe]   flex flex-col items-start p-3 px-4">
                                {/* <p >{message.text}</p> */}
                                <p className='text-left'>{translatedText}</p>
                                <span className=' text-[11px] flex   justify-center items-center'> <AccessTime style={{ fontSize: '11px' }} className='mr-1' /> {formateTimerFunc(message.createdAt)}</span>
                            </div>
                            <div className="mx-3 mt-1 text-right  text-[15px] text-[--themeColor] font-bold">
                                {account.name}</div>
                        </div>

                        <div>
                            <MoreVert className='cursor-pointer' />
                        </div>
                    </div>
            }
        </>
    )
}

export default WrittenChatCard
