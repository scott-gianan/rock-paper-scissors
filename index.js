const playGame = () => {
    let playerScore =0;
    let computerScore =0;
    let islevelStarted = true;

    let playerChoice = [];
    let computerChoice = [];


    const getComputerChoice = () => {
        const choice = ['rock','paper','scissors'];
        let randomChoice = Math.round(Math.random()*2);
        return computerChoice.push(choice[randomChoice]);
    }
        
    $('.choice').click((event)=> {
        let option = event.target.id;
        playerChoice.push(option);
        highlightPlayerChoice(option);
        getComputerChoice();
        adio_choose();
        // console.log(option);

    })

    const showComputerChoice = (choice) => {
        $('#computer-choice').html(`<img src="./images/${choice}.png" id="rock" alt="rock" width="100">`);
    }

    const highlightPlayerChoice = (choice) => {
        $(`#${choice}`).addClass('pressed');
        setTimeout(() => {
        $(`#${choice}`).removeClass('pressed')
        }, 250);
    }

    const play = () => {
        if(islevelStarted){
            let playerLastIndex = playerChoice[0];
            let computerLastIndex = computerChoice[0];
            
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
            checkScore();
        }
    }

    $('button').click(()=> {
        if(playerChoice.length===0 && computerChoice.length===0){
            audio_draw();
            $('.result').text('Dear player, please select from one of the three options first').fadeOut(250).fadeIn(250);
        } else {
            play();
            setTimeout(() => {
                playerChoice=[];
                computerChoice=[];
            }, 100);
        }
        // console.log(`Player: ${playerChoice}`);
        // console.log(`Computer: ${computerChoice}`);
    });

    const checkScore = () => {
        if(playerScore===5){
            setTimeout(() => {
                player_win();
                $('.result').text('Congratulations! You beat the computer! Click anywhere to reset the game.').fadeOut(500).fadeIn(500);
                continue_game();
            }, 500);
        }else if (computerScore===5){
            setTimeout(() => {
                player_lose();
                $('.result').text('Computer won. Click anywhere to reset the game.').fadeOut(500).fadeIn(500);
                continue_game();
            }, 500);
        }
    }

    const continue_game = () => {
        $(document).click(() => {
            let reload = new Audio('./sounds/draw.mp3');
            reload.play();
            setTimeout(() => {
                location.reload();
            }, 500);
        })
    }
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
    //Sound for when the player chooses
    const adio_choose = () => {
        let audio = new Audio('./sounds/choice.mp3');
        audio.play();
    }
    //Sound for when the player loses the game
    const player_lose = () => {
        let player_lose = new Audio('./sounds/playerlose.mp3');
        player_lose.play();
    }
    //Sound for when the player wins the game
    const player_win = () => {
        let player_win = new Audio('./sounds/playerwin.mp3');
        player_win.play();
    }
}

playGame();

