const express = require('express');
const router = express.Router();
const axios = require('axios');

const PER_PAGE = 9;

router.get('/', async (req, res) => {
  const { category = 'sports', page = 1 } = req.query;

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${category}&image_type=photo`
    );

    const sorted = response.data.hits.sort((a, b) => a.id - b.id);
    const start = (page - 1) * PER_PAGE;

    const paginated = sorted.slice(start, start + PER_PAGE);
    
    res.json(paginated);
  } catch (error) {
    console.error('Failed to fetch from Pixabay:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
