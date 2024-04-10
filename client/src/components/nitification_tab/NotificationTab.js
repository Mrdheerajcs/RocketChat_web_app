import React from 'react'

const NotificationTab = ({activeTab}) => {
    return (
        <>
            <div className={`tab-pane  show ${activeTab === 'tab2' ? 'active' : ''}`} id="notifications">
                <div className="settings-header">
                    <h5 className='text-left'>Notifications</h5>
                    <p className='text-left'>Update your account Notifications</p>
                </div>
                <div className="settings-control full-options">
                    <ul>
                        <li className="d-flex align-items-center">
                            <label className="switch me-3">
                                <input type="checkbox" checked="" />
                                <span className="slider round"></span>
                            </label>
                            <div>
                                <span>Allow mobile notifications</span>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <label className="switch me-3">
                                <input type="checkbox" checked="" />
                                <span className="slider round"></span>
                            </label>
                            <div>
                                <span>Notifications from your friends</span>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <label className="switch me-3">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <div>
                                <span>Send notifications by email</span>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <label className="switch me-3">
                                <input type="checkbox" checked="" />
                                <span className="slider round"></span>
                            </label>
                            <div>
                                <span>Allow connected contacts</span>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <label className="switch me-3">
                                <input type="checkbox" checked="" />
                                <span className="slider round"></span>
                            </label>
                            <div>
                                <span>Confirm message requests</span>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <label className="switch me-3">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <div>
                                <span>Profile privacy</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NotificationTab
