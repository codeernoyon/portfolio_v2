/*****************************************************
 ======================Header Observr====================
*****************************************************/
const header = document.querySelector('.header-area');
const heroArea = document.querySelector('.hero-area');
const headerOption = {
    rootMargin : '-648px 0px 0px 0px'
}
const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('active');
            
        }
        else{
            header.classList.remove('active');
        }
    });
}, headerOption);

headerObserver.observe(heroArea);


/*****************************************************
 ======================Hero-Area Observr==============
*****************************************************/
const heroOption = {
    threshold: .5
}
const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            heroArea.classList.add('active');
            return console.log(entry);
            
        }
    });
}, heroOption);

heroObserver.observe(heroArea);


/*----------------------heaer-area-----------------*/
/* const heroArea = document.querySelector('.hero-area');
const header = document.querySelector("#Protfolios");
const about = document.querySelector('#about-area');
 */

/*****************************************************
 ======================Top Observr====================
*****************************************************/

/* let TopOption = {
    //root: null
    threshold: .5
    //rootMargin: '2px'
}

const TopObserver = new IntersectionObserver(function (entries, TopObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            return;
        } else {
            entry.target.classList.remove('active');
        }
        
    });
}, TopOption);

TopObserver.observe(heroArea); */
/*****************************************************
 ======================Middel Observr====================
*****************************************************/

/* let MiddelOption = {
    //root: null
    threshold: .5
    //rootMargin: '2px'
}

const MiddelObserver = new IntersectionObserver(function (entries, MiddelObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            return;
        } else {
            entry.target.classList.remove('active');
        }
        
    });
}, MiddelOption); */



/*****************************************************
 ======================Top Observr====================
*****************************************************/

/* let bottomOption = {
    //root: null
    threshold: .5
    //rootMargin: '2px'
}

const bottomObserver = new IntersectionObserver(function (entries, bottomObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            return;
        } else {
            entry.target.classList.remove('active');
        }
        
    });
}, bottomOption);
 */



















/* const heroArea = document.querySelector('.hero-area');
const header = document.querySelector('.header-area');
const heroAreaPosition = (heroArea.getBoundingClientRect().top) + 70;
const screenPosition = window.innerHeight / 10;
console.log(heroAreaPosition);
console.log(screenPosition);

function heroarea(){
    if(heroAreaPosition > screenPosition){
        
        console.log('okk');
        heroArea.classList.add('active');;
        return;
    }
    else{
        console.log('remove');
        heroArea.classList.remove('active');
        return;
    }
    
}
heroarea();

    window.addEventListener('scroll', function(){
        heroarea();
    }); 

 */