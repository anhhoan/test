export function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.target.value.match(mailformat))
{
return true;
}
else
{
return false;
}
}
export function checkPassword(password){
    if(password.length>6){
        return true
    }
    else{
        return false
    }

}