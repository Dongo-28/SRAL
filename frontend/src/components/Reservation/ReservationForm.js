import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ listingId }) => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
  });

  const { startDate, endDate } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/reservations', {
        listing: listingId,
        startDate,
        endDate,
      });
      console.log('Reservation created:', res.data);
      alert('Reservation created successfully!');
    } catch (err) {
      console.error(err.response.data);
      alert('Error creating reservation');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Start Date:</label>
        <input type="date" name="startDate" value={startDate} onChange={onChange} required />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" name="endDate" value={endDate} onChange={onChange} required />
      </div>
      <button type="submit">Create Reservation</button>
    </form>
  );
};

export default ReservationForm;