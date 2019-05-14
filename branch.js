const player = document.getElementById("sprite");
let left = 0;
let top_ = 0;

var playerposition = player.getBoundingClientRect();
var bodypos = document.body.getBoundingClientRect();
var playerPosTop = playerposition.top - bodypos.top;
var playerPosLeft = playerposition.left - bodypos.left;
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
	}
}


function PlayerMoveLeft() {
	if (left == -0) {
		player.style.left = left + "px"
	}
	else {
		left = left - 50;
		player.style.left = left + "px"
	}
}

function PlayerMoveRight() {
	if (left == 450) {
		player.style.left = left + "px"
	}
	else {
		left += 50;
		player.style.left = left + "px"
	}
}

function PlayerMoveUp() {
	if (top_ == -0) {
		player.style.top = top_ + "px"
	}
	else {
		top_ = top_ - 50;
		player.style.top = top_ + "px"
	}
}

function PlayerMoveDown() {
	if (top_ == 450) {
		player.style.top = top_ + "px"
	}
	else {
		top_ += 50;
		player.style.top = top_ + "px"
	}
}

const map =[[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
			[1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
			[1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
			[1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
			[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]];

const cpos = []

const tiles = [];
const mapdiv = document.querySelector("#map");

function createtile(tileType, rowNum, columnNum) {
	tile = document.createElement("div")
	tile.className = "tile"
	mapdiv.appendChild(tile);
	tiles.push(tile)

	tile.style.left = columnNum*50 + "px";
	tile.style.top = rowNum*50 + "px";
	
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
		console.log(cpos);
	}
}

function RenderMap() {
	map.forEach((row, rowNum) => {
		row.forEach((tileType, columnNum) => {
			createtile(tileType, rowNum, columnNum)
		});
	});
}

RenderMap()





