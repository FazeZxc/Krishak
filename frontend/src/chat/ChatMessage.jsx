import { auth } from "../firebase";
import Avatar from '@mui/material/Avatar';

export function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div >
            <div className={` p-2 w-fit message ${messageClass} flex flex-row`} >
                <Avatar src={photoURL}></Avatar>
                <article className="max-w-[600px] m-1 bg-[#22C55E]  p-1 border rounded-tr-lg rounded-br-lg rounded-bl-lg text-wrap">
                    <p className="font-semibold text-left p-2 text-white text-xl ">{text}</p>
                </article>
            </div>
        </div>
    </>)
}

