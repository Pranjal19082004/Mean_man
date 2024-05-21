function hideElement(elem){
    elem.classlist.add('hidden')
}
const blogs = document.querySelectorAll('.blog');

const page_number = document.querySelector('.page-number').querySelectorAll('p');
for(let i = 0;i<page_number.length;i++)
    
    page_number[i].addEventListener('click',()=>{
        console.log('button has beet pressed')
        let blogNumber = (i+1)*4
        if(blogNumber <= blogs.length){
            for(let j = (blogNumber-4);j<blogNumber-1;j++){
                blogs[j-4].classList.add('hidden')
                blogs[j].classList.remove('hidden')
            }
        }

})