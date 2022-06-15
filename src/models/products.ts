export interface product {
    id: number;
    name: string;
    price: number;
    description: string;
    dateofproduction: Date;
    madeby: string;
    /* currentdate: Date; */
    dateofproductiondisplay: string;
}

export const products = [
    {
        id: 1,
        name: 'Paola',
        price: 799,
        description: 'A large woman with one of the best screens',
        dateofproduction: new Date('03-03-2000'),
        madeby: 'carla and giacomo',
        dateofproductiondisplay: ''
    },
    {
        id: 2,
        name: 'gabriele',
        price: 9,
        description: 'A tall man with one of the best legs',
        dateofproduction: new Date('03-03-2000'),
        madeby: 'giorgia and marco',
        dateofproductiondisplay: ''
    },
    {
        id: 3,
        name: 'federico',
        price: 300,
        description: 'A small woman',
        dateofproduction: new Date('03-03-2000'),
        madeby: 'carlo and carla',
        dateofproductiondisplay: ''
    },
    {
        id: 4,
        name: 'francesco',
        price: 1200,
        description: 'A muscle man with one of the best foots',
        dateofproduction: new Date('03-03-2000'),
        madeby: 'rino e gaia',
        dateofproductiondisplay: ''
    },
];