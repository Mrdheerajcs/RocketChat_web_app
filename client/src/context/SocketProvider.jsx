import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";


// import getContactList from "../api/getContactList"
const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {

  const socket = useRef();

  useEffect(() => {
    socket.current = io('localhost:9000')
  }, [])

  // const socket = useMemo(() => io("localhost:9000"), []);

  const [account, setAccount] = useState([]);

  const [logout, setLogout] = useState(false);

  const [profile, setProfile] = useState([])

  const [person, setPerson] = useState({});

  const [contactList, setContactList] = useState([]);

  const [activeUser, setActiveUser] = useState([]);

  // Bydefault laguage 
  const [myLanguage, setMyLanguage] = useState('en');

  const [update, setUpdate] = useState(false);

  // console.log(account);
  useEffect(() => {
    if (profile?.language)
      setMyLanguage(profile?.language)
  }, [profile, account])

  useEffect(() => {
    // if (socket.current) {
    socket.current.emit('addUser', account);
    socket.current.on('getUsers', users => {
      setActiveUser(users)
      // console.log(users)
    }
    )
    // }
  }, [account])


  // user account

  const userId = async () => {
    const response = await fetch('http://localhost:5000/api/auth/getuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${localStorage.getItem('token')}`,
      }
    })
    const json = await response.json();

    await setAccount(json.user);

    if (json.user) {
      await setProfile(json.user.profile)
    }
  }


  // user account


  // // Get our Contact
  const getContactList = async () => {
    const response = await fetch('http://localhost:5000/api/auth/mycontact', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${localStorage.getItem('token')}`,
      }
    })
    const json = await response.json();

    await setContactList(json);
  }

  useEffect(() => {
    userId()
    getContactList()
  }, [update, account, logout]);

  return (
    <SocketContext.Provider value={{ socket, account, contactList, getContactList, person, setPerson, activeUser, setActiveUser, profile, setProfile, myLanguage, setMyLanguage, update, setUpdate, logout, setLogout }}>
      {props.children}
    </SocketContext.Provider>
  );
};
