import React, { Component } from 'react'

class Voice extends Component {
    constructor(props){
        super(props)
        this.state={
            device:[],
            username:"",
            voiceSetting:{
                deviceId:'',
                deviceDescription:''
            },
            voiceCommand:{
                command:'',
                deviceId: '',
                status:1,
            }
        }


    }
    componentDidMount(){
        var username = window.atob(localStorage.getItem('username'))
        this.setState({username: username})
        console.log(this.state.username)
        var token = "Bearer "+window.atob(localStorage.getItem('token'))
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetControlDevice",{
            headers: {
                authorization: token
            },
            params:{
                userId: username,
            }})
            .then(response => {
                var data= response.data;

                this.setState({device: data});
                // console.log(this.state.device)

            })
            .catch(function(error){
                console.log(error);
            })
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/getVA",{
            headers: {
                authorization: token
            },
            params:{
                userId: username,
            }})
            .then(response => {
                var data= response.data;
                var voiceSetting = this.state.voiceSetting;
                voiceSetting.deviceId = data[0].deviceId;
                voiceSetting.deviceDescription = data[0].description;
                this.setState({voiceSetting: voiceSetting});
                console.log(voiceSetting)

            })
            .catch(function(error){
                console.log(error);
            })


    }
    deviceIdChange(e){
        var voiceSetting = this.state.voiceSetting;
        voiceSetting.deviceId = e.target.value;
        this.setState({voiceSetting:voiceSetting});
        console.log(this.state.voiceSetting.deviceId)

    }
    descriptionChange(e){
        var voiceSetting = this.state.voiceSetting
        voiceSetting.deviceDescription = e.target.value;
        this.setState({voiceSetting:voiceSetting});

    }
    commandChange(e){
        var voiceCommand = this.state.voiceCommand
        voiceCommand.command = e.target.value;
        this.setState({voiceCommand:voiceCommand})
        console.log(this.state.voiceCommand.command)
    }
    saveSetting(){
        console.log(this.state.voiceSetting)
        axios.post('/api/saveNewVA', {
            deviceId: this.state.voiceSetting.deviceId,
            deviceDescription:this.state.voiceSetting.deviceDescription,
            userId: this.state.username,
        })
        //location.reload()
    }
    deviceSelected(e){
        var voiceCommand = this.state.voiceCommand;
        voiceCommand.deviceId = e.target.value;
        this.setState({voiceCommand:voiceCommand})
        console.log(this.state.voiceCommand.deviceId)
    }
    showDevice(){
        return(
            this.state.device.map(dev => {
                return(
                    <option key={dev.id} value={dev.id}>{dev.deviceName}</option>
                )
            })
        )
    }
    addCommand(){
        console.log(this.state.voiceCommand)
    }
    statSelected(e){
        console.log(e.target.value)
        var voiceCommand = this.state.voiceCommand;
        voiceCommand.status = e.target.value;
        this.setState({voiceCommand:voiceCommand})
     }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid josefin-font" style={{color:'white'}}>
                    <div className="row">
                        <div className="col-md-10">
                            <h3 className="josefin-font">Voice Assistant</h3>
                        </div>
                    </div>
                    <hr style={{marginLeft:"4px", marginRight:"4px"}}/>
                </div>
                <div className="row ml-2 mr-2 pl-4 pr-4  w-100">
                    <div className="col-md-4  p-0 ">
                        <div className="row content-wrapper m-0">
                            <div className="col-md-12">
                                <h5 className="josefin-font content-title text-center" >Your Voice Assistant</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="DeviceId" className="form-label">Device ID:</label>
                                        <input type="text" className="form-control" id="DeviceId" onChange={this.deviceIdChange.bind(this)} defaultValue={this.state.voiceSetting.deviceId}/>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="DeviceId" className="form-label">Description:</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={this.descriptionChange.bind(this)} defaultValue={this.state.voiceSetting.deviceDescription} rows="3"/>
                                    </div>
                                </form>
                                <button className="btn btn-primary save-btn" onClick={this.saveSetting.bind(this)}>Save</button>
                            </div>
                        </div>
                        <br />
                        <div className="row content-wrapper m-0">

                        </div>
                        <br />
                    </div>
                    <div className="col-md-8 right-panel">
                        <div className="row mb-4">
                            <div className="col-md-12 add-command pt-4 pb-4">

                                <form>
                                    <div className="row ">
                                        <div className="col-md-2 pt-2">
                                            <label htmlFor="Command" className="form-label">Command:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" id="DeviceId" onChange={this.commandChange.bind(this)} defaultValue={this.state.voiceCommand.command}/>
                                        </div>
                                        <div className="col-md-2 pt-2 pl-2">
                                            <label htmlFor="Device" className="form-label">Device :</label>
                                        </div>
                                        <div className="col-md-4 ">
                                            <select className="form-control" onChange={this.deviceSelected.bind(this)} value={this.state.voiceCommand.deviceId}>
                                                <option value={""}></option>
                                                {this.showDevice()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-md-2 pt-2">
                                            <label className="form-label">Status :</label>
                                        </div>
                                        <div className="col-md-4 ">
                                            <select className="form-control" onChange={this.statSelected.bind(this)} value={this.state.voiceCommand.status}>
                                                <option ></option>
                                                <option value={0}>On</option>
                                                <option value={1}>Off</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 add-command-wrap text-right ">
                                            <button type="button" className="btn btn-sm btn-primary add-command-btn mt-2 mb-2 " onClick={this.addCommand.bind(this)} >Add Command</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="row mb-4 ">
                            <div className="col-md-12 command-list-wrapper">

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Voice;
