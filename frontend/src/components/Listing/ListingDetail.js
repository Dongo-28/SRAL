import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await axios.get(`/api/listings/${id}`);
        setListing(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p>Price: ${listing.price}</p>
      <div>
        {listing.images.map((image, index) => (
          <img key={index} src={image} alt={`Listing ${index}`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default ListingDetail;