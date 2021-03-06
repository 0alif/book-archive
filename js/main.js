// html element
const searchValue = document.getElementById('search-text');
const results = document.getElementById('total-result');
const booksDiv = document.getElementById('books');
const errorMessage = document.getElementById('error-msg');
// load data
const getValue = () => {
    const searchText = searchValue.value;
    // clear field
    searchValue.value = '';
    booksDiv.textContent = '';
    results.textContent = '';
    errorMessage.textContent = '';
    // Handle error
    if (searchText === '') {
        errorMessage.innerText = 'Search field can not be empty';
    }
    else {
        fetch(`https://openlibrary.org/search.json?q=${searchText}`)
            .then(res => res.json())
            .then(data => bookDetails(data));
    }
}
// total books number found by search
const bookDetails = book => {
    if (book.docs.length === 0) {
        errorMessage.innerText = 'Sorry! No data found';
    }
    else {
        const totalResult = results;
        totalResult.innerText = `Showing ${book.docs.length} results of ${book.numFound}`;
        books = book.docs;
        books?.forEach(element => {
            displayDetails(element);
        });
    }
}
// display book details
const displayDetails = details => {
    const books = booksDiv;
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
    <img src="https://covers.openlibrary.org/b/id/${details.cover_i}-M.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5>${details.title}</h5>
      <p>Author: ${details.author_name ? details.author_name[0] : 'author name not found'}</p>
      <p>Publisher: ${details.publisher ? details.publisher[0] : 'publisher are not available'}</p>
      <p>First publish in: ${details.first_publish_year}</p>
    </div>
  </div>  `;
    books.appendChild(div);
}
