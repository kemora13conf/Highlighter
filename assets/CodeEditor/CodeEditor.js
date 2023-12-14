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
        this.textAria.setAttribute("contenteditable", true);
        this.textAria.innerHTML = this.generate_lines().join("");
        this.textAria.classList.add("editor-text-aria");
    }
    generate_lines(){
        let generated_lines = [];
        if(this.editor.lines){
            this.editor.lines.forEach(line => {
                const line_element = document.createElement("div");
                line_element.classList.add("editor-line");
                const words = line.split(" ");
                words.forEach(word => {
                    keywords.forEach(keyword => {
                        if(keyword.key == word){
                            line_element.innerHTML += keyword.value + " ";
                        }else{
                            line_element.innerHTML += word + " ";
                        }
                    });
                });                
                generated_lines.push(line_element);
            });
        }
        return generated_lines;
    }
    
    _config(){
        window.addEventListener("keyup", (event) => {
            console.log(event);
            if(event.target == this.textAria){
                this.editor.lines = this.textAria.textContent;
                this.editor.lines_number = this.editor.lines.length;
                this.lineBar.update_lines();
            }
        });
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