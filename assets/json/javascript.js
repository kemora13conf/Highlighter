const keywords = [
  {
    key: "new",
    value: "<span class='red'>new</span>",
  },
  {
    key: "function",
    value: "<span class='red'>function</span>",
  },
  {
    key: "var",
    value: "<span class='red'>var</span>",
  },
  {
    key: "let",
    value: "<span class='red'>let</span>",
  },
  {
    key: "const",
    value: "<span class='red'>const</span>",
  },
  {
    key: "return",
    value: "<span class='red'>return</span>",
  },
  {
    key: "if",
    value: "<span class='red'>if</span>",
  },
  {
    key: "else",
    value: "<span class='red'>else</span>",
  },
  {
    key: "for",
    value: "<span class='red'>for</span>",
  },
  {
    key: "while",
    value: "<span class='red'>while</span>",
  },
  {
    key: "do",
    value: "<span class='red'>do</span>",
  },
  {
    key: "switch",
    value: "<span class='red'>switch</span>",
  },
  {
    key: "case",
    value: "<span class='red'>case</span>",
  },
  {
    key: "break",
    value: "<span class='red'>break</span>",
  },
  {
    key: "continue",
    value: "<span class='red'>continue</span>",
  },
  {
    key: "default",
    value: "<span class='red'>default</span>",
  },
  {
    key: "try",
    value: "<span class='red'>try</span>",
  },
  {
    key: "catch",
    value: "<span class='red'>catch</span>",
  },
  {
    key: "finally",
    value: "<span class='red'>finally</span>",
  },
  {
    key: "throw",
    value: "<span class='red'>throw</span>",
  },
  {
    key: "typeof",
    value: "<span class='red'>typeof</span>",
  },
  {
    key: "instanceof",
    value: "<span class='red'>instanceof</span>",
  },
  {
    key: "delete",
    value: "<span class='red'>delete</span>",
  },
  {
    key: "import",
    value: "<span class='red'>import</span>",
  },
  {
    key: "export",
    value: "<span class='red'>export</span>",
  },
  {
    key: "class",
    value: "<span class='red'>class</span>",
  },
  {
    key: "extends",
    value: "<span class='red'>extends</span>",
  },
  {
    key: "super",
    value: "<span class='red'>super</span>",
  },
  {
    key: "this",
    value: "<span class='red'>this</span>",
  },
  {
    key: "static",
    value: "<span class='red'>static</span>",
  },
  {
    key: "constructor",
    value: "<span class='red'>constructor</span>",
  },
  {
    key: "get",
    value: "<span class='red'>get</span>",
  },
  {
    key: "set",
    value: "<span class='red'>set</span>",
  },
  {
    key: "async",
    value: "<span class='red'>async</span>",
  },
  {
    key: "await",
    value: "<span class='red'>await</span>",
  },
  {
    key: "arguments",
    value: "<span class='red'>arguments</span>",
  },
  {
    key: "eval",
    value: "<span class='red'>eval</span>",
  },
  {
    key: "arguments",
    value: "<span class='red'>arguments</span>",
  },
  {
    key: "eval",
    value: "<span class='red'>eval</span>",
  },
  {
    key: "undefined",
    value: "<span class='red'>undefined</span>",
  },
  {
    key: "null",
    value: "<span class='red'>null</span>",
  },
  {
    key: "NaN",
    value: "<span class='red'>NaN</span>",
  },
  {
    key: "Infinity",
    value: "<span class='red'>Infinity</span>",
  },
  {
    key: "true",
    value: "<span class='red'>true</span>",
  },
  {
    key: "false",
    value: "<span class='red'>false</span>",
  },
  {
    key: "console",
    value: "<span class='red'>console</span>",
  },
  {
    key: "log",
    value: "<span class='red'>log</span>",
  },
  {
    key: "debugger",
    value: "<span class='red'>debugger</span>",
  },
  {
    key: "window",
    value: "<span class='red'>window</span>",
  },
  {
    key: "document",
    value: "<span class='red'>document</span>",
  },
  {
    key: "location",
    value: "<span class='red'>location</span>",
  },
  {
    key: "navigator",
    value: "<span class='red'>navigator</span>",
  },
  {
    key: "history",
    value: "<span class='red'>history</span>",
  },
  {
    key: "screen",
    value: "<span class='red'>screen</span>",
  },
  {
    key: "alert",
    value: "<span class='red'>alert</span>",
  },
  {
    key: "prompt",
    value: "<span class='red'>prompt</span>",
  },
  {
    key: "confirm",
    value: "<span class='red'>confirm</span>",
  },
  {
    key: "setTimeout",
    value: "<span class='red'>setTimeout</span>",
  },
  {
    key: "setInterval",
    value: "<span class='red'>setInterval</span>",
  },
  {
    key: "clearTimeout",
    value: "<span class='red'>clearTimeout</span>",
  },
  {
    key: "clearInterval",
    value: "<span class='red'>clearInterval</span>",
  },
  {
    key: "Date",
    value: "<span class='red'>Date</span>",
  },
  {
    key: "Math",
    value: "<span class='red'>Math</span>",
  },
  {
    key: "Number",
    value: "<span class='red'>Number</span>",
  },
  {
    key: "String",
    value: "<span class='red'>String</span>",
  },
  {
    key: "Array",
    value: "<span class='red'>Array</span>",
  },
  {
    key: "Object",
    value: "<span class='red'>Object</span>",
  },
  {
    key: "JSON",
    value: "<span class='red'>JSON</span>",
  },
  {
    key: "parseInt",
    value: "<span class='red'>parseInt</span>",
  },
  {
    key: "parseFloat",
    value: "<span class='red'>parseFloat</span>",
  },
  {
    key: "isNaN",
    value: "<span class='red'>isNaN</span>",
  },
];
export default keywords;