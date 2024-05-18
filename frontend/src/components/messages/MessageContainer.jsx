import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import MessageInput from './MessageInput';
import { useAuthContext } from '../../context/AuthContext';
import Messages from './Messages';
import { TiMessages } from 'react-icons/ti'; 
import { BsThreeDotsVertical } from 'react-icons/bs';

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    
    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="flex flex-col h-full">
            {
                !selectedConversation ? (<NoChatSelected />) : (
                    <>
                        {/* Header */}
                        <div className="bg-gray-900 px-4 py-2 mb-2 text-left flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    src={selectedConversation.profilePic}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <span className="text-white font-bold text-lg md:text-xl">{selectedConversation.fullName}</span>
                            </div>
                            <div>
                                <BsThreeDotsVertical color="white" />
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto px-2 md:px-4">
                            <Messages />
                        </div>

                        {/* Input */}
                        <div className="border-t-2 border-gray-200 p-2 md:p-4">
                            <MessageInput />
                        </div>
                    </>
                )
            }
        </div>
    );
};
export default MessageContainer;


const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName}  ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};

