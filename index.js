//alert('hello world')

// let playerScore =0;
// let computerScore =0;

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

function playRound(playerSelection, computerSelection){

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Rock beats scissors. You win!'
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'Paper beats rock. You win!'
    } 
    else if (playerSelection === 'scissors' && computerSelection ==='paper'){
        return 'Scissors beats paper. You win!'
    }
    else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        return 'Rock beats scissors. You lose!'
    } 
    else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return 'Paper beats rock. You lose!'
    } 
    else if (computerSelection === 'scissors' && playerSelection ==='paper'){
        return 'Scissors beats paper. You lose!'
    } else if (playerSelection === computerSelection){
        return 'Draw. Play again.'
    } else {
        return alert('Choose a valid selection')
    }

}


const computerSelection = getComputerChoice();
const playerSelection = playerChoice();


for(let i=0; i<5; i++){
    playRound(playerSelection, computerSelection)
}

