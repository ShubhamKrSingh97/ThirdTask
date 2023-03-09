var par=document.querySelector('#items');
par.parentElement.style.backgroundColor='red';
var last=document.querySelector('.card-body');
last.lastElementChild.style.color='blue';
last.firstElementChild.style.color='blue';
document.querySelector('.mb-3').nextElementSibling.style.color='green';
var add=document.createElement('li');
add.setAttribute('class','new-element');    
add.textContent='New item';
par.appendChild(add);

var hello=document.querySelector('.container');
var ad=document.createElement('li');
ad.textContent='Hello World';
var hi=document.querySelector('header h1');
hello.insertBefore(ad,hi);
var hey=document.querySelector('#items');
var lol=document.querySelector('.list-group-item');
hey.insertBefore(ad,lol);


