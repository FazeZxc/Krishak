import { firestore } from "../firebase";
import {useCollectionData }from 'react-firebase-hooks/firestore'
import { ChatMessage } from "./ChatMessage";


export function Chat(){
    const messagesRef =  firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query , {idField: 'id'})

    console.log('messages:', messages);

    return <div>
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}></ChatMessage>)}
        </div>
    </div>

}

