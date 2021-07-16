import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './mail.css';
const Mail = () => {
   
    const [data ,setData]=useState(
        {name:"",
         email:"",
        subject:"",
        message:"",
        
    });
    const InputEvent=(e)=>{
        
        const name=e.target.name;
        const value=e.target.value;
       console.log(value);
        setData((prevalue)=>{
          return{
        ...prevalue,
        [name]:value,
                };
            });
};
const onSent = (e) => {
  e.preventDefault();
    emailjs.sendForm("service_jpc4xsa", "template_7cuep7f","#send-mail", "user_DxNK5JYo2KNLFP5xbPco6")
        .then(res => {
           console.log(res)
        }).catch(err=>{console.log(err)
        
        
        });
        
    
        
    };
    const submitOn=(e)=>{
        alert("submit")
}
    const resetButton=()=>{
        setData({...data,
            name:"",
            email:"" ,
             subject:"",
             message:""
    
                  });
    }
    
    return (
   <>
   <div className="container ">
<form  id="send-mail" onClick={(e) => onSent(e)}  >
		<h1 className="title">Send Email</h1>

			<div className="form-group" style={{position:"relative"}}>
				<label htmlFor="formName" className="d-block">
					<img className="icon" src="user-name-13-16.png"></img>
				</label>
				<input type="text" name="name"   onChange={InputEvent} value={data.name} id="formName" className="form-control form-control-lg thick" placeholder="Name"/>
			</div>

		
			<div className="form-group "  style={{position:"relative"}}>
				<label htmlFor="formEmail" className="d-block">
					<img className="icon" src="mailbox-36-16.png"></img>
				</label>
				<input type="email" name="email"  onChange={InputEvent} value={data.email}   id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail"/>
			</div>

            <div className="form-group" >
				<label htmlFor="formName" className="d-block"  style={{position:"relative"}}>
                <img className="icon" src="snowflake-23-16.png"></img>
					</label>
				<input type="text" name="subject"  onChange={InputEvent} value={data.subject}  id="formName" className="form-control form-control-lg thick" placeholder="Subject"/>
			</div>
			<div className="form-group message1">
				<textarea id="formMessage"  name="message"   onChange={InputEvent}  value={data.message} className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
			</div>
		
		
			<div className="text-center">
		
            <button type="submit" className="btn btn-primary" style={{marginRight:"80px"}} onClick={submitOn}  tabIndex="-1">Send </button>
                <button type="submit" className=" btn btn-primary "  onClick={resetButton}  tabIndex="-1">Reset</button>
			</div>
	</form>
	</div>
           
   </>
    );
                    };
 export default Mail;