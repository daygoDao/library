let bookList = [];

function Book(author, title, numOfPages, readStatus) {
  this.author = author;
  this.title = title;
  this.numofPages = numOfPages;
  this.readStatus = readStatus;
}

function showForm() {
  modal.style.display = 'block';
}

// open form within modal for user to add data
let addButton = document.querySelector('.add-book');
addButton.addEventListener('click', showForm);


// used to display book(s)
let newBook = document.createElement('li');

// open modal on click
let modal = document.querySelector('.modal');


//kick out of modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}