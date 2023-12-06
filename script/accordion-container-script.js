'use strict'

const accordions = document.querySelectorAll('.questions-item-accordion');
const accordionsArray = Array.from(accordions)

accordionsArray.map(accordion => {
    accordion.addEventListener('click', (e)=>{
        const accordionContent = e.target.nextElementSibling;
        if(accordionContent.style.display !== 'block'){
            accordionContent.style.display = 'block';
        }
        else{
            accordionContent.style.display = 'none'
        }
    })
})