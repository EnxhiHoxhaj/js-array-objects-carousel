//Creare un carosello che scorra le immagini caricate

const imgCarousel = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]

// seleziono il container dal DOM

const imgContainer = document.querySelector(".container");

//inserire su JS le immagini che voglio far scorrere

for (let i = 0; i < imgCarousel.length; i++) { // estrapolare le immagini del mio array
    let itemCarousel = imgCarousel[i];

    // creare il div di inserimento delle immagini
    let carouselContent = `        
            <div class="item">
                <img src="${itemCarousel}" >
            </div>`;
    console.log(carouselContent);
    // inserire le immagini nel mio div

    imgContainer.innerHTML += carouselContent;
}

// inserire la classe active del CSS al primo elemento della lista 
let activeImg= 0;
const items= document.getElementsByClassName("item");
items[activeImg].classList.add("active");
// creare e gestire l'evento click
// seleziona le frecce
const upArrow = document.querySelector(".fa-circle-chevron-up");
const downArrow = document.querySelector(".fa-circle-chevron-down");
 //click
upArrow.addEventListener( "click",
    function() {

        if(activeImg < imgCarousel.length - 1) { // far spostare la classe active in modo crescente
        //togliere la classe active dove non necessario
        items[activeImg].classList.remove("active");
        // far spostare la classe active in modo crescente
        activeImg = activeImg + 1;
        items[activeImg].classList.add("active");
        }
    }
);
// creare e gestire l'evento secondo click

downArrow.addEventListener( "click",
    function() {
        if(activeImg > 0) { // far spostare la classe active in modo decrescente
        //togliere la classe active dove non necessario
        items[activeImg].classList.remove("active");
        // far spostare la classe active in modo decrescente
        activeImg= activeImg - 1;
        items[activeImg].classList.add("active"); 
        }
    }
);

