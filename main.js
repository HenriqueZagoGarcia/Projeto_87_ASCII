
var canvas = new fabric.Canvas("myCanvas"); // Variável Canvas

 block_y= 1;
 block_x= 1;

block_image_width = 350; /* Adicione 350 à width */
block_image_height = 430; /* Adicione 430 à height */

var block_image_object= ""; // Fica vazia, pois são diferentes personagens

function new_image(get_image) /* new_image - Obtém a imagem dos personagens */
{
 fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:block_y,
		left:block_x
	})
	canvas.add(block_image_object);

 })
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) /* Função myKeyDown */
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione a letra correta ao valor ASCII
	{
		new_image("rr1.png");
		console.log("e");
	}
	if(keyPressed == '86')
	{
		block_x = 200;
		new_image("gr.png");
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		block_x =350;
		new_image("yr.png");
		console.log("a");
	}
	if(keyPressed == '82')
	{
		block_x = 600;
		new_image("pr.png");
		console.log("r");
	}
	if(keyPressed == '73')
	{
		block_x = 700;
		new_image("br.png");
		console.log("i");
	}
	
}

