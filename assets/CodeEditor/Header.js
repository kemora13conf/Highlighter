export default class Header {
    constructor(editor){
        this.editor = editor;
        this.element = document.createElement("div");
        this.language = null;
    }
    render() {
        this.element.classList.add("editor-header");
        this.element.innerHTML = `
            <div class='editor-name'>
                ${this.editor.name}
            </div>
            <div class='editor-language'>
                ${this.editor.language}
            </div>
        `;
        return this.element;
    }
}