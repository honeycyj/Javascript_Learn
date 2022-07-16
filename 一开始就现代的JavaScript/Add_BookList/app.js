// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}



// UI Constructor
function UI() {

}

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list')

    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${book.title}<td>
    <td>${book.author}<td>
    <td>${book.isbn}<td>
    <td><a href = "#" class= "delete">X<a></td>
    `;

    list.appendChild(row);
}

// Delete BookList
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}


UI.prototype.clearFields = function () {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

UI.prototype.showAlert = function (message, className) {
    const alert = document.createElement('div')
    alert.className = `alert ${className}`;
    alert.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container')

    const form = document.querySelector('#book-form')
    container.insertBefore(alert, form);

    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);
}

// Add Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    // 提交验证
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert('test', 'error')
    } else {
        ui.addBookToList(book)
        ui.clearFields()
        ui.showAlert('test', 'success')
    }




    e.preventDefault();
});

// Event Listener for delete

document.getElementById('book-list').addEventListener('click', (e) => {
    console.log(123)

    const ui = new UI();
    ui.deleteBook(e.target);

    ui.showAlert('book removed', 'success');

    e.preventDefault();
})