import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            hideDropdown1:0,
        }
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
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
                <div className="sidebar">
                    <h1>IoT Dashboard</h1>
                    <div className="pl-2 pr-2">
                        <hr style={{border:"1px solid #818181", marginLeft:"2px", marginRight:"2px"}}/>
                    </div>
                    <Link to="/dashboard"><i className="fas fa-chart-line"></i> Dashboard</Link>
                    <Link to="/control"><i className="fas fa-toggle-off"></i> All Device</Link>
                    <Link to="/addDevice"><i className="fas fa-plus-circle"></i> Add Devices</Link>
                    <button className="dropdown-btn" onClick={this.handleDropdownClick}><i className="fab fa-buromobelexperte"></i> Areas
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-container">
                        <Link to="/myareas">&nbsp; <span className="dropdown-sublink"> My Areas </span></Link>
                        <Link to="/manageareas">&nbsp; <span className="dropdown-sublink"> Manage Areas </span></Link>

                    </div>
                    <Link to="/rules"><i className="fas fa-list-alt"></i> Rules</Link>

                    {/* <Link to="/removeDevice"><i className="fas fa-trash-alt"></i> Remove Device</Link> */}
                    {/* <Link to="/configure"><i className="fas fa-cogs"></i> Configure Device</Link> */}
                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;
