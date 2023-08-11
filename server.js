const express = require('express');
const app = express();
const path = require('path');

app.use('/public' , express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    const duongDanFile = path.join(__dirname, 'home.html');
    res.sendFile(duongDanFile);
})

app.listen(3000, () => {
    console.log('The app is listening on port 3000!');
})