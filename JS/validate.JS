let nameNode=document.getElementById("name");

let errNode1=document.getElementById("err1");

let lnameNode=document.getElementById("lname");

let errNode4=document.getElementById("err4");

let MobileNode=document.getElementById("mobile");

let errNode2=document.getElementById("err2");

let mailNode=document.getElementById("e-id");

let errNode3=document.getElementById("err3");

let passNode=document.getElementById("password");

let errNode5=document.getElementById("err5");

let cpassNode=document.getElementById("Cpassword");

let errNode6=document.getElementById("err6");






function validate1()
{
    errNode1.innerHTML="";
    nameNode.style.border="2px pink solid";
    nameNode.style.backgroundColor='white';
    let name=nameNode.value;
    if(name==="")
    {
        errNode1.innerHTML="<b> Please Enter The Name</b>";
        nameNode.style.border="2px red solid";
        nameNode.style.backgroundColor='pink';
        return false;
    }
    else
    {
        return true;
    }
}

function validate4()
{
    errNode4.innerHTML="";
    lnameNode.style.border="2px pink solid";
    lnameNode.style.backgroundColor='white';
    let name=lnameNode.value;
    if(name==="")
    {
        errNode4.innerHTML="<b> Please Enter The  Last Name</b>";
        lnameNode.style.border="2px red solid";
        lnameNode.style.backgroundColor='pink';
        return false;
    }
    else
    {
        return true;
    }
}



function validate2()
{
    errNode2.innerHTML="";
    MobileNode.style.border="2px pink solid";
    MobileNode.style.backgroundColor='white';
    let Mobile_no=MobileNode.value;
   
    if(Mobile_no==="")
    {
        errNode2.innerHTML="<b> Please Enter The Mobile No</b>";
        MobileNode.style.border="2px red solid";
        MobileNode.style.backgroundColor='pink';
        return false;
    }
    else if(Mobile_no.length<10)
    {
        errNode2.innerHTML="<b>Mobile no should be 10 digit</b>";
        MobileNode.style.border="2px red solid";
        MobileNode.style.backgroundColor='pink';
        return false;
    }
    else {
        return true;
    }
    
}




function validate3()
{
    errNode3.innerHTML="";
    mailNode.style.border="2px pink solid";
    mailNode.style.backgroundColor='White';
    let mailid=mailNode.value;
    let ss=mailid.substring(mailid.indexOf('@')+1);
    if(mailid==="")
    {
        errNode3.innerHTML="<b> Please Enter the Email-id</b>";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor='pink';
        return false;
    }
    else if(!mailid.includes("@")|| ss==='')
    {
        errNode3.innerHTML="<b>invalid email id</b>";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor='pink';
        return false;
    }
    else{

        return true;
    }
    
}

function validate5()
{
    errNode5.innerHTML="";
    passNode.style.border="2px green solid";
    passNode.style.backgroundColor='yellow';
    let Pass=passNode.value;
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if(Pass==="")
    {
        errNode5.innerHTML="<b> Please Enter Password</b>";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor='pink';
        return false;
    }
    else if(regexpress.test(Pass)==false)
    {
        errNode5.innerHTML="<b>invalid Password</b>";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor='pink';
        return false;
    }
    else if(Pass.length<4 || Pass.length>8)
    {
        errNode5.innerHTML="<b>Length should be in range";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor='pink';
        return false;
    }
    else{

        return true;
    }
   
}


function validate6()
{
    errNode6.innerHTML="";
    cpassNode.style.border="2px green solid";
    cpassNode.style.backgroundColor='yellow';
    let CPass=cpassNode.value;
    let pass=passNode.value;

    if(CPass==="")
    {
        errNode6.innerHTML="<b> Please Confirm Password</b>";
        cpassNode.style.border="2px red solid";
        cpassNode.style.backgroundColor='pink';
        return false;
    }
    
    else if(pass!=CPass)
    {
        errNode6.innerHTML="<b>Password should be match";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor='pink';
        return false;
    }
    else{
    return true;
    }
}



function validateForm()
{
   let str1=validate1();
   let str2=validate2();
   let str3=validate3();
   return(str1 && str2 && str3 );
}


function scrolldiv()
{
    var elem = document.getElementById("ele");
    elem.scrollIntoView();
}

function scrolldiv1()
{
    var elem1 = document.getElementById("ele1");
    elem1.scrollIntoView();
}
  
function galary()
{
  var gal=document.getElementById("gal");
  gal.scrollIntoView();
}