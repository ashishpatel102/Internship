

"Program Using Only Arrays Methods"

let stack = [];


const input_value = document.querySelector('.input-value');
const stack_box = document.querySelector('.stack-box');
let temp = stack_box;
const createElement = (element, value, index) => {
    const elm = document.createElement(element);
    elm.innerText = value;

    elm.setAttribute('style', `--i:${index}px ;`);
    return elm;
}


const insert = (insertObject, value, index) => {
    let element = createElement('p', value, index);
    temp.classList.remove('anim');
    temp.classList.remove('anim_pop');
    temp = element;
    element.classList = 'stack_value anim'
    insertObject.insertAdjacentElement('afterBegin', element);

}

const Delete = (insertObject, value, index) => {
    temp.classList.remove('anim');

    const element = createElement('p', value, index);
    temp = element;
    element.classList = 'stack_value'
    insertObject.insertAdjacentElement('afterBegin', element);
}


const init = (prm) => {
    if (prm == 'push') {
        stack_box.innerHTML = '';
        stack.map((data, index) => insert(stack_box, data, index));
    }

    if (prm == 'pop') {
        stack.pop();
        stack_box.innerHTML = '';
        stack.map((data, index) => Delete(stack_box, data, index));
    }
}


const pushValue = () => {

    let value = parseInt(input_value.value);

    if (!isNaN(value)) {
        stack.push(value);
        init('push');
    } else {
        alert("Not a number");
    }
    input_value.value = '';
}


const popValue = () => {
    if (stack.length <= 0) {
        alert('Stack is empty');
    } else {

        init("pop");
    }
}

