import CodeEditor from "./CodeEditor/CodeEditor.js";
import sample from "./CodeEditor/sample.js";

const preview = new CodeEditor(
    document.getElementById("editor"),
    {
        code: sample,
        language: "javascript",
    }
);
preview.render();
