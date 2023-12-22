import { jsKeywords } from "../../json/javascript.js";
import symbols from "../../json/symbols.js";

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
    } else if (symbols.includes(item)) {
      newArr[index] = `<span class="symbol">${item}</span>`;
    } else if (
      arr[index - 3] == "." &&
      arr[index - 1] == "." &&
      arr[index + 1] == "."
    ) {
      newArr[index] = `<span class='attibute-l2'>${item}</span>`;
    } else if (arr[index - 1] == "." && arr[index + 1] == ".") {
      newArr[index] = `<span class='attibute-l1'>${item}</span>`;
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

const Parser = {
  javascript,
};

export default Parser;
