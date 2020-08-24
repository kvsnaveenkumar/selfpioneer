import React, { Component } from 'react';

class AllowOnlyNumber extends Component {
    constructor(props) {
        super(props);

        this.state = {
            telephone: ''
        };
        this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);
    }

    onHandleTelephoneChange = e => {
        let telephone = e.target.value;

        if (!Number(telephone)) {
            return;
        }
        this.setState({ [e.target.name]: telephone });
    };

    render() {
        return (
            <>
                <input
                    type="tel" class='form-control' name="telephone" placeholder="Enter mobile Number" style={{ marginBottom: 5 }}
                    value={this.state.telephone}
                    onChange={this.onHandleTelephoneChange} required
                />
            </>
        );
    }
}

export default AllowOnlyNumber;