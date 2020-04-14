document.querySelector('.sk_name').style.color = 'red';

function randomDice() {
  var n = Math.floor(Math.random() * 6) + 1;
  var m = Math.floor(Math.random() * 6) + 1;
  if (n > m) {
    document.getElementById('winner').innerHTML = 'Player 1 is Winner!';
    document.getElementById('winner').style.color = 'red';
  } else if (n < m) {
    document.getElementById('winner').innerHTML = 'Player 2 is Winner!';
    document.getElementById('winner').style.color = 'blue';

  } else {
    document.getElementById('winner').innerHTML = 'Draw!';
    document.getElementById('winner').style.color = 'black';
  }

  return diceOne(n), diceTwo(m);
}

function diceOne(n) {
  for (i = 0; i < 9; i++) {
    document.querySelectorAll('.dice#one .d_dot')[i].classList.remove('invisible');
    document.querySelectorAll('.dice#one .d_dot')[i].classList.add('invisible');
  } if (n === 1) { document.querySelectorAll('.dice#one .d_dot')[4].classList.remove('invisible');
  } else if (n === 2) {
    document.querySelectorAll('.dice#one .d_dot')[0].classList.remove('invisible');
    document.querySelectorAll('.dice#one .d_dot')[8].classList.remove('invisible');
  } else if (n === 3) {
    document.querySelectorAll('.dice#one .d_dot')[0].classList.remove('invisible');
    document.querySelectorAll('.dice#one .d_dot')[4].classList.remove('invisible');
    document.querySelectorAll('.dice#one .d_dot')[8].classList.remove('invisible');
  } else if (n === 4) {
    var bones4 = [0, 2, 6, 8];
    document.querySelectorAll('.dice#one .d_dot').forEach(function (item, index) {
      if (bones4.indexOf(index) > -1) {
        item.classList.remove('invisible');
      }
    });
  } else if (n === 5) {
    var bones5 = document.querySelectorAll('.dice#one .d_dot');
    [0, 2, 4, 6, 8].forEach(index => bones5[index].classList.remove('invisible'));
  } else if (n === 6) {
    var bones6 = document.querySelectorAll('.dice#one .d_dot');
    [0, 2, 3, 5, 6, 8].forEach(index => bones6[index].classList.remove('invisible'));
  }
}

function diceTwo(m) {
  for (i = 0; i < 9; i++) {
    document.querySelectorAll('.dice#two .d_dot')[i].classList.remove('invisible');
    document.querySelectorAll('.dice#two .d_dot')[i].classList.add('invisible');
  } if (m === 1) { document.querySelectorAll('.dice#two .d_dot')[4].classList.remove('invisible');
  } else if (m === 2) {
    var bones2 = document.querySelectorAll('.dice#two .d_dot');
    [0, 8].forEach(index => bones2[index].classList.remove('invisible'));
  } else if (m === 3) {
    var bones3 = document.querySelectorAll('.dice#two .d_dot');
    [0, 4, 8].forEach(index => bones3[index].classList.remove('invisible'));
  } else if (m === 4) {
    var bones4 = document.querySelectorAll('.dice#two .d_dot');
    [0, 2, 6, 8].forEach(index => bones4[index].classList.remove('invisible'));
  } else if (m === 5) {
    var bones5 = document.querySelectorAll('.dice#two .d_dot');
    [0, 2, 4, 6, 8].forEach(index => bones5[index].classList.remove('invisible'));
  } else if (m === 6) {
    var bones6 = document.querySelectorAll('.dice#two .d_dot');
    [0, 2, 3, 5, 6, 8].forEach(index => bones6[index].classList.remove('invisible'));
  }
}
