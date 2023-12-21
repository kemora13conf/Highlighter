import Header from "./Header.js";
import LineNumbersBar from './LineNumbersBar.js';
import jsKeywords from './../json/javascript.js';

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
        if(this.editor.lines){
            let nlines = this.editor.lines;
            const highlightedCode = nlines.map(line => {
                let tokens = line.split(/(\b)/);
                console.log(tokens);
                let keywords = Object.keys(jsKeywords);
                let values = Object.values(jsKeywords);
                const highlightedLine = tokens.map(token => {
                    if(keywords.includes(token)){
                        return values[keywords.indexOf(token)];
                    }
                    if(token.includes(" ")){
                        let n = "";
                        for(let i = 0; i < token.length; i++){
                            if(token[i] == " "){
                                if((token[i-1] == '"' || token[i-1] == "'") && (token[i+1] == '"' || token[i+1] == "'")){
                                    n += " ";
                                }
                                n += "&nbsp;";
                            }else{
                                n += token[i];
                            }
                        }
                        return n;
                    }
                    return token;
                }).join("");
                return `<div class="editor-line">${highlightedLine}</div>`;
            })
            return highlightedCode.join("");
        }
        return "<div class='editor-line'> </div>"
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