function getAge(birthday) {
    let today = new Date(),
        birthDate = birthday,
        age = today.getFullYear() - birthDate.getFullYear(),
        m = today.getMonth() - birthDate.getMonth(),
        d = today.getDay() - birthDate.getDay();
    const months = 12;

    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    if (age === 0) {
        m = months + m;
        if (d < 0 || d === 0 && today.getDate() < birthDate.getDate()) {
            m--;
        }
    }
    return age;

}
const t1 = 2000,
    t2 = 9,
    t3 = 22;
const birthday22 = new Date(t1, t2, t3);
// console.log(getAge(birthday22));

function getWeekDay(date) {
    let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        n = date.getDay();
    return days[n];

}
const t4 = 2021;
const getWeek = new Date(t4, t2, t3);
// console.log(getWeekDay(getWeek));

function getAmountDaysToNewYear(date) {
    let temp = Date.now(),
        year = new Date(temp);
    // console.log(typeof (year));
    // console.log(year);
    year = year.getFullYear();
    const hours = 24,
        minutes = 60,
        thousand = 1000;
    let nextDate = new Date(`December 31, ${year}`),
        msPerDay = hours * minutes * minutes * thousand,
        daysLeft = Math.round((nextDate.getTime() - date.getTime()) / msPerDay);
    return daysLeft;
}
// console.log(getAmountDaysToNewYear(getWeek));

function getProgrammersDay(year) {
    const four = 4,
        hundred = 100,
        fh = 400,
        nine = 9,
        twelve = 12,
        thirteen = 13;
    if (year % four === 0 && year % hundred === 0 && year % fh === 0) {
        const date = new Date(year, nine, twelve)
        // return date;
        return `12 Sep, ${year} (${getWeekDay(date)})`;
    } else {
        const date = new Date(year, nine, thirteen);
        return `13 Sep, ${year} (${getWeekDay(date)})`;
    }
}
// console.log(getProgrammersDay(2021));

function howFarIs(specifiedWeekday) {
    let temp = Date.now(),
        today = new Date(temp),
        day = getWeekDay(today);
    if (specifiedWeekday.toLowerCase() === day.toLowerCase()) {
        return `Hey, today is ${day}`;
    }
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let day1, day2;
    for (let i = 0; i < days.length; ++i) {
        if (specifiedWeekday.toLowerCase() === days[i].toLocaleLowerCase()) {
            day1 = parseInt(i) + 1;
        }
        if (day.toLocaleLowerCase() === days[i].toLocaleLowerCase()) {
            day2 = parseInt(i) + 1;
        }
    }
    // return `${day1} ${day2} ${typeof(day1)} ${typeof(day2)}`;
    // return typeof(day);
    return `It's ${day2-day1} day(s) left till ${specifiedWeekday}.`
}
// console.log(howFarIs('Sunday'));

function isValidIdentifier(str) {
    return str.replace(/[^0-9][_$a-zA-Z]/g, '') === '';
}
// console.log(isValidIdentifier('myVar_1'));
function capitalize(str) {
    return str.replace(/^[a-z]/g, u => u.toUpperCase());
}
// console.log(capitalize('my name is John Smith. I am 27.'));

function isValidAudioFile(str) {
    return str.replace(/./, '') === '';
}

function getHexadecimalColors(str) {
    return str.replace(/./, '') === '';
}

function isValidPassword(str) {
    return str.replace(/./, '') === '';
}

function addThousandsSeparators(str) {
    return str.replace(/./, '') === '';
}

function getAllUrlsFromText(str) {
    return str.replace(/./, '') === '';
}