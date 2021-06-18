import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            login:{
                 username:"",
                 password:""
            },
            registerNewUser: {
                username:"",
                email:"",
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
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.usernameLogin= this.usernameLogin.bind(this)
        this.passwordLogin = this.passwordLogin.bind(this)
        this.emailChange = this.emailChange.bind(this)
    }

    handleSubmit(){
        alert("submitted")
    }

    handleLogin(){

        axios.post('/api/UserLogin', {
            username: this.state.login.username,
            password: this.state.login.password
        })
        .then((response) => {
            if(response.data.error){

                alert(response.data.error);
                return;
            }
            else{
                console.log(response.data['token'])
                localStorage.setItem('username', window.btoa(response.data['user']['name']))
                localStorage.setItem('token', window.btoa(response.data['token']))
                window.location.replace('/dashboard')
            }
        },(error)=> {
            console.log(error);
        });

    }
    componentDidMount(){
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    handleSignupClicked(){
        document.querySelector('.bg-modal8').style.display = 'flex';
    }
    handleCloseModalButton(){
        document.querySelector('.bg-modal8').style.display = 'none';
    }
    usernameLogin(event){var user = this.state.login;var username = event.target.value;user.username = username;this.setState({login: user});}
    passwordLogin(event){var user = this.state.login;var password = event.target.value;user.password = password;this.setState({login: user});}
    usernameChange(event){var user = this.state.registerNewUser;var username = event.target.value;user.username = username;this.setState({registerNewUser: user})}
    passwordChange(event){var user = this.state.registerNewUser;var password = event.target.value;user.password = password;this.setState({registerNewUser: user}); }
    emailChange(event){var user = this.state.registerNewUser;var email = event.target.value;user.email = email;this.setState({registerNewUser: user}); }

    retypeChange(){var user = this.state.registerNewUser;var retype = event.target.value;user.retype = retype;this.setState({registerNewUser: user}); }
    retypeCheck(){
        if(this.state.registerNewUser.password != this.state.registerNewUser.retype){
            alert("Passwords Didn't Macth")
        }
        else{
            return;
        }
    }
    async saveNewUser(){
        this.retypeCheck();
        axios.post('/api/UserRegister', {
            username: this.state.registerNewUser.username,
            email: this.state.registerNewUser.email,
            password: this.state.registerNewUser.password
        })
        .then((response) => {
            console.log(response);
            location.reload()
        },(error)=> {
            console.log(error);
        });



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
                            <form onSubmit= {this.handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" name="username" onChange={this.usernameLogin} defaultValue={this.state.login.username} required/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" name="password" onChange={this.passwordLogin} defaultValue={this.state.login.password} required/>
                                </div>

                            </form>
                            <div className="form-group row">
                                    <div className="col-md-6">
                                        <button className="btn float-right login_btn w-100" onClick={this.handleSignupClicked}>Sign Up</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn float-right login_btn w-100" onClick={this.handleLogin}>Login</button>
                                    </div>
                                </div>
                            {/* <div className="form-group row">
                                <div className="col-md-6">
                                    <button className="btn float-right login_btn w-100" onClick={this.handleSignupClicked}>Sign Up</button>
                                </div>
                                <div className="col-md-6">
                                    <button  className="btn float-right login_btn w-100" onClick={this.handleLogin} >Login</button>
                                </div>
                            </div> */}

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
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="email" name="email" onChange={this.emailChange} defaultValue={this.state.registerNewUser.email} required/>

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
