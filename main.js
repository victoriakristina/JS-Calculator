//selectors
let screen = document.querySelector('.screen');
let panel = document.querySelector('.panel');
let equal = document.getElementById('equal')

//eventListeners
panel.addEventListener('click',numberToScreen);
equal.addEventListener('click', resolve)

//functions
//if we push a button on a calculator
function numberToScreen(num){

    //if its C, delete last digit
    const button = num.target.innerHTML;
    if(button==='C'){
        let onScreen = (screen.innerHTML)
        screen.innerHTML = onScreen.slice(0, -1)

        //else if its 0 on screen, replace it with the pushed buttons digit
    } else
    if(screen.innerHTML=== '0') {
        screen.innerHTML = button

        //else. add the pushed buttons digit to the end
    }else{
        screen.innerHTML += button
    }
}

function resolve(){

    //what is written on screen
    let onScreen = (screen.innerHTML)

    //resolve what is on screen, to the nearest thpusandth
    screen.innerHTML=Math.round(eval(onScreen) * 1000) / 1000
}
