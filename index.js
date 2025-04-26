let btn_draw = document.querySelector('.but')
let field_container = document.querySelector('.field-container')
function scrollDown(e) {
    e.preventDefault()
    field_container.style.display = 'flex'
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

btn_draw.addEventListener('click', scrollDown)


let CURRENT_COLOR = 'white'
let DEFAULT_COLOR = 'rgb(78, 0, 0)'
let field = document.querySelector('.field')

for (let i=0; i < 450; i += 1){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `${i}`)
    field.appendChild(cell)
}
let IS_CLICKED = false 
document.addEventListener('mousedown',function(){ 
    IS_CLICKED=true 
    }) 
document.addEventListener('mouseup',function(){ 
    IS_CLICKED=false 
    })
let cells = document.querySelectorAll('.cell') 
cells.forEach(cell => { 
    cell.addEventListener('mouseenter', function(){ 
        if (IS_CLICKED) {
    cell.style.backgroundColor= CURRENT_COLOR
        }
    })

    cell.addEventListener('mousedown', function(){
        cell.style.backgroundColor = CURRENT_COLOR
    })

})


let pink = document.querySelector('.pink')

pink.addEventListener('click', function(){
    CURRENT_COLOR = 'pink'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    pink.classList.add('selected')

})

let blue = document.querySelector('.blue')

blue.addEventListener('click', function(){
    CURRENT_COLOR = 'blue'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    blue.classList.add('selected')

})

let yellow = document.querySelector('.yellow')

yellow.addEventListener('click', function(){
    CURRENT_COLOR = 'yellow'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    yellow.classList.add('selected')

})

let red = document.querySelector('.red')

red.addEventListener('click', function(){
    CURRENT_COLOR = 'red'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    red.classList.add('selected')
})

let white = document.querySelector('.white')

white.addEventListener('click', function(){
    CURRENT_COLOR = 'white'
     let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    white.classList.add('selected')
})

let eraiser = document.querySelector('.fill')

eraiser.addEventListener('click', function(){
    CURRENT_COLOR = DEFAULT_COLOR
     let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    eraiser.classList.add('selected')
})

document.querySelector('.soxranenue').addEventListener('click', function(){ 
    domtoimage.toJpeg(field)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });

})

