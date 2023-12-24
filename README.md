# Highlighter Project

The Highlighter project is a JavaScript library that helps you format and display your code examples in a modern and appealing way.

## Installation

To use the Highlighter in your project, you need to add the `./dist/Highlighter-[version-number].min.js` file and the `./Styles/styles.css` file to your project.

You can find these files in the `dist` and `Styles` directories respectively.

If you're using ES6 modules, you can import the `Highlighter.js` file directly.

## Usage

After adding the necessary files to your project, you can create an instance of the Highlighter class as follows:

### In a JavaScript Module

```javascript
import { Highlighter } from 'path/to/Highlighter.js';

const example = new Highlighter(mounting_point, options);
```

### In an HTML file

```html
<script src="path/to/Highlighter-[version-number].min.js"></script>
<link rel="stylesheet" href="path/to/styles.css">

<script>
    const { Highlighter } = highlighter
    var example = .Highlighter(mounting_point, options);
</script>
```

In both cases, `mounting_point` is the DOM element where the Highlighter will be mounted, and `options` is an object that can contain the following properties:

- `name`: The name of the editor.
- `language`: The programming language of the code to be highlighted.
- `theme`: The theme for the code editor. It can be 'dark' or 'light'.
- `code`: The code to be highlighted.

Here is an example of how to use the Highlighter:

```javascript
const mounting_point = document.getElementById('my-code-editor');
const options = {
    name: 'My Code Editor',
    language: 'javascript',
    theme: 'dark',
    code: 'const hello = "Hello, world!";'
};

const example = new Highlighter(mounting_point, options);
example.render();
```

This will create a code editor with the name 'My Code Editor', highlight JavaScript code, use the 'dark' theme, and display the code 'const hello = "Hello, world!";'.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the terms of the ISC license.

Please replace `'path/to/Highlighter.js'` and `'path/to/Highlighter-[version-number].min.js'` with the actual paths to the `Highlighter.js` and `Highlighter-[version-number].min.js` files in your project. Similarly, replace `'path/to/styles.css'` with the actual path to the `styles.css` file.