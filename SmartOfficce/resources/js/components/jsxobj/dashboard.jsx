import React, { Component } from 'react'
import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export,
    Legend
  } from 'devextreme-react/pie-chart';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            sensors : 0,
            device : 0,
            rules : 0,
            areas: 0,
            notifications: [

            ],
            areas2 : [
            ],
            areas3 : [
            ],
            unallocatedsen:0,
            uanllocateddev:0

         }
         this.clearNotification = this.clearNotification.bind(this)
        }
    clearNotification(){
        var r = confirm("confirm clear notification ? ");
        if (r == true) {
            axios.post("/api/ClearLogs", {})
        } else {

        }
    }
    componentDidMount(){
        let data_route = process.env.MIX_DATA_ROUTES;

        // console.log(data_route)
        this._isMounted = true;
        if (localStorage.getItem("username") === null) {
            window.location.replace('/')
        }
        var username = localStorage.getItem('username')
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetControlDeviceNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({device: (data[0]["totalDevice"])});

            })
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetSensorsNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({sensors: (data[0]["totalSensors"])});

            })
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetRulesNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({rules: (data[0]["totalRules"])});

            })

        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetAreasNum",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({areas: (data[0]["totalAreas"])});

            })

        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetSensorPerArea",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({areas2: (data)});

            })
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetDevicePerArea",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({areas3: (data)});

            })
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetUnallocatedSen",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({unallocatedsen: (data[0]['unallocatedsen'])});

            })
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetUnallocatedDev",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;
                this.setState({unallocateddev: (data[0]['unallocateddev'])});

            })
        this.myInterval = setInterval(()=>{
            axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetLogs",{  params:{
                userId: username,
                }})
                .then(response => {
                    var data= response.data;
                    this.setState({notifications: data})
                })
        } , 2000)
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid mt-4 pt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card w-100"style={{borderRadius:"15px"}}>
                                <div className="card-header josefin-font">
                                <i className="fas fa-tachometer-alt" style={{fontSize:"120%"}}></i> Sensors
                                </div>
                                <div className="card-body josefin-font">
                                    <p className="card-title">No Sensors : {this.state.sensors}</p>
                                    <p className="card-text"></p>
                                    <a href="/control" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card w-100" style={{borderRadius:"15px"}}>
                                <div className="card-header josefin-font">
                                <i className="fas fa-robot"style={{fontSize:"120%"}}></i> Smart Device
                                </div>
                                <div className="card-body josefin-font">
                                    <p className="card-title">No Device : {this.state.device}</p>
                                    <p className="card-text"></p>
                                    <a href="/control" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card w-100" style={{borderRadius:"15px"}}>
                                <div className="card-header josefin-font">
                                <i className="fas fa-list-alt"style={{fontSize:"120%"}}></i> Rules
                                </div>
                                <div className="card-body josefin-font">
                                    <p className="card-title">No of Active rules : {this.state.rules}</p>
                                    <p className="card-text"></p>
                                    <a href="/rules" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card w-100" style={{borderRadius:"15px"}}>
                                <div className="card-header josefin-font">
                                <i className="fab fa-buromobelexperte"style={{fontSize:"120%"}}></i> Areas
                                </div>
                                <div className="card-body josefin-font">
                                    <p className="card-title">No of Areas : {this.state.areas}</p>
                                    <p className="card-text"></p>
                                    <a href="/myareas" className="btn btn-primary w-100">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 activity-area">
                        <div className="col-md-4">
                            <div className="row ">
                                <div className="col-md-6">
                                    <h5 className="ml-2 pt-2 pb-2 josefin-font" style={{color:"white"}}>Activity and Notification</h5>
                                </div>
                                <div className="col-md-6 text-right pt-4">
                                    <button className="josefin-font custom-button mt-2" onClick={this.clearNotification}> Clear</button>
                                </div>
                            </div>
                                <div className="notif-area" style={{borderRadius:"20px"}}>
                                <ul className="list-group">
                                    {this.state.notifications.map(notif => {
                                        if (notif.notifCode=="1") {
                                            return <li className="list-group-item list-group-item-success josefin-font" key={notif.id}>{notif.message} <span className="float-right" style={{color:"#0f8d83"}}>{notif.notifDate}</span></li>
                                        }
                                        else if (notif.notifCode=="0") {
                                            return <li className="list-group-item list-group-item-danger josefin-font" key={notif.id}>{notif.message} <span className="float-right" style={{color:"#0f8d83"}}>{notif.notifDate}</span></li>
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pl-1 pr-1 pt-1 pb-1">
                                <h5 className="josefin-font text-light">Sensor Allocation</h5>
                                <PieChart
                                    className="pie"
                                    palette={'Soft Pastel'}
                                    sizeGroup="piesGroup"
                                    dataSource={this.state.areas2}
                                    >
                                    <Series argumentField="areaName" valueField="total">
                                        <Label visible={true} />
                                    </Series>
                                    <Size width={"100%"} />
                                    <Legend
                                        verticalAlignment="bottom"
                                        horizontalAlignment="center"
                                        itemTextPosition="right"
                                        rowCount={2}
                                    />
                                </PieChart>

                                <p className="josefin-font text-light">Unallocated : {this.state.unallocatedsen}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pl-1 pr-1 pt-1 pb-1">
                                <h5 className="josefin-font text-light">Device Allocation</h5>
                                <PieChart
                                    className="pie"
                                    palette={'Office'}
                                    sizeGroup="piesGroup"
                                    dataSource={this.state.areas3}
                                    >
                                    <Series argumentField="areaName" valueField="total">
                                        <Label visible={true} />
                                    </Series>
                                    <Size width={"100%"} />
                                    <Legend
                                        verticalAlignment="bottom"
                                        horizontalAlignment="center"
                                        itemTextPosition="right"
                                        rowCount={2}
                                    />
                                </PieChart>
                                <p className="josefin-font text-light">Unallocated : {this.state.unallocateddev}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
