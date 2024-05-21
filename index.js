
console.log(document.querySelector('#nav-slide-bar-cross'))
document.querySelector('#nav-slide-bar-cross').addEventListener('click',()=>{
    document.querySelector('#nav-slide-bar').classList.remove('active')
    console.log('hii')
})

document.querySelector('#nav-menu-option').addEventListener('click',()=>{
    document.querySelector('#nav-slide-bar').classList.toggle('active')
})