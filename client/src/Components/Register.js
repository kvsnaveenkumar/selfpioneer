import React, { Fragment } from 'react';
import AllowOnlyNumber from './Telephone';

const Register = () => {

    return <Fragment>
        <button type="button" class='btn btn-success'
            style={{ float: "right", margin: 15, marginRight: 0 }}
            data-toggle='modal'
            data-target='#RegisterModel'>
            Register
        </button>

        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Open modal
</button> */}

        <div class="modal" id="RegisterModel">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title" style={{ color: "green" }}>Register</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <input class='form-control' type="text" placeholder="Enter Username" name="username" style={{ marginBottom: 5 }} required />
                        <input class='form-control' type="text" placeholder="Enter first Name" name="firstName" style={{ marginBottom: 5 }} required />
                        <input class='form-control' type="text" placeholder="Enter Last Name" name="lastname" style={{ marginBottom: 5 }} required />
                        <input class='form-control' type="password" placeholder="Enter password" name="password" style={{ marginBottom: 5 }} required />
                        <input class='form-control' type="password" placeholder="Enter your Confirm Password" style={{ marginBottom: 5 }} name="confirmPassword" required />
                        <input class='form-control' type="text" placeholder="Enter Email id" name="mailId" style={{ marginBottom: 5 }} required />
                        <AllowOnlyNumber/>
                        {/* <input class='form-control' type="number" placeholder="Enter mobile Number" name="mobileNumber" style={{ marginBottom: 5 }} onKeyPress='return isNumberKeyEvent(event)' required /> */}
                    </div>

                    <div class="modal-footer">
                        <button type='button' class='btn btn-success' onClick=''>Register</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </Fragment>
}
export default Register;