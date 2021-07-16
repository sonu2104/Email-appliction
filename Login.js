import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router';


const Login=()=>{

const [data,fullData]=useState({
    email:'',
    password:'',
    
});
const[signData,setSignData]=useState({
  fullname:"",
  email:"",
  password:"",
  conPass:"",

});
const LoginEvent=(event)=>{

const value=event.target.value;
const name=event.target.name;
console.log(value);
fullData((prevalue)=>{
    return{
        ...prevalue,
        [name]:value,

    }
});
    
};
const history=useHistory();
const btnClick= async ()=>{
    
  
     const resData = await fetch("http://localhost:3000/getdata?q="+ data.email)
     
const res = await resData.json();

if(res.length > 0) {
  console.log(res[0]);
  if(res[0].password === Number(data.password)) {
    history.push('/mail');
  }
  else {
    alert('wrong password');
  }
}
else {
  alert('no email found')
}

};
const InputEvent=(event)=>{

  const value=event.target.value;
  const name=event.target.name;
  console.log(value);
  setSignData((prevalue)=>{
      return{
          ...prevalue,
          [name]:value,
  
      }
  });
};

const signupForm=(e)=>{
  
  e.preventDefault();
  console.log("inside signup");
  fetch('http://localhost:3000/getdata',{
      method: 'POST',
      headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
      },
      body: JSON.stringify(signData)
  }).then(response => {
          console.log(response)
      
          if(signData.password!==signData.conPass)
          {
            alert("password does not match")
            //MessageChannel.error("error");
          }
          else{
            history.push('/mail')
            console.log("match");
          }
          //alert("password doesn't match");}
          setSignData("");
      })
      .catch(error =>{
          console.log(error)
      });
      setSignData("");

};

const onSignip=()=>{
    
 
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

  signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)




   loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)
    
    }


 
 return(
        <>
       <section className="user">
  <div className="user_options-container">
    <div className="user_options-text">
      <div className="user_options-unregistered">
        <h2 className="user_unregistered-title">Don't have an account?</h2>
        <p className="user_unregistered-text">Please click on Sign Up</p>
        <button className="user_unregistered-signup" onClick={onSignip} id="signup-button">Sign up</button>
      </div>

      <div className="user_options-registered">
        <h2 className="user_registered-title">Have an account?</h2>
        <p className="user_registered-text">Please click on  Login .</p>
        <button className="user_registered-login" onClick={onSignip} id="login-button">Login</button>
      </div>
    </div>
    
    <div className="user_options-forms" id="user_options-forms">
      <div className="user_forms-login">
        <h2 className="forms_title">Login</h2>
        <form className="forms_form" >
          <fieldset className="forms_fieldset">
            <div className="forms_field">
              <input type="email" placeholder="Email" value={data.email} className="forms_field-input" required autofocus name='email' onChange={LoginEvent}/>
            </div>
            <div className="forms_field">
              <input type="password" placeholder="Password"  value={data.password} className="forms_field-input" required name='password' onChange={LoginEvent}/>
            </div>
          </fieldset>
          <div className="forms_buttons">
            
            <button type="button" onClick={btnClick} className="forms_buttons-action" >Log In</button>
            
          </div>
        </form>
      </div>
      <div className="user_forms-signup">
        <h2 className="forms_title">Sign Up</h2>
        <form className="forms_form" onSubmit={(e) => signupForm(e)} >
          <fieldset className="forms_fieldset">
            <div className="forms_field">
              <input type="text" placeholder="Full Name" value={signData.fullname} className="forms_field-input" name='fullname' required onChange={InputEvent} />
            </div>
            <div className="forms_field"> 
              <input type="email" placeholder="Email" value={signData.email} className="forms_field-input" required  name='email' onChange={InputEvent}/>
            </div>
            <div className="forms_field">
              <input type="password" placeholder="Password" value={signData.password} className="forms_field-input" required  name='password' onChange={InputEvent}/>
            </div>
            <div className="forms_field">
              <input type="password" placeholder="Confrim Password" value={signData.conPass} className="forms_field-input" required  name='conPass' onChange={InputEvent}/>
        </div></fieldset>
        <div className="forms_buttons">
            <input type="submit" value="Sign up" className="forms_buttons-action"/>
          </div>
</form>    
      </div>
    </div>
  </div>

   
        </section>
        
      </>  
   );
 }
export default Login;