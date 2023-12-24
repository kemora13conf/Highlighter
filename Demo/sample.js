const sample = {
    html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Highlighter</title>
    <link rel="stylesheet" href="./main.css" />
    <link rel="stylesheet" href="../Styles/styles.css" />
    <script src="./sample.js"></script>
    <script src="../dist/Highlighter-v2.0.0.min.js"></script>
  </head>
  <body
    class="min-h-screen w-full flex flex-col items-stretch justify-center bg-slate-100"
  >
    <div
      class="w-full p-[10px] flex flex-col gap-3 mt-10 max-w-[720px] mx-auto"
    >
      <h1 class="text-5xl font-bold">Highlighter</h1>
      <p class="text-sm text-gray-500">
        Highlighter is a simple and easy to use code editor that can be used in
        any project
      </p>
    </div>
    <div
      class="w-full flex items-center justify-center flex-col gap-[10px] p-[10px] max-w-[720px] mx-auto "
    >
      <div class="editor" id="html"></div>
      <h1 class="text-4xl font-bold w-full mt-5">Theme</h1>
      <p class="text-gray-500 w-full">
        Experience the the theme of the Highlighter by changing the theme of the code
      </p>
      <div class="editor" id="css"></div>
        <h1 class="text-4xl font-bold w-full mt-5">Easy to use</h1>
        <p class="text-gray-500 w-full">
            You import it to your project and you are good to go
        </p>
      <div class="editor" id="js"></div>
    </div>
    <script src="./App.js" type="module"></script>
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
javascript.render();`,
  };
  