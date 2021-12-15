const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath))

app.listen(PORT, () => {
    console.log('Server is running ${PORT}')});

app.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'))
    })    

