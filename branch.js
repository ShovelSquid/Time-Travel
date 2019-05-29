let player = null;
let left = 0;
let top_ = 0;
var pts = 0;

var playerposition = null;
var bodypos = null;
var playerPosTop = null;
var playerPosLeft = null;
console.log("Player Position Top:", playerPosTop, " Player Position Left:", playerPosLeft)


function KeyPresser(e) {
	var key_code= e.which || e.keyCode;
	switch(key_code) {
		case 37: //leftarrow
			PlayerMoveLeft();
			break;
		case 38: //uparrow
			PlayerMoveUp();
			break;
		case 39: //rightarrow
			PlayerMoveRight();
			break;
		case 40: //downarrow
			PlayerMoveDown();
			break;

			//WASD

		case 65: //a key (left)
			PlayerMoveLeft();
			break;
		case 87: //w key (up)
			PlayerMoveUp();
			break;
		case 68: //d key (right)
			PlayerMoveRight();
			break;
		case 83: //s key (down)
			PlayerMoveDown();
			break;

		case 69:
			var playerposition = player.getBoundingClientRect();
			var playerPosTop = playerposition.top - bodypos.top;
			var playerPosLeft = playerposition.left - bodypos.left;
			interactionObjects(playerposition, playerPosTop, playerPosLeft);

	}
}


function PlayerMoveLeft() {
	document.getElementById("swagtext").innerHTML = "";
	var playerposition = player.getBoundingClientRect();
	var playerPosTop = playerposition.top - bodypos.top;
	var playerPosLeft = playerposition.left - bodypos.left;

	if ((cpos.findIndex((pos) => pos[0] === playerPosTop && pos[1] === playerPosLeft - 50) === -1)) {
		left = left - 50;
		player.style.left = left + "px"
	}
	else {
		player.style.left = left + "px";
		IposCheck(playerposition, playerPosTop, playerPosLeft);
	}
	console.log(playerPosTop, playerPosLeft);
}

function PlayerMoveRight() {
	document.getElementById("swagtext").innerHTML = "";
	var playerposition = player.getBoundingClientRect();
	var playerPosTop = playerposition.top - bodypos.top;
	var playerPosLeft = playerposition.left - bodypos.left;

	if ((cpos.findIndex((pos) => pos[0] === playerPosTop && pos[1] === playerPosLeft + 50) === -1)) {
		left += 50;
		player.style.left = left + "px"
	}
	else {
		player.style.left = left + "px";
		IposCheck(playerposition, playerPosTop, playerPosLeft);
	}
	console.log(playerPosTop, playerPosLeft);
}

function PlayerMoveUp() {
	document.getElementById("swagtext").innerHTML = "";
	var playerposition = player.getBoundingClientRect();
	var playerPosTop = playerposition.top - bodypos.top;
	var playerPosLeft = playerposition.left - bodypos.left;

	if ((cpos.findIndex((pos) => pos[0] === playerPosTop - 50 && pos[1] === playerPosLeft) === -1)) {
		top_ = top_ - 50;
		player.style.top = top_ + "px"
	}
	else {
		player.style.top = top_ + "px";
		IposCheck(playerposition, playerPosTop, playerPosLeft);
	}
	console.log(playerPosTop, playerPosLeft);
}

function PlayerMoveDown() {
	document.getElementById("swagtext").innerHTML = "";
	var playerposition = player.getBoundingClientRect();
	var playerPosTop = playerposition.top - bodypos.top;
	var playerPosLeft = playerposition.left - bodypos.left;

	if ((cpos.findIndex((pos) => pos[0] === playerPosTop + 50 && pos[1] === playerPosLeft) === -1)) {
		top_ += 50;
		player.style.top = top_ + "px"
	}
	else {
		player.style.top = top_ + "px";
		IposCheck(playerposition, playerPosTop, playerPosLeft);
	}

	console.log(playerPosTop, playerPosLeft);
}

const maps = [
	[
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
		[1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
		[1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
		[1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
		[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]
	],
	[
		[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
		[1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
		[1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
		[1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 1],
		[1, 2, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	[
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1],
		[1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
		[1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
		[0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
		[0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]
	],
	[
		[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
		[1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
		[1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
		[1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	]
];

let currentmap = maps[1];

const cpos = []
const ipos = []

function IposCheck(playerposition, playerPosTop, playerPosLeft){
	if ((ipos.findIndex((pos) => pos[0] === playerPosTop && pos[1] === playerPosLeft - 50) !== -1) || 
		(ipos.findIndex((pos) => pos[0] === playerPosTop && pos[1] === playerPosLeft + 50) !== -1) ||
		(ipos.findIndex((pos) => pos[0] === playerPosTop - 50 && pos[1] === playerPosLeft) !== -1) ||
		(ipos.findIndex((pos) => pos[0] === playerPosTop + 50 && pos[1] === playerPosLeft) !== -1)) {
	console.log("possible interaction");
	document.getElementById("swagtext").innerHTML = "Press E to collect point";
	}else{
	//do nothing
	}
}

function interactionObjects(playerposition, playerPosTop, playerPosLeft){
	if ((ipos.findIndex((pos) => pos[0] === playerPosTop && pos[1] === playerPosLeft - 50) !== -1) || 
		(ipos.findIndex((pos) => pos[0] === playerPosTop && pos[1] === playerPosLeft + 50) !== -1) ||
		(ipos.findIndex((pos) => pos[0] === playerPosTop - 50 && pos[1] === playerPosLeft) !== -1) ||
		(ipos.findIndex((pos) => pos[0] === playerPosTop + 50 && pos[1] === playerPosLeft) !== -1)) {
	console.log("interaction complete");
	pts++;
	document.getElementById("points").innerHTML = pts;
	document.getElementById("swagtext").innerHTML = "";
	}else{
	console.log("no interaction")
	}
}

const tiles = [];
const mapdiv = document.querySelector("#map");

function createtile(tileType, rowNum, columnNum) {
	tile = document.createElement("div")
	tile.className = "tile"
	mapdiv.appendChild(tile);
	tiles.push(tile)

	tile.style.left = columnNum*50 + "px";
	tile.style.top = 50 + rowNum*50 + "px";

	if (tileType == 0) {
		imeg = document.createElement("img")
		imeg.className = "tile"
		imeg.src = "./nice_tiles.png"
		tile.appendChild(imeg)

	}
	if (tileType == 1) {
		imeg = document.createElement("img")
		imeg.className = "tile"
		imeg.src = "./wall_ig.png"
		tile.appendChild(imeg)
		var pos = tile.getBoundingClientRect();
		var postop = pos.top - bodypos.top;
		var posleft = pos.left - bodypos.left;
		cpos.push([postop, posleft]);
	}
	if (tileType == 2) {
		imeg = document.createElement("img")
		imeg.className = "tile"
		imeg.src = "./dispense.png"
		tile.appendChild(imeg)
		var pos = tile.getBoundingClientRect();
		var postop = pos.top - bodypos.top;
		var posleft = pos.left - bodypos.left;
		ipos.push([postop, posleft, 1]);
		cpos.push([postop, posleft]);
	}
	if (tileType == 3) {
		imeg = document.createElement("img")
		imeg.className = "tile"
		imeg.src = "./nice_tiles.png"
		tile.appendChild(imeg)
		console.log(tile.style.top)
		player.style.left = tile.style.left;
		player.style.top = tile.style.top;
		left = columnNum*50;
		top_ = 50 + rowNum*50;
	}
}

function RenderMap(map) {
	mapdiv.innerHTML = "";
	player = document.createElement("img");
	player.id = "sprite";
	player.src = "./IMG_3886.jpg";
	mapdiv.appendChild(player);

	playerposition = player.getBoundingClientRect();
	bodypos = document.body.getBoundingClientRect();
	playerPosTop = playerposition.top - bodypos.top;
	playerPosLeft = playerposition.left - bodypos.left;

	map.forEach((row, rowNum) => {
		row.forEach((tileType, columnNum) => {
			createtile(tileType, rowNum, columnNum)
		});
	});

}

RenderMap(currentmap)





