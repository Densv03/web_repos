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

function forEach(arr, func) {
    for (let i = 0; i < arr.length; ++i) {
        func(arr[i]);
    }
}
// forEach([2, 5, 8], function (el) {
//     console.log(el);
// });

function map(arr, func) {
    let ans = [];
    forEach(arr, function (el) {
        ans.push(func(el));
    });
    return ans;
}
// console.log(map([2, 3, 4], function (el) {
//     return el * 2;
// }));

function filter(arr, func) {
    let ans = [];
    forEach(arr, function (el) {
        if (func(el)) {
            ans.push(el);
        }
    })
    return ans;
}

// console.log(filter([2, 3, 4, 5, 6, 7], function (el) {
//     return el > 3;
// }));

function getAdultAppleLovers(data) {
    let ans = [];
    ans.push(data.favoriteFruit);
    ans.splice(0, 1);
    forEach(data, function (el) {
        if (el.favoriteFruit === 'apple' && el.age >= 18) {
            ans.push(el.name);
        }
    })
    return ans;
}
// console.log(getAdultAppleLovers([{
//         "_id": "5b5e3168c6bf40f2c1235cd6",
//         "index": 0,
//         "age": 39,
//         "eyeColor": "green",
//         "name": "Stein",
//         "favoriteFruit": "apple"
//     },
//     {
//         "_id": "5b5e3168e328c0d72e4f27d8",
//         "index": 1,
//         "age": 38,
//         "eyeColor": "blue",
//         "name": "Cortez",
//         "favoriteFruit": "strawberry"
//     },
//     {
//         "_id": "5b5e3168cc79132b631c666a",
//         "index": 2,
//         "age": 2,
//         "eyeColor": "blue",
//         "name": "Suzette",
//         "favoriteFruit": "apple"
//     },
//     {
//         "_id": "5b5e31682093adcc6cd0dde5",
//         "index": 3,
//         "age": 17,
//         "eyeColor": "green",
//         "name": "Weiss",
//         "favoriteFruit": "banana"
//     }
// ]));

function getKeys(obj) {
    let ans = [];
    for (key in obj) {
        ans.push(key);
    }
    return ans;
}
// console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
function getValues(obj) {
    return Object.values(obj);
}
// console.log(getValues({
//     keyOne: 1,
//     keyTwo: 2,
//     keyThree: 3
// }));

function showFormattedDate(dateObj) {
    dateObj = dateObj.toString();
    let spaces = 0,
        month = '',
        day = '',
        year = '';
    for (let i = 0; i < dateObj.length; ++i) {
        if (spaces === 1) {
            month += dateObj[i];
        } else if (spaces === 2) {
            day += dateObj[i];
        } else if (spaces === 3) {
            year += dateObj[i];
        } else if (spaces === 4) {
            break
        }
        if (dateObj[i] === ' ') {
            spaces++;
        }
    }
    return `It is ${day}of ${month}, ${year}`;
}
console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));