const express = require('express');
const { createListing, getListings } = require('../controllers/listingController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createListing);
router.get('/', getListings);

module.exports = router;
