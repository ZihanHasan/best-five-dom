// Player - 1

document.getElementById('player-1').addEventListener('click',function(){

    let listLength =  document.getElementById("player-list").children.length;
    if(listLength === 5){
        playerLimit('player-1');
    }
    else{ 
        const player1text = getPlayerName('player-name-1')
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player1text;
        playerList.appendChild(li);
        btnDisable('player-1');
    }
})

// Player - 2

document.getElementById('player-2').addEventListener('click',function(){

    let listLength =  document.getElementById("player-list").children.length;
    if(listLength === 5){
        playerLimit('player-2');
    }
    else{ 
        const player2text = getPlayerName('player-name-2')
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player2text;
        playerList.appendChild(li);
        btnDisable('player-2');
    }
})

// Player - 3

document.getElementById('player-3').addEventListener('click',function(){

    let listLength =  document.getElementById("player-list").children.length;
    if(listLength === 5){
        playerLimit('player-3');
    }
    else{ 
        const player3text = getPlayerName('player-name-3')
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player3text;
        playerList.appendChild(li);
        btnDisable('player-3');
    }
})

// Player - 4

document.getElementById('player-4').addEventListener('click',function(){

    let listLength =  document.getElementById("player-list").children.length;
    if(listLength === 5){
        playerLimit('player-4');
    }
    else{ 
        const player4text = getPlayerName('player-name-4')
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player4text;
        playerList.appendChild(li);
        btnDisable('player-4');
    }
})

// Player - 5

document.getElementById('player-5').addEventListener('click',function(){

    let listLength =  document.getElementById("player-list").children.length;
    if(listLength === 5){
        playerLimit('player-5');
    }
    else{ 
        const player5text = getPlayerName('player-name-5')
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player5text;
        playerList.appendChild(li);
        btnDisable('player-5');
    }
})

// Player - 6

document.getElementById('player-6').addEventListener('click',function(){

    let listLength =  document.getElementById("player-list").children.length;
    if(listLength === 5){
        playerLimit('player-6');
    }
    else{ 
        const player6text = getPlayerName('player-name-6')
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = player6text;
        playerList.appendChild(li);
        btnDisable('player-6');
    }
})