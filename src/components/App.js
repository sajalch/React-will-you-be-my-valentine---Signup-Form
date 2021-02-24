import React, {Component, useState} from "react";
import '../styles/App.css';


const App = () => {
  const initialState={
    nameMessage:'',
    emailMessage:'',
    phoneMessage:'',
    passwordMessage:'',
    error:'',
    congrats:'',
  }
  const [data,setData]=useState(initialState)
  const formValidation = (e) => {
    e.preventDefault();
    const Name = document.querySelector("input[data-testid=name]").value;
    const email = document.querySelector("input[data-testid=email]").value;
    const phone = document.querySelector("input[data-testid=phoneNumber]").value;
    const password = document.querySelector("input[data-testid=password]").value;

    if (Name === "" || phone === "" || password === "" || email === "") {
      setData((prevState)=>({
        ...initialState,
        error:"All fields are mandatory"
      }))
    }
    else if (/[^0-9a-zA-Z]/.test(Name)) {
      setData((prevState)=>({
        ...initialState,
        nameMessage:"Name is not alphanumeric"
      }))
    } else if (email.indexOf("@") === -1) {
      setData((prevState)=>({
        ...initialState,
        emailMessage:"Email must contain @"
      }))
    } else if (isNaN(phone)) {
      setData((prevState)=>({
        ...initialState,
        phoneMessage:"Phone Number must contain only numbers"
      }))
    } else if (password.length <= 6) {
      setData((prevState)=>({
        ...initialState,
        passwordMessage:"Password must contain atleast 6 letters"
      }))
    } else {
      let userName = email.slice(0, email.indexOf("@"));
      setData((prevState)=>({
        ...initialState,
        congrats:`Hello ${userName}`
      }))
    }
  };
  return (
    <>
      <form onSubmit={formValidation}>
        <div>
          Name :
          <input type="text" data-testid="name" />
          <div>{data.nameMessage}</div>
        </div>
        <br />
        <div>
          Email address :
          <input type="text" data-testid="email" />
          <div>{data.emailMessage}</div>
        </div>
        <br />
        <div>
          Gender :
          <select data-testid="gender">
            <option value="male" selected>
              Male
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br />
        <div>
          Phone Number :
          <input type="text" data-testid="phoneNumber" />
          <div>{data.phoneMessage}</div>
        </div>
        <br />
        <div>
          Password :
          <input type="password" data-testid="password" />
          <div>{data.passwordMessage}</div>
        </div>
        <br />
        <div>
          <input type="submit" data-testid="submit" />
        </div>
        <div>{data.error}</div>
        <div>{data.congrats}</div>
      </form>
    </>
  );
};

export default App;

// const App = () => {
//   const [data,setData]=useState({
//     name:'',
//     email:'',
//     gender:'',
//     phoneNumber:'',
//     password:'',
//   })

//   const validation=(type)=>{
//     switch (type) {
//       case "name":
        
//         break;
//       case "email":
        
//         break;
//       case "name":
        
//         break;
    
//       default:
//         break;
//     }
//   }
//   const formSubmit=(event)=>{
//     event.preventDefault();
//     event.target.querySelectorAll('[data-testid]')
//     .forEach((element) => {
      
//       let {type,value}=element;
//       console.log(element.getAttribute('data-testid'),type,value)
//     }); 
//   }
 
//   return (
//     <div id="main">
//     <span data-testid="error"></span>
//       <form onSubmit={formSubmit}>
//         <input data-testid="name" type="text" placeholder="Name" required />
//         <input data-testid="email" type="email" placeholder="Email" required />
//         <select data-testid="gender" title="Gender" required>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Others</option>
//         </select>
//         <input
//           data-testid="phoneNumber"
//           type="number"
//           placeholder="Phone Number"
//           required
//         />
//         <input
//           data-testid="password"
//           type="password"
//           placeholder="Password"
//           required
//         />
//         <input data-testid="submit" type="submit" value="Submit button" />
//       </form>
//     </div>
//   )
// }


// export default App;
