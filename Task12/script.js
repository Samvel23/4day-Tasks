(function(window, document,undefined) {
    const images = ['../image1.jpg','../image2.jpg','../image3.jpg'];
    let image = document.querySelector('.image');
    const next =   document.querySelector('.next');
    const prev = document.querySelector('.previous');
    let index = 0;
    next.addEventListener('click', () => {
        index = (index + 1) % images.length;
        image.src = images[index];
    });
    prev.addEventListener('click', () => {
        index = (index - 1) % images.length;
        image.src = images[index];
    });
})(window,document);