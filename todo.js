var addButton = document.getElementById("add");
addButton.addEventListener("click",addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click",removeItem);

var removeAllButton = document.getElementById("removeAll");
removeAllButton.addEventListener("click",removeAllItem);

var ul=document.getElementById("list");

function addItem(){
    var todo= document.getElementById("input");
    var item= todo.value;
    var ul=document.getElementById("list");
    
    console.log("value= "+ todo.value);
    var textNode = document.createTextNode(item);

    if(item == ""){
        return false;
        console.log("empty");
    }
    else{
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var label = document.createElement("label");

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className="list-group-item";

        todo.value="";
    }

}

function removeItem(){
    var li=ul.children;
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        while (li[index] && li[index].children[0].checked) {
          ul.removeChild(li[index]);
            
        }
    }
}

function removeAllItem(){
    var li=ul.children; 
    index=li.length-1;  
    while(index >= 0) {
        ul.removeChild(li[index]);
        index--;
    }
    
}
