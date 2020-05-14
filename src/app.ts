import {PersonBook} from "./types";
import {
    logFirstAvailable,
    logBookTitles,
    getBookAuthorByIndex,
    getBookTitlesByCategory,
    getAllBooks,
    calcTotalPages,
    getBookByID, createCustomerID
} from "./functions";
import {Category} from "./enums";
import {RefBook, UniversityLibrarian} from "./classes";


let idGenerator = (name: string, id: string): string => `${name} ${id}`;

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
console.log('Task 05.02');
const refBook: RefBook = new RefBook();

console.log('---');
console.log('Task 05.04. Interfaces for Class Types:');
const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Den';

console.log('---');
console.log('Task 05.05. Intersection and Union Types');
const personBook: PersonBook = {
    id: 0,
    author: "",
    name: 'qwe',
    email: 'qwe@w.w'
}
console.log('personBook', personBook);

