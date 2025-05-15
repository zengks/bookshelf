import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export function useBook() {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("useBook must be used within a BooksProvider");
    }

    return context;
}
