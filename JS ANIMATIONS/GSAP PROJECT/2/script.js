var h1Text =  document.querySelector('#firsth1').textContent

var splitedtext = h1Text.split("")
var clutter = ""
splitedtext.forEach(function (elem){
    clutter += `<span>${elem}</span>`;
})


document.querySelector('#firsth1').innerHTML = clutter