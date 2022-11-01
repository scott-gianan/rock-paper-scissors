let playerScore =0;
let computerScore =0;
//let islevelStarted = false;

let playerChoice = [];
let computerChoice = [];



const getComputerChoice = () => {
    const choice = ['rock','paper','scissors'];
    let randomChoice = Math.round(Math.random()*2);
    return computerChoice.push(choice[randomChoice]);
}
    
    
$('.choice').click((event)=> {
    getComputerChoice();
    playerChoice.push(event.target.alt);
    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);
})


const play = () => {

    let playerLastIndex = playerChoice[playerChoice.length-1];
    let computerLastIndex = computerChoice[computerChoice.length-1];

    if(playerLastIndex === 'rock' && computerLastIndex ==='scissors'){
        playerScore++;
        $('.result').text('You won!');
        $('.player-score').text(`${playerScore}`);
    }
    else if(playerLastIndex === 'scissors' && computerLastIndex ==='paper'){
        playerScore++;
        $('.result').text('You won!');
        $('.player-score').text(`${playerScore}`);
    }
    else if(playerLastIndex === 'paper' && computerLastIndex ==='rock'){
        playerScore++;
        $('.result').text('You won!');
        $('.player-score').text(`${playerScore}`);
    }
    else if(computerLastIndex === 'rock' && playerLastIndex ==='scissors'){
        computerScore++;
        $('.result').text('computer won!');
        $('.computer-score').text(`${computerScore}`);
    }
    else if(computerLastIndex === 'scissors' && playerLastIndex ==='paper'){
        computerScore++;
        $('.result').text('computer won!');
        $('.computer-score').text(`${computerScore}`);
    }
    else if(computerLastIndex === 'paper' && playerLastIndex ==='rock'){
        computerScore++;
        $('.result').text('computer won!');
        $('.computer-score').text(`${computerScore}`);
    }
    else if(computerLastIndex===playerLastIndex){
        $('.result').text('Draw!');
    }
}

$('button').click(play);

const showComputerChoice = (choice) => {

}

