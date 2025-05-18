import axios from 'axios';

export const getMessages = async (conversationId) => {
  const res = await axios.get(`/api/messages/${conversationId}`);
  return res.data;
};

export const sendMessage = async (messageData) => {
  const res = await axios.post('/api/messages', messageData);
  return res.data;
};

export const getConversations = async () => {
  const res = await axios.get('/api/conversations');
  return res.data;
};