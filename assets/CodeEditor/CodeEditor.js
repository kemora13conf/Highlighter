import Header from "./Parts/Header.js";
import LineNumbersBar from './Parts/LineNumbersBar.js';
import TextAria from "./Parts/TextAria.js";

export default class CodeEditor {
    constructor(mounting_point, options=null) {
        this.mounting_point = mounting_point;
        this.options = options;
        this.editor = {
            name: "Code Preview",
            language: "Javascript",
            theme: "dark",
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
        this.container = document.createElement("div");

        this.header = new Header(this.editor);
        this.lineBar = new LineNumbersBar(this.editor);
        this.preview = new TextAria(this.editor);

        this._config_styles_and_scripts();
    }
    _generate_style_element(link){
        const codeEditorStyle = document.createElement("link");
        codeEditorStyle.rel = "stylesheet";
        codeEditorStyle.href = link;
        return codeEditorStyle;
    }
    _generate_script_element(link){
        const codeEditorScript = document.createElement("script");
        codeEditorScript.src = link;
        return codeEditorScript;
    }
    _config_styles_and_scripts(){
        document
            .head.append(
                this._generate_style_element("./assets/CodeEditor/Styles/styles.css"),
                this._generate_style_element(`./assets/CodeEditor/Styles/icons/copy.css`),
                this._generate_style_element(`./assets/CodeEditor/Styles/languages/${this.editor.language}.css`),
                this._generate_script_element("./assets/CodeEditor/Third-Party/Clipboard.js"),
            );
    }
    _config_html_elements(){
        this.parent.classList.add("code-editor");
        this.container.classList.add("editor-container");
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