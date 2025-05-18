import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationCard from '../components/Reservation/ReservationCard';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get('/api/reservations');
        setReservations(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h1>My Reservations</h1>
      {reservations.length === 0 ? (
        <p>You have no reservations yet.</p>
      ) : (
        reservations.map(reservation => (
          <ReservationCard key={reservation._id} reservation={reservation} />
        ))
      )}
    </div>
  );
};

export default Reservations;