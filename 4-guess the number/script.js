let randomNumber = parseInt(Math.random()*100+1);
const submit =document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guess');
const remaining = document.querySelector('.lastresult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p= document.createElement('p');

let prevguess = []
let numguess=1

let playGame=true  
if(playGame){
    submit.addEventListener('click',function(e){
e.preventDefault();
const guess=parseInt(userinput.value);
validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number.')
    }else if(guess<1){
        alert('please enter a valid number.')
            }else if(guess>100){
        alert('please enter a number.less than 100.')
    }else {
      prevguess.push(guess);
    
             if(numguess===11){
             displayGuess(guess)
             displayMessage(`gameover.random number was ${randomNumber}`)
             endGame()
            
    }else{
displayGuess(guess)
checkGuess(guess)
    }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is toooo low`)
    }else if(guess>randomNumber){
        displayMessage(`Number is toooo high`)
    }

}
function displayGuess(guess){
    console.log("Guess received:", guess);

    userinput.value = '';
    guessSlot.innerHTML += guess + ' ';
    numguess++;
    remaining.innerHTML = `${11-numguess}`;

}
function displayMessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">start new game.</h2>'
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random()*100+1);
    prevguess=[]
    numguess=1
    guessSlot.innerHTML=''
  remaining.innerHTML = `${11-numguess}`;
  userinput.removeAttribute('disabled')
  startOver.removeChild(p)
playGame=true
})
}



