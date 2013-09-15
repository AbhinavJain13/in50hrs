var makediv=function(classname, content, parent){

	var element=document.createElement("div");
	element.className = classname;
        txt = document.createTextNode(content)
	element.innerHTML = content;
	parent.appendChild(element);
	return element;
};
