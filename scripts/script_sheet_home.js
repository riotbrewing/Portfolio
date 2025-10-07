let button_one = document.getElementById("portfolio_home");

button_one.addEventListener('click',onclick);

function onclick(){
    console.log("clicked");
    location.replace('projects.html');
}