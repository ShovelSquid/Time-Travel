var HTML = function(canvasID, width, height) {
	this.width = width;
	this.height = height;
	this.canvas = null;
	this.context = null;
	this.canvas = document.getElementById(canvas_tag_id);
	this.context = this.canvas.getContext('2d');
}