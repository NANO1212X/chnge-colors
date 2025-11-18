if(localStorage.length >0){
    document.body.style.backgroundColor = localStorage.getItem('colors')
}
function salam(color){
    localStorage.setItem('colors',color)
document.body.style.backgroundColor = color
}
