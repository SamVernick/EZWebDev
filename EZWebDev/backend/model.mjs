import elements from './data/elements.mjs';
import Element from './element.mjs'; //the class for the element being implemented

function createElement(size, margin, border, padding) {
    element = new Element(size, margin, border, padding);
    elements.push(element);
    return element;
}

function getElement(id) {
    return elements.find(element => element.id == id);
}

function updateElement(ID, size, margin, border, padding) {
    ID.size = size;
    ID.margin = margin;
    ID.border = border;
    ID.padding = padding;
    return ID;
}

function deleteElement(element) {
    elements.splice(elements.indexOf(element), 1);
    return element;
}


export{ createElement, getElement, updateElement, deleteElement};