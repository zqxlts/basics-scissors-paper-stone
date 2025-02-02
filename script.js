// Create a basic version of Scissors Paper Stone where
// the user inputs one of "scissors", "paper", or "stone",
// the program internally randomly chooses scissors, paper, or stone,
// and the program outputs whether the user won, the program won, or it's a draw.

// global variables
var gameMode = "waiting for username";
var username = "";
var playCount = 0;
var winCount = 0;
var mjpWin = "no one"; // korean SPS winner

// SPS function randomises the computer choice
function SPS() {
  var randomiser = Math.floor(Math.random() * 3); // using randomiser to pick a number
  var computer = ["scissors", "paper", "stone"];
  return computer[randomiser]; // returning the results of the randomised choice
}

// ==================== GAME MODE ======================
function gamePlay(gameMode, comPlay, input) {
  if (gameMode == "playing SPS") {
    console.log("game mode: " + gameMode);
    myOutputValue = playSPS(comPlay, input);
  }
  if (gameMode == "Reversed SPS") {
    console.log("game mode: " + gameMode);
    myOutputValue = reversePlay(comPlay, input);
  }
  if (gameMode == "Muk-Jji-Pa!") {
    console.log("game mode: " + gameMode);
    myOutputValue = koreanSPS(comPlay, input);
  }
  if (gameMode == "Computer vs Computer") {
    console.log("game mode: " + gameMode);
    myOutputValue = comVcom(comPlay, input);
  }
  return myOutputValue;
}

// ==================== NORMAL SPS ======================
function playSPS(comPlay, input) {
  myOutputValue =
    "Hello " +
    username +
    ". <br>Playing Scissors-Paper-Stone. <br>Enter scissors, paper or stone to play.";
  console.log("game: " + gameMode);

  // if player chose the same as com
  if (input == comPlay) {
    // +1 play count each time the game runs
    playCount += 1;
    myOutputValue = `You played ${input}. <br> Computer played ${comPlay}. <br><br>It's a draw! Play again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  } else if (
    // else if player wins computer
    (input == "scissors" && comPlay == "paper") ||
    (input == "paper" && comPlay == "stone") ||
    (input == "stone" && comPlay == "scissors")
  ) {
    // +1 play count each time the game runs
    playCount += 1;
    // +1 win when user wins
    winCount += 1;
    myOutputValue = `You played ${input}. <br> Computer played ${comPlay}. <br><br>You win! Play again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  } else if (
    // else if player loses
    (input == "scissors" && comPlay == "stone") ||
    (input == "paper" && comPlay == "scissors") ||
    (input == "stone" && comPlay == "paper")
  ) {
    // +1 play count each time the game runs
    playCount += 1;
    myOutputValue = `You played ${input}. <br> Computer played ${comPlay}. <br><br>You lose! Try again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  }
  return myOutputValue;
}

// =================== REVERSE SPS ======================
function reversePlay(comPlay, input) {
  myOutputValue =
    "Hello " +
    username +
    ". <br>Playing reversed Scissors-Paper-Stone. <br>Enter scissors, paper or stone to play.";
  if (input == comPlay) {
    // +1 play count each time the game runs
    playCount += 1;
    myOutputValue = `<u>${gameMode}</u><br><br>You played [reversed] ${input}. <br> Computer played [reversed] ${comPlay}. <br><br>It's a draw! Play again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  } else if (
    // else if player wins computer
    // conditions for reversed playing
    (input == "scissors" && comPlay == "stone") ||
    (input == "paper" && comPlay == "scissors") ||
    (input == "stone" && comPlay == "paper")
  ) {
    // +1 play count each time the game runs
    playCount += 1;
    // +1 win when user wins
    winCount += 1;
    myOutputValue = `<u>${gameMode}</u><br><br>You played [reversed] ${input}. <br> Computer played [reversed] ${comPlay}. <br><br>You win! Play again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  } else if (
    // else if player loses
    // conditions for reversed playing
    (input == "scissors" && comPlay == "paper") ||
    (input == "paper" && comPlay == "stone") ||
    (input == "stone" && comPlay == "scissors")
  ) {
    // +1 play count each time the game runs
    playCount += 1;
    myOutputValue = `<u>${gameMode}</u><br><br>You played [reversed] ${input}. <br> Computer played [reversed] ${comPlay}. <br><br>You lose! Try again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  }
  return myOutputValue;
}

// ================= KOREAN SPS =====================
function koreanSPS(comPlay, input) {
  myOutputValue =
    "Hello " +
    username +
    ". <br>Playing muk-jji-ppa. <br>The round ends when both players draw. The winner is the one who won the last play.<br>Enter scissors, paper or stone to play.";
  console.log("game: " + gameMode);

  if (
    // if player wins computer
    (input == "scissors" && comPlay == "paper") ||
    (input == "paper" && comPlay == "stone") ||
    (input == "stone" && comPlay == "scissors")
  ) {
    // winner is user
    mjpWin = username;
    myOutputValue = `<u>${gameMode}</u><br><br>You played ${input}. <br> Computer played ${comPlay}. <br>${mjpWin} wins.<br><br>The round ends when both players draw. Play again?`;
  } else if (
    // else if player loses
    (input == "scissors" && comPlay == "stone") ||
    (input == "paper" && comPlay == "scissors") ||
    (input == "stone" && comPlay == "paper")
  ) {
    // winner is computer
    mjpWin = "Computer";
    myOutputValue = `<u>${gameMode}</u><br><br>You played ${input}. <br> Computer played ${comPlay}. <br>${mjpWin} wins.<br><br>The round ends when both players draw. Play again?`;
  }
  // if player chose the same as com
  else if (input == comPlay) {
    // +1 play count each time the game draws (1 round)
    playCount += 1;
    if (mjpWin == username) {
      // if winner is user, win count +1
      winCount += 1;
    }
    myOutputValue = `<u>${gameMode}</u><br><br>You played ${input}. <br> Computer played ${comPlay}. <br><br>It's a draw! <br>The last winner was ${mjpWin}. <br>Play again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  }
  return myOutputValue;
}

// ================= COM VS COM ======================
function comVcom(comPlay, input) {
  input = SPS();
  console.log("user random: " + input);
  myOutputValue =
    "Hello " +
    username +
    ". <br>Playing Scissors-Paper-Stone. <br>Enter scissors, paper or stone to play.";
  console.log("game: " + gameMode);

  // if player chose the same as com
  if (input == comPlay) {
    // +1 play count each time the game runs
    playCount += 1;
    myOutputValue = `<u>${gameMode}</u><br><br>You played ${input}. <br> Computer played ${comPlay}. <br><br>It's a draw! Play again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  } else if (
    // else if player wins computer
    (input == "scissors" && comPlay == "paper") ||
    (input == "paper" && comPlay == "stone") ||
    (input == "stone" && comPlay == "scissors")
  ) {
    // +1 play count each time the game runs
    playCount += 1;
    // +1 win when user wins
    winCount += 1;
    myOutputValue = `<u>${gameMode}</u><br><br>You played ${input}. <br> Computer played ${comPlay}. <br><br>You win! Play again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  } else if (
    // else if player loses
    (input == "scissors" && comPlay == "stone") ||
    (input == "paper" && comPlay == "scissors") ||
    (input == "stone" && comPlay == "paper")
  ) {
    // +1 play count each time the game runs
    playCount += 1;
    myOutputValue = `<u>${gameMode}</u><br><br>You played ${input}. <br> Computer played ${comPlay}. <br><br>You lose! Try again?<br><br>${username} has won ${winCount}/${playCount} times against the computer.`;
  }
  return myOutputValue;
}

// ======================= MAIN FUNCTION ========================
var main = function (input) {
  input = input.toLowerCase();
  var myOutputValue = ""; // initiate myOutputValue
  var comPlay = SPS(); // run function ONCE per submit clicked
  //var reverseCom = "reversed " + comPlay; // to check against reverse playing
  console.log("computer:", comPlay);

  // ================== USERNAME =====================
  if (gameMode == "waiting for username") {
    username = input; // store username
    console.log(username);
    gameMode = "playing SPS"; // change mode
    myOutputValue =
      "Hello " + username + ". Enter scissors, paper or stone to play.";
    console.log("username section");
  }

  // ================= SETTING GAME MODES ======================
  if (gameMode != "waiting for username" && input == "reverse") {
    gameMode = "Reversed SPS";
    console.log("game setting: " + gameMode);
  }
  if (gameMode != "waiting for username" && input == "normal") {
    gameMode = "playing SPS";
    console.log("game setting: " + gameMode);
  }
  if (gameMode != "waiting for username" && input == "korean") {
    gameMode = "Muk-Jji-Pa!";
    console.log("game setting: " + gameMode);
  }
  if (gameMode != "waiting for username" && input == "computer") {
    gameMode = "Computer vs Computer";
    console.log("game setting: " + gameMode);
  }

  // ====================== PLAY ==========================
  myOutputValue = gamePlay(gameMode, comPlay, input);

  return myOutputValue;
};
