function checkPositive(arr) {
    // Only change code below this line
  return arr.every(function(num){
    return num>0
  })
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);
  function getOutput() {
    document.getElementById("output").innerText = checkPositive([1, 2, 3, -4, 5]);
  }