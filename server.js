const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));
const { animals } = require('./data/animals.json');
const { zookeepers } = require('./data/zookeepers.json')




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

