




import React, { Component }  from 'react';
// import { NavLink } from 'react-router-dom'
import './Login.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import Home from './Home'
// import axios from 'axios'

function Firstpage() {
  const navigate = useNavigate();

  const initialValues = { Email: "", username: "", password: "", cpassword: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
    setIssubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // register user
      // 1. send user data to backend
      async function register() {
        try {
          const res = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify(formValues),
            headers: {
              "Content-Type": "application/json"
            }
          })
          console.log(res)
        } catch (error) {
          console.error(error)
        }
      }
      register()
    }
  }

  const validate = (values) => {
    const errors = {};
    const regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    // email 
    if (!values.Email) {
      errors.Email = " Email is required"
    }
    else if (!regex.test(values.Email)) {
      errors.Email = " Not a valid email "
    }
       // username

       if (!values.username) {
        errors.username = " Username  is required"
      }
      else if (values.username.length < 4) {
        errors.username = " Must be more than 4 character"
      }
      else if (values.username.length >14) {
        errors.username = " Not more  than 14 character"
      }

    // password

    if (!values.password) {
      errors.password = " Password  is required"
    }
    else if (values.password.length < 4) {
      errors.password = " Must be more than 4 character"
    }
    else if (values.password.length >12) {
      errors.password = " Not more  than 12  character"
    }

// confirm password

  if (values.cpassword !== values.password) {
      errors.cpassword = " Confirm Password not matched with password "
    }
    

    return errors;
  }

  // localStorage.setItem('loginDetails', JSON.stringify(formValues));

  return (
    <>
      <div className="container"> 
        <form onSubmit={handleSubmit}>
          <h1>
        Ceate Account
          </h1> <br></br>
          <div className="uidivider">
            <div className="uiform">

              <div className="feild">
                <label > <h5>EMAIL</h5>  </label><br></br>
                <input className=' inp' type="text" name="Email" placeholder=' Enter Email  id ' onChange={handleChange}
                  value={formValues.Email} />
              </div>
              <p className='red'>{formErrors.Email}</p>

              <div className="feild">
                <label ><h5 className='downcc '>USER NAME</h5> </label><br></br>
                <input className='inp' type="text"
                  name="username" placeholder='Enter  User name'
                  onChange={handleChange}
                  value={formValues.username}/>
              </div>
              <p className='red'>{formErrors.username}</p>


              <div className="feild">
                <label ><h5 className='downcc '>PASSWORDD</h5> </label><br></br>
                <input className='inp' type="password"
                  name="password" placeholder='Enter Password'
                  onChange={handleChange}
                  value={formValues.password}/>
              </div>
              <p className='red'>{formErrors.password}</p>

              <div className="feild">
                <label > <h5 className='downcc '>CONFIRM PASSWORD</h5></label><br></br>
                <input className=' inp' type="password"
                  name="cpassword" placeholder='Confirm password  '
                  onChange={handleChange}
                  value={formValues.cpassword}
                />
              </div>
              <p className='red'>{formErrors.cpassword}</p>

              
              
              <button className='button'> Signup now</button>


            </div>
          </div>


        </form>
      </div>
    </>
  )
}
export default Firstpage;








































// import React, { Component }  from 'react';
// // import { NavLink } from 'react-router-dom'
// import './Login.css'
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// // import Home from './Home'
// // import axios from 'axios'

// function Firstpage() {
//   const navigate = useNavigate();

//   const initialValues = { Email: "", password: "", cpassword: "" }
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIssubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     console.log(formValues)
//     setIssubmit(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
  

//   }
//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       navigate('/Home')
//       // data()
//     }

//   }, [formErrors])


//   const validate = (values) => {
//     const errors = {};
//   //eslint-disable-next-line
//     const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


//     // email 
//     if (!values.Email) {
//       errors.Email = " Email is required"
//     }
//     else if (!regex.test(values.Email)) {
//       errors.Email = " Not a valid email "
//     }

//     // password

//     if (!values.password) {
//       errors.password = " Password  is required"
//     }
//     else if (values.password.length < 4) {
//       errors.password = " Must be more than 4 character"
//     }
//     else if (values.password.length >12) {
//       errors.password = " Not more  than 12  character"
//     }

// // confirm password

//   if (values.cpassword !== values.password) {
//       errors.cpassword = " Confirm Password not matched with password "
//     }
    

//     return errors;
//   }

//   localStorage.setItem('loginDetails', JSON.stringify(formValues));

//   return (
//     <>
//       <div className="container"> 
//         <form onSubmit={handleSubmit}>
//           <h1>
//         Ceate Account
//           </h1> <br></br>
//           <div className="uidivider">
//             <div className="uiform">

//               <div className="feild">
//                 <label > <h5>EMAIL</h5>  </label><br></br>
//                 <input className=' inp' type="text" name="Email" placeholder=' Enter Email  id ' onChange={handleChange}
//                   value={formValues.Email} />
//               </div>
//               <p className='red'>{formErrors.Email}</p>



//               <div className="feild">
//                 <label ><h5 className='downcc '>PASSWORDD</h5> </label><br></br>
//                 <input className='inp' type="password"
//                   name="password" placeholder='Enter Password'
//                   onChange={handleChange}
//                   value={formValues.password}
//                 />
//               </div>
//               <p className='red'>{formErrors.password}</p>

//               <div className="feild">
//                 <label > <h5 className='downcc '>CONFIRM PASSWORD</h5></label><br></br>
//                 <input className=' inp' type="password"
//                   name="cpassword" placeholder='Confirm password  '
//                   onChange={handleChange}
//                   value={formValues.cpassword}
//                 />
//               </div>
//               <p className='red'>{formErrors.cpassword}</p>

              
              
//               <button className='button'> Signup now</button>


//             </div>
//           </div>


//         </form>
//       </div>
//     </>
//   )
// }
// export default Firstpage;







































































































































































// second part



// import React from 'react';
// import './Login.css'
// import { useState, useEffect } from 'react'
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';







// function Login() {


//   const initialValues = { Email: "" }
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIssubmit] = useState(false);



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     console.log(formValues)
//     setIssubmit(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
  

//   }
//   useEffect(() => {
//     if (Object.keys(formErrors).length == 0 && isSubmit) {
//       Navigate('/home')
//     //   data()
//     }

//   }, [formErrors])



//   // validiation 

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


//     // email 
//     if (!values.Email) {
//       errors.Email = " Email is required"
//     }
//     else if (!regex.test(values.Email)) {
//       errors.Email = " Not a valid email "
//     }

//     return errors;
//   }

//   localStorage.setItem('loginDetails', JSON.stringify(formValues));


//   return (
//     <div className="App">
//       <form>
//         <div className='main'>
//           <div className='content '>
//             {/* <div className='username '>
//               <label>User  name:</label> <br />
//               <input type="text" className='inputs' />
//             </div> */}
//             <div className='username'>
//               <label>Email id</label> <br />
//               <input type="email" className='inputs'  name="Email" placeholder=' Enter Email  id ' onChange={handleChange}
//                   value={formValues.Email} />
//             </div>
//             <p className='red'>{formErrors.Email}</p>
//             {/* <div className='username' >
//               <label>Password</label> <br />
//               <input type="password" className='inputs' />
//             </div> */}
//           </div>
//           <button className="button">Create account </button>
//         </div>

//       </form>
//     </div>




//   );
// }

// export default Login;
