function insert(num){
	document.forms["forma"]["field"].value += num;
}
			
function equal(){
	var expression = document.forms["forma"]["field"].value;
	if (expression){
		document.forms["forma"]["field"].value = eval(expression);
	}
}
			
function clean(){
	document.forms["forma"]["field"].value = "";
}
			
function back(){
	var text = document.forms["forma"]["field"].value;
	document.forms["forma"]["field"].value = text.substring(0, text.length - 1);
}


