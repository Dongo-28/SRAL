import React from 'react';

const ListingCard = ({ listing }) => {
  return (
    <div>
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
      <p>Price: ${listing.price}</p>
      {listing.images.map((image, index) => (
        <img key={index} src={image} alt={`Listing ${index}`} />
      ))}
    </div>
  );
};

export default ListingCard;