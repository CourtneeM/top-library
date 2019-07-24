const bookShelf = document.querySelector('main');
const btnNewBook = document.querySelector('#btn-new');
const newBookForm = document.querySelector('form');
var myLibrary = ['Book 1', 'Book 2', 'Book 3'];

function Book() {

}

function addBookToLibrary() {
  let newBook = prompt("What book would you like to add to your library?");
  myLibrary.push(newBook);
}

function render() {
  let numBooks = myLibrary.length
  for(let i = 0; i < numBooks; i++) {
    let bookCard = document.createElement('div');
    let book = document.createElement('p');
    bookShelf.appendChild(bookCard);
    book.textContent = myLibrary[i];
    bookCard.appendChild(book);
  }
}

btnNewBook.addEventListener('click', function(e) {
  newBookForm.style.display = "flex";
});

render();