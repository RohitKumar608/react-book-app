import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { BookProvider } from './context/book'

function App() {
  return (
    <BookProvider>
      <div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </BookProvider>
  )
}

export default App
