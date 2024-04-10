import React from 'react';


const EmptyChat = () => {
    return (
        <>
            <div className="empty-chat-container">
                <img className="chat-image w-[300px]" src="./images/empty_chat.png" alt="" />
                <h3 className="empty-chat-heading">RocketChat Web</h3>
                <p className="empty-chat-pragraph">Now send and receive messages without keeping your phone online. <br /> use whatsApps on up to 4 linked divece and one phone at same time</p>
            </div>
        </>
    )
}

export default EmptyChat
