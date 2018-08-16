let player1 = 1;
let playerturn = 1;
let gridarray = [0, 0, 0, 0, 0, 0, 0, 0, 0];


function setPlayer(any){
    let option = document.getElementById('tag').value
    if(confirm("do you want to start a new game?"))
	{
        let option =  document.getElementById('tag').value;
        cleargame();
	} else {
        option == 'x'? option = 'o': option = 'x';
        document.getElementById('tag').value = option;
    }
}




function start(buttonId){
    playerId = document.getElementById('tag').value;
    document.getElementById('container').innerHTML = '';

    if (buttonId.id === 'x' || buttonId.id === 'o'){
        document.getElementById('container').innerHTML = 'that space is already taken\n play elsewhere';
    }
    else {

        if (playerId == 'x'){
            playerturn == 1? playerId = document.getElementById('tag').value :playerId = 'o';
        }else if (playerId == 'o'){
            playerturn == 1? playerId = document.getElementById('tag').value :playerId = 'x';
        }


        gridarray[buttonId.id] = playerId;

        document.getElementById(buttonId.id).innerText = playerId;
        buttonId.setAttribute("id", playerId);
        
        endgame(buttonId);
    }
    
}

function changePlayer(){
    let player1 = 1;
    let player2 = 2;
    
    if (player1 == 1){
        playerturn == 1? playerturn = 2 :playerturn = 1; 

        if (player2 == playerturn){
        }
        else{
            return;
        }
    }
    else{
        return;
    }
}


function win(buttonId){
    if (
        gridarray[0]==gridarray[1] && gridarray[1]==gridarray[2] && gridarray[0] != 0 ||
        gridarray[3]==gridarray[4] && gridarray[4]==gridarray[5] && gridarray[3] != 0 ||
        gridarray[6]==gridarray[7] && gridarray[7]==gridarray[8] && gridarray[6] != 0 ||
        gridarray[0]==gridarray[3] && gridarray[3]==gridarray[6] && gridarray[0] != 0 ||
        gridarray[1]==gridarray[4] && gridarray[4]==gridarray[7] && gridarray[1] != 0 ||
        gridarray[2]==gridarray[5] && gridarray[5]==gridarray[8] && gridarray[2] != 0 ||
        gridarray[0]==gridarray[4] && gridarray[4]==gridarray[8] && gridarray[0] != 0 ||
        gridarray[2]==gridarray[4] && gridarray[4]==gridarray[6] && gridarray[2] != 0
    ){
        alert(`player ${playerturn} won`);
        return true;
    }
    else {
        if(gridarray.indexOf(0) > -1){
            return false;
        }
        else {
            alert('no more moves\n end game');
            return true;
        }
    }
}

function endgame(buttonId){
    win() == true? cleargame(buttonId) :changePlayer();
}

function cleargame(buttonId){
    gridarray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let y = document.getElementsByClassName('Button');
    for (let i=0; i<9; i++){
        y[i].id = `${i}`;
        y[i].innerText = '';
    }
    playerturn = 1;
}