const shareBtn = document.querySelector('.share-btn');
const socialList = document.querySelector('.social-list');

// event listeners to toggle the socialList on and off 

shareBtn.addEventListener('click', () => {
    if (socialList.classList.contains('hidden')) {
        socialList.classList.remove('hidden');
    } else {
        socialList.classList.add('hidden');
    }
})