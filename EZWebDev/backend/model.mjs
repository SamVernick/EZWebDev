import elements from './data/elements.mjs';
import Element from './element.mjs'; //the class for the element being implemented

function createElement(size, margin, border, padding, text) {
    element = new Element(size, margin, border, padding, text);
    elements.push(element);
    return element;
}

function retrieveElement(text) {
    if(text) {
        return elements.filter(element => element.text == text);
    }
    return elements;
}

function getElement(id) {
    return elements.find(element => element.id == id);
}

function updateElement(ID, size, margin, border, padding, text) {
    //ID = getElement(ID.id);
    ID.size = size;
    ID.margin = margin;
    ID.border = border;
    ID.padding = padding;
    ID.text = text;
    return ID;
}

function deleteElement(element) {
    elements.splice(elements.indexOf(element), 1);
    return element;
}


export{ createElement, retrieveElement, getElement, updateElement, deleteElement};