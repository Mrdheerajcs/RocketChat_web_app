const url = 'http://localhost:5000';



// Signup user 
export const signUp = async (data) => {
    try {
        const response = await fetch(`${url}/api/auth/signup`, {
            method: 'POST',
            body: JSON.stringify(
                data
            ),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error while Signup API.', error);
    }
}

// Get our Contact
export const getContactList = async () => {
    try {
        const response = await fetch(`${url}/api/auth/mycontact`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`,
            }
        })
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error while calling get users API ', error);
    }
}

// set conversation   
export const setConversation = async (data) => {
    try {
        const response = await fetch(`${url}/api/conversation/add`, {
            method: 'POST',
            body: JSON.stringify(
                data
            ),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error while calling set conversation API ', error);
    }
}

// set conversation   
export const getConversation = async (data) => {
    try {
        const response = await fetch(`${url}/api/conversation/get`, {
            method: 'POST',
            body: JSON.stringify(
                data
            ),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error while calling get API ', error);
    }
}

// add new message  
export const newMessage = async (data) => {
    try {
        const response = await fetch(`${url}/api/message/add`, {
            method: 'POST',
            body: JSON.stringify(
                data
            ),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error while calling get API ', error);
    }
}

// get message
export const getMessage = async (id) => {
    try {
        const response = await fetch(`${url}/api/message/get/${id}`, {
            method: 'GET'
        })
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error while calling get message API ', error);
    }
}

// get message
export const getTranslate = async (data) => {
    try {
        const response = await fetch(`${url}/api/translate/get`, {
            method: 'POST',
            body: JSON.stringify(
                data
            ),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();
        console.log(json)
        return json;
    } catch (error) {
        console.log('Error while calling get message API ', error);
    }
}

//////////////////////////////////////////
// export const addUser = async (data) => {
//     try {
//         let response = await axios.post(`${url}/add`, data);
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling addUser API ', error);
//     }
// }

// export const getUsers = async () => {
//     try {
//         let response = await axios.get(`${url}/users`);
//         return response.data
//     } catch (error) {
//         console.log('Error while calling getUsers API ', error);
//     }
// }

// export const setConversation = async (data) => {
//     try {
//         await axios.post(`${url}/conversation/add`, data);
//     } catch (error) {
//         console.log('Error while calling setConversation API ', error);
//     }
// }

// export const getConversation = async (users) => {
//     try {
//         let response = await axios.post(`${url}/conversation/get`, users);
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling getConversation API ', error);
//     }
// }

// export const getMessages = async (id) => {
//     try {
//         let response = await axios.get(`${url}/message/get/${id}`);
//         return response.data
//     } catch (error) {
//         console.log('Error while calling getMessages API ', error);
//     }
// }

// export const newMessages = async (data) => {
//     try {
//         return await axios.post(`${url}/message/add`, data);
//     } catch (error) {
//         console.log('Error while calling newConversations API ', error);
//     }
// }

// export const uploadFile = async (data) => {
//     try {
//         return await axios.post(`${url}/file/upload`, data);
//     } catch (error) {
//         console.log('Error while calling newConversations API ', error);
//     }
// }