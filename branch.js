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

let m1  = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let m2  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m3  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m4  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m5  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m6  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m7  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m8  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m9  = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
let m10 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


function RenderMap() {
	totalarray = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10]
}


