Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
   for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
  };
  let values=[5,8,2,3,6,1]
  function getOutput() {
    document.getElementById("output").innerText = values.myMap(  (item) => item%2   );
  }