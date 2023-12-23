import { jsKeywords } from "./json/javascript.js";
import symbols from "./json/symbols.js";

function javascript(arr) {
  /*
   *  parser for javascript
   */
  let newArr = JSON.parse(JSON.stringify(arr));
  let doubleQuoteStringOpened = false;
  let singleQuoteStringOpened = false;
  newArr.map((item, index) => {
    if (item == '"') doubleQuoteStringOpened = !doubleQuoteStringOpened;
    if (item == "'") singleQuoteStringOpened = !singleQuoteStringOpened;
    if (jsKeywords.includes(item)) {
      newArr[index] = `<span class="keyword">${item}</span>`;
    } else if (doubleQuoteStringOpened && item != '"') {
      newArr[index] = `<span class="string">${item}</span>`;
    } else if (singleQuoteStringOpened && item != "'") {
      newArr[index] = `<span class="string">${item}</span>`;
    } else if(arr[index] == "=") {
      let i_now = index;
      index--;
      while (arr[index] == "&nbsp;") {
        if (arr[index] == undefined) break;
        index--;
      }
      while (arr[index] != "&nbsp;") {
        if (arr[index] == undefined) break;
        symbols.includes(arr[index])
        ? newArr[index] = `<span class="symbol">${arr[index]}</span>`
        : newArr[index] = `<span class="property">${arr[index]}</span>`;
        index--;
      }
      index = i_now;
    } else if (symbols.includes(item)) {
      newArr[index] = `<span class="symbol">${item}</span>`;
    } else if (
      arr[index - 3] == "." &&
      arr[index - 1] == "." &&
      arr[index + 1] == "."
    ) {
      newArr[index] = `<span class='attribute-l2'>${item}</span>`;
    } else if (arr[index - 1] == "." && arr[index + 1] == ".") {
      newArr[index] = `<span class='attribute-l1'>${item}</span>`;
    } else if (arr[index - 1] == "." && arr[index + 1] == "(") {
      newArr[index] = `<span class='methode'>${item}</span>`;
    } else if (arr[index + 1] == "(") {
      newArr[index] = `<span class='function'>${item}</span>`;
    } else {
      newArr[index] = `<span class="word">${item}</span>`;
    }
  });
  return newArr;
}

function css(arr) {
  /*
   *  parser for css
   */
  let newArr = JSON.parse(JSON.stringify(arr)); // array format: [".", "class","-","name","{","color",":","red","}"]

  for (let i = 0; i < newArr.length; i++) {
    // make class names in css file colored
    if (arr[i] == ".") {
      while (arr[i] != "{" && arr[i] != "&nbsp;") {
        if (arr[i] == undefined) break;
        newArr[i] = `<span class="methode">${arr[i]}</span>`;
        i++;
      }
    } else if(arr[i] == "#") {
      while (arr[i] != "{" && arr[i] != "&nbsp;") {
        if (arr[i] == undefined) break;
        newArr[i] = `<span class="function">${newArr[i]}</span>`;
        i++;
      }
    } else if(arr[i] == "@") {
      while (arr[i] != "{" && arr[i] != "&nbsp;") {
        if (arr[i] == undefined) break;
        newArr[i] = `<span class="keyword">${arr[i]}</span>`;
        i++;
      }
      if(arr[i] == "&nbsp;") {
        while (arr[i] != "{") {
          if (arr[i] == undefined) break;
          newArr[i] = `<span class="property">${arr[i]}</span>`;
          i++;
        }
      }
    } else if(arr[i] == ":"){
      let i_now = i;
      while (arr[i] != "&nbsp;") {
        if (arr[i] == undefined) break;
        newArr[i] = `<span class="property">${arr[i]}</span>`;
        i--;
      }
      i = i_now;
      while (arr[i] != ";") {
        if (arr[i] == undefined) break;
        if(symbols.includes(arr[i])) newArr[i] = `<span class="attribute-l2">${arr[i]}</span>`;
        else newArr[i] = `<span class="value">${arr[i]}</span>`;
        i++;
      }
    } else if(symbols.includes(arr[i])){
      newArr[i] = `<span class="symbol">${arr[i]}</span>`;
    }  else {
      newArr[i] = `<span class="word">${arr[i]}</span>`;
    }
  }
  return newArr;
}

function html(arr) {
  /*
   *  parser for html
   */
  let newArr = JSON.parse(JSON.stringify(arr));
  let doubleQuoteStringOpened = false;
  let singleQuoteStringOpened = false;

  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] == '"') doubleQuoteStringOpened = !doubleQuoteStringOpened;
    if (arr[i] == "'") singleQuoteStringOpened = !singleQuoteStringOpened;
    if (doubleQuoteStringOpened && arr[i] != '"') {
      newArr[i] = `<span class="string">${arr[i]}</span>`;
    } else if (singleQuoteStringOpened && arr[i] != "'") {
      newArr[i] = `<span class="string">${arr[i]}</span>`;
    } else if(arr[i] == "<") {
      while(arr[i] != "&nbsp;") {
        if (arr[i] == undefined) break;
        symbols.includes(arr[i])
        ? newArr[i] = `<span class="symbol">${arr[i]}</span>`
        : newArr[i] = `<span class="function">${arr[i]}</span>`;
        i++;
      }
    } else if(arr[i] == "=") {
      let i_now = i;
      i--;
      while (arr[i] == "&nbsp;") {
        if (arr[i] == undefined) break;
        i--;
      }
      while (arr[i] != "&nbsp;") {
        if (arr[i] == undefined) break;
        symbols.includes(arr[i])
        ? newArr[i] = `<span class="symbol">${arr[i]}</span>`
        : newArr[i] = `<span class="property">${arr[i]}</span>`;
        i--;
      }
      i = i_now;
    } else if (symbols.includes(arr[i])) {
      newArr[i] = `<span class="symbol">${arr[i]}</span>`;
    } else {
      newArr[i] = `<span class="word">${arr[i]}</span>`;
    }
  }

  return newArr;
}

function no_language(arr) {
  let newArr = JSON.parse(JSON.stringify(arr));
  let singleQuoteStringOpened = false;
  let doubleQuoteStringOpened = false;
  let parenthesisOpened = false;

  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] == '"') doubleQuoteStringOpened = !doubleQuoteStringOpened;
    if (arr[i] == "'") singleQuoteStringOpened = !singleQuoteStringOpened;
    if (arr[i] == "(") parenthesisOpened = true;
    if (arr[i] == ")") parenthesisOpened = false;
    if (doubleQuoteStringOpened && arr[i] != '"') {
      newArr[i] = `<span class="string">${arr[i]}</span>`;
    } else if (singleQuoteStringOpened && arr[i] != "'") {
      newArr[i] = `<span class="string">${arr[i]}</span>`;
    } else if (parenthesisOpened) {
      symbols.includes(arr[i])
      ? newArr[i] = `<span class="symbol">${arr[i]}</span>`
      : newArr[i] = `<span class="function">${arr[i]}</span>`;
    } else if (arr[i] == ".") {
      while (arr[i] != "{" && arr[i] != "&nbsp;" && arr[i] != "(") {
        if (arr[i] == undefined) break;
        newArr[i] = `<span class="methode">${arr[i]}</span>`;
        i++;
      }
    } else if(arr[i] == "=") {
      let i_now = i;
      i--;
      while (arr[i] == "&nbsp;") {
        if (arr[i] == undefined) break;
        i--;
      }
      while (arr[i] != "&nbsp;") {
        if (arr[i] == undefined) break;
        symbols.includes(arr[i])
        ? newArr[i] = `<span class="symbol">${arr[i]}</span>`
        : newArr[i] = `<span class="property">${arr[i]}</span>`;
        i--;
      }
      i = i_now;
    }
    else if (symbols.includes(arr[i])) {
      newArr[i] = `<span class="symbol">${arr[i]}</span>`;
    } else {
      newArr[i] = `<span class="word">${arr[i]}</span>`;
    }
  }

  return newArr;
}


const Parser = {
  javascript,
  css,
  html,
  no_language,
};

export default Parser;
