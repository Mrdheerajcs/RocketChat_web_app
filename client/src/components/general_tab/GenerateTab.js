import React, { useEffect, useState } from 'react'
import { DeleteAccount} from "../../api/Api"
import { useNavigate } from 'react-router-dom';
import { useSocket } from "../../context/SocketProvider";

const GenerateTab = ({ activeTab, setUpdate, update }) => {


    const { logout, setLogout} = useSocket();

    let navigate = useNavigate();

    // react hook
    // const [generlFormData, setGeneralFormData] = useState({});

    // react hook
    const [generlFormData, setGeneralFormData] = useState({
        fullName: '',
        phoneNumber: '',
        nickName: '',
        location: '',
        bio: '',
        profilePic: null,
    });
    // react hook

    const handleGeneralSubmit = async (event) => {
        event.preventDefault();
        // console.log(generlFormData);

        const formData = new FormData();
        formData.append('fullName', generlFormData.fullName);
        formData.append('phoneNumber', generlFormData.phoneNumber);
        formData.append('nickName', generlFormData.nickName);
        formData.append('location', generlFormData.location);
        formData.append('bio', generlFormData.bio);
        formData.append('facebook', generlFormData.facebook);
        formData.append('twitter', generlFormData.twitter);
        formData.append('linkedin', generlFormData.linkedin);
        formData.append('instagram', generlFormData.instagram);
        formData.append('youtube', generlFormData.youtube);
        formData.append('profilePic', generlFormData.profilePic); // Append the file

        const response = await fetch('http://localhost:5000/api/profile/updateprofile', {
            method: 'PUT',
            body: formData,
            headers: {
                'auth-token': localStorage.getItem('token'),
            }
        });

        const json = await response.json();

        // Reset form data
        setGeneralFormData({
            fullName: '',
            phoneNumber: '',
            nickName: '',
            profilePic: null,
            location: '',
            bio: '',
            facebook:'',
            twitter:'',
            instagram:'',
            youtube:'',
            linkedin:''
        });

        if (json.success) {
            window.alert("Profile updated Now")
            setUpdate(!update);
            // After update do not reload page and update profile on hitting button
        }
        else {
            window.alert("Some Error Occur, Reload the page and try again")
        }
    }

    const handleChange = (event) => {
        // console.log(event.target.value, event.target.name);
        const { name, value } = event.target;
        setGeneralFormData({
            ...generlFormData,
            [name]: value
        });
    }


    const handlefileChange = (e) => {
        const { name, files } = e.target;
        console.log(files[0])
        setGeneralFormData({
            ...generlFormData,
            [name]: files[0]
        });
    }


    useEffect(() => {
        // console.log(generlFormData);
    }, [generlFormData])


    const handleDeleteAccount = async ()=>{

          let response =  await DeleteAccount()

          if(response.success){
             navigate("/login")
             
             await localStorage.removeItem('token');
             setLogout(!logout)
             navigate("/login")

             window.alert("Account has been deleted!")
          }

    }

    return (
        <>
            <div className={`tab-pane  show ${activeTab === 'tab1' ? 'active' : ''}`} id="general">
                <div className="settings-header flex flex-col items-start justify-center">
                    <h5>Account Settings</h5>
                    <p>Update your account details</p>
                </div>
                <div className="settings-control p-3">
                    <form onSubmit={handleGeneralSubmit} method="put" action="http://localhost:5000/api/profile/updateprofile" enctype='multipart/form-data'>
                        <div className="form-col form-body">
                            <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            onChange={handleChange}
                                            className="form-control form-control-lg group_formcontrol"
                                            name="fullName" type="text" value={generlFormData.fullName} />
                                    </div>
                                </div>

                                <div className="col-md-6 col-xl-4">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            onChange={handleChange}
                                            className="form-control form-control-lg group_formcontrol"
                                            name="phoneNumber" type="text" value={generlFormData.phoneNumber} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="form-group">
                                        <label>Nick name <span className="">(Optional)</span></label>
                                        <input
                                            onChange={handleChange}
                                            className="form-control form-control-lg group_formcontrol"
                                            name="nickName" type="text" value={generlFormData.nickName} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="form-group">
                                        <label>Choose profile picture</label>
                                        <div
                                            className="custom-input-file form-control form-control-lg group_formcontrol">
                                            <input onChange={handlefileChange} type="file" className="" name="profilePic" />
                                            <span className="browse-btn">Browse File</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input
                                            onChange={handleChange}
                                            className="form-control form-control-lg group_formcontrol"
                                            name="location" type="text" value={generlFormData.location} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-xl-12">
                                    <div className="form-group">
                                        <label>Bio</label>
                                        <textarea
                                            onChange={handleChange}
                                            className="form-control form-control-lg group_formcontrol" name='bio' value={generlFormData.bio}></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="form-row profile_form m-0 align-items-center">
                                <div className="me-4">
                                    <button type="submit" className="bg-[#420ba1]   mb-0 btn update-btn" >
                                        Update Details
                                    </button>
                                </div>
                                <div className="cancel-btn">
                                    <a href="#" data-bs-dismiss="modal"
                                        aria-label="Close">Cancel</a>
                                </div>
                            </div> */}
                        </div>
                        <hr className='my-4'></hr>

                        <div className="social-settings  ">
                            <h4 className="text-left my-3">Social Links</h4>
                            <div className="form-col form-body">

                                <div className="row">
                                    <div className="col-md-6 col-xl-4">
                                        <div className="form-group">
                                            <input
                                            onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                name="facebook" type="text"
                                                placeholder="Facebook Link"value={generlFormData.facebook} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <div className="form-group">
                                            <input
                                            onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                name="twitter" type="text"
                                                placeholder="Twitter Link" value={generlFormData.twitter}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <div className="form-group">
                                            <input
                                            onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                name="instagram" type="text"
                                                placeholder="Instagram Link" value={generlFormData.instagram} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <div className="form-group">
                                            <input
                                            onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                name="linkedin" type="text"
                                                placeholder="Linkedin Link" value={generlFormData.linkedin} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <div className="form-group">
                                            <input
                                            onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                name="youtube" type="text"
                                                placeholder="Youtube Link" value={generlFormData.youtube} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="form-row profile_form m-0 align-items-center">
                            <div className="me-4">
                                <button type="submit" className="bg-[#420ba1]   mb-0 btn update-btn" >
                                    Update Details
                                </button>
                            </div>
                            <div className="cancel-btn">
                                <a href="#" data-bs-dismiss="modal"
                                    aria-label="Close">Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="settings-delete py-4">
                    <div className="row align-items-center justify-content-between ">
                        <div className="col-md-8 flex flex-col items-start justify-center">
                            <h5>Delete your account</h5>
                            <p>Please note, deleting your account is a permanent action and will no
                                be recoverable once completed.</p>
                        </div>
                        <div className="col-md-4">
                            <button onClick={handleDeleteAccount} type="button" className="btn btn-delete   ">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenerateTab
