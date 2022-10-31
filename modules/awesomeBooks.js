let collections = JSON.parse(localStorage.getItem('books-collection')) || [];

const appendBookEl = (book, booksContainer) => {
  const content = `
    <article class="book">
      <p>"${book.name.charAt(0).toUpperCase() + book.name.slice(1)}" by ${book.author.charAt(0).toUpperCase() + book.author.slice(1)}</p>
      <button id="${book.id}">Remove</button>
    </article>
  `;
  booksContainer.insertAdjacentHTML('beforeend', content);
};

const AddBtnEventListener = (id) => {
  const btn = document.getElementById(`${id}`);

  btn.addEventListener('click', (event) => {
    event.target.parentElement.remove();
    collections = collections.filter((book) => book.id !== id);
    localStorage.setItem('books-collection', JSON.stringify(collections));
  });
};

const displayBooks = (booksContainer) => {
  collections.forEach((book) => {
    appendBookEl(book, booksContainer);
    AddBtnEventListener(book.id);
  });
};

const initializeAwesomeBooks = (form, booksContainer) => {
  displayBooks(booksContainer);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const book = {
      name: form['book-title'].value,
      author: form['book-author'].value,
      id: collections.length === 0 ? 1 : collections.at(-1).id + 1,
    };

    collections.push(book);
    localStorage.setItem('books-collection', JSON.stringify(collections));

    appendBookEl(book, booksContainer);
    AddBtnEventListener(book.id);
    form.reset();
  });
};

export default initializeAwesomeBooks;