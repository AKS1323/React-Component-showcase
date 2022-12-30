import { Formik } from "formik"
import './login.css';
import React from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const userSubmit = async (formdata) => {

        console.log(formdata);
        const res = await fetch("http://localhost:5000/user/authenticate", {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: { "Content-Type": "application/json" },
        });
        if (res.status === 200) {
            Swal.fire({
                icon: "sucess",
                title: "Welldone",
                text: 'Logined Successfuly'
            })
            const data = await res.json();
            sessionStorage.setItem('user', JSON.stringify(data));
            navigate('/add');

        } else if (res.status === 401) {
            Swal.fire({
                icon: "error",
                title: "OOps",
                text: 'Logined failed'
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "OOps",
                text: 'some error occured'
            })
        }
    }

    return (
        <div style={{ backgroundColor: '#00800076', minHeight: '100vh' }} >
            <div className="col-md-3 col-sm-4 mx-auto pt-5">
                <div className="card">
                    <div className="card-body">
                        <img class="logo" src="https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=752x" alt="" />
                        <p className="text-center h4">Login Form</p>
                        <hr />
                        <Formik initialValues={{ email: '', password: '' }} onSubmit={userSubmit}>
                            {({ values, handleSubmit, handleChange }) => (

                                <form onSubmit={handleSubmit}>

                                    <label>Email Address</label>
                                    <input className="form-control mb-3" type="text" value={values.email} onChange={handleChange} name='email' />
                                    <label>Password</label>
                                    <input className="form-control mb-3" type="password" value={values.password} onChange={handleChange} name='password' />

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login