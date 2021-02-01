function getValue(b){
    var a = document.getElementById('result')
    a.value += b
}
function calculate(){
    var a = document.getElementById('result')
    var val = a.value
    var final = eval(val)
    a.value = final 
}
function clearValue(){
    var a = document.getElementById('result')
    a.value = ''
}