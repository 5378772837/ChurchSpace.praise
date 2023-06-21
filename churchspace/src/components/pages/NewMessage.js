import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewMessage(props)  {

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recipientList, setRecipientList] = useState([]);
  const navigator = useNavigate();


  useEffect(() => {
    if (props.user && props.user.token) {
      axios
        .get('http://localhost:8080/user/User/findAllActiveNames', {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        })
        .then((response) => {
          setRecipientList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // Function to handle sending the message
  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      senderName: props.user.name,
      active: true,
      recipientName: recipient,
      message: message,
      subject: subject,
      isRead: false
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
  };

  return (
    <div className='flex-col center fill'>
      <div className='new-message-box white'>
            <div className='flex-row center'>
                <h2>New Message</h2>
            </div>
            <div className='flex-row center large'>
              <label>Recipient:</label>
                <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                  <option value="">Select recipient</option>
                  {recipientList.map((recipient, index) => (
                    <option key={index} value={recipient}>
                      {recipient}
                    </option>
                  ))}
                </select>
            </div>

            <div className='flex-row center'>
              <label>Subject:</label>
            </div>
            <div className='flex-row center'>
              <input className='message-subject' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>

            <div className='flex-row center'>
              <label>Message:</label>
              </div>
              <div className='flex-row center'>
              <textarea className='message-contents' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className='flex-row center'>
            <button className='button2' onClick={sendMessage}>Send</button>
            </div>
            </div>
          </div>
        
      )}


export default NewMessage