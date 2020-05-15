// Write a function that accpets a positve numer N.
// The function should console log a step shape with N levels using the # character.
// Make sure the step has spaces on the right hand size!

function steps(n){

  // Solution #1
  let count = 1;

  while (count <= n){
    console.log("#".repeat(count));
    count++;
  }
}

steps(50);