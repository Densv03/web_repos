function reverseNumber(num) {
    num = num.toString();
    let ans = "",
        temp = 0;
    if (num[0] === '-') {
        ans += '-';
        temp++;
    }
    for (let i = num.length - 1; i >= temp; i--) {
        ans += num[i];
    }
    return parseInt(ans);
}
// console.log(reverseNumber(-56789));

function out(el) {
    console.log(el);
}

function forEach(arr, func) {
    for (let i = 0; i < arr.length; ++i) {
        func(arr[i]);
    }
}
// forEach([2, 5, 8], out);

function multiply(el) {
    return el * 2;
}

function map(arr, func) {
    let ans = [];
    for(let i = 0; i < arr.length; ++i){
        ans.push(forEach(arr, func));
    }
    return arr;
}
console.log(map([2, 3, 4], multiply));

function filter(arr, func) {

}

function getAdultAppleLovers(data) {

}

function getKeys(obj) {

}

function getValues(obj) {

}

function showFormattedDate(dateObj) {

}