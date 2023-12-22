import { serialize_line } from "../helpers/utils.js";
export default class TextAria {
  constructor(editor) {
    this.editor = editor;
    this.element = document.createElement("div");
    this.element.innerHTML = this.generate_lines();
    this.element.classList.add("editor-text-aria");
  }

  generate_lines() {
    let highlightedCode = "";
    let i = 0;
    this.editor.lines.map((line, index) => {
      const words = serialize_line(line, this.editor.language);
      highlightedCode += `<div class="editor-line" data-line="${index}">${words}</div>`;
    });
    return highlightedCode;
  }
  render() {
    return this.element;
  }
}


