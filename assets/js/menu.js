const menu = [
    {
        img: "./assets/images/menu/i1.jpg",
        dishname: "Dal Fry",
        dis:"Serves 1 | A savory veg dish bursting with bold flavors and aromatic spices.",
        price: 175,
    },
    {
        img: "./assets/images/menu/i2.webp",
        dishname: "Veg Biryani",
        dis:"A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices.",
        price: 225
    },
    {
        img: "./assets/images/menu/i3.jpg",
        dishname: "Hyderabadi Biryani",
        dis:"Serves 1 | A flavorful and aromatic dish from Hyderabad made with rice and lentils.",
        price: 240
    },
    {
        img: "./assets/images/menu/i4.webp",
        dishname: "Handi Biryani",
        dis:"Serves 1 | Fragrant rice cooked to perfection with savory spice-infused vegetables.",
        price: 255
    },
    {
        img: "./assets/images/menu/i5.webp",
        dishname: "Veg Pulao",
        dis:"A wholesome dish prepared by cooking chopped vegetables and rice in a flavorful Indian masala.",
        price: 215
    },
    {
        img: "./assets/images/menu/i6.jpg",
        dishname: "Garlic Dhokla",
        dis:"Serves 1 | A savoury and flavourful dish with a garlicky kick.",
        price: 235
    },
    {
        img: "./assets/images/menu/i7.jpg",
        dishname: "Butter Dhokla",
        dis:"250 gm | Serves 1 | A spongy dish made with ground, fermented batter of rice and lentils like chana dal or urad dal and cooked in butter",
        price: 195
    },
    {
        img: "./assets/images/menu/i8.webp",
        dishname: "Cheese Butter Dhokla",
        dis:"250 gm | Serves 1 | A mouth-watering and creamy variation of the classic Dhokla.",
        price: 175
    },
    {
        img: "./assets/images/menu/i9.webp",
        dishname: "Schezwan Rice",
        dis:"",
        price: 95
    },
    {
        img: "./assets/images/menu/i10.webp",
        dishname: "Veg Fried Rice",
        dis:"",
        price: 110
    },
    {
        img: "./assets/images/menu/i11.webp",
        dishname: "Triple Rice",
        dis:"",
        price: 120
    },
    {
        img: "./assets/images/menu/i12.webp",
        dishname: "Hong Kong Fried Rice",
        dis:"",
        price: 125
    },
    {
        img: "./assets/images/menu/i13.webp",
        dishname: "Hakka Noodles",
        dis:"| A delicious Indo Chinese receipe with noodles tossed with veggies in Chinese sauces and topped with spices |",
        price: 130
    },
    {
        img: "./assets/images/menu/i14.webp",
        dishname: "Schezwan Noodles",
        dis:"",
        price: 210
    },
    {
        img: "./assets/images/menu/i15.jpg",
        dishname: "Chilly Garlic Noodles",
        dis:"",
        price: 220
    },
    {
        img: "./assets/images/menu/i16.webp",
        dishname: "Kaju Curry (Brown)",
        dis:"300 ml | Serves 1 | Cashew tossed in aromatic kadhai gravy made of onion- tomato and robust spicesand masalas.",
        price: 230
    },
    {
        img: "./assets/images/menu/i17.jpg",
        dishname: "Kaju Masala (Red)",
        dis:"A rich and flavourful dish with a vibrant red sauce.",
        price: 240
    },
    {
        img: "./assets/images/menu/i18.webp",
        dishname: "Veg Toofani (Red)",
        dis:"300 ml | Serves 1 | A delicious dish made of mixed vegetables in a tomato based spicy gravy.",
        price: 300
    }
];


function renderMenu(cI){
    const menuContainer = document.getElementsByClassName('inner-container3');
    menuContainer[cI].innerHTML = "";

    for(let i = 0; i< menu.length; i++){
        menuContainer[cI].innerHTML += `
            <div class="dish-container">
                <div class="detail-container">
                    <i class="fa-solid fa-leaf veg"></i>
                    <h1>
                        ${menu[i].dishname} 
                    </h1>
                    <p>
                        ₹ ${menu[i].price}
                    </p>
                    <h3>
                        ${menu[i].dis}
                    </h3>
                </div>
                <div class="img-container">
                    <img src="${menu[i].img}" alt="${i+" akashhhhh"}">
                    <button>ADD+</button>
                </div>
            </div>
        `;
    }
}


var arr = ["false","false","false","false"];

function dropToggle(cI){
    console.log("here \n");
    const acIcon = document.querySelectorAll('.container3 .arrow-container > i');
    const tD = arr[cI];
    const menuContainer = document.getElementsByClassName('inner-container3');
    if(tD === "true"){
        menuContainer[cI].innerHTML = "";
        acIcon[cI].classList.remove("fa-chevron-up");
        acIcon[cI].classList.add('fa-chevron-down');
        arr[cI] = "false";
        return;
    }
    else if(tD === "false"){
        renderMenu(cI);
        acIcon[cI].classList.remove("fa-chevron-down");
        acIcon[cI].classList.add("fa-chevron-up");
        arr[cI] = "true";
        return;
    }

}

//fucntion to open and close nev menu in small screens

function toggleNav(){
    const btn = document.getElementById("nav-button");
    const navMenu = document.getElementById("nav-container");
    const main = document.getElementsByTagName("main");

    if(open){
        btn.classList.remove("fa-x");
        btn.classList.add("fa-bars");
        navMenu.style.display="none";
        main[0].style.opacity = "1";
    }
    else{
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-x");
        navMenu.style.display="block";
        main[0].style.opacity = "0.6";
    }
    open = !open;
}