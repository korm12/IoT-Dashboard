import React, { Component } from 'react'
import { CircularGauge, Scale, Label, RangeContainer, Range, Size, Geometry } from 'devextreme-react/circular-gauge';
import {Tab, Tabs} from 'react-mdl';
class Control extends Component {

      constructor(props){
        super(props)
        this.state = {
            activeTab: 0,
            newDev:{
                id: "",
                deviceName: "",
                status: '',
                description:"",
                src: "/pictures/on.png "
            },
            newSen:{

                id: "",
                deviceName: "",
                description:""

            }
          } // end of state

          this.toggleTab = this.toggleTab.bind(this);
          this.handleSaveDeviceButton = this.handleSaveDeviceButton.bind(this)
          this.handleSaveSensorButton = this.handleSaveSensorButton.bind(this)
          this.handleDevName = this.handleDevName.bind(this)
          this.handleDevId = this.handleDevId.bind(this)
          this.handleDevdes = this.handleDevdes.bind(this)

          this.handleSenName = this.handleSenName.bind(this)
          this.handleSenId = this.handleSenId.bind(this)
          this.handleSendes = this.handleSendes.bind(this)

          this.handleStatChange = this.handleStatChange.bind(this)


        }
        // device form
        handleDevName(event){ var newDev = this.state.newDev; var modifiedDevname = event.target.value; newDev.deviceName = modifiedDevname;this.setState({newDev: newDev})}
        handleDevId(event){var newDev = this.state.newDev;var devID = event.target.value;newDev.id = devID;this.setState({newDev: newDev})}
        handleDevdes(event){var newDev = this.state.newDev;var data = event.target.value;newDev.description = data;this.setState({newDev: newDev});}
        handleStatChange(event){ var newDev = this.state.newDev;var data = event.target.value ;newDev.status = data;this.setState({newDev: newDev}); }

        //sensor form
        handleSenName(event){ var newSen = this.state.newSen; var data = event.target.value; newSen.deviceName = data;this.setState({newSen: newSen});}
        handleSenId(event){var newSen = this.state.newSen;var data = event.target.value;newSen.id = data;this.setState({newSen: newSen})}
        handleSendes(event){var newSen = this.state.newSen;var data = event.target.value;newSen.description = data;this.setState({newSen: newSen});}

        handleSaveDeviceButton(){
            var username = window.atob(localStorage.getItem('username'))
            axios.post('/api/AddNewDevice', {
                id: this.state.newDev.id,
                deviceName: this.state.newDev.deviceName,
                status: this.state.newDev.status,
                description: this.state.newDev.description,
                src: this.state.newDev.src,
                userId: username
            })
            alert("Device added")
            location.reload();
        }
        componentDidMount(){
            this._isMounted = true;
            if (localStorage.getItem("username") === null) {
                window.location.replace('/')
            }
        }
        handleSaveSensorButton(){
            var username = window.atob(localStorage.getItem('username'))
            console.log(this.state.newSen)
            axios.post('/api/AddNewSensor', {
                id: this.state.newSen.id,
                deviceName: this.state.newSen.deviceName,
                value: 0,
                description: this.state.newSen.description,
                userId: username
            })

            alert("Sensor added")
         location.reload();
        }
        toggleTab(){

            if(this.state.activeTab === 0){
                return(
                    //  {/* for control tab  */}
                    <div className="container shad pt-4 pb-4 pl-4 pr-4 mt-4 bg-white josefin-font">
                     <div className="row mt-2">
                         <div className="col-md-12">
                         <form>
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label" htmlFor="deviceName">Device Name</label>
                                <div className="col-sm-10">
                                    <input type="deviceName" className="form-control" id="deviceName" onChange={this.handleDevName} defaultValue={this.state.newDev.deviceName} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="deviceId" className="col-sm-2 col-form-label">Device Id</label>
                                <div className="col-sm-10">
                                    <input type="deviceId" className="form-control" id="deviceId" onChange={this.handleDevId} defaultValue={this.state.newDev.id} required/>
                                </div>
                            </div>
                            <fieldset className="form-group row">
                                    <legend className="col-form-label col-sm-2 float-sm-left pt-0">Default Status</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="1" checked={this.state.newDev.status === "1"} onChange={this.handleStatChange}/>
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                            On
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="0" checked={this.state.newDev.status === "0"} onChange={this.handleStatChange}/>
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                            Off
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            <div className="form-group row">
                                <label htmlFor="deviceId" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                <textarea className="form-control " id="deviceId" placeholder="Add description ex. Located at Office A" onChange={this.handleDevdes} defaultValue={this.state.newDev.description} required></textarea>

                                </div>
                            </div>
                        </form>
                        <button onClick={this.handleSaveDeviceButton}   className="btn btn-primary">Save</button>
                        </div>
                     </div>
                    </div>

                )
            }
            else if(this.state.activeTab === 1){
                return(
                    // {/* for sensor tab  */}

                    <div className="container shad pt-4 pb-4 pl-4 pr-4 mt-4 bg-white josefin-font">
                     <div className="row mt-2">
                         <div className="col-md-12">
                         <form>
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label" htmlFor="deviceName" >Sensor Name</label>
                                <div className="col-sm-10">
                                    <input type="deviceName" className="form-control" id="deviceName" onChange={this.handleSenName} defaultValue={this.state.newSen.deviceName} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="deviceId" className="col-sm-2 col-form-label">Sensor Id</label>
                                <div className="col-sm-10">
                                    <input type="deviceId" className="form-control" id="deviceId"   onChange={this.handleSenId} defaultValue={this.state.newSen.id} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="deviceId" className="col-sm-2 col-form-label" >Description</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control " id="deviceId" placeholder="Add description ex. Located at Office A" onChange={this.handleSendes} defaultValue={this.state.newSen.description} required></textarea>

                                </div>
                            </div>




                        </form>
                        <button onClick={this.handleSaveSensorButton} className="btn btn-primary">Save</button>
                        </div>
                     </div>
                    </div>

                )
            }
        }
        componentWillUnmount() {
            this._isMounted = false;
        }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid mt-4 ">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab><span style={{color:"white"}}>Add Device</span> </Tab>
                        <Tab><span style={{color:"white"}}>Add Sensors</span> </Tab>
                    </Tabs>
                    {this.toggleTab()}

                </div>

            </React.Fragment>
        );
    }
}

export default Control;
