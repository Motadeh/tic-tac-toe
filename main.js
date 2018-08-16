let player1 = 1;
let playerturn = 1;
let gridarray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gridarray1 = new Array('-', '-', '-', '-', '-', '-', '-', '-', '-');

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
        alert(`${playerturn} won`);
        return true;
    }
    else {
        if(gridarray.indexOf(0) > -1){
            console.log('no');
            return false;
        }
        else {
            console.log('tada');
            alert('no more moves');
            return true;
        }
    }
}

function endgame(buttonId){
    if (win() == true){
        
        cleargame(buttonId);
        console.log('win')
        // squareClicked(buttonId);

    }
    else {
        changePlayer();
    }
}

function cleargame(buttonId){
    
    for (let i=0; i<9; i++){
        let x = document.getElementById("" + i);
    }
    count = document.all('x').length;
    // console.log(count);

    count1 = document.all('o').length;
    // console.log(count1);
    let result = document.querySelectorAll('#x');
    for (let i=(count-1); i >= 0; i--){
        // let result = document.querySelectorAll('#x');
        // console.log(result[i]);
        result[i].innerText = '-'
        result[i].id = `${i+8}`;
    }

    for (let i=(count1-1); i >= 0; i--){
        let result = document.querySelectorAll('#o');
        // console.log(result[i]);
        console.log(i);
        result[i].innerText = '-';
        result[i].id = `${i+8}`;
        console.log(result[i].id);
        console.log(result);
        gridarray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    
    console.log(gridarray);
    let y = document.getElementsByClassName('squareButton');
    console.log(y[0].id);
}