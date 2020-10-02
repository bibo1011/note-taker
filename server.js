const fs = require('fs')
const path = require('path');
const express = require('express');
const PORT = 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

// index works even if commented
// app.get('*', (req, res) => {
//     // res.send('index123')
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/notes', (req, res) => {
    // res.send('note123')
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

