let player1 = 1;
let playerturn = 1;
let gridarray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

/* function things(){
    setPlayer();
    squareClicked();
    changePlayer();

}
 */
/* let option = document.getElementById('tag');


function setPlayer(any){
    if(confirm("do you want to start a new game?"))
	{
		let option =  document.getElementById('tag').value;
	} else {
	    document.getElementById('tag').value = option;
    }
} */




function squareClicked(buttonId){
    playerId = document.getElementById('tag').value;
    console.log(playerId)

    if (buttonId.id === 'x' || buttonId.id === 'o'){
        console.log('this is x')
    }
    else {
        console.log (playerturn);
        console.log('not x');

        if (playerId == 'x'){
            if (playerturn == 1){
                playerId = document.getElementById('tag').value;
            }
            else {
                playerId = 'o'
            }
        }else if (playerId == 'o'){
            if (playerturn == 1){
                playerId = document.getElementById('tag').value;
            }
            else {
                playerId = 'x'
            }
        }

        console.log(buttonId.id);

        gridarray[buttonId.id] = playerId;
        console.log(gridarray);

        document.getElementById(buttonId.id).innerText = playerId;
        buttonId.setAttribute("id", playerId);
        console.log(buttonId.id);
        
        endgame(buttonId);
        // changePlayer();
    }
    
}

function changePlayer(){
    let player1 = 1;
    let player2 = 2;
    
    if (player1 == 1){
        console.log(playerturn);
        if (playerturn == 1){
            playerturn = 2
        }else {playerturn = 1} 
        console.log(playerturn);

        if (player2 == playerturn){
            console.log('playerchanged');
        }
        
    }
    else{
        console.log('test');
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
        console.log ('tada');
        return true;
    }
    else {
        if(gridarray.indexOf(0) > -1){
            console.log('no');
            return false;
        }
        else {
            console.log('tada');
            return true;
        }
    }
}

function endgame(){
    if (win() == true){
        cleargame();
        console.log('win')
    }
    else {
        changePlayer();
    }
}

function cleargame(){
    for (let i=0; i<9; i++){
        gridarray[i] = 0;
        gridarray[i].innerHTML = '-';
    }
}