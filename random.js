function dupl(a) {
a1 = a.filter((item, index) => a.indexOf(item) === index);
return a1;
}
console.log(dupl([2,3,2,5,3,8,3,5,6]));