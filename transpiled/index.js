"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models"); //export
var userName = "gal amouyal";
var age = 29;
var address = { city: "ashdod", steert: "azamaot", number: 10 };
var hobbis = ["football", "js", "food"];
var childrens = ["shira", "noa"];
var smoking = false;
function createPerson(userName) {
    var person = { u: userName };
    if (person != null) {
        return true;
    }
    else {
        return false;
    }
}
var thePerson = createPerson("gal");
console.log(thePerson);
console.log("what ever ?");
var bei = "beiVersiobn";
console.log("1");
// const changeHeader = (value: string): boolean => {
//     let el: any = document.createElement("h2");
//     el.innerHTML = value;
//     setTimeout(() => {
//         document.getElementById("header").append(el);
//     }, 2000)
//     return false;
// }
// changeHeader("TS file is great!!!")
var b1 = new models_1.Building(1, 2, "tower");
console.log(b1);
