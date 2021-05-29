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

function howFarIs(day){
    
}