import CodeEditor from "./CodeEditor/CodeEditor.js";
import sample from "./CodeEditor/sample.js";

const html = new CodeEditor(
    document.getElementById("html"),
    {
        code: sample.html,
        language: "html",
        theme: "dark"
    }
);
html.render();

const css = new CodeEditor(
    document.getElementById("css"),
    {
        code: sample.css,
        language: "css",
        theme: "light"
    }
);
css.render();

const javascript = new CodeEditor(
    document.getElementById("js"),
    {
        code: sample.javascript,
        language: "javascript",
        theme: "dark"
    }
);
javascript.render();

