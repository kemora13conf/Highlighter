import Header from "./Parts/Header.js";
import LineNumbersBar from './Parts/LineNumbersBar.js';
import TextAria from "./Parts/TextAria.js";
import themes from "./Themes/themes.js";

class Highlighter {
    constructor(mounting_point, options=null) {
        this.mounting_point = mounting_point;
        this.mounting_point.innerHTML = "";
        this.options = options;
        this.editor = {
            name: "Highlighter",
            language: "no_language",
            theme: "dark",
            lines_number: 1,
            lines: [],
        };
        if (this.options) {
            this.editor.name = this.options.name ? this.options.name : this.editor.name;
            this.editor.language = this.options.language ? this.options.language : this.editor.language;
            this.editor.theme = this.options.theme ? this.options.theme : this.editor.theme;
            if (this.options.code?.length > 0) {
                this.editor.lines = this.options.code.trim().split("\n");
                this.editor.lines_number = this.editor.lines.length;
            }
        }

        this.parent = document.createElement("div");
        this.container = document.createElement("div");

        this.header = new Header(this);
        this.lineBar = new LineNumbersBar(this.editor);
        this.preview = new TextAria(this.editor);
    }
    _config_html_elements(){
        this.parent.classList.add("code-editor");
        this.container.classList.add("editor-container");

        const theme = themes[this.editor.theme];
        for (const [key, value] of Object.entries(theme)) {
            this.parent.style.setProperty(key, value);
        }
    }
    update_theme(theme){
        this.editor.theme = theme;
        this._config_html_elements();
    }
    _render(){
        this._config_html_elements();
        this.parent.appendChild(this.header.render());
        this.container.appendChild(this.lineBar.render());
        this.container.appendChild(this.preview.render());
        this.parent.appendChild(this.container);

        this.mounting_point.appendChild(this.parent);
    }
    render () {
        this._render();
    }
}

export {Highlighter};