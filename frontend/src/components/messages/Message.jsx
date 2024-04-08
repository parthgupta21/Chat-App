

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className='w-10 rounded-full'>
                    <img
                        alt='Tailwind CSS chat Bubble Component'

                        src='https://via.placeholder.com/150/000000/FFFFFF/?text=User+Avatar'
                    />
                </div>
            </div>

            <div className={'chat-bubble text-white bg-blue-500'}>Hey, Are you okay?</div>
            <div className="chat-fotter opacity-50 text-xs flex gap-1 items-center">3:42</div>


        </div>
        

    )
}

export default Message
