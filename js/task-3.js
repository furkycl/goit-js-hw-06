class StringBuilder {
  #value;
  constructor(x) {
    this.#value = x;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += `${str}`;
  }
  padStart(str) {
    this.#value = `${str}${this.#value}`;
  }
  padBoth(str) {
    str += `${this.#value} + ${str}`;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
