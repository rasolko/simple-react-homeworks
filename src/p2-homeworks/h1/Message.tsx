import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>
            <div className={s.messageWindow}>
                <div className={s.name}>{props.name}</div>
                {props.message}
                <div className={s.messageTime}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
