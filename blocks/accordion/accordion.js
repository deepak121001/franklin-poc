import { removeClass } from "../../scripts/utils/helper"; 

export default function tab(block) {
    let el = block.children[0].children[0].children[0];
    el.classList.add('c-accordion')
    
    for(let item in [...el.children]) {
        [...el.children][item].addEventListener('click',function(){
            let test = document.querySelectorAll('.c-accordion > li');
            removeClass(test, 'is-active');

         //[...test].forEach(item=>{item.classList.remove('is-active')})
                
            this.classList.add('is-active');
        });
    }
    
}