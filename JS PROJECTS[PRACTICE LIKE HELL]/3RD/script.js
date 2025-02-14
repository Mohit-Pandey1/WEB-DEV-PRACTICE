//whenever dealing with forms remember this thing that whenever we submit the forms by click on the submit button..whole page got refreshed and we have to avoid that as the refresh will result in not letting the js code run, and we don't have to let the page got relaoded

const form = document.querySelector('form');
const inps = document.querySelectorAll('input[type="text"]');
const h4 = document.querySelector("h4")

form.addEventListener('submit', function(ev){
    ev.preventDefault();    //this code helps us in not letting the page get reloaded 
    for(const i = 0; i<inps.length; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = "Error, some fields are blank";
            h4.style.color = "red";
            break;
        }
    }
     
})