export default class Clipboard {
  copy(text) {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);
  }

  paste() {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and paste the text
    textarea.select();
    document.execCommand("paste");

    // Get the pasted text from the textarea
    const pastedText = textarea.value;

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Invoke the callback with the pasted text
    return pastedText;
  }
}
