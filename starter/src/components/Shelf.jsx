import React from 'react'
import Book from './Book'


function Shelf({ shelfName, books, handleChangeShelf }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(book => (
                            <li key={book.id}>
                                <Book
                                    bookInfo={book}
                                    handleChangeShelf={handleChangeShelf} />
                            </li>
                        ))
                    }
                </ol>

            </div>
        </div>
    )
}

export default Shelf