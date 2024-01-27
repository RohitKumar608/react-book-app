import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
const BookContext = createContext(null)

function BookProvider({ children }) {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')

    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }

      return book
    })

    setBooks(updatedBooks)
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(updatedBooks)
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    })

    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks)
  }

  return (
    <BookContext.Provider
      value={{ editBookById, createBook, deleteBookById, editBookById, books }}
    >
      {children}
    </BookContext.Provider>
  )
}

function useBook() {
  const bookContext = useContext(BookContext)
  if (typeof bookContext !== 'object') {
    throw Error('Please wrap the your app inside bookContext')
  }
  return bookContext
}

export { BookProvider, useBook }
