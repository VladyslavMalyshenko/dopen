import React from 'react'

import "../styles/pages/chat.scss"
import Server from '../components/UI/serverThumbnailTemplate';
import UserDm from '../components/UI/userDmThumbnailTemplate';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const params = useParams()
    
    return (
        <div className='app-inner-container'>
            <div className='server-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="-20 -13.1856 44.95 21.5">
                    <path d="M -20 -11 L -20 6 C -20 8 -20 8 -18 8 C -5 9 -1 6 -1 -3 C -1 -11 -6 -14 -18 -13 C -20 -13 -20 -13 -20 -11 L -16 4 L -16 -9 C -10 -10 -6 -8 -6 -3 C -6 2 -9 5 -16 4 Z M 6 -7 C 8.005 -7.498 8.005 -7.469 10 -7 C 17 -5 18 6 10 8 C 8.004 8.42 7.978 8.42 6 8 C -1 6 -1 -5 6 -7 M 8 -4 C 3 -4 3 5 8 5 C 13 5 13 -4 8 -4 Z M 21.96 2.355 C 25.879 2.413 26 8 22 8 C 18 8 18.012 2.384 21.96 2.355 Z" fill="#fff"/>
                </svg>
                <Server id={2321} name='SEERVER' image='https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224'/>
                <Server id={421} name='SEERVER2' image='https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224'/>
            </div>

            {
                params.type === "dm" || params.type === undefined ?
                <div className='dms-container'>
                    <UserDm id={1231231233} username={"DASDASDDDAS"} displayName={"dsadasdadasda"} avatar={"https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224"} status={"online"}/>
                    <UserDm id={321} username={"DASDASDDDAS"} displayName={"dsadasdadasda"} avatar={"https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224"} status={"inactive"}/>
                    <UserDm id={512243123} username={"DASDASDDDAS"} displayName={"dsadasdadasda"} avatar={"https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224"} />
                </div>
                : 
                <div className='channels-container'>
                </div>
            }

            <div className='chat-container'>
                <div className='chat-messages-container'>
                    <div className='message-container me'>
                         <div className='message'>
                            oh my God!
                         </div>

                         <img className='message-user-avatar' src='https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224' />
                    </div>

                    <div className='message-container'>

                        <img className='message-user-avatar' src='https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224' />

                         <div className='message'>
                            Holy cow!
                         </div>
                    </div>

                    <div className='message-container'>

                        <img className='message-user-avatar' src='https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224' />

                        <div className='message'>
                            lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum 
                        </div>
                    </div>

                    <div className='message-container me'>
                         <div className='message'>
                            Sorry for this, bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...
                         </div>

                         <img className='message-user-avatar' src='https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224' />
                    </div>

                    <div className='message-container me'>
                         <div className='message'>
                         什么Τι
                         </div>

                         <img className='message-user-avatar' src='https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_44bc_ASD-Repairs.jpg?h=361&w=600&hash=3DAB3DD67F5AD7433CC98C2629B99224' />
                    </div>
                </div>
                <div className='chat-type-input-container'>
                    <input className='chat-input' placeholder='Type your message here...'></input>
                </div>
            </div>
        </div>
    )
}

export default Chat;