// declare the starting variable
let counter = 0;

// create a decrease function
function decrease(){
        counter --;
        document.querySelector('#counter').innerHTML = counter;
 
}

// add an event listener when the Dom is loaded to run the decrease function
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#decrease').onclick = decrease;
})

// another method of increase the counter without an event listener
function increase(){
    counter ++;
    document.querySelector('#counter').innerHTML = counter;
}

// create a reset function to clear the screen to zero
function reset(){
    document.querySelector('#counter').innerHTML = 0;

}