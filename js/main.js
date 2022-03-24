showList();

class Book {
  constructor(author, title, numOfPages, readStatus) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.readStatus = readStatus;
  }

}

/////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////

function showForm() {
  modal.style.display = 'block';
}

function submit() {

  let bookArr = JSON.parse(localStorage.getItem('bookList'));
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let numOfPages = document.getElementById('pages').value;
  let readStatus = document.getElementById('read-status').checked;
  let newBook = new Book(author, title, numOfPages, readStatus);

  // add to book list
  bookArr.push(newBook);
  // store to local
  localStorage.setItem('bookList', JSON.stringify(bookArr));

  // reload page to update list
  window.location.reload();

  //reset form
  clearForm();
}

// output local stored book list to ui
function showList() {
  // create if bookList doesnt exist
  if (!localStorage.getItem('bookList')) {
    localStorage.setItem('bookList', JSON.stringify([]));
  }

  let booklist = JSON.parse(localStorage.getItem('bookList'));
  let bookCount = 0;

  for (let book of booklist) {

    // used to display book(s)
    let bookUL = document.querySelector('ul')
    let bookLI = document.createElement('li');
    let bookAuthor = document.createElement('h3');
    let bookTitle = document.createElement('h4');
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p');
    let changeReadStatus = document.createElement('button');
    changeReadStatus.classList.add('change-read');
    let deleteBook = document.createElement('button');
    deleteBook.classList.add('delete-book');

    let bookCard = document.createElement('section');
    bookCard.classList.add('card');

    bookCard.title = bookCount++;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookTitle.textContent = `Title: ${book.title}`;
    bookPages.textContent = `Number of pages: ${book.numOfPages}`;
    bookRead.textContent = `Finished reading: ${book.readStatus}`;
    changeReadStatus.textContent = 'Finished Reading?'
    deleteBook.textContent = 'DELETE';

    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(changeReadStatus);
    bookCard.appendChild(deleteBook);

    bookLI.appendChild(bookCard);
    bookUL.appendChild(bookLI);

  }
}

// change read status
let changeRead = document.querySelectorAll('.change-read');
for (let book of changeRead) {
  book.addEventListener('click', flipRead);
}

function flipRead(e) {
  //console.log(e.currentTarget.previousElementSibling)
  let booklist = JSON.parse(localStorage.getItem('bookList'));
  let index = +e.currentTarget.parentNode.title;
  booklist[index].readStatus = (!booklist[index].readStatus);

  // store to local
  localStorage.setItem('bookList', JSON.stringify(booklist));

  // reload page to update list
  window.location.reload();
}

// delete book
let removeBooks = document.querySelectorAll('.delete-book');
for (let book of removeBooks) {
  book.addEventListener('click', discard);
}
function discard(e) {
  //console.log(e.currentTarget.parentNode.title);
  let booklist = JSON.parse(localStorage.getItem('bookList'));
  booklist.splice(+e.currentTarget.parentNode.title, 1);

  // store to local
  localStorage.setItem('bookList', JSON.stringify(booklist));

  // reload page to update list
  window.location.reload();
}

//clear form
function clearForm() {
  let author = document.querySelector('#author');
  let title = document.querySelector('#title');
  let pages = document.querySelector('#pages');
  let read = document.querySelector('#read-status');

  author.value = '';
  title.value = '';
  pages.value = '';
  read.checked = false;
}