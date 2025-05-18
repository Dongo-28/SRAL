import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = ({ conversationId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/messages', {
        conversationId,
        content,
      });
      console.log('Message sent:', res.data);
      setContent('');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Type your message here"
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageForm;