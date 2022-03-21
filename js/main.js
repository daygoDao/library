let bookList = [];

// JSON.stringify(localStorage.setItem('bookList', '[]'));

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
  // let bookArr = JSON.parse(localStorage.getItem('bookList'));
  // console.log(bookArr, 'test1')
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let numOfPages = document.getElementById('pages').value;
  let readStatus = document.getElementById('read-status').value;
  let newBook = new Book(author,title,numOfPages, readStatus);
  console.table(newBook);
  bookList.push(newBook);
  // console.log(bookArr, 'test2')
  // JSON.stringify(localStorage.setItem('bookList', bookArr));
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