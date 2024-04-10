import React from 'react'
import { useNavigate } from 'react-router-dom';
// import context provide to provide a value to any child components
import { useState } from 'react';

const AddFriend = ({ onClick }) => {

    // react hook
    const [formData, setFormData] = useState({});
    // react hook
 
    let navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://localhost:5000/api/auth/follow', {
                method: 'POST',
                body: JSON.stringify(
                    formData
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': `${localStorage.getItem('token')}`,
                }
            })
            const json = await response.json();
            window.alert(json.message)

            if(json.success) {
                navigate('/')
            }
            navigate('/')
            return json;
        } catch (error) {
            console.log('Error while calling addUser API ', error);
        }

        
    }


    const handleChange = (event) => {
        console.log(event.target.value, event.target.name);
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <>
            <div className='modal flex bg-[#413c3c73]' id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
                <div className="modal-dialog w-[500px]">
                    <div className="modal-content">
                        <div className="modal-header px-3">
                            <li className="flex">
                                <i className="fa-solid fa-users text-[--themeColor] text-[14px] mx-1   p-1 rounded-sm"></i>

                                <h5 className="modal-title fs-6" id="exampleModalLabel">Add Friends</h5>
                            </li>

                            <img onClick={onClick} className="w-[20px] cursor-pointer" src="./images/close-window-icon.png" />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} method='post' action='http://localhost:5000/api/auth/follow'  >
                                <div className="mb-3 flex items-start flex-col">
                                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                                    <input onChange={handleChange} type="text" className="form-control" name="name" />
                                </div>
                                <div className="mb-3 flex items-start flex-col">
                                    <label htmlFor="exampleInputnickname" className="form-label">Nickname</label>
                                    <input onChange={handleChange} type="text" className="form-control" name="nickname" />
                                </div>

                                <div className="mb-3 flex items-start flex-col">
                                    <label htmlFor="exampleFormPhoneNumber" className="form-label">Phone Number</label>
                                    <input onChange={handleChange} type="text" className="form-control" name="phoneNumber" />
                                </div>

                                <div className="mb-3 flex items-start flex-col ">
                                    <label htmlFor="exampleFormEmail" className="form-label">Email</label>
                                    <input onChange={handleChange} type="text" className="form-control" name="email" />
                                </div>


                                <div className="modal-footer">
                                    <button onClick={onClick} type="button" className="btn text-black   ">Cancel</button>
                                    <button type="submit" className="btn text-white bg-[var(--themeColor)]  hover:bg-[var(--themeColor)]">Add Participant</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddFriend
