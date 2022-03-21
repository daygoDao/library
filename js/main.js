showList();

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

  // add to book list
  bookArr.push(newBook);
  // store to local
  localStorage.setItem('bookList', JSON.stringify(bookArr));

  // output to ui
  window.location.reload();
}

// open form within modal for user to add data
let addButton = document.querySelector('.add-book');
addButton.addEventListener('click', showForm);

let formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', submit);


// open modal on click
let modal = document.querySelector('.modal');


//kick out of modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// output local stored book list to ui
function showList() {
  let booklist = JSON.parse(localStorage.getItem('bookList'));
  for (let book of booklist) {
    // used to display book(s)
    let bookUL = document.querySelector('ul')
    let bookLI = document.createElement('li');
    console.log(book)
    bookLI.textContent = book.author;
    bookUL.appendChild(bookLI);
  }
}