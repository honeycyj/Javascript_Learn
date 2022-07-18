class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list')
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class= "delete">X<a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className) {
        const alert = document.createElement('div')
        alert.className = `alert ${className}`;
        alert.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(alert, form);
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 1000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }
}




// Local Storage

class Storage {

    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Storage.getBooks();

        books.forEach(book => {
            const ui = new UI;

            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Storage.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Storage.getBooks();
        console.log(isbn)

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(isbn, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// DOM load
document.addEventListener('DOMContentLoaded', Storage.displayBooks());




document.getElementById('book-form').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    // console.log(ui);

    // 提交验证
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Add to LS
        Storage.addBook(book);

        // Show success
        ui.showAlert('Book Added!', 'success');

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});
// Event Listener for delete

document.getElementById('book-list').addEventListener('click', (e) => {
    // console.log(123)

    const ui = new UI();
    ui.deleteBook(e.target);

    // remove form LS
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('book removed', 'success');

    e.preventDefault();
});