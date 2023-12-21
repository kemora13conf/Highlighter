import {jsKeywords} from './../json/javascript.js';
import symbols from './../json/symbols.js';

function letters_into_words(line){
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let words = [];
    let word = '';
    for(let i = 0; i < line.length+1; i++){
        if(letters.includes(line[i])){
            if(symbols.includes(word)){
                words.push(word);
                word = '';
            }
            word += line[i];
        }
        else{
            words.push(word);
            word = line[i];
        }
    }
    return words;
}
function convert_spaces(line_arr){
    let new_line = line_arr;
    new_line.map((word, index) => {
        if(word === " "){
            new_line[index] = "&nbsp;";
        }
    });
    return new_line;
}
function consvert_tabs(line_arr){
    let new_line = line_arr;
    new_line.map((word, index) => {
        if(word === "\t"){
            new_line[index] = "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    });
    return new_line;
}
function item_to_html(arr){
    let newArr = arr
    newArr.map((item, index) => {
        if(jsKeywords.includes(item)){
            newArr[index] = `<span class="keyword">${item}</span>`;
        }
        else if(symbols.includes(item)){
            newArr[index] = `<span class="symbol">${item}</span>`;
        }else{
            newArr[index] = `<span class="word">${item}</span>`;
        }
    });
    return newArr;
}
function serialize_line(line){
    let new_line = line;
    let words = letters_into_words(line);
    words = convert_spaces(words);
    words = consvert_tabs(words);
    words = item_to_html(words);
    new_line = words.join("");
    return new_line;
}

export {
    serialize_line
}