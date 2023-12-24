const { Highlighter } = highlighter;

const html = new Highlighter(
    document.getElementById("html"),
    {
        code: sample.html,
        language: "html",
        theme: "dark"
    }
);
html.render();

const css = new Highlighter(
    document.getElementById("css"),
    {
        code: sample.css,
        language: "css",
        theme: "light"
    }
);
css.render();

const javascript = new Highlighter(
    document.getElementById("js"),
    {
        code: sample.javascript,
        language: "javascript",
        theme: "dark"
    }
);
javascript.render();

