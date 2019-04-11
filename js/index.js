const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
}

// Img src's for the page

const logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])
const ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Selectors

const nav = document.querySelector('nav')
const navItems = document.querySelectorAll('a')
const bigHead = document.querySelector('h1')
const button = document.querySelector('button')
const littleHead = document.querySelectorAll('h4')
const pElement = document.querySelectorAll('p')

// Creators

const community = document.createElement('a')
const education = document.createElement('a')

// Nav Bar and Header

navItems.forEach((value, index) => {value.innerText = siteContent["nav"][`nav-item-${index++}`]})

// navItems[0].innerText = siteContent["nav"]["nav-item-1"]
// navItems[1].innerText = siteContent["nav"]["nav-item-2"]
// navItems[2].innerText = siteContent["nav"]["nav-item-3"]
// navItems[3].innerText = siteContent["nav"]["nav-item-4"]
// navItems[4].innerText = siteContent["nav"]["nav-item-5"]
// navItems[5].innerText = siteContent["nav"]["nav-item-6"]

bigHead.innerHTML = siteContent["cta"]["h1"]
bigHead.style.color = 'yellowgreen'

button.innerText = siteContent["cta"]["button"]
button.style.borderColor = 'orange'
button.style.color = 'hotpink'

function myFunc(){
  if (bigHead.style.color == 'yellowgreen'){
    bigHead.style.color = 'seagreen'
  } else {
    bigHead.style.color = 'yellowgreen'
  }
}
button.addEventListener('click', myFunc)

community.textContent = 'Community'
nav.appendChild(community)
education.textContent = 'Education'
nav.prepend(education)

navItems.forEach((value) => {value.style.color = 'seagreen'})

community.style.color = 'seagreen'
education.style.color = 'seagreen'

// Main Content

littleHead[0].innerText = siteContent["main-content"]["features-h4"]
pElement[0].innerText = siteContent["main-content"]["features-content"]

littleHead[1].innerText = siteContent["main-content"]["about-h4"]
pElement[1].innerText = siteContent["main-content"]["about-content"]

littleHead[2].innerText = siteContent["main-content"]["services-h4"]
pElement[2].innerText = siteContent["main-content"]["services-content"]

littleHead[3].innerText = siteContent["main-content"]["product-h4"]
pElement[3].innerText = siteContent["main-content"]["product-content"]

littleHead[4].innerText = siteContent["main-content"]["vision-h4"]
pElement[4].innerText = siteContent["main-content"]["vision-content"]

littleHead.forEach((value) => {value.style.fontSize = '30px'})
littleHead.forEach((value) => {value.style.color = 'crimson'})

pElement.forEach((value) => {value.style.color = 'purple'})

// Contact

littleHead[5].innerText = siteContent["contact"]["contact-h4"]
pElement[5].innerHTML = siteContent["contact"]["address"]
pElement[6].innerText = siteContent["contact"]["phone"]
pElement[7].innerText = siteContent["contact"]["email"]

// Footer

pElement[8].innerText = siteContent["footer"]["copyright"]