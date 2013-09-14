var makediv=function(classname, content, parent){

	var element=document.createElement("div");
	element.className = classname;
	element.innerHTML = content;
	parent.appendChild(element);
	return element;
};
