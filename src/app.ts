enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

function getAllBooks(): ReadonlyArray<any> {
    return [
        {
            title: 'Refactoring JavaScript',
            assertions: 1,
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true
        },
        {
            title: 'Refactoring Angular',
            assertions: 1,
            category: Category.Angular,
            author: 'Evan Burchard',
            available: true
        },
        {
            title: 'JavaScript Testing',
            assertions: 1,
            category: Category.HTML,
            author: 'Liang Yuxian Eugene',
            available: false
        },
        {
            title: 'CSS Secrets',
            assertions: 1,
            category: Category.CSS,
            author: 'Lea Verou',
            available: true},
        {
            title: 'Mastering JavaScript Object-Oriented Programming',
            assertions: 1,
            category: Category.TypeScript,
            author: 'Andrea Chiarelli',
            available: true
        }
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
    const books = getAllBooks();
    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }
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
    type library = {
        lib: string,
        assertions: number,
        books: number,
        avgPagesPerBook: number
    }

    const libs: library[] = [
        {lib: 'libName1', assertions: 1, books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', assertions: 1, books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', assertions: 1, books: 3_000_000_000, avgPagesPerBook: 280}
    ];
    return libs.reduce((accumulator, lib: library) => {
        return accumulator + BigInt(lib.avgPagesPerBook) * BigInt(lib.books)
    }, BigInt(0));
}

// Task 02.01. Basic Types
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.Angular));
getBookAuthorByIndex(0);
console.log('calcTotalPages: ', calcTotalPages());
