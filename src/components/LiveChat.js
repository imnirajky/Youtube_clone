import { useEffect, useState } from 'react';
import { generateRandomMessage } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const LiveChat = () => {
    const [chatInput, setChatInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const id = setInterval(async () => {
            const message = generateRandomMessage();
            dispatch(addChat(message));
        }, 1000);

        return () => clearInterval(id);
    }, []);

    const chatMessagesList = useSelector(store => store.liveChat.chatMessages);

    function sendChat() {
        dispatch(addChat({
            User: "Lotus",
            Message: chatInput
        }));
    }

    const [hideChat, setHideChat] = useState(false);

    return (
        !hideChat ? (
            <div className="w-[400px] h-[592px] border-2 rounded bg-white">
                <div className="h-[48px] border-b-2 flex justify-between items-center px-4 py-2 bg-gray-800">
                    <div className="text-lg text-white font-bold">Live chat</div>
                    <div>
                        <MoreVertIcon sx={{ fontSize: "30px", color: "white" }} />
                    </div>
                </div>
                <div className="h-[388px] border-b-2 flex flex-col-reverse overflow-y-auto px-4 py-2">
                    {chatMessagesList.map((message, index) => (
                        <ChatMessage message={message.Message} user={message.User} key={index} />
                    ))}
                </div>
                <div className="h-[112px] border-b-2 flex items-center justify-center text-justify px-4 py-2 bg-gray-100">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        sendChat();
                        setChatInput("");
                    }}>
                        <input
                            className="border-b-2 text-lg text-justify w-full py-2 px-4"
                            type="text"
                            placeholder='Chat...'
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                        />
                        <button className="mx-4 text-gray-600" type="submit">
                            <SendIcon />
                        </button>
                        <button className='mx-4 text-gray-600'>
                            <EmojiEmotionsIcon />
                        </button>
                    </form>
                </div>
                <div className="h-[44px] flex text-lg font-semibold items-center justify-center rounded bg-gray-400 text-white hover:bg-red-600">
                    <button onClick={() => setHideChat(true)}>Hide Live chat</button>
                </div>
            </div>
        ) : (
            <div className="w-[400px]">
                <div className="h-[44px] flex text-lg font-semibold items-center justify-center rounded bg-gray-400 text-white hover:bg-red-600">
                    <button onClick={() => setHideChat(false)}>Show Live chat</button>
                </div>
            </div>
        )
    );
}

export default LiveChat;
