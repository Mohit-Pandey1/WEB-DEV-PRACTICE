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

const feedbackBtn = document.getElementById('feedback_btn');
const feedbackForm = document.getElementById('feedback-form');
const feedbackClose = document.getElementById('feedback-close');
const stars = document.querySelectorAll('.feedback__star-rating i');
const ratingInput = document.getElementById('rating-value');
const reviewBox = document.querySelector('.feedback__review-box');

if(feedbackBtn){
    feedbackBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        feedbackForm.classList.add('show-form');
    })
}

if(feedbackClose){
    feedbackClose.addEventListener('click', () => {
        feedbackForm.classList.remove('show-form');
    })
}

if(feedbackForm){
    feedbackForm.addEventListener('click', (e) =>{
        if(e.target === feedbackForm){
            feedbackForm.classList.remove('show-form');
        }
    })
}


if(stars.length > 0){
    let currentRating = 0;

    const updateStars = (rating) => {
        stars.forEach(star => {
            if(star.dataset.value <= rating){
                star.classList.add('ri-star-fill', 'selected');
                star.classList.add('ri-star-line');
            } 
            else{
                star.classList.remove('ri-star-fill', 'selected');
                star.classList.add('ri-star-line');
            }
        })
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            currentRating = star.dataset.value;
            ratingInput.value = currentRating;
            updateStars(currentRating);
            if(reviewBox.classList.contains('hidden')){
                reviewBox.classList.remove('hidden');
            }
        });

        star.addEventListener('mouseover', () => {
            stars.forEach(s => {
                if(s.dataset.value <= star.dataset.value){
                    s.classList.add('ri-star-fill');
                    s.classList.remove('ri-star-line')
                }else{
                    s.classList.remove('ri-star-fill');
                    s.classList.add('ri-star-line');
                }
            });
        })

        star.addEventListener('mouseleave', () => {
            updateStars(currentRating);
        });
    });
}