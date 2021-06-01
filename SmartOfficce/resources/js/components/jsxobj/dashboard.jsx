import React, { Component } from 'react'
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            sensors : 20,
            device : 0,
            rules : 0,
            areas: 0,
            notifications: [

            ]
         }
        }
    componentDidMount(){
        if (localStorage.getItem("username") === null) {
            window.location.replace('/')
        }
        var username = localStorage.getItem('username')
        axios.get("http://127.0.0.1:8000/GetControlDeviceNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({device: (data[0]["totalDevice"])});

            })
        axios.get("http://127.0.0.1:8000/GetSensorsNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({sensors: (data[0]["totalSensors"])});

            })
        axios.get("http://127.0.0.1:8000/GetRulesNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({rules: (data[0]["totalRules"])});

            })

        axios.get("http://127.0.0.1:8000/GetAreasNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({areas: (data[0]["totalAreas"])});

            })

        this.myInterval = setInterval(()=>{
            axios.get("http://127.0.0.1:8000/GetLogs",{  params:{
                userId: username,
                }})
                .then(response => {
                    var data= response.data;
                    this.setState({notifications: data});

                })
        } , 2000)
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid mt-4 pt-4">
                    <div className="row">
                        <div className="col-md-3">
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
                        <div className="col-md-3">
                            <div className="card w-100">
                                <div className="card-header">
                                <i className="fas fa-robot"style={{fontSize:"120%"}}></i> Smart Device
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">No Connected Device : {this.state.device}</h5>
                                    <p className="card-text"></p>
                                    <a href="/control" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card w-100">
                                <div className="card-header">
                                <i className="fas fa-list-alt"style={{fontSize:"120%"}}></i> Rules
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">No of Active rules : {this.state.rules}</h5>
                                    <p className="card-text"></p>
                                    <a href="/rules" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card w-100">
                                <div className="card-header">
                                <i className="fab fa-buromobelexperte"style={{fontSize:"120%"}}></i> Areas
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">No of Areas : {this.state.areas}</h5>
                                    <p className="card-text"></p>
                                    <a href="/myareas" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 activity-area">
                        <div className="col-md-12">
                            <h3 className="ml-2">Activity and Notification</h3>
                                <div className="notif-area">
                                <ul className="list-group">
                                    {this.state.notifications.map(notif => {
                                        if (notif.notifCode=="1") {
                                            return <li className="list-group-item list-group-item-success" key={notif.id}>{notif.message} <span className="float-right">{notif.notifDate}</span></li>
                                        }
                                        else if (notif.notifCode=="0") {
                                            return <li className="list-group-item list-group-item-danger" key={notif.id}>{notif.message} <span className="float-right">{notif.notifDate}</span></li>
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
