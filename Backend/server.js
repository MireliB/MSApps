require('dotenv').config();

const express = require("express");
const cors = require("cors"); 
const photoRoutes = require('./routes/photoRoutes');

const app = express();
app.use(cors());

const PORT = process.env.PORT;
app.use('/api/photos', photoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));