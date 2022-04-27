
function validateform(){ 
    var name=document.myform.name.value; 
    var aname=document.myform.aname.value;
    var bname=document.myform.bname.value; 
    var number=document.myform.number.value; 
     
    if (name==null || name==""){ //if statement to check if the input box is empty
     alert("Name can't be blank"); 
     return false; 
    } 
    else if(aname==null || aname==""){ //if statement to check if the input box is empty
     alert("Name can't be blank2"); 
     return false; 
    } 
    else if(bname==null || bname==""){ //if statement to check if the input box is empty
     alert("Name can't be blank3"); 
    return false; 
    } 
    else if(isNaN(number)){ 
 alert("Password must be at least 6 characters long."); //if statement to determine whether the input box is a number
 return false; 
     } 
     
    } 