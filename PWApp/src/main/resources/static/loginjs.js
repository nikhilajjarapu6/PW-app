
function OnClickLogins()
{
   
        var emailId= document.getElementById('emailId')
        var passwordId= document.getElementById('passwordId')
        var emailIdValue= emailId.value
        var passwordIdValue= passwordId.value
        var localStorageUserMailAdress=localStorage.getItem('userMailAdress')
        var localStorageUserPassword=localStorage.getItem('userPassword')
        
        if(emailIdValue===localStorageUserMailAdress && passwordIdValue===localStorageUserPassword)
        {
                              
            window.open("home.html")
        }
        else if(emailIdValue!==localStorageUserMailAdress || passwordIdValue!==localStorageUserPassword)
        {

        }
}

function OnInputLoginVerification()
{
        var emailId= document.getElementById('emailId')
        var passwordId= document.getElementById('passwordId')
        var emailIdValue= emailId.value
        var passwordIdValue= passwordId.value
        var localStorageUserMailAdress=localStorage.getItem('userMailAdress')
        var localStorageUserPassword=localStorage.getItem('userPassword')
        // console.log(localStorageUserMailAdress)
        // console.log(localStorageUserPassword)
        if(emailIdValue===localStorageUserMailAdress && passwordIdValue===localStorageUserPassword)
        {
            setTimeout(()=>{emailId.style.border="green 2px solid";
                            passwordId.style.border="green 2px solid"                               
        },1000)
            setTimeout(()=>{
                emailId.style.border="";
                passwordId.style.border=""},2000)
            
        }
        else if(emailIdValue!==localStorageUserMailAdress || passwordIdValue!==localStorageUserPassword)
        {
            emailId.style.border=""
            passwordId.style.border=""
        }
}

function submitButtonOnclick(){
    window.open("register.html")
}