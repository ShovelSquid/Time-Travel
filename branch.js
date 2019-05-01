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

let m01 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let m02 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m03 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m04 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m05 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m06 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m07 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m08 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m09 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m10 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function createtile(tiletype, tilepos) {
	var material = tiletype;
	var position = tilepos;

function RenderMap() {
	totalarray = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10];
	totalarray.forEach()
}


