//genrating random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let interVal;
const startChangingColor = function() {
    if(!interVal){
        interVal = setInterval(changeColorBy, 1000)
    }

    function changeColorBy() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function() {
    clearInterval(interVal);
    interVal = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);