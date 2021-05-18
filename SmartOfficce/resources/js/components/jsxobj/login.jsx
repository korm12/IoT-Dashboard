import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            registerNewUser: {
                username:"",
                password:"",
                retype:""
            }
        }
        this.handleSignupClicked = this.handleSignupClicked.bind(this)
        this.handleCloseModalButton = this.handleCloseModalButton.bind(this)
        this.usernameChange = this.usernameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.saveNewUser = this.saveNewUser.bind(this)
        this.retypeChange = this.retypeChange.bind(this)
        this.retypeCheck = this.retypeCheck.bind(this)
    }

    handleSignupClicked(){
        document.querySelector('.bg-modal8').style.display = 'flex';
    }
    handleCloseModalButton(){
        document.querySelector('.bg-modal8').style.display = 'none';
    }
    usernameChange(event)
    {
        var user = this.state.registerNewUser;
        var username = event.target.value;
        user.username = username;
        this.setState({registerNewUser: user})
    }
    passwordChange(event){
        var user = this.state.registerNewUser
        var password = event.target.value
        user.password = password
        this.setState({registerNewUser: user})
    }
    retypeChange(){
        var user = this.state.registerNewUser
        var retype = event.target.value
        user.retype = retype
        this.setState({registerNewUser: user})
    }
    retypeCheck(){
        if(this.state.registerNewUser.password != this.state.registerNewUser.retype){
            alert("Passwords Didn't Macth")
        }
        else{
            return;
        }
    }
    saveNewUser(){
        this.retypeCheck()
        console.log(this.state.registerNewUser)
    }

    render() {
        return (
            <React.Fragment>
                 <div className="d-flex justify-content-center login-container h-100">
                    <video className="back-vid" src="/pictures/backvid.webm" muted loop autoPlay></video>
                    <div className="card card-login">
                        {/* <img className="logo" src="{{ asset('pictures/pplogo.PNG') }}" alt="logo" style="width: 30%; height: 30%"/> */}

                        <div className="card-header">
                            <h3 className="text-center">Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" name="username" required/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" name="password" required/>
                                </div>

                            </form>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <button className="btn float-right login_btn w-100" onClick={this.handleSignupClicked}>Sign Up</button>
                                </div>
                                <div className="col-md-6">
                                    <a href="/dashboard" className="btn float-right login_btn w-100" >Login</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-modal8">
                    <div className="modal-content sign-up">
                        <div className="shad pt-4 pb-4 pl-4 pr-4 ">
                            <div className="text-right w-100">
                                <button onClick={this.handleCloseModalButton} className="btn btn-sm btn-outline-danger mt-2 sucb">X</button>
                            </div>
                        <div className="row ">
                            <div className="col-md-12">
                            <form>
                                <h3 className="text-center">Sign Up</h3>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" name="username" onChange={this.usernameChange} defaultValue={this.state.registerNewUser.username} required/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" name="password" onChange={this.passwordChange} defaultValue={this.state.registerNewUser.password} required/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Re-type password" name="password" onChange={this.retypeChange} onBlur={this.retypeCheck} defaultValue={this.state.registerNewUser.retype} required/>
                                </div>


                            </form>
                            <div className="form-group row">
                                    <div className="col-sm-12 w-100">
                                        <button onClick={this.saveNewUser} className="btn btn-primary login_btn w-100">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Login;
