const menuItems = [
    {
        id: 1,
        name: "Cappuccino",
        price: 350,
        category: "Coffee",
        image:`${import.meta.env.BASE_URL}images/capuccino.jpg`,
        available: true
    },
    {
        id: 2,
        name: "Caramel Latte",
        price: 450,
        category: "Coffee",
        image:`${import.meta.env.BASE_URL}images/caramel-latte.jpg`,
        available: true
    },
    {
        id: 3,
        name: "Chocolate Croissant",
        price: 300,
        category: "Pastries",
        image:`${import.meta.env.BASE_URL}images/croisant.jpg`,
        available: true
    },
    {
        id: 4,
        name: "Blueberry Muffin",
        price: 250,
        category: "Pastries",
        image:`${import.meta.env.BASE_URL}images/blueberry-muffin.jpg`,
        available: false
    },
    {
        id: 5,
        name: "Chicken Sandwich",
        price: 650,
        category: "Meals",
        image:`${import.meta.env.BASE_URL}images/chicken-sandwich.jpg`,
        available: true
    },
    {
        id: 6,
        name: "Fresh Orange Juice",
        price: 400,
        category: "Drinks",
        image:`${import.meta.env.BASE_URL}images/orange-juice.jpg`,
        available: true
    }
];

export default menuItems;