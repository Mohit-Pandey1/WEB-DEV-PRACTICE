const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(c){
        console.log(c);
        console.log(c.target);
        
        if(c.target.id === 'grey'){
            body.style.backgroundColor = c.target.id;
        }
        if(c.target.id === 'white'){
            body.style.backgroundColor = c.target.id;
        }
        if(c.target.id === 'blue'){
            body.style.backgroundColor = c.target.id;
        }
        if(c.target.id === 'yellow'){
            body.style.backgroundColor = c.target.id;
        }
        if(c.target.id === 'purple'){
            body.style.backgroundColor = c.target.id;
        }
    });
});