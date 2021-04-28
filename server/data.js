import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:"Basil",
            email: 'vskh@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true
        },
        {
            name:"gg",
            email: 'gg@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false
        },
    ],
    products:[
    {
        name:"Nike Slim Shirt",
        category:"Shirts",
        image:"https://i5.walmartimages.com/asr/31391632-688d-4d91-a8cb-8c3a70312006_1.ca294e6145a87caa6d4fd936b9cd012b.jpeg",
        price:120,
        brand:'Nike',
        rating:4,
        numReviews:10,
        description: "high quality Nike Slim Shirt",
        inStock:15
    },
    {
        name:"Adidas Stan Smith",
        category:"Shoes",
        image:"https://static.highsnobiety.com/thumbor/Ll3vJI7W2y0KMnml8ro-db1OceE=/1600x1067/static.highsnobiety.com/wp-content/uploads/2021/02/08165310/adidas-stan-smith-primegreen-01.jpg",
        price:130,
        brand:'Adidas',
        rating:3.5,
        numReviews:13,
        description: "Adidas Originals",
        inStock:0
    },
    {
        name:"Bikkembergs",
        category:"shoes",
        image:"https://www.guidicalzature.com/media/catalog/product/cache/2/image/600x800/9df78eab33525d08d6e5fb8d27136e95/b/k/bke_107813.jpg",
        price:170,
        brand:'Bikkembergs',
        rating:5,
        numReviews:5,
        description: "Product that will setisfy your requirements",
        inStock:5
    },
    {
        name:"Adidas Gazelle",
        category:"Shoes",
        image:"https://www.atticclothing.com/images/adidas-originals-gazelle-og-suede-airforce-blue-p3199-10416_zoom.jpg",
        price:90,
        brand:'Adidas',
        rating:4.5,
        numReviews:17,
        description: "Adidas Gazelle OG shoes",
        inStock:7
    },
    {
        name:"Armani Glasses",
        category:"Glasses",
        image:"https://www.otticasm.com/media/catalog/product/cache/all/small_image/800x533/7cccbbb73661449a43bcbcafc1e3e887/e/m/emporio-armani-ea-4129-504287.png",
        price:140,
        brand:'Armani',
        rating:5,
        numReviews:6,
        description: "Trending Glass",
        inStock:2
    },

    
]
}

export default data;