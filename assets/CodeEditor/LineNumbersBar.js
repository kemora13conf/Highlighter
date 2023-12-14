export default class LineNumbersBar {
    constructor (editor){
        this.editor = editor;
        this.lines_number = this.editor.lines_number;
        this.div = document.createElement("div");
        this.div.className = "editor-line-numbers-bar";
    }
    update_lines(){
        if(this.editor.lines_number > this.lines_number){
            for(let i = this.lines_number; i < this.editor.lines_number; i++){
                const line = document.createElement("div");
                line.className = "line-number";
                line.innerHTML = i + 1;
                this.div.appendChild(line);
            }
        }
        else if(this.editor.lines_number < this.lines_number){
            for(let i = this.lines_number; i > this.editor.lines_number; i--){
                this.div.removeChild(this.div.lastChild);
            }
        }
        this.lines_number = this.editor.lines_number;
    }
    _render(){
        this.div.innerHTML = "";
        for(let i = 0; i < this.lines_number; i++){
            const line = document.createElement("div");
            line.className = "editor-line-number";
            line.innerHTML = i + 1;
            this.div.appendChild(line);
        }
    }
    render(){
        this._render();
        return this.div;
    }
}