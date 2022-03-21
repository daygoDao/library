function Book(author, title, numOfPages, readStatus) {
  this.author = author;
  this.title = title;
  this.numofPages = numOfPages;
  this.readStatus = readStatus;
}

function showForm() {
  modal.style.display = 'block';
}

function submit() {
  // create if bookList doesnt exist
  if (!localStorage.getItem('bookList')) {
    localStorage.setItem('bookList', JSON.stringify([]));
  }

  let bookArr = JSON.parse(localStorage.getItem('bookList'));
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let numOfPages = document.getElementById('pages').value;
  let readStatus = document.getElementById('read-status').value;
  let newBook = new Book(author, title, numOfPages, readStatus);
  
  bookArr.push(newBook);
  localStorage.setItem('bookList', JSON.stringify(bookArr));
}

// open form within modal for user to add data
let addButton = document.querySelector('.add-book');
addButton.addEventListener('click', showForm);

let formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', submit);

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