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

steps(10);