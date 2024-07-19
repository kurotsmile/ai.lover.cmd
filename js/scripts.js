document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('runningText');
    const textContent = "đang coding... ";
    let index = 0;

    function typeEffect() {
        if (index < textContent.length) {
            textElement.textContent += textContent.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                textElement.textContent = '';
                index = 0;
                typeEffect();
            }, 2000); // Delay before restart typing
        }
    }

    typeEffect();
});
