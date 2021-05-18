import React, { Component } from 'react'
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            sensors : 20,
            device : 20,
            notifications: [
                {
                    id:1,
                    notifCode:0, // 0 means error
                    message:'Sensor Value of SMSE0001 drop below the minimum required'
                },
                {
                    id:2,
                    notifCode:1, // 1 means action
                    message:'SMDE0001 was turned on'
                },
                {
                    id:3,
                    notifCode:1,
                    message:'Sensor Value of SMSE0001 is now stable'
                },
                {
                    id:4,
                    notifCode:1,
                    message:'SMDE0001 was turned off'
                }
            ]
         }
        }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid mt-4 pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card w-100">
                                <div className="card-header">
                                <i className="fas fa-tachometer-alt" style={{fontSize:"120%"}}></i> Sensors
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">No Connected Sensors : {this.state.sensors}</h5>
                                    <p className="card-text"></p>
                                    <a href="/control" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card w-100">
                                <div className="card-header">
                                <i className="fas fa-robot"style={{fontSize:"120%"}}></i> Smart Device
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">No Connected Device : {this.state.sensors}</h5>
                                    <p className="card-text"></p>
                                    <a href="/control" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 activity-area">
                        <div className="col-md-12">
                        <h1 className="ml-2">Activity and Notification</h1>
                            <ul className="list-group">
                                {this.state.notifications.map(notif => {
                                    if (notif.notifCode=="1") {
                                        return <li className="list-group-item list-group-item-success" key={notif.id}>{notif.message}</li>
                                    }
                                    else if (notif.notifCode=="0") {
                                        return <li className="list-group-item list-group-item-danger" key={notif.id}>{notif.message}</li>
                                    }
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
