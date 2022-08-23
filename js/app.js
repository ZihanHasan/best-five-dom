document.getElementById('player-1').addEventListener('click',function(){
    let listLength =  document.getElementById("player-list").children.length;
    
    if(listLength === 5){
        alert('No more than 5 players can be added !!!');
        document.getElementById('player-1').removeAttribute('disabled');
    }
    else{
        const player1 = document.getElementById('player-name-1');
        const player1text = player1.innerText;
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player1text;
        playerList.appendChild(li);
        document.getElementById('player-1').setAttribute('disabled',true);
        document.getElementById('player-1').style.color = 'orange';
    }
})

document.getElementById('player-2').addEventListener('click',function(){
    let listLength =  document.getElementById("player-list").children.length;
    
    if(listLength === 5){
        alert('No more than 5 players can be added !!!');
        document.getElementById('player-2').removeAttribute('disabled');
    }
    else{
        const player2 = document.getElementById('player-name-2');
        const player2text = player2.innerText;
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player2text;
        playerList.appendChild(li);
        document.getElementById('player-2').setAttribute('disabled',true);
        document.getElementById('player-2').style.color = 'orange';
    }
})

document.getElementById('player-3').addEventListener('click',function(){
    let listLength =  document.getElementById("player-list").children.length;
    
    if(listLength === 5){
        alert('No more than 5 players can be added !!!');
        document.getElementById('player-3').removeAttribute('disabled');
    }
    else{
        const player3 = document.getElementById('player-name-3');
        const player3text = player3.innerText;
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player3text;
        playerList.appendChild(li);
        document.getElementById('player-3').setAttribute('disabled',true);
        document.getElementById('player-3').style.color = 'orange';
    }
})

document.getElementById('player-4').addEventListener('click',function(){
    let listLength =  document.getElementById("player-list").children.length;
    
    if(listLength === 5){
        alert('No more than 5 players can be added !!!');
        document.getElementById('player-4').removeAttribute('disabled');
    }
    else{
        const player4 = document.getElementById('player-name-4');
        const player4text = player4.innerText;
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player4text;
        playerList.appendChild(li);
        document.getElementById('player-4').setAttribute('disabled',true);
        document.getElementById('player-4').style.color = 'orange';
    }
})

document.getElementById('player-5').addEventListener('click',function(){
    let listLength =  document.getElementById("player-list").children.length;
    
    if(listLength === 5){
        alert('No more than 5 players can be added !!!');
        document.getElementById('player-5').removeAttribute('disabled');
    }
    else{
        const player5 = document.getElementById('player-name-5');
        const player5text = player5.innerText;
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player5text;
        playerList.appendChild(li);
        document.getElementById('player-5').setAttribute('disabled',true);
        document.getElementById('player-5').style.color = 'orange';
    }
})

document.getElementById('player-6').addEventListener('click',function(){
    let listLength =  document.getElementById("player-list").children.length;
    
    if(listLength === 5){
        alert('No more than 5 players can be added !!!');
        document.getElementById('player-6').removeAttribute('disabled');
    }
    else{
        const player6 = document.getElementById('player-name-6');
        const player6text = player6.innerText;
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player6text;
        playerList.appendChild(li);
        document.getElementById('player-6').setAttribute('disabled',true);
        document.getElementById('player-6').style.color = 'orange';
    }
})