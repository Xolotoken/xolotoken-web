window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function(){
    var landingPageContent = this.document.getElementById('landingPageContent');
    landingPageContent.style.opacity = 1 - window.scrollY / 250; 
}

)

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const alsoCloseMenu = document.getElementById('.openMenu');

document.querySelectorAll('.openMenu').forEach(item => {
    item.addEventListener('click', event => {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    })
})

document.querySelectorAll('.closeMenu').forEach(item => {
    item.addEventListener('click', event => {
        mainMenu.style.top = '-100%';
    })
})

document.querySelectorAll('.alsoCloseMenu').forEach(item => {
    item.addEventListener('click', event => {
        mainMenu.style.top = '-100%';
    })
})

function showTeam(){
    var teamDiv = document.getElementById('fullTeam');
    if (getComputedStyle(teamDiv, null).display === "none")
    {
        teamDiv.style.display = "block";
    }
    else
    {
        teamDiv.style.display = "none"
    }
}

function showPartners(){
    var partnersDiv = document.getElementById('partners');
    if (getComputedStyle(partnersDiv, null).display === "none")
    {
        partnersDiv.style.display = "block";
    }
    else
    {
        partnersDiv.style.display = "none"
    }
}

function copyAddress()
{
    var el = document.createElement('textarea');
    el.value = "0x75e0CBd93AFF23cb92a5bde8DE0A810C4425E9Eb";
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
