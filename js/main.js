// load data
const getValue = () => {
    const searchText = document.getElementById('search-text').value;
    console.log(searchText);
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => bookDetails(data.docs));
}
// total books number found by search
const bookDetails = book => {
    const totalResult = document.getElementById('total-result');
    totalResult.innerText = `${book.length} result found`;
    book.forEach(element => {
        displayDetails(element);
    });
}
// display book details
const displayDetails = details => {
    const books = document.getElementById('books');
    console.log(details);
}