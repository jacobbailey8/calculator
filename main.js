const disp1 = document.querySelector('.content');
const disp2 = document.querySelector('.content-top');

function add(a, b){
    return +(a) + +(b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function power(a, b){
    return a ** b;
}

function operate(a, b, operation){
    if (operation === '+'){
        return add(a, b);
    }

    if (operation === '-'){
        return subtract(a, b);
    }

    if (operation === '*'){
        return multiply(a, b);
    }

    if (operation === '/'){
        return divide(a, b);
    }
    if (operation === '^'){
        return power(a, b);
    }
}


function displayMain(a) {
    disp1.textContent += a;
}
function display2(a) {
    disp2.textContent = a;
}

let numberButtons = document.querySelectorAll('.number-button');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayMain(button.textContent);
    });
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'red';
    })
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'gainsboro';
    })
});

let operateButtons = document.querySelectorAll('.operator-button');

operateButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayMain(` ${button.textContent} `);

    })
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'red';
    })
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'orange';
    })
})

let equalsButton = document.querySelector('.equals-button');

equalsButton.addEventListener('click', () => {

    display2(disp1.textContent + " = ");
    let calc = disp1.textContent.split(' ');
    disp1.textContent = operate(calc[0], calc[2], calc[1]);

})
equalsButton.addEventListener('mouseover', () => {
    equalsButton.style.backgroundColor = 'red';
})
equalsButton.addEventListener('mouseout', () => {
    equalsButton.style.backgroundColor = 'green';
})

let allClear = document.querySelector('#all-clear');
allClear.addEventListener('click', () => {
    disp1.textContent = '';
    disp2.textContent = '';
    
})
allClear.addEventListener('mouseover', () => {
    allClear.style.backgroundColor = 'red';
})
allClear.addEventListener('mouseout', () => {
    allClear.style.backgroundColor = 'brown';
})

let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    let string = disp1.textContent;
    let newStr = string.substring(0, string.length - 1);
    disp1.textContent = newStr;
})
clear.addEventListener('mouseover', () => {
    clear.style.backgroundColor = 'red';
})
clear.addEventListener('mouseout', () => {
    clear.style.backgroundColor = 'brown';
})

