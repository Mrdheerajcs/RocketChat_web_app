import React from 'react'

const History_tab = ({activeTab}) => {
    return (
        <>
            <div className={`tab-pane  show ${activeTab === 'tab3' ? 'active' : ''}`} id="history">
                <div className="settings-header">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h5 className='text-left'>Device History</h5>
                            <p className='text-left'>If you see a device here that you believe wasn’t you, please contact
                                our account fraud department immediately.</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <button className="btn logout-btn">Log out all Devices</button>
                        </div>
                    </div>
                </div>
                <div className="logged-devices-settings">
                    <div className="logged-device align-items-center d-flex">
                        <div className="device-details">
                            <h5 className='text-left'>IPhone 11</h5>
                            <p className='text-left'>Brownsville, VT · Jun 11 at 10:05am</p>
                        </div>
                        <div className="logged-btn ms-auto">
                            <a href="#">Sign Out</a>
                        </div>
                    </div>
                    <div className="logged-device align-items-center d-flex">
                        <div className="device-details">
                            <h5 className='text-left'>IMac OSX · Safari 10.2</h5>
                            <p className='text-left'>Brownsville, VT · Jun 11 at 10:05am</p>
                        </div>
                        <div className="logged-btn ms-auto">
                            <a href="#">Sign Out</a>
                        </div>
                    </div>
                    <div className="logged-device align-items-center d-flex">
                        <div className="device-details">
                            <h5 className='text-left'>HP Laptop Win10</h5>
                            <p className='text-left'>Brownsville, VT · Jun 11 at 10:05am</p>
                        </div>
                        <div className="logged-btn ms-auto">
                            <a href="#">Sign Out</a>
                        </div>
                    </div>
                    <div className="logged-device align-items-center d-flex">
                        <div className="device-details">
                            <h5 className='text-left'>IMac OSX · Edge browser</h5>
                            <p className='text-left'>Brownsville, VT · Jun 11 at 10:05am</p>
                        </div>
                        <div className="logged-btn ms-auto">
                            <a href="#">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History_tab
