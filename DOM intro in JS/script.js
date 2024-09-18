//Examples in DOM intro
const heading = document.getElementById('heading');
const button = document.getElementById('changeTextBtn');

button.addEventListener('click', () => {
    heading.innerHTML = 'Text has been changed!';
});