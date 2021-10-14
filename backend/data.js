import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Masum Khandker",
            email: "admin@amazona.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: true,
        },
        {
            name: "Fiona Khandker",
            email: "fiona@amazona.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirt',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            rating: 4.5,
            brand: 'Nike',
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirt',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            rating: 4.0,
            brand: 'Adidas',
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirt',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 15,
            rating: 4.8,
            brand: 'Lacoste',
            numReviews: 17,
            description: 'high quality product'
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 5,
            rating: 4.5,
            brand: 'Nike',
            numReviews: 14,
            description: 'high quality product'
        },
        {
            name: 'Puma Slim pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 5,
            rating: 4.5,
            brand: 'Puma',
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 0,
            rating: 5,
            brand: 'Adidas',
            numReviews: 15,
            description: 'high quality product'
        },
    ]
}


export default data;