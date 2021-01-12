import './styles/main.scss';

console.log('My Awesome Blog started!');

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Добро пожаловать!';

// добавляем заголовок в DOM
const root = document.querySelector('#root');
root.append(heading);
