

function getValue(parm){
    var qString = window.location.href;    
    var a = qString.split("?")[1];
    var b = a.split("&");
    var returnValue = "";

    // b.forEach(el => {
    //     if (el.indexOf(parm) > -1 ){
    //         returnValue = el.split("=")[1];
    //     }      
    // });    
    
    for (let el of b){
        if (el.indexOf(parm) > -1 ){
            returnValue = el.split("=")[1];
            break;
        }   
    }
    return returnValue;
};

var stringValue = getValue("lname");
console.log("Value:", stringValue);