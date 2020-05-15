// Write a function that accepts a positve numer N.
// The function should console log a step shape with N levels using the # character.
// Make sure the step has spaces on the right hand size!

function steps(n){

  // Solution #1
  let count = 1;

  while (count <= n){
    console.log("#".repeat(count));
    count++;
  }


  // Solution #2
  for (let row = 0; row < n; row++){
    let stair = "";

    for (let column = 0; column < n; column++){
      if (column <= row){
        stair += "#";
      }
      else{
        stair += " ";
      }
    }

  console.log(stair);
  }
 
}


// Solution #3
function steps(n, row = 0, stair = ""){
  if(row === n){
    return;
  }

  // When you reach the end of the stair
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // Assembles the staircase
  if (stair.length <= row) {
    stair += "#";
  }
  else{
    stair += " ";
  }
  steps(n, row, stair);

}

steps(10);