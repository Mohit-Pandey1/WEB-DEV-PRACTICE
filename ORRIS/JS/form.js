const contactBtn = document.getElementById('contact_btn')
const loginform = document.getElementById('login-form')
const loginClose = document.getElementById('login-close')

if(contactBtn){
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginform.classList.add('show-form')
    })
}

if(loginClose){
    loginClose.addEventListener('click', () => {
        loginform.classList.remove('show-form')
    })
}

if(loginform){
    loginform.addEventListener('click', (e) => {
        if(e.target === loginform){
            loginform.classList.remove('show-form')
        }
    })
}