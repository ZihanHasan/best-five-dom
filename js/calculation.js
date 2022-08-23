document.getElementById('calculate').addEventListener('click',function(){

    const listLength =  document.getElementById("player-list").children.length;
    const listLengthNumber = parseFloat(listLength);

    const playerCostValue = getInputValueById('per-player-cost');
    const calculation = listLengthNumber * playerCostValue;

    setTextValuebyId('cost-text', calculation);

})

document.getElementById('total-btn').addEventListener('click',function(){
    const previousValue = getPreviousValueById('cost-text');

    const managerCost = getInputValueById('manager-cost');

    const coachCost = getInputValueById('coach-cost');

    const newValue = previousValue + managerCost + coachCost;
    setTextValuebyId('total-amount', newValue);
})