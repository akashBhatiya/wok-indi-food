console.log("script is loaded");


const path = "./assets/images/chain rest/i";

const rests = [
    {
        img: path + "1.webp",
        ot: "₹120 OFF ABOVE ₹999",
        name: "Domino's",
        menu: "Pizzas, American",
        location: "Vesu",
        link: "./radhe.html",
        rate: 4.2,
        ads: true,
        veg:false
    },
    {
        img: path + "2.webp",
        ot: "",
        name: "Gaytri Khaman",
        menu: "Gujarati, Snacks",
        location: "Katargam",
        link: "./radhe.html",
        rate: 4.4,
        ads: true,
        veg: true
    },
    {
        img: path + "3.webp",
        ot: "₹125 off above ₹199",
        name: "McDonald's",
        menu: "Burgers, Beverages, Cafe",
        location: "Rustampura",
        link: "./radhe.html",
        rate: 4.2,
        ads: true,
        veg: false
    },
    {
        img: path + "4.webp",
        ot: "",
        name: "Subway",
        menu: "Fast Food, Salad",
        location: "Athwa",
        link: "./radhe.html",
        rate: 3.9,
        ads: true,
        veg: false
    },
    {
        img: path + "5.webp",
        ot: "",
        name: "Burger King",
        menu: "Burgers, American",
        location: "Vesu",
        link: "./radhe.html",
        rate: 4.2,
        ads: true,
        veg: true
    },
    {
        img: path + "6.webp",
        ot: "20% off upto ₹50",
        name: "G Dada",
        menu: "Gujarati, North Indian",
        location: "Adajan Pal",
        link: "./radhe.html",
        rate: 3.8,
        ads: false,
        veg: true
    },
    {
        img: path + "7.webp",
        ot: "free item",
        name: "Pizza Hut",
        menu: "Pizzas, Salad, American",
        location: "Vesu",
        link: "./radhe.html",
        rate: 3.6,
        ads: true,
        veg: false
    },
    {
        img: path + "8.webp",
        ot: "50% off upto ₹100",
        name: "Jani Locho",
        menu: "Gujarti, Snacks",
        location: "Adajan Patiya",
        link: "./radhe.html",
        rate: 4.3,
        ads: true,
        veg: true
    },
    {
        img: path + "9.webp",
        ot: "",
        name: "Starbucks Coffee",
        menu: "Beverages, Cafe, Snacks",
        location: "City Light Town",
        link: "./radhe.html",
        rate: 4.2,
        ads: true,
        veg: true
    },
    {
        img: path + "10.webp",
        ot: "",
        name: "Natural Icecream",
        menu: "Ice cream, Candy",
        location: "Varachha",
        link:"./radhe.html",
        rate: 3.8,
        ads: false,
        veg: true
    },
    {
        img: path + "11.webp",
        ot: "",
        name: "Gangaur",
        menu: "Fast Food, meals",
        location: "Ring Road",
        link: "./radhe.html",
        rate: 4,
        ads: true,
        veg: true
    },
    {
        img: path + "12.webp",
        ot: "₹125 above ₹199",
        name: "Radhe Dhokla",
        menu: "North Indian, Chinese",
        location: "Rustampura",
        link: "./radhe.html",
        rate: 4.1,
        ads: true,
        veg: true
    },
    {
        img: path + "13.webp",
        ot: "50% off upto ₹100",
        name: "La Pino'z Pizza",
        menu: "Pizzas, Pasta, Salad",
        location: "Udhana Gam",
        link: "./radhe.html",
        rate: 3.8,
        ads: false,
        veg: false
    },
    {
        img: path + "14.webp",
        ot: "₹125 off upto ₹199",
        name: "Bismillah",
        menu: "Ice cream, Desserts",
        location: "Sagrampura",
        link: "./radhe.html",
        rate: 4.3,
        ads: false,
        veg: true
    },
    {
        img: path + "15.webp",
        ot: "40% off upto ₹80",
        name: "Maakhan Bhog",
        menu: "Desserts",
        location: "Udhana Gam",
        link: "./radhe.html",
        rate: 3.9,
        ads: false,
        veg: true
    },
    {
        img: path + "16.webp",
        ot: "30% off",
        name: "Tulsi Restaurant",
        menu: "North Indian, Chinese",
        location: "Udhana Gam",
        link: "./radhe.html",
        rate: 4.2,
        ads: false,
        veg: true
    },
    {
        img: path + "17.webp",
        ot: "",
        name: "Sugar N Spice",
        menu: "Indian, Thalis, Chinese",
        location: "Nanpura",
        link: "./radhe.html",
        rate: 3.8,
        ads: false,
        veg: false
    },
    {
        img: path + "18.webp",
        ot: "",
        name: "Radhe Restaurant",
        menu: "Chinese, North Indian",
        location: "Athwa",
        link: "./radhe.html",
        rate: 4.2,
        ads: false,
        veg: true
    },
    {
        img: path + "19.webp",
        ot: "",
        name: "Sai Restaurant",
        menu: "North Indian, Chinese",
        location: "Varachha",
        link: "./radhe.html",
        rate: 4.2,
        ads: false,
        veg: true
    }
]


//function to horizontal scroll button 
function scrollContent(direction, containerIndex) {
    const containers = document.querySelectorAll('.card-container');
    const container = containers[containerIndex];
    const scrollStep = 450; 
    const scrollAmount = direction === 'left' ? -scrollStep : scrollStep;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

//function to render over restaurants

function renderRests(){
    const restaurants1 = document.getElementById("rests-1");
    const restauratns2 = document.getElementById("rests-2");

    restaurants1.innerHTML = " ";
    restauratns2.innerHTML = " ";

    for(let i = 0; i< rests.length; i++){
        
        if(rests[i].ads){
            restaurants1.innerHTML += `
                <a href = "${rests[i].link}">
                    <div class="chain-rest-card">
                        <div class="img-container">
                            <img src="${rests[i].img}" alt="">
                            <div class="offer-tags">
                                <h4>${rests[i].ot}</h4>
                            </div>
                        </div>
                        <div class="card-text">
                            <h3>
                                ${rests[i].name}
                            </h3>
                            <span class="star-container"><i class="fa-solid fa-star" style="color: green;"></i></span>
                            <span class="rating-container" style="color: var(--dark-text-color2);">${rests[i].rate}</span>
                            <h5>
                                ${rests[i].menu}
                            </h5>
                            <h5>
                                ${rests[i].location}
                            </h5>
                        </div>
                    </div>
                </a>
            `;
        }


        restauratns2.innerHTML += `
            <a href="${rests[i].link}">
                <div class="chain-rest-card">
                <div class="img-container">
                        <img src="${rests[i].img}" alt="">
                        <div class="offer-tags">
                            <h4>${rests[i].ot}</h4>
                        </div>
                    </div>
                    <div class="card-text">
                        <h3>
                            ${rests[i].name}
                        </h3>
                        <span class="star-container"><i class="fa-solid fa-star" style="color: green;"></i></span>
                        <span class="rating-container" style="color: var(--dark-text-color2);">${rests[i].rate}</span>
                        <h5>
                            ${rests[i].menu}
                        </h5>
                        <h5>
                            ${rests[i].location}
                        </h5>
                    </div>
                </div>
            </a>
        `;

       
    }
}
renderRests();


function rateSort(){
    const restauratns2 = document.getElementById("rests-2");
    restauratns2.innerHTML = "";

    for(let i = 0; i< rests.length; i++){
        if(rests[i].rate >=4){
            restauratns2.innerHTML += `
            <a href="${rests[i].link}">
                <div class="chain-rest-card">
                <div class="img-container">
                        <img src="${rests[i].img}" alt="">
                        <div class="offer-tags">
                            <h4>${rests[i].ot}</h4>
                        </div>
                    </div>
                    <div class="card-text">
                        <h3>
                            ${rests[i].name}
                        </h3>
                        <span class="star-container"><i class="fa-solid fa-star" style="color: green;"></i></span>
                        <span class="rating-container" style="color: var(--dark-text-color2);">${rests[i].rate}</span>
                        <h5>
                            ${rests[i].menu}
                        </h5>
                        <h5>
                            ${rests[i].location}
                        </h5>
                    </div>
                </div>
            </a>
        `;
        }
    }

}

function vegSort(){
    const restauratns2 = document.getElementById("rests-2");
    restauratns2.innerHTML = "";

    for(let i = 0; i< rests.length; i++){
        if(rests[i].veg){
            restauratns2.innerHTML += `
            <a href="${rests[i].link}">
                <div class="chain-rest-card">
                <div class="img-container">
                        <img src="${rests[i].img}" alt="">
                        <div class="offer-tags">
                            <h4>${rests[i].ot}</h4>
                        </div>
                    </div>
                    <div class="card-text">
                        <h3>
                            ${rests[i].name}
                        </h3>
                        <span class="star-container"><i class="fa-solid fa-star" style="color: green;"></i></span>
                        <span class="rating-container" style="color: var(--dark-text-color2);">${rests[i].rate}</span>
                        <h5>
                            ${rests[i].menu}
                        </h5>
                        <h5>
                            ${rests[i].location}
                        </h5>
                    </div>
                </div>
            </a>
        `;
        }
    }
}

function offerSort(){
    const restauratns2 = document.getElementById("rests-2");
    restauratns2.innerHTML = "";

    for(let i = 0; i< rests.length; i++){
        if(rests[i].ot != ""){
            restauratns2.innerHTML += `
            <a href="${rests[i].link}">
                <div class="chain-rest-card">
                <div class="img-container">
                        <img src="${rests[i].img}" alt="">
                        <div class="offer-tags">
                            <h4>${rests[i].ot}</h4>
                        </div>
                    </div>
                    <div class="card-text">
                        <h3>
                            ${rests[i].name}
                        </h3>
                        <span class="star-container"><i class="fa-solid fa-star" style="color: green;"></i></span>
                        <span class="rating-container" style="color: var(--dark-text-color2);">${rests[i].rate}</span>
                        <h5>
                            ${rests[i].menu}
                        </h5>
                        <h5>
                            ${rests[i].location}
                        </h5>
                    </div>
                </div>
            </a>
        `;
        }
    }
}


//fucntion to open and close menu
let open = false;

function toggleNav(){
    const btn = document.getElementById("nav-button");
    const navMenu = document.getElementById("nav-container");
    const main = document.getElementsByClassName("main");

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