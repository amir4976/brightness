let $ = document

let input = $.querySelector('input')
let up = $.getElementById('up')


input.addEventListener('change',function (e){
var inputValue = e.target.value
document.body.style.filter=`brightness(${inputValue}%)`
} )

