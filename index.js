import { ourServices } from "./data.js";

let mobile = document.querySelector('.mobile-navigation')
let closeIcon = document.querySelector('.fa-xmark')
let hamburgerIcon = document.querySelector('.fa-bars');
let ul = document.querySelector('.top-nav-ul');
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let p4 = document.querySelector('.p4')
let ourServices = document.querySelector('#ourServices')
let filtered = document.querySelector('#filter')
filteredArray = {}
actualServices = ourServices
mobile.style.visibility = 'hidden';


hamburgerIcon.addEventListener('click', function appear(){
    mobile.style.visibility = 'visible'
    mobile.style.width = '70%'
})


closeIcon.addEventListener('click', () => {
    mobile.style.visibility = 'hidden';
})

let about = "We are Africa's no. 1 technological hub for student-centred education, \
commerce, workforce and innovations.\
We integrate latest technologies and expertise to bring about seamless \
experiences across our affordable services.\
Learn with the best, buy the best and reliable products born out of \
innovations, position yourself for the global market place or source \
for the best talents and request for affordable ICT solutions from our network of technologies.\
... manifest your dreams"

console.log(about)

let text1 = about.slice(0, 107)
console.log(text1)
let text2 = about.slice(107, 221)
console.log(text2)
let text3 = about.slice(221, -24)
console.log(text3)
let text4 = about.slice(-24, )
console.log(text4)

p1.innerHTML = text1
p2.innerHTML = text2
p3.innerHTML = text3
p4.innerHTML = text4





// 29/09/2023

//run the map function to populate the service section of the HTML
let serviceMap = () => {
    if(filtered.value === '') actualService = services;
    console.log('I ran it')
    actualServices.map((service) => {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.setAttribute('src',service.image)
        
        let h3 = document.createElement('h3');
        h3.setAttribute('class','service-title');
        h3.innerText = service.title;
        
        let para = document.createElement('p');
        para.setAttribute('class','service-description');
        para.innerText = service.desc;
        
        let button1 = document.createElement('button');
        button1.setAttribute('class','learn-more');
        button1.innerText = 'Learn More';
        
        let button2 = document.createElement('button');
        button2.setAttribute('class','apply-now');
        button2.innerHTML = 'Apply Now';
        
        let button3 = document.createElement('button');
        button3.setAttribute('class','comming-soon');
        button3.innerHTML = 'Comming Soon';
        
        div.append(img,h3,para);
        
        service.button ? div.append(button1,button2) : div.appendChild(button3);
        
                
        servicesSection.appendChild(div)        
    });
           
};

serviceMap();

filterSearch.addEventListener("keyup",() => {
   filteredArray = [];
   servicesSection.innerHTML = '';
    actualService.filter((service) => {
        
        if(filterSearch.value !== ''){
            if(service.title.includes(filterSearch.value) || service.desc.includes(filterSearch.value)){
                // push it to the array holding filtered values
                filteredArray = [...filteredArray,service]
            }
        }
        // append services to the div
        
    })
    if(filteredArray.length === 0) serviceMap();

    if(filteredArray.length !== 0 && filterSearch.value !== ''){
        actualService = filteredArray;
        console.log("filtered map")
        serviceMap();
    }
    // console.log(filteredArray)
    if(filteredArray.length === 0 && filterSearch.value !== ''){
        let paragraph = document.createElement('p');
        paragraph.innerHTML = 'no services found';
        servicesSection.appendChild(paragraph);
    } 
})