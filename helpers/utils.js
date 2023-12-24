import symbols from "./json/symbols.js";
import Parser from "./Parsers.js";

function letters_into_words(line) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
  let words = [];
  let word = "";
  for (let i = 0; i < line.length + 1; i++) {
    if (letters.includes(line[i])) {
      if (symbols.includes(word)) {
        words.push(word);
        word = "";
      }
      word += line[i];
    } else {
      words.push(word);
      word = line[i];
    }
  }
  return words;
}
function convert_spaces(line_arr) {
  let new_line = line_arr;
  new_line.map((word, index) => {
    if (word === " ") {
      new_line[index] = "&nbsp;";
    }
  });
  return new_line;
}
function consvert_tabs(line_arr) {
  let new_line = line_arr;
  new_line.map((word, index) => {
    if (word === "\t") {
      new_line[index] = "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  });
  return new_line;
}

function serialize_line(line, language) {
  let new_line = line;
  const parser = Parser[language] || Parser.no_language;
  let words = letters_into_words(line);
  words = convert_spaces(words);
  words = consvert_tabs(words);
  words = parser ? parser(words) : words;
  new_line = words.join("");
  return new_line;
}
function convert_to_svg(svg) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(svg, "image/svg+xml");
  // remove the fill attribute from all paths and svg
  let svg_element = doc.querySelector("svg");
  svg_element.removeAttribute("fill");
  svg_element.removeAttribute("stroke");
  // config height and width
  svg_element.setAttribute("width", "30px");
  svg_element.setAttribute("height", "30px");
  
  let paths = doc.querySelectorAll("path");
  paths.forEach((path) => {
    path.removeAttribute("fill");
  });
  return doc.firstChild;
}

export { serialize_line, convert_to_svg };
