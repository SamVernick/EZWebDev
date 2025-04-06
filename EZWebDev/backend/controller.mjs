import express from 'express';
import * as model from './model.mjs';
const app = express();
PORT = 3000;

app.post('/create', (req, res) => {
    let rbody = req.body;
    if(rbody.size <= 60, rbody.margin <= 15, rbody.border <= 10, rbody.padding <= 8) {
        let newElement = model.createElement(rbody.size, rbody.margin, rbody.border, rbody.padding);
        res.status(200).json(newElement);
    } else {
        res.status(400).json({"Error": "Invalid request, make sure numbers are in boundaries"});
    }
});

app.get('/create/:id', (req, res) => {
    let ID = model.getElement(req.params.id);
    if(ID) {
        res.status(200).json(ID);
    } else {
        res.status(404).json({"Error": "Element not found"});
    }
});

app.put('/create/:id', (req,res) => {

});

app.delete('/create/:id', (req,res) => {

});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

