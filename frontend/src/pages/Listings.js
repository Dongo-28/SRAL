import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingCard from '../components/Listing/ListingCard';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get('/api/listings');
        setListings(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1>All Listings</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {listings.map(listing => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Listings;