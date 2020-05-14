import {Book, Person} from "./interfaces";

export type Library = {
    lib: string,
    assertions: number,
    books: number,
    avgPagesPerBook: number
}

export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;
