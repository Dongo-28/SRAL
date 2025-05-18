import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = ({ conversationId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/${conversationId}`);
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, [conversationId]);

  return (
    <div>
      {messages.map(message => (
        <div key={message._id} style={{ margin: '10px', padding: '10px', border: '1px solid #eee' }}>
          <p><strong>{message.sender.name}:</strong> {message.content}</p>
          <p>{new Date(message.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;