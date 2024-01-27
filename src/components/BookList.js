import BookShow from './BookShow'
import { useBook } from '../context/book'

function BookList() {
  const { books } = useBook()

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })

  return <div className='book-list'>{renderedBooks}</div>
}

export default BookList
