const pi= 3.14;
function calculate() {
    let number = document.getElementById('number').value;
    document.getElementById('circumference').innerHTML = number * pi;
    document.getElementById('surface').innerHTML = number * number * pi * 0.25;
    
}