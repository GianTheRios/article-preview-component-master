const shareBtn = document.querySelector('.share-btn');
const socialList = document.querySelector('.social-list');

// event listeners to toggle the socialList on and off 

shareBtn.addEventListener('click', () => {
    if (socialList.classList.contains('hidden')) {
        socialList.classList.remove('hidden');
    } else {
        socialList.classList.add('hidden');
    }

    // when shareBtn is clicked, the whole pages background opacity is changed
    // to make the socialList more visible
    if (shareBtn === 'clicked') {
        document.body.style.opacity = '0.5';
    } else {
        document.body.style.opacity = '1';
    }

})

