import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1. Create a slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
 vegItems: [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 180,
    description: "Juicy paneer cubes marinated in yogurt and spices, grilled to perfection with onions and capsicum.",
    imageurl: "/images/paneerTikka.avif"
  },
  {
    id: 2,
    name: "Veg Biryani",
    price: 160,
    description: "Fragrant basmati rice cooked with garden-fresh vegetables, whole spices, and garnished with fried onions.",
    imageurl: "/images/vegBiryani.jpg"
  },
  {
    id: 3,
    name: "Dal Fry",
    price: 120,
    description: "Yellow lentils tempered with ghee, garlic, cumin, and chilies for a homestyle comfort meal.",
    imageurl: "/images/dalFry.avif"
  },
  {
    id: 4,
    name: "Chole Bhature",
    price: 150,
    description: "Spicy chickpea curry served with deep-fried fluffy bhature bread, a North Indian favorite.",
    imageurl: "/images/choleBhature.jpg"
  },
  {
    id: 5,
    name: "Aloo Paratha",
    price: 100,
    description: "Soft wheat bread stuffed with spiced mashed potatoes, served hot with butter or curd.",
    imageurl: "/images/alooParatha.jpg"
  },
  {
    id: 6,
    name: "Veg Pulao",
    price: 140,
    description: "Aromatic rice dish with colorful vegetables, mild spices, and garnished with fresh coriander.",
    imageurl: "/images/vegPulao.jpg"
  },
  {
    id: 7,
    name: "Palak Paneer",
    price: 180,
    description: "Creamy spinach puree cooked with soft paneer cubes, lightly spiced for a rich taste.",
    imageurl: "/images/palakPaneer.jpg"
  },
  {
    id: 8,
    name: "Vegetable Manchurian",
    price: 160,
    description: "Crispy veg balls tossed in tangy Indo-Chinese Manchurian sauce with onions and capsicum.",
    imageurl: "/images/vegManchurian.jpg"
  },
  {
    id: 9,
    name: "Mushroom Masala",
    price: 170,
    description: "Button mushrooms cooked in a rich onion-tomato gravy with aromatic spices.",
    imageurl: "/images/mushroomMasala.jpg"
  },
  {
    id: 10,
    name: "Paneer Butter Masala",
    price: 190,
    description: "Creamy tomato-based curry with butter, cream, and tender paneer cubes for a royal taste.",
    imageurl: "/images/paneerButterMasala.jpg"
  },
  {
    id: 11,
    name: "Veg Hakka Noodles",
    price: 150,
    description: "Stir-fried noodles with crunchy vegetables, soy sauce, and a touch of garlic.",
    imageurl: "/images/vegHakkaNoodles.jpg"
  },
  {
    id: 12,
    name: "Masala Dosa",
    price: 120,
    description: "Crispy rice crepe stuffed with spiced potato filling, served with chutney and sambar.",
    imageurl: "/images/masalaDosa.jpg"
  },
  {
    id: 13,
    name: "Rajma Chawal",
    price: 130,
    description: "Red kidney beans slow-cooked in a rich curry, served with steamed rice.",
    imageurl: "/images/rajmaChawal.jpg"
  },
  {
    id: 14,
    name: "Gobi Manchurian",
    price: 150,
    description: "Crispy cauliflower florets tossed in a spicy Indo-Chinese Manchurian sauce.",
    imageurl: "/images/gobiManchurian.jpg"
  },
  {
    id: 15,
    name: "Paneer Biryani",
    price: 190,
    description: "Fragrant rice layered with spiced paneer cubes, saffron, and caramelized onions.",
    imageurl: "/images/paneerBiryani.jpg"
  },
  {
    id: 16,
    name: "Aloo Gobi",
    price: 130,
    description: "Potatoes and cauliflower cooked with onions, tomatoes, and mild Indian spices.",
    imageurl: "/images/alooGobi.jpg"
  },
  {
    id: 17,
    name: "Vegetable Korma",
    price: 160,
    description: "Creamy coconut and cashew-based curry with mixed vegetables and aromatic spices.",
    imageurl: "/images/vegKorma.jpg"
  },
  {
    id: 18,
    name: "Paneer Bhurji",
    price: 170,
    description: "Scrambled paneer cooked with onions, tomatoes, and spices for a hearty dish.",
    imageurl: "/images/paneerBhurji.jpg"
  },
  {
    id: 19,
    name: "Veg Spring Roll",
    price: 140,
    description: "Crispy golden rolls filled with spiced vegetables, served with tangy dip.",
    imageurl: "/images/vegSpringRoll.jpg"
  },
  {
    id: 20,
    name: "Baingan Bharta",
    price: 150,
    description: "Smoky roasted brinjal mashed and cooked with onions, tomatoes, and spices.",
    imageurl: "/images/bainganBharta.jpg"
  },
  {
    id: 21,
    name: "Dhokla",
    price: 100,
    description: "Steamed savory gram flour cake, fluffy and spongy with a tangy tempering.",
    imageurl: "/images/dhokla.jpg"
  },
  {
    id: 22,
    name: "Veg Pizza",
    price: 200,
    description: "Cheesy pizza topped with fresh vegetables, herbs, and a crispy base.",
    imageurl: "/images/vegPizza.jpg"
  },
  {
    id: 23,
    name: "Kadai Paneer",
    price: 190,
    description: "Paneer cubes cooked in a wok with onions, capsicum, and kadai spices.",
    imageurl: "/images/kadaiPaneer.jpg"
  },
  {
    id: 24,
    name: "Idli Sambar",
    price: 100,
    description: "Soft steamed idlis served with hot sambar and coconut chutney.",
    imageurl: "/images/idliSambar.jpg"
  }
],

  nonVegItems: [
  {
    id: 111,
    name: "Chicken Biryani",
    price: 180,
    description: "Fragrant basmati rice layered with tender chicken pieces, aromatic spices, and garnished with fried onions.",
    imageurl: "/images/chickenBiryani.jpg"
  },
  {
    id: 112,
    name: "Mutton Curry",
    price: 220,
    description: "Slow-cooked mutton in a rich, spicy onion-tomato gravy with traditional Indian spices.",
    imageurl: "/images/mutton.jpg"
  },
  {
    id: 113,
    name: "Chicken 65",
    price: 150,
    description: "Deep-fried crispy chicken tossed with chilies, curry leaves, and South Indian spices.",
    imageurl: "/images/chicken65.jpg"
  },
  {
    id: 114,
    name: "Fish Fry",
    price: 200,
    description: "Marinated fish fillet shallow-fried till golden, crispy outside and juicy inside.",
    imageurl: "/images/fishFry.jpg"
  },
  {
    id: 115,
    name: "Prawns Masala",
    price: 250,
    description: "Juicy prawns simmered in a spicy onion-tomato masala with curry leaves.",
    imageurl: "/images/Prawns-Masala.webp"
  },
  {
    id: 116,
    name: "Egg Curry",
    price: 120,
    description: "Boiled eggs simmered in a flavorful onion-tomato curry with aromatic spices.",
    imageurl: "/images/eggCurry.jpg"
  },
  {
    id: 117,
    name: "Butter Chicken",
    price: 210,
    description: "Tender chicken cooked in a creamy tomato-butter sauce with a hint of spice.",
    imageurl: "/images/butterChicken.jpg"
  },
  {
    id: 118,
    name: "Mutton Biryani",
    price: 240,
    description: "Aromatic basmati rice layered with succulent mutton pieces and saffron flavors.",
    imageurl: "/images/muttonBiryani.jpg"
  },
  {
    id: 119,
    name: "Tandoori Chicken",
    price: 200,
    description: "Marinated chicken roasted in a tandoor with smoky, char-grilled flavors.",
    imageurl: "/images/tandooriChicken.jpg"
  },
  {
    id: 120,
    name: "Fish Curry",
    price: 190,
    description: "Tangy coastal-style fish curry cooked with coconut, tamarind, and spices.",
    imageurl: "/images/fishCurry.jpg"
  },
  {
    id: 121,
    name: "Chicken Kebab",
    price: 160,
    description: "Juicy chicken chunks marinated in spices, grilled on skewers to smoky perfection.",
    imageurl: "/images/chickenKebab.jpg"
  },
  {
    id: 122,
    name: "Mutton Keema",
    price: 200,
    description: "Minced mutton cooked with onions, peas, and spices for a rich, hearty dish.",
    imageurl: "/images/muttonKeema.jpg"
  },
  {
    id: 123,
    name: "Prawn Biryani",
    price: 260,
    description: "Aromatic biryani rice layered with spicy, juicy prawns and saffron.",
    imageurl: "/images/prawnBiryani.jpg"
  },
  {
    id: 124,
    name: "Chicken Curry",
    price: 170,
    description: "Classic chicken curry simmered in onion, tomato, and spice-rich gravy.",
    imageurl: "/images/chickenCurry.jpg"
  },
  {
    id: 125,
    name: "Grilled Fish",
    price: 210,
    description: "Fresh fish fillet grilled with herbs and spices for a light, healthy option.",
    imageurl: "/images/grilledFish.jpg"
  },
  {
    id: 126,
    name: "Chicken Lollipop",
    price: 150,
    description: "Crispy, deep-fried chicken drumsticks tossed in a spicy Indo-Chinese sauce.",
    imageurl: "/images/chickenLollipop.jpg"
  },
  {
    id: 127,
    name: "Mutton Rogan Josh",
    price: 230,
    description: "Traditional Kashmiri-style mutton curry cooked with aromatic spices in a rich red gravy.",
    imageurl: "/images/muttonRoganJosh.jpg"
  },
  {
    id: 128,
    name: "Fish Tikka",
    price: 200,
    description: "Boneless fish cubes marinated in spices and grilled to smoky perfection.",
    imageurl: "/images/fishTikka.jpg"
  },
  {
    id: 129,
    name: "Egg Biryani",
    price: 150,
    description: "Fragrant rice layered with boiled eggs, spices, and fried onions.",
    imageurl: "/images/eggBiryani.jpg"
  },
  {
    id: 130,
    name: "Chicken Shawarma",
    price: 140,
    description: "Shredded chicken wrapped in pita bread with garlic sauce and veggies.",
    imageurl: "/images/chickenShawarma.jpg"
  },
  {
    id: 131,
    name: "Mutton Kebab",
    price: 220,
    description: "Char-grilled minced mutton skewers spiced with herbs and masala.",
    imageurl: "/images/muttonKebab.jpg"
  },
  {
    id: 132,
    name: "Prawn Fry",
    price: 240,
    description: "Crispy golden prawns shallow-fried with spices and curry leaves.",
    imageurl: "/images/prawnFry.jpg"
  },
  {
    id: 133,
    name: "Chicken Manchurian",
    price: 180,
    description: "Fried chicken tossed in a tangy Indo-Chinese Manchurian sauce.",
    imageurl: "/images/chickenManchurian.jpg"
  },
  {
    id: 134,
    name: "Mutton Pepper Fry",
    price: 230,
    description: "Tender mutton chunks dry-fried with black pepper, onions, and curry leaves.",
    imageurl: "/images/muttonPepperFry.jpg"
  }
],

  drinks: [
    {
      "id": 200,
      "name": "Mango Smoothie",
      "price": 120,
      "description": "A creamy and refreshing smoothie made with ripe Alphonso mangoes, blended to perfection with milk and a touch of sweetness. Perfect for beating the heat.",
      "imageurl": "/images/mangosmoothie.webp"
    },
    {
      "id": 201,
      "name": "Cold Coffee",
      "price": 100,
      "description": "A chilled and energizing coffee drink prepared with rich brewed coffee, milk, ice, and sugar. Smooth, frothy, and refreshing.",
      "imageurl": "/images/coldcoffee.webp"
    },
    {
      "id": 202,
      "name": "Lemon Soda",
      "price": 60,
      "description": "Sparkling soda infused with fresh lemon juice, a pinch of salt, and sugar. A tangy and fizzy drink that refreshes instantly.",
      "imageurl": "/images/lemon-soda.jpg"
    },
    {
      "id": 203,
      "name": "Strawberry Milkshake",
      "price": 130,
      "description": "A thick and creamy milkshake made with fresh strawberries, milk, and ice cream. A sweet treat for strawberry lovers.",
      "imageurl": "/images/Strawberry-Milkshake.jpg"
    },
    {
      "id": 204,
      "name": "Green Tea",
      "price": 80,
      "description": "A light and healthy hot beverage brewed from green tea leaves. Rich in antioxidants, known for calming the mind and boosting metabolism.",
      "imageurl": "/images/Green-Tea.jpg"
    },
    {
      "id": 205,
      "name": "Masala Chai",
      "price": 50,
      "description": "Traditional Indian tea simmered with milk, sugar, and a blend of spices like cardamom, ginger, and cloves. Aromatic and comforting.",
      "imageurl": "/images/masalaChai.jpg"
    },
    {
      "id": 206,
      "name": "Watermelon Juice",
      "price": 90,
      "description": "Naturally sweet juice made from fresh watermelon chunks, served chilled. A hydrating drink for hot summer days.",
      "imageurl": "/images/watermelonJuice.jpg"
    },
    {
      "id": 207,
      "name": "Orange Juice",
      "price": 100,
      "description": "Freshly squeezed orange juice packed with Vitamin C. A tangy and zesty drink to boost your energy and immunity.",
      "imageurl": "/images/orangeJuice.jpg"
    },
    {
      "id": 208,
      "name": "Banana Shake",
      "price": 110,
      "description": "A wholesome shake made with ripe bananas, chilled milk, and a scoop of vanilla ice cream. Nutritious and filling.",
      "imageurl": "/images/bananaShake.jpg"
    },
    {
      "id": 209,
      "name": "Coconut Water",
      "price": 70,
      "description": "A natural, refreshing, and hydrating drink straight from tender coconuts. Rich in electrolytes, perfect after a workout.",
      "imageurl": "/images/coconutWater.jpg"
    },
    {
      "id": 210,
      "name": "Iced Tea",
      "price": 90,
      "description": "A chilled tea-based drink served with lemon and ice cubes. Lightly sweetened and extremely refreshing.",
      "imageurl": "/images/icedTea.jpg"
    },
    {
      "id": 211,
      "name": "Pineapple Juice",
      "price": 100,
      "description": "Tropical juice made from juicy pineapples. Sweet, tangy, and rich in Vitamin C, a perfect thirst quencher.",
      "imageurl": "/images/pineappleJuice.jpg"
    },
    {
      "id": 212,
      "name": "Rose Milk",
      "price": 80,
      "description": "Sweetened chilled milk flavored with natural rose syrup. Fragrant, cooling, and a traditional favorite.",
      "imageurl": "/images/roseMilk.jpg"
    },
    {
      "id": 213,
      "name": "Buttermilk",
      "price": 50,
      "description": "A light and savory yogurt-based drink spiced with cumin, salt, and herbs. A digestive-friendly summer cooler.",
      "imageurl": "/images/buttermilk.jpg"
    },
    {
      "id": 214,
      "name": "Falooda",
      "price": 150,
      "description": "A royal dessert drink layered with milk, rose syrup, vermicelli, basil seeds, and a scoop of ice cream. Sweet and indulgent.",
      "imageurl": "/images/falooda.jpg"
    },
    {
      "id": 215,
      "name": "Kiwi Smoothie",
      "price": 130,
      "description": "A refreshing smoothie made with fresh kiwi, yogurt, and honey. Sweet, tangy, and packed with Vitamin C.",
      "imageurl": "/images/kiwiSmoothie.jpg"
    },
    {
      "id": 216,
      "name": "Black Coffee",
      "price": 70,
      "description": "Strong, bold, and aromatic coffee brewed without milk. Perfect for coffee lovers who enjoy pure flavor.",
      "imageurl": "/images/blackCoffee.jpg"
    },
    {
      "id": 217,
      "name": "Milk Tea",
      "price": 60,
      "description": "Classic tea blend prepared with milk, sugar, and strong tea leaves. A simple everyday favorite.",
      "imageurl": "/images/milkTea.jpg"
    },
    {
      "id": 218,
      "name": "Sweet Lassi",
      "price": 90,
      "description": "A rich and creamy yogurt-based drink, lightly sweetened and served chilled. Popular in North India.",
      "imageurl": "/images/sweetLassi.jpg"
    },
    {
      "id": 219,
      "name": "Salted Lassi",
      "price": 80,
      "description": "A savory yogurt-based drink flavored with salt, roasted cumin, and mint. Cooling and digestive-friendly.",
      "imageurl": "/images/saltedLassi.jpg"
    },
    {
      "id": 220,
      "name": "Cold Cocoa",
      "price": 120,
      "description": "A chilled chocolate drink made with milk, cocoa, and ice cream. Smooth, chocolaty, and irresistible.",
      "imageurl": "/images/coldCocoa.jpg"
    },
    {
      "id": 221,
      "name": "Ginger Tea",
      "price": 60,
      "description": "A hot and spicy tea made with fresh ginger, milk, and sugar. Known for its soothing and immunity-boosting properties.",
      "imageurl": "/images/gingerTea.jpg"
    },
    {
      "id": 222,
      "name": "Apple Juice",
      "price": 110,
      "description": "Freshly pressed apple juice, naturally sweet and full of nutrients. A healthy and tasty option.",
      "imageurl": "/images/appleJuice.jpg"
    },
    {
      "id": 223,
      "name": "Mint Mojito",
      "price": 140,
      "description": "A refreshing cooler made with crushed mint leaves, lime juice, soda, and ice. A perfect summer mocktail.",
      "imageurl": "/images/mintMojito.jpg"
    }
  ],

  desserts: [
    {
      "id": 300,
      "name": "Chocolate Cake",
      "price": 150,
      "description": "A rich and moist layered chocolate cake topped with creamy chocolate frosting. A classic indulgence for all chocolate lovers.",
      "imageurl": "/images/chocolateCake.jpg"
    },
    {
      "id": 301,
      "name": "Cheesecake",
      "price": 180,
      "description": "Smooth and creamy cheesecake with a buttery biscuit base, topped with a light glaze. A melt-in-mouth dessert favorite.",
      "imageurl": "/images/cheesecake.jpg"
    },
    {
      "id": 302,
      "name": "Gulab Jamun",
      "price": 100,
      "description": "Soft and spongy milk-solid dumplings soaked in warm sugar syrup, flavored with cardamom and rose water.",
      "imageurl": "/images/gulabJamun.jpg"
    },
    {
      "id": 303,
      "name": "Rasgulla",
      "price": 90,
      "description": "Light and spongy cottage cheese balls soaked in chilled sugar syrup. A Bengali sweet delicacy.",
      "imageurl": "/images/rasgulla.jpg"
    },
    {
      "id": 304,
      "name": "Ice Cream Sundae",
      "price": 120,
      "description": "Scoops of vanilla ice cream topped with chocolate syrup, nuts, and cherries. A perfect cold delight.",
      "imageurl": "/images/iceCreamSundae.jpg"
    },
    {
      "id": 305,
      "name": "Brownie",
      "price": 80,
      "description": "Dense, fudgy, and rich chocolate brownie with a slightly crisp top. Best enjoyed warm with ice cream.",
      "imageurl": "/images/brownie.jpg"
    },
    {
      "id": 306,
      "name": "Fruit Salad",
      "price": 70,
      "description": "A refreshing mix of fresh seasonal fruits, lightly sweetened, and served chilled for a healthy treat.",
      "imageurl": "/images/fruitSalad.jpg"
    },
    {
      "id": 307,
      "name": "Donut",
      "price": 60,
      "description": "Soft, fluffy donut glazed with sugar or chocolate. A quick sweet snack loved by all ages.",
      "imageurl": "/images/donut.jpg"
    },
    {
      "id": 308,
      "name": "Mango Kulfi",
      "price": 90,
      "description": "Traditional Indian frozen dessert made with creamy milk and ripe mangoes, served on a stick.",
      "imageurl": "/images/mangoKulfi.jpg"
    },
    {
      "id": 309,
      "name": "Pudding",
      "price": 110,
      "description": "Silky smooth caramel pudding with a rich custard base. A light and delicious dessert to end any meal.",
      "imageurl": "/images/pudding.jpg"
    },
    {
      "id": 310,
      "name": "Red Velvet Cake",
      "price": 160,
      "description": "A velvety soft cake with layers of cream cheese frosting and a rich red cocoa flavor.",
      "imageurl": "/images/redVelvetCake.jpg"
    },
    {
      "id": 311,
      "name": "Apple Pie",
      "price": 140,
      "description": "Classic American dessert with a buttery crust filled with spiced apple filling, baked to golden perfection.",
      "imageurl": "/images/applePie.jpg"
    },
    {
      "id": 312,
      "name": "Tiramisu",
      "price": 200,
      "description": "An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa dusting.",
      "imageurl": "/images/tiramisu.jpg"
    },
    {
      "id": 313,
      "name": "Cupcake",
      "price": 50,
      "description": "Mini sponge cake topped with creamy icing and sprinkles. Small in size, big in taste.",
      "imageurl": "/images/cupcake.jpg"
    },
    {
      "id": 314,
      "name": "Jalebi",
      "price": 70,
      "description": "Crispy, golden spirals of deep-fried batter soaked in fragrant sugar syrup. A festive Indian sweet.",
      "imageurl": "/images/jalebi.jpg"
    },
    {
      "id": 315,
      "name": "Kheer",
      "price": 90,
      "description": "Traditional Indian rice pudding cooked with milk, sugar, and flavored with cardamom, nuts, and saffron.",
      "imageurl": "/images/kheer.jpg"
    },
    {
      "id": 316,
      "name": "Choco Lava Cake",
      "price": 130,
      "description": "A soft chocolate cake with a molten chocolate center that oozes out when cut.",
      "imageurl": "/images/chocoLavaCake.jpg"
    },
    {
      "id": 317,
      "name": "Pastry",
      "price": 100,
      "description": "Light and layered sweet pastry with cream filling, perfect for a quick dessert bite.",
      "imageurl": "/images/pastry.jpg"
    },
    {
      "id": 318,
      "name": "Banana Split",
      "price": 150,
      "description": "A delightful dessert made with bananas, scoops of ice cream, chocolate syrup, and nuts.",
      "imageurl": "/images/bananaSplit.jpg"
    },
    {
      "id": 319,
      "name": "Mysore Pak",
      "price": 80,
      "description": "A South Indian sweet made with gram flour, ghee, and sugar, known for its melt-in-mouth texture.",
      "imageurl": "/images/mysorePak.jpg"
    },
    {
      "id": 320,
      "name": "Churros",
      "price": 120,
      "description": "Crispy fried dough sticks rolled in sugar and cinnamon, served with chocolate dip.",
      "imageurl": "/images/churros.jpg"
    },
    {
      "id": 321,
      "name": "Falooda",
      "price": 130,
      "description": "A layered dessert drink with milk, vermicelli, basil seeds, rose syrup, and ice cream.",
      "imageurl": "/images/falooda2.jpg"
    },
    {
      "id": 322,
      "name": "Pineapple Cake",
      "price": 140,
      "description": "Soft sponge cake layered with pineapple slices and whipped cream. Light and fruity dessert.",
      "imageurl": "/images/pineappleCake.jpg"
    },
    {
      "id": 323,
      "name": "Cookies",
      "price": 60,
      "description": "Crispy choco chip cookies baked to perfection. A perfect snack with tea or coffee.",
      "imageurl": "/images/cookies.jpg"
    }
  ]

  },
  reducers: {},
});


// initialState
const initialState = JSON.parse(localStorage.getItem("zomo_cart")) || [];

const cartSlice = createSlice({
  name :"cart",
  initialState,
  reducers :{
    addToCart : (state, action) =>{
      let item = state.find(item => item.name === action.payload.name);
      if(item){
        item.quantity += 1;
      }
      else{
        state.push({...action.payload, quantity: 1});
      }
    },

    removeFromCart :(state, action) =>{
      let itemIndex =  state.findIndex(item => item.name === action.payload.name);
      if(itemIndex != -1){
        state.splice(itemIndex,1);
      }
    },


    updateQuantity: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
        if (item.quantity <= 0) {
          state.splice(state.indexOf(item), 1); // remove item if 0
        }
      }
    },


    clearCart : () => [],



  }
});


// Extract the action creator
export const { addToCart, removeFromCart, updateQuantity, clearCart, addFromLocalStorage } = cartSlice.actions;



// Load orders from localStorage, else empty array
const ordersInitialState = JSON.parse(localStorage.getItem("zomo_orders")) || [];

let orderSlice = createSlice({
  name: "orders",
  initialState: ordersInitialState,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    removeAllOrder: () => [],
  },
});

export let { addOrder, removeAllOrder } = orderSlice.actions;



  //   userAuthentication

// Load saved users from localStorage if present
const storedUserAuth = JSON.parse(localStorage.getItem("register_users"));

let userAuthenticationSlice = createSlice({
  name: "userAuth",
  initialState: storedUserAuth || { users: [],isValidUser: false, currentUser: null }, //  track logged in user
  reducers: {
    registeredUsers: (state, action) => {
      state.users.push(action.payload); // add new user
    },

    loginUserDetails: (state, action) => {
      const { username, password } = action.payload;

      const user = state.users.find(
        (user) => user.userName === username && user.password === password
      );

      if (user) {
        state.currentUser = user;
        state.isValidUser = true;   
      } else {
        state.currentUser = null;
        state.isValidUser = false;  // reset if wrong creds
      }
    },

    logoutUser: (state) => {
      state.isValidUser = false;
      state.currentUser = null;
    }
  },
});

export const { registeredUsers, loginUserDetails, logoutUser } = userAuthenticationSlice.actions;






// 2. Create store
const store = configureStore({
  reducer: {
    product: productsSlice.reducer, 
    cart : cartSlice.reducer,
    order : orderSlice.reducer,
    userAuth : userAuthenticationSlice.reducer
  },
});


//  Persist cart in localStorage on every change
store.subscribe(()=>{
   localStorage.setItem("zomo_cart",JSON.stringify(store.getState().cart));
   localStorage.setItem("zomo_orders", JSON.stringify(store.getState().order));
   localStorage.setItem("register_users", JSON.stringify(store.getState().userAuth));
});




// 3. Export store
export default store;
