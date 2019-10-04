let playerScore=0, computerScore=0;

// Generates random integers between 0 and 2

random = () => 
{
    return (Math.floor(Math.random() *(3)));
}

let value=["rock","paper","scissors"];

//computerPlay() returns random value from array value[] using random function

computerPlay = () =>
{
    return value[random()];
}

//playRound() plays one round of Rock Paper Scissor


play = (playerSelection,computerSelection) => 
{
    if(playerSelection === computerSelection)
    {
        return "It's a draw !!!"
    }
    else if (playerSelection === 'scissors') 
    {
        if(computerSelection === 'paper') 
        {
            playerScore ++;
            return `Computer loses, ${playerSelection} beats ${computerSelection}`;
        }
        else
        {
            computerScore ++;
            return `Computer wins, ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if (playerSelection === 'rock')
    {
        if(computerSelection === 'scissors')
        {
            playerScore ++;
            return `Computer loses, ${playerSelection} beats ${computerSelection}`;
        }
        else
        {
            computerScore ++;
            return `Computer wins, ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if (playerSelection === 'paper')
    {
        if(computerSelection === 'rock')
        {
            playerScore ++;
            return `Computer loses, ${playerSelection} beats ${computerSelection}`;
        }
        else
        {
            computerScore ++;
            return `Computer wins, ${computerSelection} beats ${playerSelection}`;
        }
    }
}

game = () =>
{
    while(playerScore != 5 || computerScore != 5)
    {
        if(playerScore === 5 || computerScore === 5)
            break;
        let playerSelection = (prompt("Choose between Rock, Paper and Scissors! ")).toLowerCase();
        let computerSelection = computerPlay();
        console.log(play(playerSelection,computerSelection));
    }
}

console.log(game());

console.log("Player Score",playerScore);
console.log("Computer Score",computerScore);