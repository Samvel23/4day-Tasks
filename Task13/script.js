(function(window, document, undefined) {
    const tabButtons = document.querySelectorAll('.tab-button');
    let content = document.querySelector('.tab-content');
    const textsObj = {
        text1: 'text1 for tab',
        text2: 'text2 for tab',
        text3: 'text3 for tab'
    }
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index === 0) {
                content.textContent = textsObj.text1;
            } else if (index === 1) {
                content.textContent = textsObj.text2;
            } else if (index === 2) {
                content.textContent = textsObj.text3;
            }
        });
    });
})(window, document);