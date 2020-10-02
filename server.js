const fs = require('fs')
const path = require('path');
const express = require('express');
const uniqid = require('uniqid');
const PORT = 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

const text = require('./db/db.json')

// HTML routes
// index works even if commented
// app.get('*', (req, res) => {
//     // res.send('index123')
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
app.get('/notes', (req, res) => {
    // res.send('note123')
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// API routes
app.get('/api/notes', (req, res) => {
    // res.send('show me the note')
    res.json(text)
})
app.post('/api/notes', (req, res) => {
    // res.send('show me the note')
    const newText = req.body;
    console.log(uniqid('note'));
    uniqid('note')
    text.push(newText);
    res.json(newText);
})



