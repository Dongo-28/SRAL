import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingCard from '../components/Listing/ListingCard';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const res = await axios.get('/api/listings');
      setListings(res.data);
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      {listings.map(listing => (
        <ListingCard key={listing._id} listing={listing} />
      ))}
    </div>
  );
};

export default Home;