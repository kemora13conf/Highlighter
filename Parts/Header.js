import Clipboard from "../helpers/Clipboard.js";
import { convert_to_svg } from "../helpers/utils.js";
import icons from "./icons/icons.js";
export default class Header {
  constructor(parent) {
    this.parent = parent;

    this.element = document.createElement("div");
    this.element.classList.add("editor-header");
    this.element.innerHTML = `
            <div class='editor-name'>
                ${this.parent.editor.name}
            </div>
            <div class='editor-language'>
                (${this.parent.editor.language.toUpperCase()})
            </div>
        `;
    this.editor_actions = document.createElement("div");

    this.switch_theme = document.createElement("div");
    this.theme_checkBox = document.createElement("input");
    this.sun = convert_to_svg(icons["icon-sun"]);
    this.moon = convert_to_svg(icons["icon-moon"]);
    this.switch_theme.append(this.theme_checkBox, this.sun, this.moon);

    this.copy_action = document.createElement("div");
    this.copy = convert_to_svg(icons["icon-copy"]);
    this.copied = document.createElement("span");
    this.copy_action.append(this.copy, this.copied);

    this.editor_actions.append(this.switch_theme, this.copy_action);

    this.element.appendChild(this.editor_actions);

    this.consig_elements();
    this._config_actions();
  }

  _config_actions() {
    const text = this.parent.editor.lines.join("\n");
    let copied = this.copied;
    this.copy.addEventListener("click", () => {
      let clipboard = new Clipboard();
      clipboard.copy(text);
      copied.classList.add("copied-show");
      setTimeout(() => {
        copied.classList.remove("copied-show");
      }, 1500);
    });
    this.theme_checkBox.addEventListener("change", () => {
      this.parent.update_theme(
        this.parent.editor.theme == "light" ? "dark" : "light"
      );
    });
    this.switch_theme.addEventListener("click", () => {
      this.theme_checkBox.click();
    });
  }
  consig_elements() {
    this.editor_actions.classList.add("editor-actions");
    this.switch_theme.classList.add("editor-action-switch-theme");
    this.theme_checkBox.type = "checkbox";
    this.theme_checkBox.id = "theme-switch";
    this.theme_checkBox.checked =
      this.parent.editor.theme == "light" ? false : true;
    this.sun.classList.add("icon-sun");
    this.moon.classList.add("icon-moon");

    this.copy_action.classList.add("editor-action-copy");
    this.copy.classList.add("icon-copy");
    this.copied.classList.add("copied");
    this.copied.innerHTML = "Copied!";
  }
  render() {
    return this.element;
  }
}
