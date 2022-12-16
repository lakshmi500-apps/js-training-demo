Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
  for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
      }
    }
    // Only change code above this line
    return newArray;
  };
  let output = [1,5,8,2,5,27,5]
  function getOutput() {
    document.getElementById("output").innerText = output.myFilter((item)=>item%2==0);
  }