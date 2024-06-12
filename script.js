// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number";
// document.querySelector(".scor").textContent = 15;
// document.querySelector(".guessNumber").value = 2;

let num = Math.trunc(Math.random() *20)+1;
console.log(num);
// document.querySelector(".number").textContent = num;

let score=10;
let highScore=5;

const getmessage =(message) =>{
  document.querySelector(".message").textContent=message
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessNumber").value);
  if (!guess) {
     getmessage("😧Enter number");
  } 
  
  else if(guess<1 || guess>=20 )
  {
    getmessage("❌ InVAlid Number");
  }
  else if (guess > num) {
      if(score>0){
        score--;
        document.querySelector(".scor").textContent = score;
        console.log(score);
      }
      else{
        getmessage("😭 loser");
      }
      getmessage("📈Too high");
    } 
    else if (guess < num) {
      score++; 
      console.log(score);
      document.querySelector(".scor").textContent = score;
      getmessage("📉Too low");
    }
     else if (guess === num) {
      getmessage("💐correct number");
      document.querySelector("body").style.backgroundColor= "green";
      document.querySelector(".guessNumber").style.backgroundColor= "green";
      document.querySelector(".number").textContent = num;
      if(score>highScore)
      {
        highScore=score;
        document.querySelector(".hscore").textContent = highScore;
      }
      else{
        document.querySelector(".hscore").textContent =highScore;
      }
      
     
    } 
    else {
      getmessage("😟Guess again");
    }
  }

 
);
document.querySelector(".again").addEventListener( "click", function () {
  document.querySelector("body").style.backgroundColor= "black";
  document.querySelector(".guessNumber").style.backgroundColor= "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").addEventListener=("click");
}


);




