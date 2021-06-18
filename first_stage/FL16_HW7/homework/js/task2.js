let total_win = 0,
  prize = 0,
  temp = 0,
  mult = 1,
  number;
function game() {
  number = Math.floor(Math.random() * 9);
  for (let i = 0; i < 3; ++i) {
    let ans = +prompt(`Enter number ${number}`);
    if (ans === number) {
      if (i === 0) {
        prize = 100 * mult;
        total_win += prize;
      } else if (i === 1) {
        prize = 50 * mult;
        total_win += prize;
      } else {
        prize = 25 * mult;
        total_win += prize;
      }
      if (
        !confirm(
          `Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`
        )
      ) {
        purpose();
      } else {
        mult++;
        temp += 4;
        alert(`Numbers are [0; ${8 + temp}]`);
        game();
      }
    }
  }
  alert(`Thank you for your participation. Your prize is: ${total_win}$`);
}
function purpose() {
  if (!confirm("Do you want to play a game?")) {
    alert("You did not become a billionaire, but can.");
  } else {
    game();
  }
}
purpose();
