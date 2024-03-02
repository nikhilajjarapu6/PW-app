function onLoadUserPage()
{
    // let phnono=localStorage.getItem('userPhNo')
    document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
    document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
    document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)
   
}
function onclickcreatAccountId()
{
    let userDivv = document.getElementById('userDiv');
    userDivv.style.width = '600px';
    userDivv.style.height = '300px';
    userDivv.style.position='releative';
    userDivv.style.top='100px'

    document.getElementById('userDiv').innerHTML=`
    <div id="createAccountdiv">
    <form>
        <table>
            <tr>
                
                <td>
                    <select onchange="minimumSelectOnchange()" onclick="minimumSelectOninput()" oninput="minimumSelectOninput()" id="minimumSelect" class="creatAccountInputClasses">
                        <option selected hidden>MINIMUM TRANSACTION</option>
                        <option>0</option>
                        <option>100</option>
                        <option>1000</option>
                        <option>10000</option>
                    </select>
                </td>
            </tr>
            <tr>
                
                <td>
                    <span class="userPass"><input id="userPagePassword" type="password" placeholder="Password" class="creatAccountInputClasses"><i onmousedown="onclickClosedEye3()" onmouseup="onNoClickClosedEye3()" id="closedEye3" class="fa-solid fa-eye-slash"></i></span>
                </td>
            </tr>
            <tr>
               
                <td>
                    <span class="userPass"><input id="userPageConfirmPassword" type="password" placeholder="Confirm Password" class="creatAccountInputClasses"><i onmousedown="onclickClosedEye4()" onmouseup="onNoClickClosedEye4()" id="closedEye4" class="fa-solid fa-eye-slash"></i></span>
                </td>
            </tr>
            <tr>
                
                <td>
                    <input id="amount" type="number" placeholder="Enter Amount" class="creatAccountInputClasses">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input onclick="onclickProceedButton()" id="proceedButton" type="button" value="Proceed">
                </td>
            </tr>
        </table>
    </form>
</div>
`

}
function onclickGetAccountId()
{
    let localAmount=localStorage.getItem('amount')
    if(localAmount!==null){
    document.getElementById('userDiv').innerHTML=`<span id="removingSpan3">
    <br>
        <h1>User Details</h1>
        <br>
        <span>ID:<span class="getUserDetailsClass"> ${localStorage.getItem('userId')}</span></span>
        <br>
        <span>Name:<span class="getUserDetailsClass"> ${localStorage.getItem('userName')}</span></span>
        <br>
        <span>Phone No:<span class="getUserDetailsClass"> ${localStorage.getItem('userPhNo')}</span></span>
        <br>
        <span>Account No:<span class="getUserDetailsClass"> SBI**********009</span></span>
        <br>
        <span>Amount: <span class="getUserDetailsClass">${localStorage.getItem('amount')}</span></span>
</span>`
}
else{
    document.getElementById('userDiv').innerHTML=`<span id="noGetAccountSpan">Please Create an Account Before getting an Account<span>`
}
}
function onclickUpdateAccountId()
{
    let userDivv = document.getElementById('userDiv');
    userDivv.style.width = '600px';
    userDivv.style.height = '300px';
    userDivv.style.position = 'relative';
    userDivv.style.top = '100px';

    document.getElementById('userDiv').innerHTML=`
    <div id="createAccountdiv"><span id="removingSpan2">
    <span id="acNo1">Account No:</span>
    <span id="acNo2" class="getUserDetailsClass">SBI**********009</span>
    <form id="foram" class="updateForm">
        <table>
            <tr>
               
                <td>
                    <select onchange="minimumSelectOnchange()" onclick="minimumSelectOninput()" oninput="minimumSelectOninput()" id="minimumSelect" class="creatAccountInputClasses">
                        <option selected hidden>MINIMUM TRANSACTION</option>
                        <option>0</option>
                        <option>100</option>
                        <option>1000</option>
                        <option>10000</option>
                    </select>
                </td>
            </tr>
            <tr>
                
                <td>
                    <span class="userPass"><input id="userPagePassword" type="password" placeholder="Password" class="creatAccountInputClasses"><i onmousedown="onclickClosedEye3()" onmouseup="onNoClickClosedEye3()" id="closedEye3" class="fa-solid fa-eye-slash"></i></span>
                </td>
            </tr>
            <tr>
                
                <td>
                    <span class="userPass"><input id="userPageConfirmPassword" type="password" placeholder="Confirm Password" class="creatAccountInputClasses"><i onmousedown="onclickClosedEye4()" onmouseup="onNoClickClosedEye4()" id="closedEye4" class="fa-solid fa-eye-slash"></i></span>
                </td>
            </tr>
            <tr>
                
                <td>
                    <input id="amount" type="number" placeholder="Enter Amount" class="creatAccountInputClasses">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input onclick="onclickProceedButton()" id="proceedButton" type="button" value="Proceed">
                </td>
            </tr>
        </table>
    </form>
</span></div>
`

}
function onclickDeleteAccountId()
{
    document.getElementById('userDiv').innerHTML=` <div id="createAccountdiv"><span>
    <form>
        <input class="deleteFormClass" placeholder="Enter Your Account No">
        <br>
        <input class="deleteFormClass" placeholder="Enter Your Password">
        <br>
        <input class="deleteFormClass" style="width:20%; font-size:15px ;" type="button" value="Delete" onclick="window.confirm('Are you sure to delete your account')">
    </form>
</span></div>`

}
function onclickPayment()
{
    document.getElementById('userDiv').innerHTML=`<div id="paymentInputs"><span>
    <form action="">
        <input class="paymentInputClass" type="button" value="Send Amount" onclick="onclickSendAmount()">
        <br>
        <input class="paymentInputClass" type="button" value="Receive Amount" onclick="onclickReceiveAmount()">
        <br>
        <input class="paymentInputClass" type="button" value="Check Balance" onclick="onclickCheckBalance()">
    </form>
</span></div>`

}
function onclickSendAmount(){
    document.getElementById('userDiv').innerHTML=`<div id="paymentInputs"><span>
    <form action="">
        <input class="sendAmountInputClass" placeholder="Enter Amount" type="number">
        <br>
        <input class="sendAmountInputClass" placeholder="Enter Password">
        <br>
        <input style="font-size: 15px; width: 20%;" class="sendAmountInputClass" type="button" value="Send">
    </form>
</span></div>`
}
function onclickReceiveAmount(){
    document.getElementById('userDiv').innerHTML=`<div id="paymentInputs"><span>
    <form action="">
        <input class="receiveAmountInputClass" placeholder="Enter Amount" type="number">
        <br>
        <input class="receiveAmountInputClass" placeholder="Enter Password">
        <br>
        <input style="font-size: 15px; width: 20%;" class="receiveAmountInputClass" type="button" value="recieve">
    </form>
</span></div>`
}
function onclickCheckBalance(){
    document.getElementById('userDiv').innerHTML=`<span id="balanceEnquiry">
    <br>
        <h1>User Details</h1>
        <br>
        <span>Name:<span class="getUserDetailsClass"> ${localStorage.getItem('userName')}</span></span>
        <br>
        <span>Account No:<span class="getUserDetailsClass"> SBI**********009</span></span>
        <br>
        <span>Balance Amount: <span class="getUserDetailsClass">****</span></span>
        <br>
        <br>
        <span style="color:black; text-shadow:none;">Thank You</span>
</span>`
}


function minimumSelectOninput()
{
    document.getElementById('minimumSelect').style.border="2px inset rgb(125, 124, 124)"
    document.getElementById('minimumSelect').style.outline="none"
    document.getElementById('minimumSelect').style.borderRadius="5px"
    document.getElementById('minimumSelect').style.boxShadow="2px 2px 3px black"
}
function minimumSelectOnchange()
{
    document.getElementById('minimumSelect').style.color="black"
}

function onclickProceedButton()
{
    // var updateForm=document.getElementsByClassName('updateForm')
    // updateForm.addEventListener("submit",(element)=>{
    //     element.preventDefault()
    //     let updateData=new FormData(updateForm)
    //     let playLoad=Object.fromEntries(updateData)
    //     let json=JSON.stringify(playLoad)
    //     window.localStorage.setItem("updateJson",json)
    //     console.log(json)
    // })

    var creatAccountInputClasses=document.getElementsByClassName('creatAccountInputClasses')
    let pureFormOfCreatAccountInputClasses=Array.from(creatAccountInputClasses)
    let everyPureFormOfCreatAccountInputClasses =pureFormOfCreatAccountInputClasses.some((element)=>{ return element.value=='' || element.value=='MINIMUM TRANSACTION'})
    if(everyPureFormOfCreatAccountInputClasses==true)
    {
        alert('it is mandatory to fill the given field before you proceed')
        pureFormOfCreatAccountInputClasses.map((element)=>{
            if(element.value==''){element.style.border="2px solid red"}
            else{element.style.border=""}
    })
    pureFormOfCreatAccountInputClasses[0].style.boxShadow="none"
    pureFormOfCreatAccountInputClasses[0].style.boxShadow="2PX 2PX 3PX BLACK"
    pureFormOfCreatAccountInputClasses[0].style.border="2px solid red"
    }
    
    else
    {
        pureFormOfCreatAccountInputClasses[0].style.border=""
        var userPagePasswordValue=document.getElementById('userPagePassword').value
    var userPageConfirmPasswordValue=document.getElementById('userPageConfirmPassword').value
    if(userPagePasswordValue!==userPageConfirmPasswordValue)
    {
        alert("Please cross check your confirm password, as it is not matching with the password that you have entered")
    }
    else if(userPagePasswordValue===userPageConfirmPasswordValue)
    {
        
        pureFormOfCreatAccountInputClasses.map((element)=>{
           element.style.border=""})
        var verificaion=pureFormOfCreatAccountInputClasses.some((element)=>{return element.value==''})
        
        if(pureFormOfCreatAccountInputClasses[0]!=="MINIMUM TRANSACTION" && verificaion==false){
           var amountValue=document.getElementById('amount').value
            localStorage.setItem('amount',amountValue)
            var amountValue=document.getElementById('amount').value
    var minimumSelectValue=document.getElementById('minimumSelect').value
    if(minimumSelectValue=='0')
    {if(amountValue<0){
        alert('amount should be atleast 0')
    }
    else if(amountValue>=0){
        document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
        <i id="avatar" class="fa-solid fa-user-tie"></i>
        <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
        </h1>
    </span>`
    let phnono=localStorage.getItem('userPhNo')
    document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
    document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
    document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)
    }

}
else if(minimumSelectValue=='100')
    {if(amountValue<100){
        alert('amount should be atleast 100')
    }
    else if(amountValue>=100){
        document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
    <i id="avatar" class="fa-solid fa-user-tie"></i>
    <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
    </h1>
</span>`
let phnono=localStorage.getItem('userPhNo')
    document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
    document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
    document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)
    }

}
else if(minimumSelectValue=='1000')
    {if(amountValue<1000){
        alert('amount should be atleast 1000')
    }
    else if(amountValue>=1000){
        document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
        <i id="avatar" class="fa-solid fa-user-tie"></i>
        <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
        </h1>
    </span>`
    let phnono=localStorage.getItem('userPhNo')
    document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
    document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
    document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)
    }
}

}
else if(minimumSelectValue=='10000')
    {if(amountValue<10000){
        alert('amount should be atleast 10000')
    }
    else if(amountValue>=10000){
        document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
        <i id="avatar" class="fa-solid fa-user-tie"></i>
        <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
        </h1>
    </span>`
    let phnono=localStorage.getItem('userPhNo')
    document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
    document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
    document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)
    }
}

}
 
    

    }
}

function onclickClosedEye3()
{
    let closedEye1=document.getElementById('closedEye3')
    let password=document.getElementById('userPagePassword')
    // console.log(closedEye)
    password.removeAttribute('type')
    password.setAttribute('type','text')
    closedEye1.removeAttribute('class')
    closedEye1.setAttribute('class','fa-solid fa-eye')
}

function onNoClickClosedEye3()
{
    let closedEye1=document.getElementById('closedEye3')
    let password=document.getElementById('userPagePassword')
    // console.log(closedEye)
    password.removeAttribute('type')
    password.setAttribute('type','password')
    closedEye1.removeAttribute('class')
    closedEye1.setAttribute('class','fa-solid fa-eye-slash')
}











