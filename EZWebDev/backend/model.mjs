import Element from './element.mjs';

function createElement(size, margin, border, padding) {
    element = new Element(size, margin, border, padding);
    return element;
}

function getElement() {

}

function deleteElement() {

}


export{ createElement, getElement, deleteElement};