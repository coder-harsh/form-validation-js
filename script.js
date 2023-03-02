//form validation 2 types

// 1. server side
// 2. client side verification in js


let username=document.getElementById("username");
let password=document.getElementById("password");
let flag=1;

function validateForm(){
    if(username.value == "")
    {
        document.getElementById("usererror").innerHTML="Username is empty";
        flag=0;
    }
    else if(username.value.length<3){
        document.getElementById("usererror").innerHTML="Username requires minimum 3 char";
        flag=0;
    }
    else{
        document.getElementById("usererror").innerHTML="";
        flag=1;
    }
    if(password.value == ""){
        document.getElementById("passerror").innerHTML="Password is empty";
        flag=0;
    }
    else{
        if(username.value == "")
        {
        document.getElementById("usererror").innerHTML="Username is empty";
        document.getElementById("passerror").innerHTML="";
            flag=0;
        }
        else if(username.value.length<3)
        {
            document.getElementById("usererror").innerHTML="Username requires minimum 3 char";
            document.getElementById("passerror").innerHTML="";
            flag=0;
        }
        else{
            document.getElementById("passerror").innerHTML="";
            flag=1;
        }
    }
    if(flag)
    {
    return true;
    }
    else{
        return false;
    }
}