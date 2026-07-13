import React, { Component } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class LoginControl extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {

        if (this.state.isLoggedIn) {
            return (
                <div>

                    <button onClick={this.handleLogout}>
                        Logout
                    </button>

                    <hr />

                    <UserPage />

                </div>
            );
        }

        return (
            <div>

                <button onClick={this.handleLogin}>
                    Login
                </button>

                <hr />

                <GuestPage />

            </div>
        );
    }
}

export default LoginControl;