const squareList = arr => {
    // Only change code below this line
  
    return arr.filter((int) => int > 0 && int % parseInt(int)===0).map((num) => num*num);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  const squaredIntegers1 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers1);
  const squaredIntegers2 = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
  console.log(squaredIntegers2);
  function getOutput() {
    document.getElementById("output").innerText =    squaredIntegers;
    document.getElementById("output1").innerText =   squaredIntegers1;
    document.getElementById("output2").innerText =   squaredIntegers2;
    
  }