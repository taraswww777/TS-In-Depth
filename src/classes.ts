import * as Interfaces from './interfaces'

class ReferenceItem {

}

class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    email: string;
    name: string;

    assistCustomer(): void {
        console.log('name:', this.name );
    }
}

export {
    UniversityLibrarian,
    ReferenceItem
}
