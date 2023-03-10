var item = document.querySelector('#item');
var items = document.querySelector('#items');
var submit = document.querySelector('.btn-dark');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    var div = document.createElement('div');
    div.setAttribute('class', 'btns');
    var ele = document.createElement('li');
    ele.setAttribute('class', 'list-group-item');
    ele.textContent = item.value+" "+document.querySelector("#description").value;
    document.querySelector('.list-group').appendChild(ele).appendChild(div);
    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-danger btn-sm delete');
    btn.textContent = 'X';
    div.appendChild(btn);
    var edit = document.createElement('button');
    edit.setAttribute('class', 'edit btn btn-outline-primary');
    edit.textContent = 'Edit';
    div.insertBefore(edit, btn);

});
items.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
});
var filter=document.querySelector('#filter');
filter.addEventListener('keyup',function(e){
    e.preventDefault();
    var search=filter.value.toLowerCase();
    var alltexts=document.querySelectorAll('.list-group-item');
   var allInputs=Array.from(alltexts);
   allInputs.forEach((eh)=>{
   if(eh.firstChild.textContent.toLowerCase().indexOf(search)!=-1){
        eh.style.display='block';
   }
   else eh.style.display='none';
   });
});