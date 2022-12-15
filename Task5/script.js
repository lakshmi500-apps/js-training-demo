// The global variable
let fixedValue = 4;
console.log(fixedValue)
// Only change code below this line
function incrementer(fixedValue1) {
 let newValue= fixedValue;
return newValue+1;
  // Only change code above this line
}
console.log(incrementer(4));
function getOutput() {
    document.getElementById("output").innerText =  incrementer(4) ;
  }