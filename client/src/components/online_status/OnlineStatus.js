import React from 'react'

const OnlineStatus = () => {
    return (
        <>
            <div className="online-status flex px-2">
                {/* #1 */}
                <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                    <img src="./images/avatar-8.jpg" alt="" className="w-[53px] rounded-md" />
                    <div className="status-name mt-2">
                        <p className="text-[12px] font-bold text-[#585858]">helen</p>
                    </div>
                </div>
                {/* #1 */}
                <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                    <img src="./images/avatar-7.jpg" alt="" className="w-[53px] rounded-md" />
                    <div className="status-name mt-2">
                        <p className="text-[12px] font-bold text-[#585858]">Prince</p>
                    </div>
                </div>
                {/* #1 */}
                <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                    <img src="./images/avatar-13.jpg" alt="" className="w-[53px] rounded-md" />
                    <div className="status-name mt-2">
                        <p className="text-[12px] font-bold text-[#585858]">Hathan</p>
                    </div>
                </div>
                {/* #1 */}
                <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                    <img src="./images/avatar-3.jpg" alt="" className="w-[53px] rounded-md" />
                    <div className="status-name mt-2">
                        <p className="text-[12px] font-bold text-[#585858]">Maria</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlineStatus
