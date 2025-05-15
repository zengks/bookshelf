import { createContext, useState } from "react";
import { Permission, Role, ID } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import { databases } from "../lib/appwrite";

const DATABASE_ID = "6809502900005d1769ae";
const COLLECTION_ID = "6809503b0016a588d210";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const { user } = useUser();

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
            console.log("Creating book with data:", bookData);

            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...bookData, userId: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            );

            console.log("New book created:", newBook);
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
