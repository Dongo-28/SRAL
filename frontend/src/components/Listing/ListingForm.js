import React, { useState } from 'react';
import axios from 'axios';

const ListingForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    images: [],
  });

  const { title, description, price, images } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/listings', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="title" value={title} onChange={onChange} placeholder="Title" required />
      </div>
      <div>
        <textarea name="description" value={description} onChange={onChange} placeholder="Description" required />
      </div>
      <div>
        <input type="number" name="price" value={price} onChange={onChange} placeholder="Price" required />
      </div>
      <div>
        <input type="file" multiple onChange={e => setFormData({ ...formData, images: e.target.files })} />
      </div>
      <button type="submit">Create Listing</button>
    </form>
  );
};

export default ListingForm;