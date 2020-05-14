enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

type library = {
    lib: string,
    assertions: number,
    books: number,
    avgPagesPerBook: number
}

function getAllBooks(): ReadonlyArray<any> {
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

function getAllLibs(): ReadonlyArray<library> {
    return [
        {lib: 'libName1', assertions: 1, books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', assertions: 1, books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', assertions: 1, books: 3_000_000_000, avgPagesPerBook: 280}
    ];
}

function logFirstAvailable(books: readonly any[]) {
    for (let book of books) {
        if (book.available) {
            console.log('logFirstAvailable: First available book: ', book.title);
            break;
        }
    }

    console.log('logFirstAvailable: Count books: ', books.length);
}

function getBookTitlesByCategory(category: Category): string[] {
    let titles: string[] = [];
    getAllBooks().forEach((book) => {
        if (book.category === category) {
            titles.push(book.title);
        }
    });
    return titles;
}

function logBookTitles(titles: string[]) {
    let titlesString = '';
    for (const title of titles) {
        titlesString += `${title}; `;
    }
    console.log('logBookTitles: ', titlesString);
}

function getBookAuthorByIndex(index: number): [string, string] {
    const book = getAllBooks()[index];
    return [
        book.title,
        book.author,
    ];
}

function calcTotalPages(): bigint {
    return getAllLibs().reduce((accumulator, lib: library) => {
        return accumulator + BigInt(lib.avgPagesPerBook) * BigInt(lib.books)
    }, BigInt(0));
}

function getBookByID(bookId: number): any {
    return getAllBooks().find((book) => book.id === bookId)
}

function createCustomerID(name: string, id: string): string {
    return `${name} ${id}`;
}

let idGenerator = (name: string, id: string): string => `${name} ${id}`;

interface Person {
    name: string,
    email: string,
}

interface Librarian extends Person{
    department: string,
    assistCustomer: () => void
}

class UniversityLibrarian implements Librarian{
    department: string;
    email: string;
    name: string;

    assistCustomer(): void {
        console.log('name:', this.name );
    }
}

console.log('Task 02.01. Basic Types:');
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.Angular));
getBookAuthorByIndex(0);
console.log('calcTotalPages: ', calcTotalPages());

console.log('---');
console.log('Task 03.01. Arrow Functions');
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log('getBookByID:', getBookByID(1));

console.log('---');
console.log('Task 03.02. Function Type');
const myID = '33';
console.log('createCustomerID: ', createCustomerID('random user1', myID));
console.log('createCustomerID: ', idGenerator('random user2', myID));
idGenerator = createCustomerID;
console.log('createCustomerID: ', idGenerator('random user3', myID));

console.log('---');
console.log('Task 05.04. Interfaces for Class Types:');
const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Den';
