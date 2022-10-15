import "./main.scss";
// import { ANKETA } from "./components/ANKETA/ANKETA";
import { treeSum } from "./components/TREESUM/treeSum";
// import { arrayClone } from "./components/ARRAYCLONE/arrayClone";
import { arrayToString } from "./components/ARRAYTOSTRING/arrayToString";
import { colonOdd } from "./components/COLONODD/colonOdd";
import { chengeRegistor } from "./components/CHANGRREGISTOR/changeRegistor";
import { removeDuplicates } from "./components/REMOVEDUPLICATES/removeDuplicates";
import { sumArray } from "./components/SUMARRAY/sumArray";
import { countLbers } from "./components/COUNTLBERS/countLbers";
import { compareNumbers } from "./components/COMPARENUMBERS/compareNumbers";
import { compareValue } from "./components/COMPAREVALUE/compareValue";

const root = document.querySelector("#root");

const add123 = (a, b) => a + b;
const res = add123(222, 3);
console.log("Helloasda");

// root.insertAdjacentHTML("beforeend", ANKETA());
root.insertAdjacentHTML("beforeend", treeSum());
// root.insertAdjacentHTML("beforeYtend", arrayClone());
root.insertAdjacentHTML("beforeend", arrayToString());
root.insertAdjacentHTML("beforeend", colonOdd());
root.insertAdjacentHTML("beforeend", chengeRegistor());
root.insertAdjacentHTML("beforeend", removeDuplicates());
root.insertAdjacentHTML("beforeend", sumArray());
root.insertAdjacentHTML("beforeend", countLbers());
root.insertAdjacentHTML("beforeend", compareNumbers());
root.insertAdjacentHTML("beforeend", compareValue());
