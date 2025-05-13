import { createContext } from "react";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        try {
        } catch (error) {
            throw Error(error.message);
        }
    }

    async function fetchBookById(bookId) {
        try {
        } catch (error) {
            throw Error(error.message);
        }
    }

    async function createBook(bookData) {
        try {
        } catch (error) {
            throw Error(error.message);
        }
    }

    async function deleteBook(bookId) {
        try {
        } catch (error) {
            throw Error(error.message);
        }
    }

    async function updateBook(bookId, bookData) {
        try {
        } catch (error) {
            throw Error(error.message);
        }
    }

    return (
        <BooksContext.Provider
            value={{
                books,
                fetchBooks,
                fetchBookById,
                createBook,
                deleteBook,
                updateBook,
            }}
        >
            {children}
        </BooksContext.Provider>
    );
}
