var turn = 2;
var currentPiece = 1;
var piece;

function onLoadFunctions() {
	spawnPiece();
	runTest();
	turnCheck();
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
}

function turnOffDrag(id) {
	document.getElementById(id).setAttribute("draggable", "false");
}

function spawnPiece() {
	piece = '<img id="piece';
	piece += currentPiece;
	piece += '" ';
	if(turn == 1) {
		piece += 'name="X" src="X.png" alt="X" ';
		turn = 2;
	}
	else
	{
		piece += 'name="O" src="O.png" alt="O" ';
		turn = 1;
	}
	piece += 'draggable="false" width="75" height="75" />';
	currentPiece++;
}	

function runTest() {
	document.getElementById("jRunning").innerHTML = "JScript running";
}

function turnCheck() {
	
	document.getElementById("jRunning").innerHTML = "turnCheck called";
	if(turn == 1)
	{
		document.getElementById("drag2").setAttribute("draggable", "false");
		document.getElementById("drag1").setAttribute("draggable", "true");
	}
	if(turn == 2)
	{
		document.getElementById("drag1").setAttribute("draggable", "false");
		document.getElementById("drag2").setAttribute("draggable", "true");
	}
	
}

window.onload = onLoadFunctions;