import axios from 'axios';

export const getReservations = async () => {
  const res = await axios.get('/api/reservations');
  return res.data;
};

export const createReservation = async (reservationData) => {
  const res = await axios.post('/api/reservations', reservationData);
  return res.data;
};

export const updateReservationStatus = async (id, status) => {
  const res = await axios.put(`/api/reservations/${id}`, { status });
  return res.data;
};