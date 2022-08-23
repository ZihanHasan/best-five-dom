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

// console.log(listLengthNumber);
document.getElementById('calculate').addEventListener('click',function(){

    const listLength =  document.getElementById("player-list").children.length;
    const listLengthNumber = parseFloat(listLength);

    const playerCostValue = getInputValueById('per-player-cost');
    const calculation = listLengthNumber * playerCostValue;

    // const previousValue = getPreviousValueById('cost-text');
    // const newValue = previousValue + calculation;
    setTextValuebyId('cost-text', calculation);

    // const newValue = previousValue + calculation;
    // setTextValuebyId('cost-text', newValue)
})

document.getElementById('total-btn').addEventListener('click',function(){
    const previousValue = getPreviousValueById('cost-text');

    const managerCost = getInputValueById('manager-cost');

    const coachCost = getInputValueById('coach-cost');

    const newValue = previousValue + managerCost + coachCost;
    setTextValuebyId('total-amount', newValue);
})