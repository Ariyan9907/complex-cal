document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.screen input');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;

            if (value === '=') {
                try {
                    inputField.value = eval(inputField.value);
                } catch (e) {
                    inputField.value = 'Error';
                }
            } else {
                inputField.value += value;
            }
        });
    });

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            try {
                inputField.value = eval(inputField.value);
            } catch (e) {
                inputField.value = 'Error';
            }
        }
    });
});