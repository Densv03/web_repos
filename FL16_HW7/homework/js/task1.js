let amount = +prompt('Enter amount of money', '1000'),
  years = +prompt('Enter amount of years', '1'),
  percent = +prompt('Enter percent', '10');
if (amount < 1000 || years < 1 || percent > 100) {
  alert('Invalid input data');
} else {
  let amount1 = amount;
  for (let i = 0; i < years; ++i) {
    amount += amount * (percent / 100);
  }
  alert(`Initial amount: ${amount1}
Number of years: ${years}
Percentage of year: ${percent}

Total profit: ${amount - amount1}
Total amount: ${amount}`);
}
