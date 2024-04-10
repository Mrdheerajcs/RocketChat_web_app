import React from 'react'

const SettingControl = () => {
  return (
   <>
   <div className="settings-control">
                            <ul>
                                <li className="d-flex align-items-center">
                                    <div>
                                        <span>Desktop Notification</span>
                                    </div>
                                    <label className="switch ms-auto">
                                        <input type="checkbox" checked="" />
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div>
                                        <span>Sound Notification</span>
                                    </div>
                                    <label className="switch ms-auto">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div>
                                        <span>Profile privacy</span>
                                    </div>
                                    <label className="switch ms-auto">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div>
                                        <span>Two-step security verification</span>
                                    </div>
                                    <label className="switch ms-auto">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
   </>
  )
}

export default SettingControl
