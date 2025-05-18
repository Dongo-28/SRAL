import axios from 'axios';

export const getListings = async () => {
  const res = await axios.get('/api/listings');
  return res.data;
};

export const getListing = async (id) => {
  const res = await axios.get(`/api/listings/${id}`);
  return res.data;
};

export const createListing = async (listingData) => {
  const res = await axios.post('/api/listings', listingData);
  return res.data;
};