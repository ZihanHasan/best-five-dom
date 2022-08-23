// Player section

function playerLimit(playerNumber){
    alert('No more than 5 players can be added !!!');
    document.getElementById(playerNumber).removeAttribute('disabled');
}

function getPlayerName(PlayerName){
    const player = document.getElementById(PlayerName);
    const playerText = player.innerText;
    return playerText;
}

function btnDisable(player){
    document.getElementById(player).setAttribute('disabled',true);
    document.getElementById(player).style.color = 'orange';
}

// Calculator section

function getInputValueById(inputFieldId){
    
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;   
    const inputFieldValueNumber = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldValueNumber;
 
    
}

function getPreviousValueById(previousTotalId){
    const previousValue = document.getElementById(previousTotalId);
    const previousAmount = previousValue.innerText;
    const previousAmountNumber = parseFloat(previousAmount);
    return previousAmountNumber;
}

function setTextValuebyId(previousTotalId, newValue){
    const previousValue = document.getElementById(previousTotalId);
    previousValue.innerText = newValue;
}