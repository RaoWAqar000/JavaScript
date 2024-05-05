const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let IntervaliD;

//1st

// document.querySelector('#start').addEventListener('click', function(){
    
//     const ChangeBgColor = function(){
//         document.body.style.backgroundColor = randomColor()
//     }
//     IntervaliD = setInterval(ChangeBgColor, 1000)
// })
// document.querySelector('#stop').addEventListener('click', function(){
//     clearInterval(IntervaliD)
// })


//2nd

const StartChangingColor = function(){
    const ChangeBgColor = function(){
        document.body.style.backgroundColor = randomColor()
    }
    if(IntervaliD == null){
        IntervaliD = setInterval(ChangeBgColor, 1000)
    }

}
const StopChangingColor = function(){
    clearInterval(IntervaliD)
    IntervaliD = null
}


document.querySelector('#start').addEventListener('click', StartChangingColor)
document.querySelector('#stop').addEventListener('click', StopChangingColor)