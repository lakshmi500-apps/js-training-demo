// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let newBooks= [...bookList];
  newBooks.push(bookName);
  return newBooks;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
   let newArr = [...arr];
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
let updatedBooks1 = add(bookList, "A Brief History of Time");
let updatedBooks2 = remove(bookList, "On The Electrodynamics of Moving Bodies");
let updatedBooks3 =remove(add(bookList, "A Brief History of Time"));

console.log(bookList);
function getOutput() {
    document.getElementById("output").innerText =  bookList(4) ;
  }