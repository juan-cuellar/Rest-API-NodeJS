const postSchema = require('../models/modelos');
const express = require('express');
const router = express.Router();

//Post Method
router.post('/create', (req, res) => {
    const post = postSchema(req.body);
    post
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

//Get all Method

router.get('/create', (req, res) => {
    
    postSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// Muestra un GET especifico. (id).

router.get('/create/:id', (req, res) => {
    const { id } = req.params;
    postSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


// Actualiza un POST.

router.put('/create/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, autor } = req.body;
    postSchema
        .updateOne({_id: id}, {$set:{titulo, autor}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// Elimina un POST.

router.delete('/create/:id', (req, res) => {
    const { id } = req.params;
    postSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

module.exports = router;