import React, { Component } from 'react'
import './Style/CardChatContent.css';

export default class CardChatContent extends Component {

    senderMessage(message) {
        return (<div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                        <div className="card-text">{message.content}</div>
                        <span className="msg_time_send">{message.date}</span>
                    </div>
                    <div className="img_cont_msg">
                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" alt="hai" className="rounded-circle user_img_msg"/>
                    </div>
                </div>);
    }

    receiverMessage(message) {
        return (<div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" alt="hai" className="rounded-circle user_img_msg"/>
                    </div>
                    <div className="msg_cotainer">
                        <div className="card-text">{message.content}</div>
                        <span className="msg_time">{message.date}</span>
                    </div>

                </div>);
    }

    render() {
        const { messages, person } = this.props

        return (
            <div>
                {
                messages.map((message) =>
                {
                    let receiver = message.from === person

                    if(receiver) {
                        return this.receiverMessage(message)
                    } else {
                        return this.senderMessage(message)
                    }     
                }  
                )}
                
            </div>
        )
    }
}
