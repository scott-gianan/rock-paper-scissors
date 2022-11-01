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
    let option = event.target.id;
    let audio = new Audio('./sounds/choice.mp3');
    audio.play();

    getComputerChoice();
    playerChoice.push(option);
    highlightPlayerChoice(option);
    console.log(option);
    // console.log(`Player: ${playerChoice}`);
    // console.log(`Computer: ${computerChoice}`);
})

const showComputerChoice = (choice) => {
    $('#computer-choice').html(`<img src="./images/${choice}.png" id="rock" alt="rock" width="100">`);
}

const highlightPlayerChoice = (choice) => {
    $(`#${choice}`).addClass('pressed');
    setTimeout(() => {
    $(`#${choice}`).removeClass('pressed')
    }, 500);
}

const play = () => {

    let playerLastIndex = playerChoice[playerChoice.length-1];
    let computerLastIndex = computerChoice[computerChoice.length-1];
    
    if(playerLastIndex === 'rock' && computerLastIndex ==='scissors'){
        playerScore++;
        showComputerChoice(computerLastIndex);
        audio_win();
        $('.result').text('You won!');
        $('.player-score').text(`${playerScore}`);
    }
    else if(playerLastIndex === 'scissors' && computerLastIndex ==='paper'){
        playerScore++;
        showComputerChoice(computerLastIndex);
        audio_win();
        $('.result').text('You won!');
        $('.player-score').text(`${playerScore}`);
    }
    else if(playerLastIndex === 'paper' && computerLastIndex ==='rock'){
        playerScore++;
        showComputerChoice(computerLastIndex);
        audio_win();
        $('.result').text('You won!');
        $('.player-score').text(`${playerScore}`);
    }
    else if(computerLastIndex === 'rock' && playerLastIndex ==='scissors'){
        computerScore++;
        audio_lost();
        showComputerChoice(computerLastIndex);
        $('.result').text('You Lost!');
        $('.computer-score').text(`${computerScore}`);
    }
    else if(computerLastIndex === 'scissors' && playerLastIndex ==='paper'){
        computerScore++;
        audio_lost();
        showComputerChoice(computerLastIndex);
        $('.result').text('You Lost!');
        $('.computer-score').text(`${computerScore}`);
    }
    else if(computerLastIndex === 'paper' && playerLastIndex ==='rock'){
        computerScore++;
        audio_lost();
        showComputerChoice(computerLastIndex);
        $('.result').text('You Lost!');
        $('.computer-score').text(`${computerScore}`);
    }
    else if(computerLastIndex===playerLastIndex){
        audio_draw();
        showComputerChoice(computerLastIndex);
        $('.result').text('Draw!');
    }
}

$('button').click(()=> {
    play();
    setTimeout(() => {
        playerChoice=[];
    }, 100);
});


//Sound for losing a round:
const audio_lost = () => {
    let lost = new Audio('./sounds/lost.mp3');
    lost.play();
}

//Sound for winning a round:
const audio_win = () => {
    let win = new Audio('./sounds/win.mp3');
    win.play();
}

//Sound for when the round is a draw
const audio_draw = () => {
    let draw = new Audio('./sounds/draw.mp3');
    draw.play();
}