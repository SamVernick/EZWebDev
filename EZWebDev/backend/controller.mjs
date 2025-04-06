import express from 'express';
import * as model from './model.mjs';
import cors from'cors';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


app.post('/', (req, res) => {
    let rbody = req.body;
    if(rbody.size <= 60 && rbody.margin <= 15 && rbody.border <= 10 && rbody.padding <= 8 && (typeof(rbody.text) == 'string' ) && rbody.text.length <= 50) {
        let newElement = model.createElement(rbody.size, rbody.margin, rbody.border, rbody.padding, rbody.text);
        res.status(200).json(newElement);
    } else {
        res.status(400).json({"Error": "Invalid request, make sure numbers are in boundaries"});
    }
});

app.get('/', (req, res) => {
    let element = model.retrieveElement(req.query.text);
    if(element != null) {
        res.status(200).json(element);
    } else {
        res.status(200).json();
    }
});

app.get('/:id', (req, res) => {
    let ID = model.getElement(req.params.id);
    if(ID) {
        res.status(200).json(ID);
    } else {
        res.status(404).json({"Error": "Element not found"});
    }
});

app.put('/:id', (req, res) => {
    const ID = model.getElement(req.params.id);
    let rbody = req.body;
    if(rbody.size > 60  &&rbody.margin > 15 && rbody.border > 10 && rbody.padding > 8 && typeof(rbody.text) != 'string' && rbody.text.length > 50) {
        res.status(400).json({"Error": "Improper values inserted!"});
    } else if (!ID) {
        res.status(404).json({"Error": "Element can't be found :("});
    } else {
        let updatedElement = model.updateElement(ID, rbody.size, rbody.margin, rbody.border, rbody.padding, rbody.text);
        res.status(200).json(updatedElement);
    }
});

app.delete('/:id', (req, res) => {
    const element = model.getElement(req.params.id);
    if(element) {
        model.deleteElement(element);
        res.status(204).json(element);
    } else {
        res.status(404).json({"Error": "Element can't be found :("});
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

