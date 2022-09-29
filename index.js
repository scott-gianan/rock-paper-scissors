//alert('hello world')

let playerScore =0;
let computerScore =0;

const getComputerChoice = () => {

    let computerChoice = Math.floor(Math.random() *3) +1
    switch(computerChoice){
        case 1:
            return 'rock'
            break;
        case 2:
            return 'paper'
            break;
        default: 
            return 'scissors'
            break;
    }

}

const playerChoice = () => {
   return prompt('Choose your weapon').toLowerCase();
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection){
    
    playerSelection = playerChoice();
    computerSelection = getComputerChoice();

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return(
            playerScore++, 
            'Rock beats scissors. You win!'
        )
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return(
            playerScore++,
            'Paper beats rock. You win!'
        )
    } 
    else if (playerSelection === 'scissors' && computerSelection ==='paper'){
        return(
            playerScore++,
            'Scissors beats paper. You win!'
        )
    }
    else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        return(
            computerScore++,
            'Rock beats scissors. You lose!'
        )
    } 
    else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return(
            computerScore++,
            'Paper beats rock. You lose!'
        )
    } 
    else if (computerSelection === 'scissors' && playerSelection ==='paper'){
        return(
            computerScore++,
            'Scissors beats paper. You lose!'
        )
    } else if (playerSelection === computerSelection){
        return(
            computerScore++,
            playerScore++,
            'Draw. Play again.'
        )
    } else {
        return alert('Choose a valid selection')
    }

}


function play(){

    for(let i=0; i<5; i++){
       console.log(
        playRound(playerSelection, computerSelection),
        `\nPlayer score: ${playerScore}`, `Computer score: ${computerScore}` 
       )  
    }
    const result = playerScore > computerScore

    result ? console.log('Player Won!') : console.log('Computer Won!')
}
play();

