const bookShelf = document.querySelector('main');
const btnNewBook = document.querySelector('#btn-new');
const newBookForm = document.querySelector('form');
const btnAddBook = document.querySelector('#add-book');
const btnRemoveBook = document.querySelector('.btnRemove');
var myLibrary = [];

function Book() {

}

function addBookToLibrary(title) {
  myLibrary.push(title);
  render();
}

function render() {
  let numBooks = myLibrary.length
  let bookCard = document.createElement('div');
  let book = document.createElement('p');
  let removeBook = document.createElement('button');
  removeBook.textContent = "Delete";
  removeBook.classList.add('btnRemove');
  for(let i = 0; i < numBooks; i++) {
    bookShelf.appendChild(bookCard);
    book.textContent = myLibrary[i];
    bookCard.appendChild(book);
    bookCard.appendChild(removeBook);
  }
  console.log(myLibrary);
}

function eventHandler() {
  document.addEventListener('click', function(e) {
    if(e.target.textContent === "New Book") {
      newBookForm.style.display = "flex";
      btnAddBook.style.display = "block";
    }

    if(e.target.textContent === "Add") {
      const bookTitle = document.querySelector('#title');
      const bookAuthor = document.querySelector('#author');
      const numPages = document.querySelector('#pages');
      const hasReadBox = document.querySelector('input[type="checkbox"]');
      let hasRead;
      if(hasReadBox.checked) {
        hasRead = "yes";
      } else {
        hasRead = "no";
      }
      addBookToLibrary(bookTitle.value);
      bookTitle.value = "";
      newBookForm.style.display = "none";
      btnAddBook.style.display = "none";
    }

    if(e.target.textContent === "Delete") {
      let bookToDelete = e.target.parentNode.children[0].textContent;
      for(let i = 0; i < myLibrary.length; i++) {
        if(bookToDelete === myLibrary[i]) {
          myLibrary.splice(i, 1);
        }
      }
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  })
}

eventHandler();