import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageList from '../components/Message/MessageList';
import MessageForm from '../components/Message/MessageForm';

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await axios.get('/api/conversations');
        setConversations(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchConversations();
  }, []);

  return (
    <div style={{ display: 'flex', height: '80vh' }}>
      <div style={{ width: '30%', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h2>Conversations</h2>
        {conversations.map(conversation => (
          <div
            key={conversation._id}
            onClick={() => setSelectedConversation(conversation)}
            style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
          >
            <p>{conversation.participants.map(p => p.name).join(', ')}</p>
          </div>
        ))}
      </div>
      <div style={{ width: '70%', padding: '10px' }}>
        {selectedConversation ? (
          <>
            <MessageList conversationId={selectedConversation._id} />
            <MessageForm conversationId={selectedConversation._id} />
          </>
        ) : (
          <p>Select a conversation to view messages</p>
        )}
      </div>
    </div>
  );
};

export default Messages;