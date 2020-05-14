interface Book {
    id: number,
    author: string,
}

interface DamageLogger {

}

interface Person {
    name: string,
    email: string,
}

interface Author {
}

interface Librarian extends Person{
    department: string,
    assistCustomer: () => void
}

export {
    Book,
    DamageLogger as Logger,
    Person,
    Author,
    Librarian
}
