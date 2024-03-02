
function submitButtonOnclick()
{        
    
    var input=document.getElementById('regester')
    input.addEventListener("submit",(element)=>{
        element.preventDefault()
    let inputData=new FormData(input)
    console.log(inputData)
    let playLoad=Object.fromEntries(inputData)
    let json=JSON.stringify(playLoad)
    console.log(json);
    window.localStorage.setItem("registerJson",json)
})
    let registerInputClassInputs=document.getElementsByClassName('registerInputClass')
    let registerInputClassInputspureArray=Array.from(registerInputClassInputs)
    var everyValue=registerInputClassInputspureArray.every((element)=>{return element.value==''})
        var lengthOfNulls=registerInputClassInputspureArray.map((element)=>{if((element.value=='')){
           var nullElements=element}
        return nullElements})
        var lengthOfNulls=lengthOfNulls.filter((element)=>{return element!==undefined})
        if(everyValue===true)
        {
            alert("The given fields are mandatory")
            registerInputClassInputspureArray.map((element)=>{
                element.style.border="red solid 2px"})
            document.getElementById('emtyFieldErrorSpan').innerHTML='The Given Fields Are Mandatory You Should Not Leave The Red Fields Empty' 
        }
        else if(everyValue===false){
            registerInputClassInputspureArray.map((element)=>{
                element.style.border=""})
            document.getElementById('emtyFieldErrorSpan').innerHTML='' 
            if(lengthOfNulls.length==1)
        {
            alert("The given field is mandatory")
            registerInputClassInputspureArray.map((element)=>{
                if(element.value==''){
                element.style.border="red solid 2px"}})
            document.getElementById('emtyFieldErrorSpan').innerHTML='The Given Field Is Mandatory You Should Not Leave The Red Field Empty' 
        }
        else if(lengthOfNulls.length>1)
        {
            alert("The given fields are mandatory")
            registerInputClassInputspureArray.map((element)=>{
                if(element.value==''){
                element.style.border="red solid 2px"}})
            document.getElementById('emtyFieldErrorSpan').innerHTML='The Given Fields Are Mandatory You Should Not Leave The Red Fields Empty' 
        }
    }
    var everyValue=registerInputClassInputspureArray.every((element)=>{return element.value!==''})
    if(everyValue==true){
        let emailInput=document.getElementById('emailInput')
        let emailInputValue=emailInput.value
        if(emailInputValue!==emailInputValue.slice(0,-10)+"@gmail.com"  || emailInputValue.slice(0,-10)=='')
        {
            alert("please enter your mailadress followed by the keyword '@gmail.com'")
                emailInput.style.border="red 2px solid"
        }
        else if(emailInputValue==emailInputValue.slice(0,-10)+"@gmail.com"  && emailInputValue.slice(0,-10)!=='')
        {
                emailInput.style.border=""
                setTimeout(()=>{emailInput.style.border="green 2px solid"},500)
                setTimeout(()=>{emailInput.style.border=""},500)
        }
        let phNo=document.getElementById('phNo')
    phNoValue=phNo.value
    if(phNoValue.length!==10)
    {
        alert(`YOUR PHNO SHOULD BE OF EXACTLY 10 DIGITS NUMERIC INTEGER BUT YOU HAVE ONLY ENTERED ${phNoValue.length} DIGITS ONLY`)
        phNo.style.border="2px solid red"
    }
    else if(phNoValue.length==10)
    {
        phNo.style.border=""
    }
        let password=document.getElementById('password')
        let confirmPassword=document.getElementById('confirmPassword')
        var passwordValue=password.value
        var confirmPasswordValue=confirmPassword.value
        if(passwordValue!==confirmPasswordValue)
        {
            alert("your confirm password is not matching with password")
            password.style.border="green 2px solid"
            confirmPassword.style.border="red 2px solid"
        }
        else if(passwordValue==confirmPasswordValue)
        {
            password.style.border="green 2px solid"
            confirmPassword.style.border="green 2px solid"
            setTimeout(()=>{password.style.border=""},500)
            setTimeout(()=>{confirmPassword.style.border=""},500)
        }
    }
    var noRedBorder=registerInputClassInputspureArray.some((element)=>{return element.style.border=="2px solid red"})
    if(noRedBorder==false)
    {
        window.open("login.html")
        var userEmailAdress=document.getElementById('emailInput').value
        var userPasswordValue=document.getElementById('password').value
        var userIdValue=document.getElementById('userId').value
        var userNameValue=document.getElementById('userName').value
        var userPhoneNoValue=document.getElementById('phNo').value
        localStorage.setItem('userMailAdress',userEmailAdress)
        localStorage.setItem('userPassword',userPasswordValue)
        localStorage.setItem('userId',userIdValue)
        localStorage.setItem('userName',userNameValue)
        localStorage.setItem('userPhNo',userPhoneNoValue)
    }
    else{
    }

   


}
function onInputPassword()
{
    let password=document.getElementById('password')
        let confirmPassword=document.getElementById('confirmPassword')
        var passwordValue=password.value
        var confirmPasswordValue=confirmPassword.value
        if(passwordValue=='' || confirmPasswordValue=='')
        {
            password.style.border=''
            confirmPassword.style.border=''
        }
        else if(passwordValue!=='' && confirmPasswordValue!=='' && passwordValue==confirmPasswordValue)
        {
            password.style.border="2px solid green"
            confirmPassword.style.border="2px solid green"
        }
        else if(passwordValue!==''&& confirmPasswordValue!=='' && passwordValue!==confirmPasswordValue)
        {
            password.style.border="2px solid green"
            confirmPassword.style.border="2px solid red"
        }   
    if(passwordValue.length>=1 && passwordValue.length<=5)
    {
        var passwordStatus= document.getElementById('passwordStatus')
        passwordStatus.innerHTML=`weak password`
    }
    else if(passwordValue.length>=6 && passwordValue.length<=10)
    {
        var passwordStatus= document.getElementById('passwordStatus')
        passwordStatus.innerHTML=`strong password`
    }
    else if(passwordValue.length>=11 && passwordValue.length<=15)
    {
        var passwordStatus= document.getElementById('passwordStatus')
        passwordStatus.innerHTML=`Excellent password`
    }
    else{
        var passwordStatus= document.getElementById('passwordStatus')
        passwordStatus.innerHTML=``
    }
    if(passwordValue.length>15)
    {
        password.value=password.value.slice(0,15)
    }
    else if(passwordValue.length<=15)
    {
        password.value=password.value
    }
    if(confirmPasswordValue.length>15)
    {
        confirmPassword.value=confirmPassword.value.slice(0,15)
    }
    else if(confirmPasswordValue.length<=15)
    {
        confirmPassword.value=confirmPassword.value
    }
}


function onInputEmail()
{
    let emailInput=document.getElementById('emailInput')
    let emailInputValue=emailInput.value
    if(emailInputValue==emailInputValue.slice(0,-10)+"@gmail.com"  && emailInputValue.slice(0,-10)!=='')
    {
        setTimeout(()=>{emailInput.style.border="orange 2px solid"},2000)
        setTimeout(()=>{emailInput.style.border=""},2500) 
    }
    else if(emailInputValue==emailInputValue.slice(0,-10)+"@gmail.com" && emailInputValue.slice(0,-10)=='')
    {
        emailInput.style.border=""
    }
}


function onInputphNo()
{
    let phNo=document.getElementById('phNo')
    var phNoValue=phNo.value
    if(phNoValue.length!==10)
    {
        setTimeout(()=>{phNo.style.border="red 2px solid"},2000)
    }
    else if(phNoValue.length==10)
    {
        phNo.style.border=""
        setTimeout(()=>{phNo.style.border="orange 2px solid"},2000)
        setTimeout(()=>{phNo.style.border=""},2500)
    }

if(phNoValue.length>10)
    {
        phNo.value=phNo.value.slice(0,10)
    }
    else if(phNoValue.length<=10)
    {
        phNo.value=phNo.value
    }
}


function onclickClosedEye1()
{
    let closedEye1=document.getElementById('closedEye1')
    let password=document.getElementById('password')
    // console.log(closedEye)
    password.removeAttribute('type')
    password.setAttribute('type','text')
    closedEye1.removeAttribute('class')
    closedEye1.setAttribute('class','fa-solid fa-eye')
}

function onNoClickClosedEye1()
{
    let closedEye1=document.getElementById('closedEye1')
    let password=document.getElementById('password')
    // console.log(closedEye)
    password.removeAttribute('type')
    password.setAttribute('type','password')
    closedEye1.removeAttribute('class')
    closedEye1.setAttribute('class','fa-solid fa-eye-slash')
}

function onclickClosedEye2()
{
    let closedEye2=document.getElementById('closedEye2')
    let confirmPassword=document.getElementById('confirmPassword')
    // console.log(closedEye)
    confirmPassword.removeAttribute('type')
    confirmPassword.setAttribute('type','text')
    closedEye2.removeAttribute('class')
    closedEye2.setAttribute('class','fa-solid fa-eye')
}
function onNoClickClosedEye2()
{
    let closedEye2=document.getElementById('closedEye2')
    let confirmPassword=document.getElementById('confirmPassword')
    // console.log(closedEye)
    confirmPassword.removeAttribute('type')
    confirmPassword.setAttribute('type','password')
    closedEye2.removeAttribute('class')
    closedEye2.setAttribute('class','fa-solid fa-eye-slash')
}
function login(){
    window.open("login.html","_self")
}