// coffee
import coffee1 from "./img/coffeeHouse/coffee-1.jpg";
import coffee2 from "./img/coffeeHouse/coffee-2.jpg";
import coffee3 from "./img/coffeeHouse/coffee-3.jpg";
import coffee4 from "./img/coffeeHouse/coffee-4.jpg";
import coffee5 from "./img/coffeeHouse/coffee-5.jpg";
import coffee6 from "./img/coffeeHouse/coffee-6.jpg";
import coffee7 from "./img/coffeeHouse/coffee-7.jpg";
import coffee8 from "./img/coffeeHouse/coffee-8.jpg";
// tea
import tea1 from "./img/coffeeHouse/tea-1.jpg";
import tea2 from "./img/coffeeHouse/tea-2.jpg";
import tea3 from "./img/coffeeHouse/tea-3.jpg";
import tea4 from "./img/coffeeHouse/tea-4.jpg";
// dessert
import dessert1 from "./img/coffeeHouse/dessert-1.jpg";
import dessert2 from "./img/coffeeHouse/dessert-2.jpg";
import dessert3 from "./img/coffeeHouse/dessert-3.jpg";
import dessert4 from "./img/coffeeHouse/dessert-4.jpg";
import dessert5 from "./img/coffeeHouse/dessert-5.jpg";
import dessert6 from "./img/coffeeHouse/dessert-6.jpg";
import dessert7 from "./img/coffeeHouse/dessert-7.jpg";
import dessert8 from "./img/coffeeHouse/dessert-8.jpg";

//  START общий массив
export const CARDS = [
  {
    img: coffee1,
    name: "Irish coffee",
    description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: coffee2,
    name: "Kahlua coffee",
    description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: coffee3,
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: coffee4,
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "5.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: coffee5,
    name: "Espresso",
    description: "Classic black coffee",
    price: "4.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: coffee6,
    name: "Latte",
    description: "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: coffee7,
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: coffee8,
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "6.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: tea1,
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "4.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: tea2,
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: tea3,
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: tea4,
    name: "Sea buckthorn",
    description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "5.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert1,
    name: "Marble cheesecake",
    description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "3.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert2,
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert3,
    name: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert4,
    name: "Creme brulee",
    description: "Delicate creamy dessert in a caramel basket with wild berries",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert5,
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert6,
    name: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert7,
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "5.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    img: dessert8,
    name: "Black forest",
    description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "6.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },
];
// END общий массив

// export const CARDS_COFFEE = [
//   {
//     img: img1,
//     title: "Irish coffee",
//     description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
//     price: "$7.00",
//   },
//   {
//     img: img2,
//     title: "Kahlua coffee",
//     description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
//     price: "$7.00",
//   },
//   {
//     img: img3,
//     title: "Honey raf",
//     description: "Espresso with frothed milk, cream and aromatic honey",
//     price: "$5.50",
//   },
//   {
//     img: img4,
//     title: "Ice cappuccino",
//     description: "Cappuccino with soft thick foam in summer version with ice",
//     price: "$5.00",
//   },
//   {
//     img: img5,
//     title: "Espresso",
//     description: "Classic black coffee",
//     price: "$4.50",
//   },
//   {
//     img: img6,
//     title: "Latte",
//     description: "Espresso coffee with the addition of steamed milk and dense milk foam",
//     price: "$5.50",
//   },
//   {
//     img: img7,
//     title: "Latte macchiato",
//     description: "Espresso with frothed milk and chocolate",
//     price: "$5.50",
//   },
//   {
//     img: img8,
//     title: "Coffee with cognac",
//     description: "Fragrant black coffee with cognac and whipped cream",
//     price: "$6.50",
//   },
// ];

// // tea
// export const CARDS_TEA = [
//   {
//     img: tea1,
//     title: "Moroccan",
//     description:
//       "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
//     price: "$4.50",
//   },
//   {
//     img: tea2,
//     title: "Ginger",
//     description: "Original black tea with fresh ginger, lemon and honey",
//     price: "$5.00",
//   },
//   {
//     img: tea3,
//     title: "Cranberry",
//     description: "Invigorating black tea with cranberry and honey",
//     price: "$5.00",
//   },
//   {
//     img: tea4,
//     title: "Sea buckthorn",
//     description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
//     price: "$5.50",
//   },
// ];

// // dessert
// export const CARDS_DESSERT = [
//   {
//     img: dessert1,
//     title: "Marble cheesecake",
//     description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
//     price: "$3.50",
//   },
//   {
//     img: dessert2,
//     title: "Red velvet",
//     description: "Layer cake with cream cheese frosting",
//     price: "$4.00",
//   },
//   {
//     img: dessert3,
//     title: "Cheesecakes",
//     description:
//       "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
//     price: "$4.50",
//   },
//   {
//     img: dessert4,
//     title: "Creme brulee",
//     description: "Delicate creamy dessert in a caramel basket with wild berries",
//     price: "$4.00",
//   },
//   {
//     img: dessert5,
//     title: "Pancakes",
//     description: "Tender pancakes with strawberry jam and fresh strawberries",
//     price: "$4.50",
//   },
//   {
//     img: dessert6,
//     title: "Honey cake",
//     description: "Classic honey cake with delicate custard",
//     price: "$4.50",
//   },
//   {
//     img: dessert7,
//     title: "Chocolate cake",
//     description: "Cake with hot chocolate filling and nuts with dried apricots",
//     price: "$5.50",
//   },
//   {
//     img: dessert8,
//     title: "Black forest",
//     description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
//     price: "$6.50",
//   },
// ];
