const noteData = require('../data/db.json');
var express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/notes', function (req, res) {
    res.json(noteData)

});

router.post('/notes', function (req, res) {
    console.log('requrest is:', req.body);

    const newNote = req.body
    var id;
    if (noteData.length === 0) {
        id = 1;
    }
    else {
        id = noteData[noteData.length - 1].id;
        id++;
    }
    newNote.id = id;

    noteData.push(newNote);
    fs.writeFile("./data/db.json", JSON.stringify(noteData), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.status(200).json(newNote);

});

router.delete('/notes/:id', function (req, res) {
    const id = req.params.id;
    console.log("id is", req.params.id);

    for (var i = 0; i < noteData.length; i++) {
        if (noteData[i].id == id) {
            console.log('found iteam, index is ', i);
            noteData.splice(i, 1);
        }

    }
    console.log("notes sre", noteData);

    fs.writeFile("./data/db.json", JSON.stringify(noteData), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });



    res.status(200).json({ "deleted": id })

});


module.exports = router;

