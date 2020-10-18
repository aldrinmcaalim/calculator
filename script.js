const one = document.getElementById('one');
const button = document.querySelectorAll('button');

// let inputOne = (num1, num2) => {
//     console.log(num1 + num2);
// }
let inputButton = () => {
    console.log('click');
}

button.addEventListener('click', inputButton);