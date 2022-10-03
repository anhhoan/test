import React, { Component } from "react";
import * as Validate from '../validate/validate'
export default class ComponentSignUp extends Component {
    state = {
        username: '',
        password: '',
        validate: '',
    }
    handleSignUp() {
        this.state.validate === true && this.state.password.length > 6
            ? this.props.signUp({ username: this.state.username, password: this.state.password })
            : alert('Xin mời nhập đúng định dạng đăng kí')
    }
    handleValidate(e) {
        this.setState({ username: e.target.value })
        this.setState({ validate: Validate.ValidateEmail(e) })
    }

    render() {
        console.log(this.state.password.length, 'passs');
        return (
            <div>
                <div>
                    TRANG ĐĂNG KÍ
                    <br></br>
                    <input placeholder="username" onChange={(e) => this.handleValidate(e)} ></input>
                    <p style={{ color: 'red' }}>{this.state.validate === true || this.state.username.length === 0 ? "" : "ten dang nhap phai co @gmail"}</p>
                    <input type='password' placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} ></input>
                    <p style={{ color: 'red' }}>{this.state.password.length > 6 || this.state.password.length === 0 ? '' : 'password >6 ki tu'}</p>
                    <button onClick={() => this.handleSignUp()}>ĐĂNG KÍ</button>
                    <br></br>
                </div>
            </div>
        )
    }
}