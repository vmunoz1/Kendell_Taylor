//variables
var a = document.getElementById("hair1")
var b = document.getElementById("hair2")
var c = document.getElementById("hair3")
var d = document.getElementById("play1")
var e = document.getElementById("play2")
var f = document.getElementById("play3")
var g = document.getElementById("play4")
var h = document.getElementById("ken1")
var i = document.getElementById("ken2")
var j = document.getElementById("title")


function titleChange(elem){
	h.src="Images/Kendell1.jpg";
	i.src="Images/kendell2.jpg";
	a.classList.remove("opaque");
	b.classList.remove("opaque");
	c.classList.remove("opaque");
	d.classList.remove("opaque");  
	e.classList.remove("opaque");  
	f.classList.remove("opaque");
	g.classList.remove("opaque"); 
	h.pause();
}

function changeHairone(elem){
	h.src="Images/Kendellh1.jpg";
	b.classList.remove("opaque");
	c.classList.remove("opaque");
	a.classList.add("opaque");
}

function changeHairtwo(elem){
	h.src="Images/Kendellh2.jpg";
	a.classList.remove("opaque");
	c.classList.remove("opaque");
	b.classList.add("opaque");
}

function changeHairthree(elem){
	h.src="Images/Kendellh3.jpg";
	a.classList.remove("opaque");
	b.classList.remove("opaque");
	c.classList.add("opaque");
}

function playOne(elem){
	var audio= new Audio('Talking/firstRecord.m4a');
	audio.play();
	i.src="Images/Kendell1.gif";
	d.classList.add("opaque");  
	e.classList.remove("opaque");  
	f.classList.remove("opaque");  
	g.classList.remove("opaque");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}

function playTwo(elem){
	var audio= new Audio('Talking/secondRecord.m4a');
	audio.play();
	i.src="Images/Kendell2.gif";
	e.classList.add("opaque");
	d.classList.remove("opaque");  
	f.classList.remove("opaque");  
	g.classList.remove("opaque"); 
}

function playThree(elem){
	var audio= new Audio('Talking/thirdRecord.m4a');
	audio.play();
	i.src="Images/Kendell3.gif";
	f.classList.add("opaque");
	d.classList.remove("opaque");  
	e.classList.remove("opaque");  
	g.classList.remove("opaque"); 
}

function playFour(elem){
	var audio= new Audio('Talking/fourthRecord.m4a');
	audio.play();
	i.src="Images/Kendell4.gif";
	g.classList.add("opaque");
	d.classList.remove("opaque");  
	e.classList.remove("opaque");  
	f.classList.remove("opaque"); 
}
