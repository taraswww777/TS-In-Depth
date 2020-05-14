import { Category } from "./enums";
import {BookOrUndefined, Library} from "./types";

export function getAllBooks(): ReadonlyArray<any> {
    return [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            assertions: 1,
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true
        },
        {
            id: 2,
            title: 'Refactoring Angular',
            assertions: 1,
            category: Category.Angular,
            author: 'Evan Burchard',
            available: true
        },
        {
            id: 3,
            title: 'JavaScript Testing',
            assertions: 1,
            category: Category.HTML,
            author: 'Liang Yuxian Eugene',
            available: false
        },
        {
            id: 4,
            title: 'CSS Secrets',
            assertions: 1,
            category: Category.CSS,
            author: 'Lea Verou',
            available: true
        },
        {
            id: 5,
            title: 'Mastering JavaScript Object-Oriented Programming',
            assertions: 1,
            category: Category.TypeScript,
            author: 'Andrea Chiarelli',
            available: true
        }
    ];
}

export function getAllLibs(): ReadonlyArray<Library> {
    return [
        {lib: 'libName1', assertions: 1, books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', assertions: 1, books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', assertions: 1, books: 3_000_000_000, avgPagesPerBook: 280}
    ];
}

export function logFirstAvailable(books: readonly any[]) {
    for (let book of books) {
        if (book.available) {
            console.log('logFirstAvailable: First available book: ', book.title);
            break;
        }
    }

    console.log('logFirstAvailable: Count books: ', books.length);
}

export function getBookTitlesByCategory(category: Category): string[] {
    let titles: string[] = [];
    getAllBooks().forEach((book) => {
        if (book.category === category) {
            titles.push(book.title);
        }
    });
    return titles;
}

export function logBookTitles(titles: string[]) {
    let titlesString = '';
    for (const title of titles) {
        titlesString += `${title}; `;
    }
    console.log('logBookTitles: ', titlesString);
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const book = getAllBooks()[index];
    return [
        book.title,
        book.author,
    ];
}

export function calcTotalPages(): bigint {
    return getAllLibs().reduce((accumulator, lib: Library) => {
        return accumulator + BigInt(lib.avgPagesPerBook) * BigInt(lib.books)
    }, BigInt(0));
}

export function getBookByID(bookId: number): BookOrUndefined {
    return getAllBooks().find((book) => book.id === bookId)
}

export function createCustomerID(name: string, id: string): string {
    return `${name} ${id}`;
}
