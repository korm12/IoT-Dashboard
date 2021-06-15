import React, { Component } from 'react'
class Rules extends Component {
    constructor(props){
        super(props)
        this.state = {
            Rules0: [

            ],
            Edit: {
                isActive: "",
                ruleId: 0,
                deviceId : "",
                isMinMax : 0,
                sensorId : "",
                minVal : 0,
                maxVal : 0,
                isTimer: 0,
                from : "",
                to: "",
            },
            Add: {
                isActive: "",
                ruleId: 0,
                deviceId : "",
                isMinMax : 0,
                sensorId : "",
                minVal : 0,
                maxVal : 0,
                isTimer: 0,
                from : "",
                to: "",
            }
        }

        this.AddRulesButton = this.AddRulesButton.bind(this)
        this.loadRulesRow =this.loadRulesRow.bind(this)
        this.editRule = this.editRule.bind(this)
        this.deleteRule = this.deleteRule.bind(this)
        this.closeEditRuleModal = this.closeEditRuleModal.bind(this)

        this.fromTimeChanged = this.fromTimeChanged.bind(this)
        this.toTimeChanged = this.toTimeChanged.bind(this)
        this.isActiveChange = this.isActiveChange.bind(this)
        this.deviceIdChange = this.deviceIdChange.bind(this)
        this.isMinMaxChange = this.isMinMaxChange.bind(this)
        this.sensorIdChange = this.sensorIdChange.bind(this)
        this.minValChange = this.minValChange.bind(this)
        this.maxValChange = this.maxValChange.bind(this)
        this.isTimerChange = this.isTimerChange.bind(this)
        this.saveEditButton = this.saveEditButton.bind(this)

        this.fromTimeChangedAdd = this.fromTimeChangedAdd.bind(this)
        this.toTimeChangedAdd = this.toTimeChangedAdd.bind(this)
        this.isActiveChangeAdd = this.isActiveChangeAdd.bind(this)
        this.deviceIdChangeAdd = this.deviceIdChangeAdd.bind(this)
        this.isMinMaxChangeAdd = this.isMinMaxChangeAdd.bind(this)
        this.sensorIdChangeAdd = this.sensorIdChangeAdd.bind(this)
        this.minValChangeAdd = this.minValChangeAdd.bind(this)
        this.maxValChangeAdd = this.maxValChangeAdd.bind(this)
        this.isTimerChangeAdd = this.isTimerChangeAdd.bind(this)
        this.saveAddButtonAdd = this.saveAddButtonAdd.bind(this)
    }
    AddRulesButton(){
        console.log("Add rules")
        document.querySelector('.bg-modal7').style.display = 'flex';
    }
    // edit
    fromTimeChanged(event){var Edit = this.state.Edit; var data = event.target.value; Edit.from = data;this.setState({Edit: Edit});}
    toTimeChanged(event){var Edit = this.state.Edit; var data = event.target.value; Edit.to = data;this.setState({Edit: Edit});}
    isActiveChange(event){var Edit = this.state.Edit; var data = event.target.value; Edit.isActive = data;this.setState({Edit: Edit});}
    deviceIdChange(event){var Edit = this.state.Edit; var data = event.target.value; Edit.deviceId = data;this.setState({Edit: Edit});}
    isMinMaxChange(event){var Edit = this.state.Edit; var data = event.target.value; Edit.isMinMax = data;this.setState({Edit: Edit});}
    sensorIdChange(event){var Edit = this.state.Edit; var data = event.target.value; Edit.sensorId = data;this.setState({Edit: Edit});}
    minValChange(event){var Edit = this.state.Edit;var data = event.target.value;Edit.minVal = data;this.setState({Edit: Edit});}
    maxValChange(event){var Edit = this.state.Edit; var data = event.target.value; Edit.maxVal = data;this.setState({Edit: Edit});}
    isTimerChange(event){var Edit = this.state.Edit; var data = event.target.value; Edit.isTimer = data;this.setState({Edit: Edit});}

    // add
    fromTimeChangedAdd(event){var Add = this.state.Add; var data = event.target.value; Add.from = data;this.setState({Add: Add});}
    toTimeChangedAdd(event){var Add = this.state.Add; var data = event.target.value; Add.to = data;this.setState({Add: Add});}
    isActiveChangeAdd(event){var Add = this.state.Add; var data = event.target.value; Add.isActive = data;this.setState({Add: Add});}
    deviceIdChangeAdd(event){var Add = this.state.Add; var data = event.target.value; Add.deviceId = data;this.setState({Add: Add});}
    isMinMaxChangeAdd(event){var Add = this.state.Add; var data = event.target.value; Add.isMinMax = data;this.setState({Add: Add});}
    sensorIdChangeAdd(event){var Add = this.state.Add; var data = event.target.value; Add.sensorId = data;this.setState({Add: Add});}
    minValChangeAdd(event){var Add = this.state.Add;var data = event.target.value;Add.minVal = data;this.setState({Add: Add});}
    maxValChangeAdd(event){var Add = this.state.Add; var data = event.target.value; Add.maxVal = data;this.setState({Add: Add});}
    isTimerChangeAdd(event){var Add = this.state.Add; var data = event.target.value; Add.isTimer = data;this.setState({Add: Add});}



    saveEditButton(){
        console.log("edit func");

        var Rules0 = this.state.Rules0;
        var Edit = this.state.Edit;
        for(var i = 0; i < Rules0.length; i++){
            if(Rules0[i].ruleId == Edit.ruleId  ){

                Rules0[i].deviceId = Edit.deviceId
                Rules0[i].isActive = Edit.isActive
                Rules0[i].isMinMax = Edit.isMinMax
                Rules0[i].sensorId = Edit.sensorId
                Rules0[i].minVal = Edit.minVal
                Rules0[i].maxVal = Edit.maxVal
                Rules0[i].isTimer = Edit.isTimer
                Rules0[i].from = Edit.from
                Rules0[i].to = Edit.to
            }
        }

        axios.post('/api/UpdateRule', {
            ruleId: this.state.Edit.ruleId,
            isActive: this.state.Edit.isActive,
            deviceId: this.state.Edit.deviceId,
            isMinMax: this.state.Edit.isMinMax,
            sensorId: this.state.Edit.sensorId,
            minVal: this.state.Edit.minVal,
            maxVal: this.state.Edit.maxVal,
            isTimer: this.state.Edit.isTimer,
            from: this.state.Edit.from,
            to: this.state.Edit.to
        })
        location.reload()
        // this.setState({Rules0: Rules0})
    }

    saveAddButtonAdd(){
        //console.log(this.state.Add);
        var Add = this.state.Add
        var Rules0 = this.state.Rules0;
        Rules0.push(Add)
        var username = window.atob(localStorage.getItem('username'))
        axios.post('/api/AddNewRules', {
            userId: username,
            isActive: this.state.Add.isActive,
            deviceId: this.state.Add.deviceId,
            isMinMax: this.state.Add.isMinMax,
            sensorId: this.state.Add.sensorId,
            minVal: this.state.Add.minVal,
            maxVal: this.state.Add.maxVal,
            isTimer: this.state.Add.isTimer,
            from: this.state.Add.from,
            to: this.state.Add.to
        }).then((response) => {
            if(response.data.error){

                alert(response.data.error);
            }
        },(error)=> {
            console.log(error);
        });
        alert("New Rule is Added")
        location.reload()
        // this.setState({Rules0: Rules0})


    }

    editRule(id){
        console.log(id)
        document.querySelector('.bg-modal6').style.display = 'flex';

        var ruleId ;
        var deviceId ="";
        var isMinMax ;
        var sensorId ="";
        var minVal, maxVal, isTimer;
        var from ="";
        var to="";
        var isActive="";

        for( var i = 0; i < this.state.Rules0.length; i++ ){
            if(this.state.Rules0[i].ruleId == id ){

                ruleId = this.state.Rules0[i].ruleId;
                deviceId = this.state.Rules0[i].deviceId;
                isMinMax = this.state.Rules0[i].isMinMax;
                sensorId = this.state.Rules0[i].sensorId;
                minVal = this.state.Rules0[i].minVal;
                maxVal = this.state.Rules0[i].maxVal;
                isTimer = this.state.Rules0[i].isTimer;
                from = this.state.Rules0[i].from;
                to = this.state.Rules0[i].to;
                isActive = this.state.Rules0[i].isActive;
            }
        }
        this.setState(prevState => {
            let Edit = Object.assign({}, prevState.Edit);  // creating copy of state variable
            Edit.ruleId = ruleId;
            Edit.deviceId = deviceId;
            Edit.isMinMax = isMinMax;
            Edit.sensorId = sensorId;
            Edit.minVal = minVal;
            Edit.maxVal = maxVal;
            Edit.isTimer = isTimer;
            Edit.from = from;
            Edit.to = to;
            Edit.isActive = isActive;
            return { Edit };                                 // return new object object
          })  // saving the edi

    }
    closeEditRuleModal(){
        document.querySelector('.bg-modal6').style.display = 'none';
        document.querySelector('.bg-modal7').style.display = 'none';
    }
    deleteRule(id){

        var r = confirm("Do you really want to rule ?");
        if (r == true) {
            console.log(id);
            axios.post('/api/DeleteRule', {
                ruleId: id
            })

            location.reload();
        } else {

        }

    }

    componentDidMount(){
        this._isMounted = true;
        if (localStorage.getItem("username") === null) {
            window.location.replace('/')
        }
        var username = window.atob(localStorage.getItem('username'))
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetRules",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;

                this.setState({Rules0: data});

            })
            .catch(function(error){
                console.log(error);
            })
    }
    componentWillUnmount(){
        this._isMounted = false;
    }

    loadRulesRow(){
        return(
        this.state.Rules0.map(rule => {
            return(
                <React.Fragment key={rule.ruleId}>

                    <div className="col-md-3 rule-container"  >
                        <div className="bg-white pl-1 pr-1" style={{borderRadius:"20px"}}>
                            <div className="text-right">
                                <button onClick={() => this.editRule(rule.ruleId)} className="btn btn-sm btn-outline-success mt-2 ml-1" style={{borderRadius:"50%"}}><i className="far fa-edit"></i></button>
                                <button onClick={() => this.deleteRule(rule.ruleId)} className="btn btn-sm btn-outline-danger mt-2 ml-1" style={{borderRadius:"50%"}}><i className="fas fa-trash-alt"></i></button>
                            </div>
                            <div className="row">
                                <div className="col-md-6 w-100 d-block rule-label">
                                    <div className="row"><p className="d-inline">Rule is Active ?: </p></div>
                                    <div className="row"><p className="d-inline">Device Id: </p></div>
                                    <div className="row"><p className="d-inline">Use Sensor ?: </p></div>
                                    <div className="row"><p className="d-inline">Sensor Id: </p></div>
                                    <div className="row"><p className="d-inline">Minimum Value: </p></div>
                                    <div className="row"><p className="d-inline">Maximum Value: </p></div>
                                    <div className="row"><p className="d-inline">Use Timer ?: </p></div>
                                    <div className="row"><p className="d-inline">Start Time: </p></div>
                                    <div className="row"><p className="d-inline">End Time: </p></div>
                                </div>
                                <div className="col-md-6 w-100 rule-value">
                                    <div className="row"><p className="">&nbsp;{rule.isActive}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.deviceId}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.isMinMax}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.sensorId}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.minVal}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.maxVal}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.isTimer}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.from}</p></div>
                                    <div className="row"><p className="">&nbsp;{rule.to}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>


                </React.Fragment>
            )
        })
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid josefin-font" style={{color:'white'}}>
                    <div className="row">
                        <div className="col-md-10">
                            <h3 className="josefin-font">Rules</h3>
                        </div>
                        <div className="col-md-2 mt-4">
                            <button onClick={this.AddRulesButton} className="btn btn-lg btn-outline-success"><i className="fas fa-plus"></i>  Add Rules</button>
                        </div>
                    </div>

                    <hr style={{marginLeft:"4px", marginRight:"4px"}}/>

                    <div className="row pl-4 pr-4">

                                {this.loadRulesRow()}


                    </div>
                </div>

                {/* edit modal */}
                <div className="bg-modal6 josefin-font">
                    <div className="modal-content">
                        <div className="shad pt-4 pb-4 pl-4 pr-4 ">
                            <div className="text-right w-100">
                                <button onClick={this.closeEditRuleModal} className="btn btn-sm btn-outline-danger mt-2 "style={{borderRadius:"50px"}}><i className="fas fa-times"></i></button>
                            </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                            <form>
                            <div className="form-group row">
                                    <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">isActive</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.isActiveChange} id="" value={this.state.Edit.isActive} >
                                            <option value={"yes"}>yes</option>
                                            <option value={"no"}>no</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Device Id</label>
                                    <div className="col-sm-9">
                                        <input type="text" onChange={this.deviceIdChange} className="form-control" id="deviceName" required defaultValue={this.state.Edit.deviceId} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Use Sensor ?</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.isMinMaxChange} id="" value={this.state.Edit.isMinMax}>
                                            <option value={"no"}>No</option>
                                            <option value={"yes"}>Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Sensor Id</label>
                                    <div className="col-sm-9">
                                        <input type="text" onChange={this.sensorIdChange} className="form-control" id="deviceName" required defaultValue={this.state.Edit.sensorId} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Min</label>
                                    <div className="col-sm-9">
                                        <input type="number" onChange={this.minValChange} min={0} max={100} className="form-control" id="deviceName" required value={this.state.Edit.minVal}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Max</label>
                                    <div className="col-sm-9">
                                        <input type="number" onChange={this.maxValChange} min={0} max={100} className="form-control" id="deviceName" value={this.state.Edit.maxVal}  required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Use Timer?</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.isTimerChange} id="" value={this.state.Edit.isTimer}>
                                            <option value={"no"}>No</option>
                                            <option value={"yes"}>Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">From</label>
                                    <div className="col-sm-9">
                                        <input type="time" onChange={this.fromTimeChanged} className="form-control" id="" required defaultValue={this.state.Edit.from}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">To</label>
                                    <div className="col-sm-9">
                                        <input type="time" onChange={this.toTimeChanged} className="form-control" id="" required defaultValue={this.state.Edit.to}/>
                                    </div>
                                </div>
                            </form>
                            <div className="form-group row">
                                    <div className="col-sm-12 text-right">
                                        <button onClick={this.saveEditButton} className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            {/* add modal */}
                <div className="bg-modal7 josefin-font">
                    <div className="modal-content">
                        <div className="shad pt-4 pb-4 pl-4 pr-4 ">
                            <div className="text-right w-100">
                                <button onClick={this.closeEditRuleModal} className="btn btn-sm btn-outline-danger mt-2 "style={{borderRadius:"50px"}}><i className="fas fa-times"></i></button>
                            </div>
                            <h3 className="text-center josefin-font">Add New Rule</h3>
                        <div className="row mt-2">
                            <div className="col-md-12">
                            <form>
                            <div className="form-group row">
                                    <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">isActive</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.isActiveChangeAdd} id="" value={this.state.Add.isActive} >
                                            <option value={"yes"}>yes</option>
                                            <option value={"no"}>no</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Device Id</label>
                                    <div className="col-sm-9">
                                        <input type="text" onChange={this.deviceIdChangeAdd} className="form-control" id="deviceName" required defaultValue={this.state.Add.deviceId} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Use Sensor ?</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.isMinMaxChangeAdd} id="" value={this.state.Add.isMinMax}>
                                            <option value={"yes"}>yes</option>
                                            <option value={"no"}>no</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Sensor Id</label>
                                    <div className="col-sm-9">
                                        <input type="text" onChange={this.sensorIdChangeAdd} className="form-control" id="deviceName" required defaultValue={this.state.Add.sensorId} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Min</label>
                                    <div className="col-sm-9">
                                        <input type="number" onChange={this.minValChangeAdd} min={0} max={100} className="form-control" id="deviceName" required value={this.state.Add.minVal}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">Max</label>
                                    <div className="col-sm-9">
                                        <input type="number" onChange={this.maxValChangeAdd} min={0} max={100} className="form-control" id="deviceName" value={this.state.Add.maxVal}  required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Use Timer?</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.isTimerChangeAdd} id="" value={this.state.Add.isTimer}>
                                            <option value={"yes"}>yes</option>
                                            <option value={"no"}>no</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">From</label>
                                    <div className="col-sm-9">
                                        <input type="time" onChange={this.fromTimeChangedAdd} className="form-control" id="" required defaultValue={this.state.Add.from}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-3 col-form-label" htmlFor="deviceName">To</label>
                                    <div className="col-sm-9">
                                        <input type="time" onChange={this.toTimeChangedAdd} className="form-control" id="" required defaultValue={this.state.Add.to}/>
                                    </div>
                                </div>
                            </form>
                            <div className="form-group row">
                                    <div className="col-sm-12 text-right">
                                        <button onClick={this.saveAddButtonAdd} className="btn btn-primary">Save</button>
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

export default Rules;
