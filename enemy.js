var Enemy = function() {
	this.image = document.createElement("img");
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.width = 50;
	this.height = 60;
	
	this.image.src = "Red_Zombie_Idle_1.png";
};

Enemy.prototype.update = function(deltaTime)
{
	if( typeof(this.rotation) == "undefined" )
		this.rotation = 0;
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE)== true)
	{
		this.rotation -= deltaTime;
	}
	else
	{
		this.rotation += deltaTime;
	}	
}

Enemy.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}