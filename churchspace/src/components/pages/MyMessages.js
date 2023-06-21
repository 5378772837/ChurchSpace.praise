import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/myMessages.css';

function MyMessages(props) {

  const [messages, setMessages] = useState([{id:0, subject:'temp subject', message:'temp message', senderName:'temp name', recipientName:'temp rec', messageDate:'1900-01-01', active:true}]);
  const [responseMessages,setResponseMessages] = useState([{id:0, subject:'temp subject', message:'temp message', senderName:'temp name', recipientName:'temp rec', messageDate:'1900-01-01', active:true}]);
  const [myName, setMyName] = useState();

  const navigator = useNavigate();

  const createMessage = ()=> {
    navigator("/NewMessage");
  };

  useEffect(() => {
    if(myName === props.user.name){
      getMyMessages();
      }else{setMyName(props.user.name)}
  }, [myName]);


  useEffect(() => {
    setMessages(responseMessages)
  }, [responseMessages]);

  const getMyMessages = () =>{

    axios
    .get(`http://localhost:8080/Message/User/findMyMessages/${myName}`, {
      headers: {
        Authorization: `Bearer ${props.user.token}`,
      },
    })
    .then((response) => {
      console.log('response data', response.data);
      if (Array.isArray(response.data)) {
        setResponseMessages(response.data);
      } else {
        setResponseMessages([response.data]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const markRead = (messageInst) =>{

    const newMessage = {
      ...messageInst,
      isRead: true,
      active: true
    };
  
    axios
      .post('http://localhost:8080/Message/User/addMessage', newMessage, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then(() => {
        navigator('/MyMessages');
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });

  }

  const deleteMessage = (messageInst) =>{

    const newMessage = {
      ...messageInst,
      active: false,
      isRead: true
    };
  
    axios
      .post('http://localhost:8080/Message/User/addMessage', newMessage, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then(() => {
        navigator('/MyMessages');
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });

  }


  if (messages.id === 0) {
    return <div className="flex-col fill">
            <div className='message-header'>
              <button onClick={createMessage}>New Message</button>
            </div>
            <div className='message-body'>
            <div className='flex-row'>
                Loading Your Messages now. If you don't have any, visit the message board or start a conversation.
              </div>
              </div>
          </div>
  }

  return (
    <div className="flex-col fill">
      <div className='message-header'>
              <button className='button2'onClick={createMessage}>New Message</button>
            </div>
            <div className='message-body'>
        {messages.map((messageInst) => {
          const { id, subject, message, senderName, recipientName, messageDate, active } = messageInst;
          return (
           
            <div className='message-box'  key={id}>
              <div className="message-info-col">
                <div className="flex-row">Date: {messageInst.messageDate}</div>
                <div className="flex-row">From: {messageInst.senderName}</div>
                <div className="flex-row">To: {messageInst.recipientName}</div>
                <div className="flex-row">Subject: {messageInst.subject}</div>
              </div>
              <div className="message-disp-col">
                <div className="flex-row">Message:</div>
                <div className="flex-row flex-wrap medium">{messageInst.message}</div>
                <div className='flex-row'>
                <button className='button2' onClick={() => markRead(messageInst)}>Mark Read</button>
                <button className='button2' onClick={() => deleteMessage(messageInst)}>Delete Message</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyMessages;