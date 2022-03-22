showList();

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
///////////////////////////////////////////////////////////////////

function Book(author, title, numOfPages, readStatus) {
  this.author = author;
  this.title = title;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
}

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
}

// output local stored book list to ui
function showList() {
  // create if bookList doesnt exist
  if (!localStorage.getItem('bookList')) {
    localStorage.setItem('bookList', JSON.stringify([]));
  }

  let booklist = JSON.parse(localStorage.getItem('bookList'));
  for (let book of booklist) {

    // used to display book(s)
    let bookUL = document.querySelector('ul')
    let bookLI = document.createElement('li');
    let bookAuthor = document.createElement('h3');
    let bookTitle = document.createElement('h4');
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p');
    let deleteBook = document.createElement('button');
    deleteBook.classList.add('delete-book');

    let bookCard = document.createElement('section');
    bookCard.classList.add('card');

    console.log(read)

    bookAuthor.textContent = book.author;
    bookTitle.textContent = book.title;
    bookPages.textContent = book.numOfPages;
    bookRead.textContent = read.readStatus;
    deleteBook.textContent = 'DELETE';
  
    console.log(book.numOfPages)
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(deleteBook);

    bookLI.appendChild(bookCard);
    bookUL.appendChild(bookLI);
  }
}

// delete book
let removeBooks = document.querySelectorAll('.delete-book');
for (let book of removeBooks) {
  book.addEventListener('click', discard);
}

function discard(e) {
  console.log(e);
  //e.currentTarget.parentNode.parentNode.remove(this);
}