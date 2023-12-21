import Header from "./Header.js";
import LineNumbersBar from './LineNumbersBar.js';
import { serialize_line } from "./utils.js";

export default class CodeEditor {
    constructor(mounting_point, options=null) {
        this.mounting_point = mounting_point;
        this.options = options;
        this.editor = {
            name: "CodeEditor",
            language: "javascript",
            lines_number: 1,
            lines: [],
        };
        if (this.options) {
            this.editor.name = this.options.name ? this.options.name : this.editor.name;
            this.editor.language = this.options.language ? this.options.language : this.editor.language;
            if (this.options.code?.length > 0) {
                this.editor.lines = this.options.code.trim().split("\n");
                this.editor.lines_number = this.editor.lines.length;
            }
        }

        this.parent = document.createElement("div");
        this.parent.classList.add("code-editor");
        
        this.lineBar = new LineNumbersBar(this.editor);
        this.textAria = document.createElement("div");
        this.textAria.innerHTML = this.generate_lines();
        this.textAria.classList.add("editor-text-aria");
    }
    
    generate_lines(){
        let highlightedCode = '';
        this.editor.lines.map((line, index) => {
            const words = serialize_line(line);
            highlightedCode += `<div class="editor-line" data-line="${index}">${words}</div>`;
        });
        // highlightedCode += `<div class="editor-line" data-line="0">${serialize_line(this.editor.lines[13])}</div>`;
        return highlightedCode;
    }
    
    _config(){
        
    }
    _render(){
        const header = new Header(this.editor);
        this.parent.appendChild(header.render());

        const container = document.createElement("div");
        container.classList.add("editor-container");

        container.appendChild(this.lineBar.render());
        container.appendChild(this.textAria);
        this.parent.appendChild(container);

        this.mounting_point.appendChild(this.parent);
    }
    render () {
        this._config();
        this._render();
    }
}