const products = [
    { 
        id:"products1",
        url: 'https://m.media-amazon.com/images/I/61urxjK6SbL._AC_UL480_FMwebp_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61urxjK6SbL._AC_UL480_FMwebp_QL65_.jpg',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id:"products2",
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
         id:"products3",
        url: 'https://m.media-amazon.com/images/I/71m4BNmdGVL._AC_UL480_FMwebp_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71m4BNmdGVL._AC_UL480_FMwebp_QL65_.jpg', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: ' 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
         id:"products4",
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
         id:"products5",
        url: 'https://previews.123rf.com/images/korara/korara1610/korara161000073/65613374-bookstore-bookshop-vector-emblem-symbol-icon-template-graphic-design-element-with-book-as-a-bag-for.jpg',
        detailUrl: 'https://previews.123rf.com/images/korara/korara1610/korara161000073/65613374-bookstore-bookshop-vector-emblem-symbol-icon-template-graphic-design-element-with-book-as-a-bag-for.jpg', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From 499', 
        tagline: ' more' 
    },{ 
        id: "product6",
        url: 'https://m.media-amazon.com/images/I/71IQ8lCksdL._AC_UY327_FMwebp_QL65_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71IQ8lCksdL._AC_UY327_FMwebp_QL65_.jpg',
        title: {
          shortTitle: 'Category 6',
          longTitle: 'Product 6 Description'
        }, 
        price: {
          mrp: 999,
          cost: 599,
          discount: '40%'
        },
        description: 'Product 6 details and features.',
        discount: ' 50% Off', 
        tagline: 'Deal of the day' 
      },
      { 
        id: "product7",
        url: 'https://images-na.ssl-images-amazon.com/images/I/51n8Zr98CYL._AC_SX184_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51n8Zr98CYL._AC_SX184_.jpg',
        title: {
          shortTitle: 'Category 7',
          longTitle: 'Product 7 Description'
        },
        price: {
          mrp: 1299,
          cost: 799,
          discount: '38%'
        },
        description: 'Product 7 details and features.',
        discount: ' 20% Off', 
        tagline: 'Pestige, Nova & more' 
      }, { 
        id: "product8",
        url: 'https://images-na.ssl-images-amazon.com/images/I/713UXYBviuL._AC_UL254_SR254,254_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/713UXYBviuL._AC_UL254_SR254,254_.jpg',
        title: {
          shortTitle: 'Category 8',
          longTitle: 'Product 8 Description'
        }, 
        price: {
          mrp: 1199,
          cost: 699,
          discount: '42%'
        },
        description: 'Product 8 details and features.',
        discount: ' 30% Off', 
        tagline: 'Deal of the Day' 
      },
      { 
        id: "product9",
        url: 'https://images-na.ssl-images-amazon.com/images/I/81RrEEMiOCL._AC_UL254_SR254,254_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/81RrEEMiOCL._AC_UL254_SR254,254_.jpg',
        title: {
          shortTitle: 'Category 9',
          longTitle: 'Product 9 Description'
        },
        price: {
          mrp: 1499,
          cost: 899,
          discount: '40%'
        },
        description: 'Product 9 details and features.',
        discount: ' 25% Off', 
        tagline: 'Best Seller' 
      },    
      { 
        id: "product20",
        url: 'https://images-na.ssl-images-amazon.com/images/I/7198Z7YiOPL._AC_UL254_SR254,254_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/7198Z7YiOPL._AC_UL254_SR254,254_.jpg',
        title: {
          shortTitle: 'Category 20',
          longTitle: 'Product 20 Description'
        },
        price: {
          mrp: 1699,
          cost: 1099,
          discount: '35%'
        },
        description: 'Product 20 details and features.',
        discount: ' 15% Off', 
        tagline: 'more' 
      },
      { 
        id: "product31",
        url: 'https://m.media-amazon.com/images/I/816aGuLimnL._AC_UL480_FMwebp_QL65_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/816aGuLimnL._AC_UL480_FMwebp_QL65_.jpg',
        title: {
          shortTitle: 'Swig Life 40oz Mega Mug',
          longTitle: 'Swig Life 40oz Mega Mug, 40 oz Tumbler with Handle and Straw, Cup Holder Friendly,  '
        },
        price: {
          mrp: 1699,
          cost: 1099,
          discount: '35%'
        },
        description: 'Product 20 details and features.',
        discount: ' 15% Off', 
        tagline: ' more' 
      }
];

module.exports = products;