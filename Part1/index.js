let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let player = document.getElementById('player');

function play(x) {
  
  let clickedBox = document.getElementById(x);
  
  if (clickedBox.innerText === 'X') {
    alert ("You can't do that!")
    return
  } else if (clickedBox.innerText === 'O') {
    alert ("You can't do that!")
    return
  } else if (player.innerText === 'X') {
    arr.splice (x, 1, 'X')
    clickedBox.innerText = player.innerText
    player.innerText = 'O'
  } else {
    arr.splice (x, 1, 'O')
    clickedBox.innerText = player.innerText
    player.innerText = 'X'
  }

  let top1 = arr[0];
  let top2 = arr[1];
  let top3 = arr[2];
  let middle1 = arr[3];
  let middle2 = arr[4];
  let middle3 = arr[5];
  let bottom1 = arr[6];
  let bottom2 = arr[7];
  let bottom3 = arr[8];
  
  console.log (arr);  
  console.log (top1, top2, top3);
  // console.log (middle1, middle2, middle3); 

  if (top1 === top2 && top1 === top3) {
      alert (top1 + ' wins!');
  } else if (top1 === middle2 && top1 === bottom3) {
      alert (top1 + ' wins!');
  } else if (top1 === middle1 && top1 === bottom1) {
      alert (top1 + ' wins!');
  } else if (top2 === middle2 && top2 === bottom2) {
      alert (top2 + ' wins!');
  } else if (top3 === middle3 && top3 === bottom3) {
      alert (top3 + ' wins!');
  } else if (middle1 === middle2 && middle1 === middle3) {
      alert (middle1 + ' wins!');
  } else if (bottom1 === bottom2 && bottom1 === bottom3) {
      alert (bottom1 + ' wins!');
  } else if (bottom1 === middle2 && bottom1 === top3) {
      alert (bottom1 + ' wins!');
  }
    
}


document.getElementById("myBtn").addEventListener("click", reset);

function reset (e) {
  player.innerText = 'X'
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  for (i = 0; i < 9; i++) {
    document.getElementById(i).innerText = ''
  }
}