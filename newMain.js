

// array delle immagini

const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',    
    },
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

console.log(images);

// creazione di un ciclo per estrapolare i valori degli oggetti
for (let i = 0; i < images.length; i++ ) {
    const listItem = images[i];
    // seleziono il mio contenitore dal DOM
    const card = document.querySelector(".container");
    // creazione di div nel DOM per stampare i valore degli oggetti 
    card.innerHTML += `
    <div class="item">
        <div class= "text">
            <h3>"${listItem.title}"</h3>
            <p>"${listItem.text}"</p>
        </div>
        <img src="${listItem.image}" alt= "${listItem.title}"/>
    </div>
`;
}

//inserire la classe active del CSS al primo elemento della lista 
let activeImg= 0;
const items= document.getElementsByClassName("item");
items[activeImg].classList.add("active");