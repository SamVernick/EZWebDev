class Element {
    constructor(size, margin, border, padding) {
        this.size = size;
        this.margin = margin;
        this.border = border;
        this.padding = padding;
        this.id = uid(10);
    }
}

export default Element;