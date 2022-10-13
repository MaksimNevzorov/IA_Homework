import "./main.scss";
// import { ANKETA } from "./components/ANKETA/ANKETA";
import { taskByClass } from "./components/TASKBYCLASS/taskByClass";

const root = document.querySelector("#root");

const add123 = (a, b) => a + b;
const res = add123(222, 3);
console.log("Helloasda");

// root.insertAdjacentHTML("beforeend", ANKETA());
root.insertAdjacentHTML("beforeend", taskByClass());
