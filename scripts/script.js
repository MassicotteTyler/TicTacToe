var turn = 2;
var currentPiece = 1;
var piece;
var winArray = new Array();
var won = false;

function onLoadFunctions() {
	spawnPiece();
	runTest();
	turnCheck();
	winner();
	restart();
}
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}


function drop(ev) {
	spawnPiece();
	document.getElementById(ev.target.id).innerHTML = piece;
	turnCheck();
	ev.preventDefault();
}

function turnOff(id) {
	document.getElementById(id).removeAttribute('ondragover');
	document.getElementById(id).removeAttribute('ondrop');
	winArray[parseInt((id.charAt(3)))] = turn;
}

function spawnPiece() {
	piece = '<img id="piece';
	piece += currentPiece;
	piece += '" ';
	if(turn == 1) {
		piece += 'name="X" src="images/X.png" alt="X" ';
		turn = 2;
	}
	else
	{
		piece += 'name="O" src="images/O.png" alt="O" ';
		turn = 1;
	}
	piece += 'draggable="false" width="75" height="75" />';
	currentPiece++;
}	

function runTest() {
	console.log("Javascript running");
}

function turnCheck() {
	
	if(turn == 1)
	{
		document.getElementById("drag2").setAttribute("draggable", "false");
		document.getElementById("drag1").setAttribute("draggable", "true");
		document.getElementById("turnArrow").style.float = "left";
	}
	if(turn == 2)
	{
		document.getElementById("drag1").setAttribute("draggable", "false");
		document.getElementById("drag2").setAttribute("draggable", "true");
		document.getElementById("turnArrow").style.float = "right";
	}
}

function color(dv) {
	var div = document.getElementById(dv);
	if(turn == 1)
	{
		div.style.backgroundColor = "#150101";
	}
	if(turn == 2)
	{
		div.style.backgroundColor = "#381B39";
	}
}
function winner(){

	if(winArray[1] == winArray[2] && winArray[1] == winArray[3])
		if(winArray[1] != undefined)
			winGame();
	if(winArray[4] == winArray[5] && winArray[4] == winArray[6])
		if(winArray[4] != undefined)
			winGame();
	if(winArray[7] == winArray[8] && winArray[7] == winArray[9])
		if(winArray[7] != undefined)	
			winGame();
	if(winArray[1] == winArray[4] && winArray[1] == winArray[7])
		if(winArray[1] != undefined)	
			winGame();
	if(winArray[2] == winArray[5] && winArray[2] == winArray[8])
		if(winArray[2] != undefined)	
			winGame();
	if(winArray[3] == winArray[6] && winArray[3] == winArray[9])
		if(winArray[3] != undefined)	
			winGame();
	if(winArray[1] == winArray[5] && winArray[1] == winArray[9])
		if(winArray[1] != undefined)
			winGame();
	if(winArray[3] == winArray[5] && winArray[3] == winArray[7])
		if(winArray[3] != undefined)
			winGame();
	if(currentPiece == 11 && won == false){
		alert("YO, WTF. GAME TIED? GET OUTTA HERE!");
		restart();
	}
}
function winGame(){
	var winnerName;
	if(turn == 2)
		winnerName = "OOOO BABY, A TRIPLE ";
	else
		winnerName = "O JUST STOLE ALL OF X'S DORITOS, WTF! ";
	
	alert(winnerName);
	won = true;	
	restart();
}
function restart(){
	document.getElementById('playAgain').innerHTML = '<form> <input type="submit" value="play again" /> </form>';
}

window.onload = onLoadFunctions;

