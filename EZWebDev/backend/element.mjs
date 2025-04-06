import {uid} from 'uid';

class Element {
    constructor(size, margin, border, padding, text) {
        this.size = size;
        this.margin = margin;
        this.border = border;
        this.padding = padding;
        this.text = text;
        this.id = uid(10);
    }
}

export default Element;