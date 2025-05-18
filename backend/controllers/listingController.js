const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
  const { title, description, price, images } = req.body;
  try {
    const newListing = new Listing({
      title,
      description,
      price,
      images,
      user: req.user.id,
    });

    const listing = await newListing.save();
    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};