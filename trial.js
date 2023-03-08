var head=document.querySelector('#main-header');
head.style.borderBottom='solid 5px black';
document.querySelector('.title').style.fontWeight='bold';
document.querySelector('.title').style.color='green';
var list=document.querySelector('.list-group');
list.children[2].style.backgroundColor='green';
var items=document.querySelectorAll('.list-group-item');
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
    items[i].style.color='red';
}