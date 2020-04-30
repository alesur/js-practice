function rpsGame(yourChoise) {
    console.log(yourChoise.id);
    let humanChoise, botChoise;
    humanChoise = yourChoise.id;

    botChoise = numberToChoice(randomGenerator());
    console.log('Computer choise', botChoise);

    result = decideWinner(humanChoise, botChoise);
    console.log(result);

    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoise.id, botChoise, message);
}

function randomGenerator() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoise, computerChoise) {
    let rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    let yourScore = rpsDatabase[yourChoise][computerChoise]
    let computerScore = rpsDatabase[computerChoise][yourChoise];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'red' };
    } else {
        return { 'message': 'You won!', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoise, botImageChoise, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoise] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1);'>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoise] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}