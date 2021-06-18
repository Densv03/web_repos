function isEqual(a, b) {
    return a === b;
}

function isBigger(a, b) {
    return a > b;
}

function storeNames() {
    let ans = [];
    for (let i = 0; i < arguments.length; ++i) {
        ans.push(arguments[i]);
    }
    return ans;
}

function getDifference(a, b) {
    if (a > b) {
        return a - b;
    } else if (a < b) {
        return b - a;
    } else {
        return 0;
    }
}

function negativeCount(arr) {
    let counter = 0;
    arr.forEach(element => {
        if (element < 0) {
            counter++;
        }
    });
    return counter;
}

function letterCount(str, letter) {
    let counter = 0;
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    str.split('').forEach(element => {
        if (element === letter) {
            counter++;
        }
    });
    return counter;
}

function countPoints(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; ++i) {
        let temp = arr[i].split(':');
        temp[0] = parseInt(temp[0]);
        temp[1] = parseInt(temp[1]);
        if (temp[0] > temp[1]) {
            ans += 3;
        } else if (temp[0] === temp[1]) {
            ans++;
        }
    }
    return ans;
}