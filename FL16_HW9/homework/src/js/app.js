// let event = prompt('Enter name of event: ', 'meenting');
function meetingCreation() {
    let name = document.getElementById('name').value,
        time = document.getElementById('time').value,
        place = document.getElementById('place').value,
        regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
    if (name === '' || place === '') {
        alert('Input all data');
    } else if (time.length !== 5 || time.match(regexp) === null) {
        alert('Enter time in format hh:mm');
    } else {
        alert(`${name} has a ${event} at ${time} somewhere in ${place}`);
    }
    console.log('success');
}

function converter() {
    let euros = +prompt('Enter amount of euros:', '1'),
        dollars = +prompt('Enter amount of dollars', '1');
    if (euros < 0 || dollars < 0) {
        alert('Incorrect data');
    }
    alert(`${euros} euros are equal ${euros * 33.41}hrns, ${dollars} dollars are equal ${dollars * 27.43}hrns`)
}