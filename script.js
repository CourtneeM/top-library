const bookShelf = document.querySelector('main');
const btnNewBook = document.querySelector('#btn-new');
const newBookForm = document.querySelector('form');
const btnAddBook = document.querySelector('#add-book');
const btnRemoveBook = document.querySelector('.btnRemove');
var myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  render();
}

function render() {
  let numBooks = myLibrary.length
  let bookCard = document.createElement('div');
  let removeBook = document.createElement('button');
  removeBook.textContent = "Delete";
  removeBook.classList.add('btnRemove');
  bookShelf.appendChild(bookCard);
  for(let key in myLibrary[numBooks - 1]) {
    let p = document.createElement('p');
    p.textContent = myLibrary[numBooks - 1][key];
    bookCard.appendChild(p);  
    bookCard.appendChild(removeBook);
  }
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
        hasRead = "Read";
      } else {
        hasRead = "Not yet read";
      }

      let newBook = new Book(bookTitle.value, bookAuthor.value, numPages.value, hasRead);
      addBookToLibrary(newBook);
      bookTitle.value = "";
      bookAuthor.value = "";
      numPages.value = "";
      hasReadBox.checked = false;
      newBookForm.style.display = "none";
      btnAddBook.style.display = "none";
    }

    if(e.target.textContent === "Delete") {
      let bookToDelete = e.target.parentNode.children[0].textContent;
      for(let i = 0; i < myLibrary.length; i++) {
        if(bookToDelete === myLibrary[i].title) {
          myLibrary.splice(i, 1);
        }
      }
      console.log(myLibrary);
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  })
}

eventHandler();