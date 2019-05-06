const player = document.getElementById("sprite");
let left = 0;
let top_ = 0;



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

// var tile_values = {
// 	0: {
// 		collision = "off"
// 		// img = "nice_tiles.png"
// 	}
// 	1: {
// 		collision = "on"
// 		// img = "wall_ig.png"
// 	}
// };


const map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

function createtile(tileType, rowNum, columnNum) {
	console.log("value", tileType, rowNum, columnNum)
	if (tileType == 0) {
		document.querySelectorAll("tile").style.backgroundColor = black;
		let collision = false;
	}
	if (tileType == 1) {
		document.querySelectorAll("tile").style.backgroundColor = white;
		let collision = true;
	}
	document.querySelectorAll("tile").left = columnNum*50 + "px";
	document.querySelectorAll("tile").top = rowNum*50 + "px";
}

function RenderMap() {
	map.forEach((row, rowNum) => {
		row.forEach((tileType, columnNum) => {
			createtile(tileType, rowNum, columnNum)
		});
	});
}

RenderMap()

// const map = [[1, 1, 1],
// 			 [1, 0, 1],
// 			 [1, 1, 1]];
// const someTile = map[0][1];


