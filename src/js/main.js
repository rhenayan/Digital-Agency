/*============SCROLLREVEAL JS===================*/


//DEFAULT

ScrollReveal({
    duration: 700,
    reset:false,
    distance: '50px',
    easing: 'ease',
    viewFactor: 0.5,
    opacity: 0.55,
});


//NAVBAR

ScrollReveal().reveal('.navbar',{origin: 'top',delay: 200,})

//HERO

ScrollReveal().reveal('.hero .container', {origin: 'top',scale: 0.85,});

//SECTION TITLE FADE from LEFT
ScrollReveal().reveal('h6', {origin: 'left',distance: '100px',});

//CARDS
ScrollReveal().reveal('.features .card, .process .card',  { distance:'40px', interval: 200,});

// BRAND LOGOS
ScrollReveal().reveal('.brand', {interval: 200, distance: '0px', opacity: 0.1,});

ScrollReveal().reveal('.start-with-us img, .start-with-us .button, footer img, footer a', {opacity: 0.1, scale: 0.95, distance: '2px',});


/*===================END OF SCROLLREVEAL JS===================*/