// TODO: write code here

import { Example } from "./Example";

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

const root = document.querySelector(".root");
setTimeout(() => {
  root.textContent = "safsdfsdf";
}, 5000);


const elClass = new Example(root);
elClass.change("я текст из метода класса!");