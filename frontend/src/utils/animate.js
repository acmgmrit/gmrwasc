export const animate = (classname) => {
    let valueDisplays = document.querySelectorAll(classname);
    valueDisplays.forEach(valueDisplay => {
        let startValue = parseInt(valueDisplay.getAttribute('datastart')) || 0;
        let endValue = parseInt(valueDisplay.textContent);
        let duration = parseInt(valueDisplay.getAttribute('dataduration')) || 3000;

        let interval = Math.floor(duration / (endValue - startValue));

        let counter = setInterval(() => {
            if (startValue < endValue) {
                valueDisplay.textContent = ++startValue;
            } else {
                clearInterval(counter);
            }
        }, interval);
    });
};