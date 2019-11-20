# BookLendingSystem Project

This web application project was generated with Angular CLI version 8.3.19, using Typescript, HTML and CSS without any external NPM package or CSS framework.

## About the App

This app contains the following main features:
1. Library - Lists all books in the collection
2. Rental - Allows borrowing and returning a book from the library

Since project is strictly built using Angular, I used a mock collection containing 10 books. Membership and rental information is stored in the browser local storage instead of an actual back-end and database server.

## Use Cases

The following operations are supported by the app:
1. Viewing all/rented books - Click 'Library' to view all books in the collection, or 'Return' to view rented books.
2. Borrowing a book - Navigate to 'Library' page. Click the 'Rent' button under one of the books, enter membership credentials and confirm by clicking the 'Rent this Book' button.
3. Returning a book - Navigate to 'Return' page. Click the 'Return' button under one of the books, enter membership credentials (has to match the one entered at rental) and confirm by clicking the 'Return this Book' button.
4. Search book by title - Enter at least 3 letters on the search bar to filter the collection to only show books whose title contain the entered text.


