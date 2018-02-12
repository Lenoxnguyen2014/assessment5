var chapter1 = document.getElementById("ch1");
var chapter2 = document.getElementById("ch2");
var chapter3 = document.getElementById("ch3");
var zoomButton = document.getElementById("zoomcontrols");
var zoom = document.getElementById("zoom");
var y = 0;
document.getElementById("BG1").addEventListener("click",function()
{
	chapter1.style.backgroundImage="url(imgs/i1.jpg)";
	chapter2.style.backgroundImage="url(imgs/i2.jpg)";
	chapter3.style.backgroundImage="url(imgs/i3.jpg)";
});
document.getElementById("BG2").addEventListener("click",function()
{
	chapter1.style.backgroundImage="url(imgs/i4.jpg)";
	chapter2.style.backgroundImage="url(imgs/i5.jpg)";
	chapter3.style.backgroundImage="url(imgs/i6.jpg)";
});
document.getElementById("BG3").addEventListener("click",function()
{
	chapter1.style.backgroundImage="url(imgs/i7.jpg)";
	chapter2.style.backgroundImage="url(imgs/i8.jpg')";
	chapter3.style.backgroundImage="url(imgs/i9.jpg)";
});
document.getElementById("BG4").addEventListener("click",function()
{
	chapter1.style.backgroundImage="url(imgs/i10.jpg)";
	chapter2.style.backgroundImage="url(imgs/i11.jpg)";
	chapter3.style.backgroundImage="url(imgs/i12.jpg)";
});
document.getElementById("zoom").addEventListener("click",function()
{
	zoomButton.style.display="block";	
});
document.getElementById("plus").addEventListener("click",function()
{
	width = 100 + 10; 
	height = 70 + 7;
	zoom.style.width = width + "%";
	zoom.style.height = height + "%";
});
document.getElementById("minus").addEventListener("click",function()
{
	width = width - 10;
	height = height - 7;
	zoom.style.width = width + "%";
	zoom.style.height = height + "%";
});

