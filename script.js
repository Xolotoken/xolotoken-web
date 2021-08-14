window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    var sliding = this.document.getElementById('slidingMessageMarquee');
    header.classList.toggle("sticky", window.scrollY > 0);
    sliding.classList.toggle("scrolled", window.scrollY > 0);
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

document.querySelectorAll('.alsoCloseMM').forEach(item => {
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

function showWallets(){
    var partnersDiv = document.getElementById('walletsTable');
    if (getComputedStyle(partnersDiv, null).display === "none")
    {
        partnersDiv.style.display = "block";
    }
    else
    {
        partnersDiv.style.display = "none"
    }
}

function showContact(){
    var partnersDiv = document.getElementById('contactUsDiv');
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


var x = setInterval(function() {

    var end = new Date('08/25/2021 01:00:00 PM');
    var endPresale = new Date('09/01/2021 01:00:00 PM');
    var now = new Date();
    var nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    var distancePresale = end - nowUTC;
    var distanceEndPresale = endPresale - nowUTC;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distancePresale / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distancePresale % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distancePresale % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distancePresale % (1000 * 60)) / 1000);


  // Display the result in the element with id="demo"
  document.getElementById("countdownP").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distancePresale < 0) {
    
    document.getElementById("countdownP").innerHTML = "PRESALE LIVE";
    document.getElementById("slidingMessage").innerHTML = "PRESALE LIVE";
    document.getElementById("slidingMessage").style.color = "#FFFF00";
    document.getElementById("countdownUpperText").innerHTML = "PRE-SALE ENDS ON SEPTEMBER 1, 13h00 UTC";
    
  }

  if (distanceEndPresale < 0) {
    clearInterval(x);
    document.getElementById("marqueeMessage").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    document.body.style.backgroundImage = "url('img/Xolo-Despierto.jpg')";
  }
}, 1000);


window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
});


window.scrollBy({ 
    top: 100, 
    left: 0, 
    behavior: 'smooth' 
});