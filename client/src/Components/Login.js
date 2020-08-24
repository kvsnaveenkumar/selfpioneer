import React, { Fragment } from "react";
import Register from "./Register";
const LoginPage = () => {
    return (
        <Fragment>
            <h1 style={{ textAlign: "center", color: 'red' }} className="text-center mt-5">Welcome to Self Pioneer's</h1>
            <form className='d-flex mt-5'>
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input class='form-control' type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input class='form-control' type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" class='btn btn-success' style={{ float: "right", margin: 15, marginRight: 0 }}>Login</button>
                    <Register />

                </div>
            </form>
        </Fragment>
    )
}
export default LoginPage;