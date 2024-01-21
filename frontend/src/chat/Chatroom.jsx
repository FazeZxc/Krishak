import { auth } from "../firebase";
import { useRef } from "react";
import { firestore } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import firebase from "firebase/compat/app";
import SendIcon from '@mui/icons-material/Send';

export function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<div className="border-4 flex flex-col justify-center items-center bg-[#272727]" >
        <div className="w-[90%] h-[1000px] border-4 overflow-scroll bg-gray-500 rounded-xl hiddenScroll">
            <main>

                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

                <span ref={dummy}></span>

            </main>


        </div>
        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className='w-[450px] text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-green dark:focus:shadow-outline-green focus:shadow-lg border border-solid border-slate-300 hover:border-green-500 dark:hover:border-green-500 focus:border-green-500 dark:focus:border-green-500 dark:border-slate-600 bg-white dark:bg-white text-slate-900 dark:text-slate-900 focus-visible:outline-0'
                placeholder="Type something…" />

            <button type="submit" disabled={!formValue}><SendIcon sx={{
                color: "#22C55E",
                fontSize: '30px'
            }}></SendIcon></button>

        </form>
    </div>)
}