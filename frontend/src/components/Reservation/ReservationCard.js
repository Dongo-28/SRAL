import React from 'react';

const ReservationCard = ({ reservation }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Reservation for {reservation.listing.title}</h3>
      <p>Start Date: {new Date(reservation.startDate).toLocaleDateString()}</p>
      <p>End Date: {new Date(reservation.endDate).toLocaleDateString()}</p>
      <p>Status: {reservation.status}</p>
    </div>
  );
};

export default ReservationCard;