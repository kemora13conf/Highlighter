export default `
export default class Header {
    constructor(editor) {
      this.editor = editor;
  
      this.element = document.createElement("div");
      this.element.classList.add("editor-header");
      this.element.innerHTML = \`
              <div class='editor-name'>
                  \${this.editor.name}
              </div>
              <div class='editor-language'>
                  (\${this.editor.language})
              </div>
          \`;
      this.editor_actions = document.createElement("div");
      this.editor_actions.classList.add("editor-actions");
      this.copy = document.createElement("span");
      this.copy.classList.add("icon-copy");
      this.copied = document.createElement("span");
      this.copied.classList.add("copied");
      this.copied.innerHTML = "Copied!";
      this.editor_actions.append(this.copy, this.copied);
  
      this.element.appendChild(this.editor_actions);
      
      this._config_actions();
    }
    _config_actions() {
      const text = this.editor.lines.join("\\n");
      let copied = this.copied;
      this.copy.addEventListener("click", () => {
          let clipboard = new Clipboard('.icon-copy', {
              text: function(trigger) {
                  return text;
              }
          });
          clipboard.on('success', function(e) {
              copied.classList.add("copied-show");
              setTimeout(() => {
                  copied.classList.remove("copied-show");
              }, 1500);
  
          });
          clipboard.on('error', function(e) {
              console.log(e);
          });
  
      });
    }
    render() {
      return this.element;
    }
  }
`
