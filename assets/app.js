let codeEditor = CodeEditor.default;
const html = new codeEditor(
    document.getElementById("html"),
    {
        code: sample.html,
        language: "html",
        theme: "dark"
    }
);
html.render();

const css = new codeEditor(
    document.getElementById("css"),
    {
        code: sample.css,
        language: "css",
        theme: "light"
    }
);
css.render();

const javascript = new codeEditor(
    document.getElementById("js"),
    {
        code: sample.javascript,
        language: "javascript",
        theme: "dark"
    }
);
javascript.render();

