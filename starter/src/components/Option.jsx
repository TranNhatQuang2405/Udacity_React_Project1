import React from 'react'
import { shelves } from 'utils/MasterData'

function Option({ bookShelf, onChangeShelf }) {

    return (
        <div className="book-shelf-changer">
            <select value={bookShelf} onChange={onChangeShelf}>
                {
                    bookShelf.shelf !== "none" ?
                        <>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            {
                                shelves.map(shelf => (
                                    <option key={shelf.shelfId} value={shelf.shelfId}>
                                        {shelf.shelfName}
                                    </option>
                                ))
                            }
                        </>
                        :
                        <>
                            <option value="none" disabled checked>
                                Add to...
                            </option>
                            {
                                shelves.map(shelf => (
                                    shelf.isShow && (
                                        <option key={shelf.shelfId} value={shelf.shelfId}>
                                            {shelf.shelfName}
                                        </option>
                                    )
                                ))
                            }
                        </>
                }
            </select>
        </div>
    )
}

export default Option