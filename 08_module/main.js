import Dog, { playWith as play, Animal } from "./library.js";           // import {}... from ...  -> default 放{} 外面

let obj = new Dog(undefined, 3);
console.log(obj.weight, obj.location);
play(obj);
