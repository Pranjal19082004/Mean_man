let cards = document.querySelectorAll('.section2-product-card');
let previewCard = document.querySelectorAll('.preview-picture');

function imgUrlExtractor(elem){
    let var1 = window.getComputedStyle(elem);
    let var2 = var1.backgroundImage;
    return var2;
}
for(let i = 0;i<cards.length;i++){
    cards[i].addEventListener('click',function (){
        document.querySelector('#section2').classList.add('hidden')
        document.querySelector('.header-banner').classList.add('hidden')
        document.querySelector('.product-description').classList.remove('hidden');
        document.querySelectorAll('#section2')[1].classList.remove('hidden');

        let img = cards[i].querySelector('.section2-product-card-image'),
        style = img.currentStyle || window.getComputedStyle(img, false),
        bg_image_url = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
       
        let bg_url = bg_image_url.split('/')
        let url_string1 = bg_url.slice(4,7)
        let url_string2 = url_string1.join("/")
        document.querySelector('.display-picture').style.backgroundImage = `url(./${url_string2})`  

        let price = document.querySelector('.section2-product-card').querySelectorAll('h4')[1].textContent;
        document.querySelector('.product-text').querySelectorAll('h2')[1].textContent = price
    })
}
for(let i =0;i<previewCard.length;i++){
    previewCard[i].addEventListener('click',function(){
       let temp = imgUrlExtractor(document.querySelector('.display-picture'))
       
       document.querySelector('.display-picture').style.backgroundImage = imgUrlExtractor(previewCard[i])
       previewCard[i].style.backgroundImage = temp;
    })
}