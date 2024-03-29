//functions parameter argument

//ex1
function housingDetail(city : string, area : string, demand : string){
     return city + area + demand
}

let pilot = housingDetail("karachi\n", "DHA\n", "10,00,00,000")
console.log(pilot)

//ex2

function alphabet (a : string, b : string ,c : string, d : string){
    return a + b + c + d
}
let count : string = alphabet("one\n","two\n", "three\n", "four\n",);
console.log(count)

//ex3
function names(name1 : string, name2 : string, name3 : string, name4 : string, name5 : string){
   return name1 + name2 + name3 + name4 + name5
}
let friendlist = names("sara, ", "zara, ", "saba, ","fara, ","zoya");
console.log(friendlist);

//ex4
 function operators(x : number, y : number, z : number){
return x + y - z
}

let combineoperators : number = operators(44, 33, 33);
console.log (combineoperators)