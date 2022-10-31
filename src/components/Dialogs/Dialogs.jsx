import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)


    let mewMessage = React.createRef();

    let writeMessage = () => {
        let textMessage = mewMessage.current.value;
        alert(textMessage);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea ref={mewMessage}></textarea>
            </div>
            <div>
                <button onClick={writeMessage}>Send message</button>
            </div>

        </div>)
}

export default Dialogs;