// Элементы DOM
const screen = document.querySelector('#screen');
const elements = document.querySelectorAll('.btn');
const changeButton1 = document.getElementById('changeButton');
const changeButton2 = document.getElementById('changeButton-2');
const equalsButton = document.getElementById('equalsButton');

let currentInput = [];
let savedInput = '';

// Функция для добавления текста на экран
function appendToScreen(value) {
    if (currentInput.length === 0 || (isNaN(value) && isNaN(currentInput[currentInput.length - 1]))) {
        currentInput.push(value);
    } else {
        currentInput[currentInput.length - 1] += value;
    }
    screen.textContent = currentInput.join('');
}

// Функция для очистки экрана
function clearScreen() {
    currentInput = [];
    screen.textContent = '0';
}

// Функция для вычисления выражения


// Функция для копирования в буфер обмена
function copyToClipboard() {
    savedInput = currentInput.join('');
    navigator.clipboard.writeText(savedInput)
        .then(() => {
            alert('Expression copied to clipboard: ' + savedInput);
        })
        .catch(() => {
            alert('Copy to clipboard failed');
        });
}

// Функция для вставки из буфера обмена
function pasteFromClipboard() {
    if (savedInput !== '') {
        currentInput = currentInput.concat(savedInput.split(''));
        screen.textContent = currentInput.join('');
    }
}

// Функция для изменения цвета кнопок
function changeButtonColor(button, color) {
    elements.forEach(function (element) {
        element.style.backgroundColor = color;
    });
}

// Изменение цвета кнопок по клику
changeButton1.addEventListener('click', function () {
    changeButtonColor(changeButton1, getRandomColor());
});

changeButton2.addEventListener('click', function () {
    changeButtonColor(changeButton2, '');
});




function calculate() {
    if (currentInput.length > 0) {
        const expression = currentInput.join('');
        try {
            currentInput = [eval(expression).toString()];
            screen.textContent = currentInput[0];
        } catch (error) {
            screen.textContent = 'Error';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const equalsButton = document.getElementById('equalsButton');
    equalsButton.addEventListener('click', calculate);
});

// Функция для генерации случайного цвета
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
