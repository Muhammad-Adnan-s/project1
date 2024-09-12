let body = document.querySelector('nav');
let hamburger = document.querySelector('.ham');
let ul = document.querySelector('ul');
let a=document.querySelector9=('ul a');
let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let big = document.querySelector('.bg')
hamburger.addEventListener('click', () => {
    ul.classList.toggle('d-none');
    ul.classList.toggle('change');
    item1.classList.toggle('lin1')
    item2.classList.toggle('lin2')
    item3.classList.toggle('lin3')
    a.style.color='white';
})