import { createContext, useContext } from 'react'

const BookContext = createContext(null)

function BookProvider({ children, ...props }) {
  return <BookContext.Provider value={props}>{children}</BookContext.Provider>
}

function useBook() {
  const bookContext = useContext(BookContext)

  if (typeof bookContext !== 'object') {
    throw Error('Please wrap the your app inside bookContext')
  }
  return bookContext.value
}

export { BookProvider, useBook }
