
var ul = document.getElementsByTagName("ul")[0];

var input = document.getElementsByTagName ("input")[0];


document.onclick =   function (event){
    if(event.target.id === "x"){
        var a =event.target.parentNode.parentNode;
        a.remove(a);
        
    
    }
    if(event.target.id==="y"){
        var change= prompt("Please change");
        event.target.parentNode.parentNode.innerHTML = change +
        "<div class=\"images\">" + 
        "<img src=\"1.png\" alt=\"\" class=\"shekil\" id=\"x\" >" +
        "<img src=\"change.png\" alt=\"\" class=\"shekil\" id=\"y\" >" +
        "</div>" ;
    
    
        

    }
}

 
function make_li_element (text){
    return "<li class=\"list-group-item\">" + text +
        "<div class=\"images\">" + 
        "<img src=\"1.png\" alt=\"\" class=\"shekil\" id=\"x\" >" +
        "<img src=\"change.png\" alt=\"\" class=\"shekil\" id=\"y\" >" +
        "</div>" +
    


    "</li";
};
 
 

document.onkeypress = function (event) {
    if (event.key === "Enter") {
        if(input.value !== ""){
        var text=input.value;
        input.value = "";
        ul.innerHTML += make_li_element (text);
        
        

        
    }
    }
};


