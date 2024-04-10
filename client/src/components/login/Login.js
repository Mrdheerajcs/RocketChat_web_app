import React from 'react';
import "./login.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSocket } from "../../context/SocketProvider";

const Login = () => {
 
    const { setPerson, logout, setLogout } = useSocket();

    // react hook
    const [formData, setFormData] = useState({});
    // react hook

    // react js renderHook
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log(formData);

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(
                formData
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (json.success) {
            //redirect
            localStorage.setItem('token', json.authtoken);
            setLogout(!logout);
            setPerson({})
            // set login boolean
            navigate('/')
        }

        else {
            navigate('/Signup')
            window.alert("User is already exist try again with correct credentials ")
        }
    }


    const handleChange = (event) => {
        // console.log(event.target.value, event.target.name);

        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <>
            <section className="login-section flex items-center justify-center flex-col">

                <div className="flex items-center justify-center">
                    <img src="./images/logo.png"></img>
                    <h2 className='mx-3 my-5 text-[33px] font-semibold '>Rocket chat</h2>
                </div>

                <div className="flex items-center justify-center flex-col my-4">
                    <h2 className='mx-3  text-[25px] font-semibold '>Sign in</h2>

                    <p className='text-[20px] text-[#7a7f9a] mt-2'>Sign in to continue to Rocket Chat.</p>

                </div>

                <div className="form-container pb-5">
                    <form onSubmit={handleSubmit} method="post" action="http://localhost:5000/api/auth/login" className="form">
                        <div className="input-box ">
                            <label>Username</label>

                            <div className="d-flex align-items-center justify-content-center ">
                                <i className="fa-regular fa-user"></i>
                                <input onChange={handleChange} type="text" placeholder="username" name="email" />
                            </div>
                        </div>

                        <div className="input-box">
                            <label>Password</label>

                            <div className="d-flex align-items-center justify-content-center ">
                                <i class="fa-solid fa-lock"></i>

                                <input onChange={handleChange} type="password" placeholder="password" name="password" />
                            </div>

                        </div>


                        <div className="check-box flex items-center justify-between">
                            <div>
                                <input type="checkbox" id="check" name="remember" />
                                <label className='mx-2'>Remember me</label>
                            </div>
                            <div>
                                <Link to="#"> Forgot password</Link>
                            </div>
                        </div>
                        <button className='login-btn' type='submit'>Sign in</button>
                    </form>


                </div>

                <div className="my-5">

                    <p className='text-[20px]   mt-2'>Don't have an account ? <Link to="/signup">Sign up</Link></p>

                    <p className='text-[20px]   mt-4'>© 2024 RokectChat. Crafted with <i className='fa fa-heart text-[red]'></i> by Team Coders War</p>
                </div>

            </section>
        </>
    )
}

export default Login
