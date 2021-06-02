import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            hideDropdown1:0,
            username:"",
            profilepic:"",
        }
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
        this.changePicture = this.changePicture.bind(this);
    }
    componentDidMount(){
        this._isMounted = true;
        var username = localStorage.getItem('username');
        this.setState({username: username})

        axios.post('/api/GetUserProfilePic', {
            username: username
        })
        .then((response) => {
            if(response.data.error){

                alert(response.data.error);
                return;
            }
            else{

                this.setState({profilepic: response.data})
                console.log(this.state.profilepic)
            }
        },(error)=> {
            console.log(error);
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    changePicture(){
        alert("change picture")
    }
    handleLogout(){
        alert("logout")
        localStorage.removeItem("username")
    }
    handleDropdownClick(){
        if(this.state.hideDropdown1 == 0){
            document.querySelector('.dropdown-container').style.display = 'block';
            this.setState({hideDropdown1:1})
        }
        else if(this.state.hideDropdown1 == 1){
            document.querySelector('.dropdown-container').style.display = 'none';
            this.setState({hideDropdown1:0})
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="sidebar text-center">
                    <h1 className="text-center">IoT</h1>
                    <div className="text-center pt-2">
                        <img src={this.state.profilepic} alt="default photo"  style={{borderRadius:"50%",border:"4px solid #0f8d83 ", width:"80px",height:"80px", objectFit:"fill"}} onClick={this.changePicture} />
                    </div>
                    <h5 className="text-center" style={{color:"#0f8d83"}}>{this.state.username}</h5>
                    <div className="pl-2 pr-2">
                        <hr style={{ marginLeft:"2px", marginRight:"2px"}}/>
                    </div>
                    <Link to="/dashboard"><i className="fas fa-chart-line" style={{fontSize:"35px",marginBottom:"30px"}}></i></Link>
                    <Link to="/control"><i className="fas fa-toggle-off" style={{fontSize:"35px",marginBottom:"30px"}}></i></Link>
                    <Link to="/addDevice"><i className="fas fa-plus-circle" style={{fontSize:"35px",marginBottom:"30px"}}></i></Link>
                    <button className="dropdown-btn" onClick={this.handleDropdownClick}><i className="fab fa-buromobelexperte" style={{fontSize:"35px",marginBottom:"30px"}}></i>
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-container">
                        <Link to="/myareas">&nbsp;&nbsp; <span className="dropdown-sublink"> My Areas </span></Link>
                        <Link to="/manageareas">&nbsp;&nbsp; <span className="dropdown-sublink"> Manage Areas </span></Link>

                    </div>
                    <Link to="/rules"><i className="fas fa-list-alt" style={{fontSize:"35px",marginBottom:"30px"}}></i> </Link>
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
