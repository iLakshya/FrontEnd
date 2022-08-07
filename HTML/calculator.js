let calc = document.getElementById('calc');
buttons = document.querySelectorAll('button');
let calcValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button value is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            calcValue += buttonText;
            calc.value = calcValue;
        }
        else if (buttonText == 'CLEAR') {
            calcValue = "";
            calc.value = calcValue;
        }
        else if (buttonText == '=') {
            calc.value = eval(calcValue);
        }
        else {
            calcValue += buttonText;
            calc.value = calcValue;
        }

    })
}
