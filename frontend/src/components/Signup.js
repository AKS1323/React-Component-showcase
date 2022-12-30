import { Formik } from "formik";
import React from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const userSubmit = async(formdata, { setSubmitting }) => {
    console.log(formdata);

      setSubmitting(true);
      const res = await fetch('http://localhost:5000/user/add',{
        method : 'POST',
        body: JSON.stringify(formdata),
        headers : { 'Content-type' : 'application/json'}
      
      });
   
      console.log(res.status);
      setSubmitting(false);
      if (res.status===200) {
        Swal.fire({
          icon: "success",
          title: "Sucess",
          text: 'You have registered'
        })
        navigate('/login');
        
      }
  }

  return (
    <div style={{backgroundColor : '#00800076', minHeight: '100vh'}}>
    <div className="col-md-3 mx-auto pt-5 main">
      <div className="card">
        <div className="card-body">
          <img class="logo" src="https://media.istockphoto.com/id/1341681278/vector/two-hands-the-concept-of-protecting-anything-vector-illustration-interconnection.jpg?s=612x612&w=0&k=20&c=QZmkMdTLOVyzaPi-SgvHy0KNa8cC47wl0b3mfPyxsM0=" alt="" / >
          <p className="text-center h4">Sign Up</p>
          <hr />
          <Formik initialValues={{ name:"", email:'', password:'', age:""}} onSubmit={userSubmit}>
                   {({ values, handleSubmit, handleChange, isSubmitting })=> (

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input className="form-control mb-3" type="text" value={values.name} onChange={handleChange} name='name' />
            <label>Email Address</label>
            <input className="form-control mb-3" type="text" value={values.email} onChange={handleChange} name='email' />
            <label>Password</label>
            <input className="form-control mb-3" type="password" value={values.password} onChange={handleChange} name='password'/>
            <label>Age</label>
            <input className="form-control mb-3" type="number" value={values.age} onChange={handleChange} name='age' />
            <button disabled={isSubmitting} type="submit" className="btn btn-primary">
              {
                isSubmitting ? 
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                :
                'Submit'
              }
            </button>
          </form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  </div>

   
  )
}

export default Signup