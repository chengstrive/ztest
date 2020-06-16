function debug(msg){
	var log = document.getElementById("debuglog");
	
	if(!log){
		log = document.createElement("div");
		log.id = "debuglog";
		log.innerHTML = "<h1>Debug Log</h1>";
		document.body.appendChild(log);
    }
	
	var pre = document.createElement("pre");
	var text = document.createTextNode(msg);
	pre.appendChild(text);
	log.appendChild(pre);
}


function hide(e, reflow){
	if(reflow) {
		e.style.display = "none"
	}else{
		e.style.display = "hidden";
	}
}

function highlight(e){
	if(!e.className) e.className="hilite";
	else e.className += " hilite";
}