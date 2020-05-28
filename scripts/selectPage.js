let pageName = "home";

function createHome(){
	var divText = '<p> About Me <\p>';
	return divText;
}

function createHome2(){
	var divText = '<p> Not is About Me <\p>';
	return divText;
}

function buildDiv(){
	if( pageName === "home" ){
		document.getElementById("main").innerHTML = createHome();
	} else {
		document.getElementById("main").innerHTML = createHome2();
	}
}

function changeName(name) {
	pageName = name;
	buildDiv();
}

function init(){
	changeName("home");
}

window.onload = init();