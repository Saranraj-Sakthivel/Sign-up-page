
  document.getElementById("header-form").addEventListener('submit',function(event){
    event.preventDefault();
        let username = document.getElementById("input1").value.trim()
        let Email = document.getElementById("Email").value.trim()
        let password = document.getElementById("password").value.trim()
        let cpassword = document.getElementById("cpassword").value.trim()
        
        let unameerror = document.getElementById("usererror")
        let emailerror = document.getElementById("emailerror")
        let passerror =document.getElementById("passworderror")
        let cpasserror= document.getElementById("cpassworderror")
        

        //saran raj
        //xxx@gmail.com
        let isvalid = true; 
        let unamepattern = /^[A-Za-z]+ [A-Za-z]+$/;
        let emailpattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/

        if(username === "")
          {
             document.getElementById("usererror").innerText= "Name is Required"
             isvalid=false
          }
        else if(!unamepattern.test(username)){
            unameerror.innerText=" *Enter Your Full Name"
             isvalid=false
        }
        else if(unamepattern.test(username)){
            unameerror.innerText=""
            isvalid = true; 
            
        }

         if(Email ==="")
          {
            emailerror.innerText= "Email is Required"
             isvalid=false
          }
        else if(!emailpattern.test(Email)){
            emailerror.innerText=" Enter a Valid Email"
             isvalid=false
        }
        else if(emailpattern.test(Email)){
            emailerror.innerText=""
            isvalid = true; 
        }

         if(password ==="")
          {
            passerror .innerText= "Password is Required"
             isvalid=false
          }
        else if(password.length <3 || password.length>10)
        {
            passerror.innerText= "Enter a password char between 3 to 10"
             isvalid=false
        }
        else if(password.length >3 || password.length<=10)
        {
            passerror.innerText= ""
            isvalid = true; 
        }


         if(cpassword ==="")
          {
             cpasserror.innerText= "Confirm Password is Required"
              isvalid=false
          }
          else if(cpassword !== password)
          {
            cpasserror.innerText =" Password Not Match"
             isvalid=false
          }
          else if(cpassword == password)
          {
            cpasserror.innerText =""
            isvalid = true; 
          }

        if (isvalid)
        {
            alert(`Hi ${username},Welcome to our Website`)
        }
})