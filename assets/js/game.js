// Game States
// "Win" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
//"Lose" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
    window.alert("Your robot's name is " + playerName);
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;   
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
    //console.log(enemyNames);
    //console.log(enemyNames[0]);
    //console.log(enemyNames[1]);
    //console.log(enemyNames[2]);
    //console.log(enemyNames.length);
var fight = function(pickedEnemyName) {
    while(enemyHealth>0&&playerHealth>0){
var promptFight=window.prompt("Whould you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
    if(promptFight==="skip"||promptFight==="SKIP"){
var confirmSkip=window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip){
            window.alert(playerName+" has decided to skip this fight.  Goodbye!");
            playerMoney=playerMoney-10;
            console.log("playerMoney ", playerMoney);
            break;
        }
    }
    // Player attackes Enemy Robot
    enemyHealth = enemyHealth - playerAttack;
    // Battle Results
    console.log(
        playerName + " attacked " + pickedEnemyName + ". " + pickedEnemyName + " now has " + enemyHealth + " health remaining."
    );
    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(pickedEnemyName + " has died!");
        playerMoney=playerMoney+20;
        break;
    }else{
        window.alert(pickedEnemyName+" still has "+enemyHealth+" health left.");
    }
    // Enemy attacks Player Robot
    playerHealth = playerHealth - enemyAttack;
    // Battle Results
    console.log(
        pickedEnemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player health
    if (playerHealth<=0){
        window.alert("You have lost your robot in battle!  Game Over!");
        break;
    }else{
        window.alert(playerName+" still has "+playerHealth+" health left.");
    }
    }
};
for(var i=0; i<enemyNames.length; i++){
    if (playerHealth>0){
        window.alert("Welcome to Robot Gladiators!  Round "+(i+1));
    }
    //else {
      //  window.alert("You have lost your robot in battle!  Game Over!");
        //break;
    //}
var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
    
}

