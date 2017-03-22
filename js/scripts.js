var addElem = document.getElementById("addElem"),
	list = document.getElementById("list");

addElem.addEventListener("click", function() {
	
	var	i = document.getElementsByTagName('li');

	list.innerHTML += '<li>item ' +i.length+ '</li>';
	
})


//alternatywnie
/*var addElem = document.getElementById("addElem"),
	list = document.getElementById("list");

addElem.addEventListener("click", function() {
	var i = document.getElementsByTagName('li'),
		li = document.createElement("li"),
		text = document.createTextNode("item " + i.length);
	

	li.appendChild(text);
	list.appendChild(li);

})*/