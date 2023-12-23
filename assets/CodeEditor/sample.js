export default {
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Editore</title>
    <link rel="stylesheet" href="./assets/main.css">
</head>
<body
    class="min-h-screen w-full flex flex-col items-center justify-center bg-slate-100"
>
    <div class="editor" id="editor">
        <h1 class="text-2xl font-bold text-center">Code Editor</h1>
        <p class="text-center text-gray-500">
            A simple code editor made with vanilla javascript
        </p>
    </div>
    <script src="./assets/app.js" type="module"></script>
</body>
</html>
`,
  css: `
@font-face {
  font-family: "Fira Code";
  src: url(./fontFamily/Fira/FiraCode-VariableFont_wght.ttf);
}
.code-editor * {
  font-family: "Fira Code";
}
.code-editor {
  --editor-primary-color: #092635;
  --editor-primary-darker-color: #a0c9f8;
  --editor-secondary-color: #1b4242;
  --editor-tertiary-color: #5c8374;
  --editor-quaternary-color: #9ec8b9;

  width: 100%;
  max-height: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
}
#theme-switch {
  display: none;
}
#theme-switch:checked ~ .icon-sun {
  margin-top: 0px;
}

.keyword {
  color: var(--keyword);
}
.symbol {
  color: var(--symbol);
}
.word {
  color: var(--word);
}
.string {
  color: var(--string);
}
.attribute-l1 {
  color: var(--attribute-l1);
}
`,
  javascript: `
import CodeEditor from "./CodeEditor/CodeEditor.js";
import sample from "./CodeEditor/sample.js";
const javascript = new CodeEditor(
    document.getElementById("js"),
    {
        name: "sample.py",
        code: sample.javascript,
        language: "javascript",
        theme: "dark"
    }
);
javascript.render().reduce("function");
`,
};
