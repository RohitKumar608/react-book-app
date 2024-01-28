import { useState } from 'react'
import { useBook } from '../context/book'

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)
  const { editBookById } = useBook()
  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editBookById(book.id, title)

    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit
