document.querySelectorAll('.image-carousel a').forEach(link => {
    link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.style.display = 'flex';
        }
    });
});

document.querySelectorAll('.popup .close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', event => {
        event.preventDefault();
        closeBtn.parentElement.style.display = 'none';
    });
});
