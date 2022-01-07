const navBer = document.querySelector('.nav-bar');
const navArea = document.querySelector('.nav-area');




function nav(){
    navBer.addEventListener('click', function(){
        navArea.classList.toggle('show');
    });
}
nav();