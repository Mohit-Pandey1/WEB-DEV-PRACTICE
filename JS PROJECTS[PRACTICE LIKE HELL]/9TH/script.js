const textarea = document.querySelector("textarea")
const counter = document.querySelector("#counter")

textarea.addEventListener("input", function(){
    counter.textContent = textarea.value.length;
})