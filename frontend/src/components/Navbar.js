import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f8f9fa' }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/listings">Listings</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/messages">Messages</Link>
    </nav>
  );
};

export default Navbar;