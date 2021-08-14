let textarea = document.querySelector('textarea');

let firstElUp = textArr => {
    for(let i = 0; i < textArr.length; ++i){
        textArr[i] = textArr[i].split('');
        textArr[i][0] = textArr[i][0].toUpperCase();
        textArr[i] = textArr[i].join('');
    }
    return textArr;
}

document.getElementById('upper-case').addEventListener('click', () => {
    textarea.value = textarea.value.toUpperCase();
});

document.getElementById('lower-case').addEventListener('click', () => {
    textarea.value = textarea.value.toLowerCase();
});

document.getElementById('proper-case').addEventListener('click', () => {
    let text = firstElUp(textarea.value.toLowerCase().split(' '));
    textarea.value = text.join(' ');
});

document.getElementById('sentence-case').addEventListener('click', () => {
    let text = firstElUp(textarea.value.toLowerCase().split('. '));
    textarea.value = text.join('. ');
});

document.getElementById('save-text-file').addEventListener('click', () => {
   let text = textarea.value,
       element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'text.txt');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});