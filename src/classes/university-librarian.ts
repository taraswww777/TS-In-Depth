import * as Interfaces from "../interfaces";

export class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    email: string;
    name: string;

    assistCustomer(): void {
        console.log('name:', this.name);
    }
}

