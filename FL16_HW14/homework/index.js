/* START TASK 1: Your code goes here */
let first_td = document.querySelector('tr:nth-child(1) td:nth-child(1)'),
    second_td = document.querySelector('tr:nth-child(1) td:nth-child(2)'),
    third_td = document.querySelector('tr:nth-child(1) td:nth-child(3)'),
    fourth_td = document.querySelector('tr:nth-child(2) td:nth-child(1)'),
    fifth_td = document.querySelector('tr:nth-child(2) td:nth-child(2)'),
    sixth_td = document.querySelector('tr:nth-child(2) td:nth-child(3)'),
    seventh_td = document.querySelector('tr:nth-child(3) td:nth-child(1)'),
    eighth_td = document.querySelector('tr:nth-child(3) td:nth-child(2)'),
    nineth_td = document.querySelector('tr:nth-child(3) td:nth-child(3)');
const three = 3;
first_td.addEventListener('click', () => {
    console.log('first row click');
    let i = 1;
    while (i <= three) {
        let temp = document.querySelector(`td:nth-child(${i})`);
        if (temp.style.backgroundColor !== 'yellow') {
            temp.style.backgroundColor = 'blue';
        }
        i++;
    }
});

second_td.addEventListener('click', () => {
    paint_yellow(second_td);
});

third_td.addEventListener('click', () => {
    paint_yellow(third_td);
});
fourth_td.addEventListener('click', () => {
    console.log('second row click');
    let i = 1;
    while (i <= three - 1) {
        let temp = document.querySelector(`tr:nth-child(2) td:nth-child(${i})`);
        if (temp.style.backgroundColor !== 'yellow') {
            temp.style.backgroundColor = 'blue';
        }
        i++;
    }
})
fifth_td.addEventListener('click', () => {
    paint_yellow(fifth_td);
});
sixth_td.addEventListener('click', () => {
    for (let i = 1; i <= three; i++) {
        for (let j = 1; j <= three; j++) {
            let temp = document.querySelector(`tr:nth-child(${i}) td:nth-child(${j})`),
                temp2 = temp.style.backgroundColor;
            if (temp2 !== null && temp2 !== 'yellow' && temp2 !== 'blue') {
                temp.style.backgroundColor = 'green';
            }
        }
    }
});
seventh_td.addEventListener('click', () => {
    console.log('third row click');
    let i = 1;
    while (i <= three) {
        let temp = document.querySelector(`tr:nth-child(3) td:nth-child(${i})`);
        if (temp.style.backgroundColor !== 'yellow') {
            temp.style.backgroundColor = 'blue';
        }
        i++;
    }
});
eighth_td.addEventListener('click', () => {
    paint_yellow(eighth_td);
});
nineth_td.addEventListener('click', () => {
    paint_yellow(nineth_td);
})

function paint_yellow(el) {
    el.style.backgroundColor = 'yellow';
}

function paint_green(el) {
    el.style.backgroundColor = 'green';
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
let phone_check = /^[+]*[s./0-9]{12}$/g,
    input = document.querySelector('#task2 input'),
    btn = document.querySelector('#task2 button');
btn.setAttribute('disabled', true);

function validationCheck(str) {
    return /^[+]*[s./0-9]{12}$/g.test(str);
}
input.addEventListener('input', event => {
    let f_element = document.querySelector('#task2'),
        status_red = document.createElement('div'),
        status_green = document.createElement('div');
        status_red.className = 'status_red';
        status_green.className = 'status_green';
    if (validationCheck(event.target.value)) {
        console.log('true');
        if(document.querySelector('.status_red') !== null){
            f_element.removeChild(status_red);
        }
        if(document.querySelector('.status_green') !== null){
            f_element.removeChild(status_green);
        }
        f_element.appendChild(status_green);
        btn.removeAttribute('disabled');
    } else {
        if(document.querySelector('.status_red') !== null){
            f_element.removeChild(status_red);
        }
        if(document.querySelector('.status_green') !== null){
            f_element.removeChild(status_green);
        }
        f_element.appendChild(status_red);
        btn.setAttribute('disabled', true);
    }
})
/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */