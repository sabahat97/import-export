//functions parameter argument
//ex1
function housingDetail(city, area, demand) {
    return city + area + demand;
}
let pilot = housingDetail("karachi\n", "DHA\n", "10,00,00,000");
console.log(pilot);
//ex2
function alphabet(a, b, c, d) {
    return a + b + c + d;
}
let count = alphabet("one\n", "two\n", "three\n", "four\n");
console.log(count);
//ex3
function names(name1, name2, name3, name4, name5) {
    return name1 + name2 + name3 + name4 + name5;
}
let friendlist = names("sara, ", "zara, ", "saba, ", "fara, ", "zoya");
console.log(friendlist);
//ex4
function operators(x, y, z) {
    return x + y - z;
}
let combineoperators = operators(44, 33, 33);
console.log(combineoperators);
export {};
