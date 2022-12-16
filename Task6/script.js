// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add( arr, bookName) {
  let newBooks= [...arr];
  newBooks.push(bookName);
  return newBooks;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
   let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    // Change code above this line
    }
}
let updatedBooks1 = add(bookList, "A Brief History of Time");
let updatedBooks2 = remove(bookList, "On The Electrodynamics of Moving Bodies");
let updatedBooks3 = remove(add(bookList, "A Brief History of Time"));

console.log(updatedBooks1);
console.log(updatedBooks2);
console.log(bookList);
function getOutput() {
    document.getElementById("output").innerText = updatedBooks1 ;
    document.getElementById("output1").innerText = updatedBooks2 ;
    document.getElementById("output2").innerText = bookList;
    
  }