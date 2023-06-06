const menuList = document.querySelector('#menu_list');
const list = document.querySelector('#list');
console.log(list);
menuList.addEventListener('click',()=>{
    list.classList.toggle('hidden');

})