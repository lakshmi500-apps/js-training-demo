let fixedValue = 4;
console.log(fixedValue)

function incrementer() {
  // Only change code below this line
    return  fixedValue+1;

  // Only change code above this line
}
console.log(incrementer());
function getOutput() {
    document.getElementById("output1").innerText = fixedValue;
    document.getElementById("output2").innerText = incrementer();
  }