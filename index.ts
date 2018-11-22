
import { Building, Villa, someProp } from "./models"; //export
import MainUrl from "./models.df"; //export default

let userName: string = "gal amouyal";
let age: number = 29;
let address: any = { city: "ashdod", steert: "azamaot", number: 10 };
let hobbis: Array<string> = ["football", "js", "food"];
let childrens: string[] = ["shira", "noa"];
let smoking: boolean = false;

function createPerson(userName: string): boolean {
    let person: any = { u: userName };
    if (person != null) {
        return true;
    } else {
        return false;
    }

}

let thePerson = createPerson("gal");
console.log(thePerson)
console.log("what ever ?")

let bei: string = "beiVersiobn";
console.log("1")


// const changeHeader = (value: string): boolean => {

//     let el: any = document.createElement("h2");
//     el.innerHTML = value;
//     setTimeout(() => {
//         document.getElementById("header").append(el);
//     }, 2000)
//     return false;
// }

// changeHeader("TS file is great!!!")

let b1 = new Building(1, 2, "tower");
console.log(b1);