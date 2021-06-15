import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            hideDropdown1:0,
            username:"",
            profilepic:"",
            sb1: "#0f8d83",
            sb2: "#818181",
            sb3: "#818181",
            sb4: "#818181",
            sb5: "#818181",
            sb6: "#818181",
            sb7: "#818181",
            sb8: "#818181"
        }
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
        this.changeSb1 = this.changeSb1.bind(this)
        this.changeSb2 = this.changeSb2.bind(this)
        this.changeSb3 = this.changeSb3.bind(this)
        this.changeSb5 = this.changeSb5.bind(this)
        this.changeSb6 = this.changeSb6.bind(this)
        this.changeSb7 = this.changeSb7.bind(this)
        this.changeSb8 = this.changeSb8.bind(this)
    }
    componentDidMount(){
        this._isMounted = true;
        var username = window.atob(localStorage.getItem('username'))
         this.setState({username: username})
        var currUrl = window.location.pathname;
        if(currUrl == "/control") this.changeSb2();
        else if(currUrl == "/addDevice") this.changeSb3();
        else if(currUrl == "/myareas") this.changeSb5();
        else if(currUrl == "/manageareas") this.changeSb6();
        else if(currUrl == "/rules") this.changeSb7();
        else if(currUrl == "/user") this.changeSb8();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    handleLogout(){
        alert("logout")
        localStorage.removeItem("username")
    }
    handleDropdownClick(){
       var active = "#0f8d83";var inactive = "#818181";
        if(this.state.hideDropdown1 == 0){
            document.querySelector('.dropdown-container').style.display = 'block';
            this.setState({hideDropdown1:1})


        }
        else if(this.state.hideDropdown1 == 1){
            document.querySelector('.dropdown-container').style.display = 'none';
            this.setState({hideDropdown1:0})

        }
    }

    changeSb1(){var active = "#0f8d83";var inactive = "#818181";this.setState({sb1:active});this.setState({sb2:inactive});this.setState({sb3:inactive});this.setState({sb4:inactive});this.setState({sb5:inactive});this.setState({sb6:inactive});this.setState({sb7:inactive});this.setState({sb8:inactive});}
    changeSb2(){var active = "#0f8d83";var inactive = "#818181";this.setState({sb1:inactive});this.setState({sb2:active});this.setState({sb3:inactive});this.setState({sb4:inactive});this.setState({sb5:inactive});this.setState({sb6:inactive});this.setState({sb7:inactive});this.setState({sb8:inactive});}
    changeSb3(){var active = "#0f8d83";var inactive = "#818181";this.setState({sb1:inactive});this.setState({sb2:inactive});this.setState({sb3:active});this.setState({sb4:inactive});this.setState({sb5:inactive});this.setState({sb6:inactive});this.setState({sb7:inactive});this.setState({sb8:inactive});}
    changeSb5(){var active = "#0f8d83";var inactive = "#818181";this.setState({sb1:inactive});this.setState({sb2:inactive});this.setState({sb3:inactive});this.setState({sb4:active});this.setState({sb5:active});this.setState({sb6:inactive});this.setState({sb7:inactive});this.setState({sb8:inactive});}
    changeSb6(){var active = "#0f8d83";var inactive = "#818181";this.setState({sb1:inactive});this.setState({sb2:inactive});this.setState({sb3:inactive});this.setState({sb4:active});this.setState({sb5:inactive});this.setState({sb6:active});this.setState({sb7:inactive});this.setState({sb8:inactive});}
    changeSb7(){var active = "#0f8d83";var inactive = "#818181";this.setState({sb1:inactive});this.setState({sb2:inactive});this.setState({sb3:inactive});this.setState({sb4:inactive});this.setState({sb5:inactive});this.setState({sb6:inactive});this.setState({sb7:active});this.setState({sb8:inactive});}
    changeSb8(){var active = "#0f8d83";var inactive = "#818181";this.setState({sb1:inactive});this.setState({sb2:inactive});this.setState({sb3:inactive});this.setState({sb4:inactive});this.setState({sb5:inactive});this.setState({sb6:inactive});this.setState({sb7:inactive});this.setState({sb8:active});}

    render() {
        return (
            <React.Fragment>
                <div className="sidebar text-center">
                    <h1 className="text-center josefin-font">IoT</h1>

                    <h5 className="text-center josefin-font" style={{color:"#0f8d83", fontSize:"medium"}}><i className="fas fa-user" style={{fontSize:"20px",marginBottom:"30px"}}></i> {this.state.username}</h5>
                    {/* <div className="pl-2 pr-2">
                        <hr style={{ marginLeft:"2px", marginRight:"2px"}}/>
                    </div> */}
                    <Link to="/dashboard"  onClick={this.changeSb1}><i className="fas fa-chart-line" style={{fontSize:"35px",marginBottom:"30px",color:this.state.sb1}} ></i></Link>
                    <Link to="/control" onClick={this.changeSb2}><i className="fas fa-toggle-off" style={{fontSize:"35px",marginBottom:"30px", color:this.state.sb2}} ></i></Link>
                    <Link to="/addDevice" onClick={this.changeSb3}><i className="fas fa-plus-circle" style={{fontSize:"35px",marginBottom:"30px", color:this.state.sb3}}></i></Link>
                    <button className="dropdown-btn"><i className="fas fa-map-marked-alt" style={{fontSize:"35px",marginBottom:"30px" ,color:this.state.sb4}}  onClick={this.handleDropdownClick}></i>
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-container">
                        <Link to="/myareas" onClick={this.changeSb5}>&nbsp;&nbsp; <span className="dropdown-sublink"  style={{color:this.state.sb5}}> My Areas </span></Link>
                        <Link to="/manageareas" onClick={this.changeSb6}>&nbsp;&nbsp; <span className="dropdown-sublink" style={{color:this.state.sb6}}> Manage Areas </span></Link>

                    </div>
                    <Link to="/rules"  onClick={this.changeSb7}><i className="fas fa-list-alt" style={{fontSize:"35px",marginBottom:"30px", color:this.state.sb7}}></i> </Link>
                    <Link to="/user" onClick={this.changeSb8}><i className="fas fa-user-cog" style={{fontSize:"35px",marginBottom:"30px", color:this.state.sb8}}></i> </Link>

                    <div className="">
                        <div className="logout">
                            <a onClick={this.handleLogout} href="/"><i className="fas fa-power-off" style={{fontSize:"35px",marginBottom:"30px", marginTop:"100px"}}></i> </a>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;
