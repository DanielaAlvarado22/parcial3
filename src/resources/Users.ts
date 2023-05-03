export interface User {
    id:number,
    name:string,
    role: string,
    address: string,
    salary: number,
}

export const users : User[] = [
    {   
        id: 1,
        name:'Daniela',
        role: 'Developer',
        address: 'Calle 33',
        salary: 1000
    },
    {   
        id: 2,
        name:'Denis',
        role: 'Developer Senior',
        address: 'Calle 32',
        salary: 1500
    },
    {   
        id: 3,
        name:'Daniela',
        role: 'Developer',
        address: 'Calle 33',
        salary: 1000
    },
    {   
        id: 4,
        name:'Enrique',
        role: 'Full Stack',
        address: 'Calle 86',
        salary: 6000
    },
    {   
        id: 5,
        name:'Asaf',
        role: 'Frontend',
        address: 'Calle 22',
        salary: 5000
    }
]