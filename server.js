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

// Functions
function findById(id, textArray) {
    const result = textArray.filter(text => text.id === id)[0];
    return result;
}

// HTML routes
// index works even if commented
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// API routes
app.get('/api/notes', (req, res) => {
    res.json(text)
})
app.post('/api/notes', (req, res) => {
    const newText = req.body;
    // console.log(uniqid('note'));
    req.body.id = uniqid('note');
    text.push(newText);
    res.json(newText);
})

// DEL route
app.delete('/api/notes/:id', (req, res) => {
    // res.send('requset to delete')
    // console.log('requset to delete')
    const id = req.params.id;
    const text = req.body;
    text.removeText(id, (err, text) => {
        if (err) {
        throw err;
        }
    // console.log(removeText())
    res.json(text);

    });
});



