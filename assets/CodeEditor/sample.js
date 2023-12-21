export default `
import Header from "./Header.js";
import LineNumbersBar from './LineNumbersBar.js';
import keywords from './../json/javascript.js';

export default class CodeEditor {
    constructor(mounting_point, options=null) {
        this.mounting_point = mounting_point;
        this.options = options;
        this.editor = {
            name: "CodeEditor",
            language: "javascript",
            lines_number: 1,
            lines: [],
            cursor: {
                x: 0,
                y: 0
            }
        };
        if (this.options) {
            this.editor.name = this.options.name ? this.options.name : this.editor.name;
            this.editor.language = this.options.language ? this.options.language : this.editor.language;
            if (this.options.code?.length > 0) {
                this.editor.lines = this.options.code.split("\n");
                this.editor.lines_number = this.editor.lines.length;
            }
        }

        this.parent = document.createElement("div");
        this.parent.classList.add("code-editor");
        
        this.lineBar = new LineNumbersBar(this.editor);
        this.textAria = document.createElement("div");
        this.textAria.innerHTML = this.generate_lines().join("");
        this.textAria.classList.add("editor-text-aria");
    }
    render () {
        this._config();
        this._render();
    }
}
`