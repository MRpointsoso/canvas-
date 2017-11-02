function draw(id) {
	var canvas = document.getElementById(id);
	if(canvas==null)
	return false;
	var context = canvas.getContext('2d');
	context.fillStyle="antiquewhite";
	context.fillRect(0,0,100,100);
	context.fillStyle="crimson";
	context.strokeStyle="black";
	context.lineWidth=1;
	
	
	
	for (var i=0;i<10;i++) {
	
		context.ellipse(i*15,i*15,i*8,i*10,90,0,Math.PI*2,true);
		context.fillStyle='rgba(255,0,0,0.25)';
		context.fill();
		
	}
}