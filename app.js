'use strict';
let reverse
// console.log("hello")
let count = 0
let imag = ['https://via.placeholder.com/960x50/000000', 'https://via.placeholder.com/960x250/000111', 'https://via.placeholder.com/960x350/222222']
let count2 = imag.length-1
let img = document.getElementById('image')
let slide = setInterval(show, 2000)
console.log(imag.length)
function show(){
    img.src = imag[count]
    
    console.log( 'count '  + count)

    count++
    if (count == imag.length){
        count = 0

        reverse=  setInterval(show2, 2000)
        clearInterval(slide)
    } }
    function show2(){
        console.log( 'count2 '  + count2)

        count2--
        img.src = imag[count2]
        if (count2==0){
            count2 = imag.length-1

            slide = setInterval(show, 2000)

            clearInterval(reverse)
        }
    }
    
let radio1 = document.getElementById('radio1')
let radio2 = document.getElementById('radio2')
let radio3 = document.getElementById('radio3')

radio1.addEventListener('click',function(){
    clearInterval(slide)
    clearInterval(reverse)

    count = 0
    img.src = imag[count]
    slide = setInterval(show, 2000)

})
radio2.addEventListener('click',function(){
    count = 1
    clearInterval(slide)
    clearInterval(reverse)
    img.src = imag[count]
    slide = setInterval(show, 2000)
    // radio1.removeEventListener()
    })
    radio3.addEventListener('click',function(){
        count = 2
        clearInterval(slide)
        clearInterval(reverse)
        img.src = imag[count]
        slide = setInterval(show, 2000)
        })
