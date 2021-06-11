import React, { Component } from 'react'
class ManageAreas extends Component {
    constructor(props){
        super(props)
        this.state = {
            areas: [

            ],
            Edit: {
                areaId: 0,
                areaName: "",
                areaDescription : "",
            },
            Add:{
                areaName: "",
                areaDescription : "",
                areaUser:""
            }
        }
        this.loadAreasRow = this.loadAreasRow.bind(this)
        this.handlebuttonEdit = this.handlebuttonEdit.bind(this)
        this.handlebuttonDelete = this.handlebuttonDelete.bind(this)
        this.handleAreaNameChange = this.handleAreaNameChange.bind(this)
        this.handleCloseModalButton = this.handleCloseModalButton.bind(this)
        this.handleAreaDescriptionChange = this.handleAreaDescriptionChange.bind(this)
        this.handleUpdateDB = this.handleUpdateDB.bind(this)
        this.handleCloseAddModalButton = this.handleCloseAddModalButton.bind(this)
        this.addAreaName = this.addAreaName.bind(this)
        this.addAreaDescription = this.addAreaDescription.bind(this)
        this.handleAddAreaButton = this.handleAddAreaButton.bind(this)
        this.handleInsertDb = this.handleInsertDb.bind(this)
    }
    handleAreaNameChange(event){ var Edit = this.state.Edit; var data = event.target.value; Edit.areaName = data;this.setState({Edit: Edit}); console.log(this.state.Edit.areaName)}
    handleAreaDescriptionChange(event){ var Edit = this.state.Edit; var data = event.target.value; Edit.areaDescription = data;this.setState({Edit: Edit}); console.log(this.state.Edit.areaDescription)}

    addAreaName(event){ var Add = this.state.Add; var data = event.target.value; Add.areaName = data;this.setState({Add: Add}); console.log(this.state.Add.areaName)}
    addAreaDescription(event){ var Add = this.state.Add; var data = event.target.value; Add.areaDescription = data;this.setState({Add: Add}); console.log(this.state.Add.areaDescription)}

    handlebuttonEdit(id){
        document.querySelector('.bg-modal3').style.display = 'flex'; // close the edit modal
        var areaId = "";
        var areaName ="";
        var areaDescription = "";
        //what is the areaId of the sensor with the given deviceId = id
        // check muna kung ano ung original na areaId nung device gamit ung pinasa na id
        for( var i = 0; i < this.state.areas.length; i++ ){
            if(this.state.areas[i].areaId == id ){

                areaId = this.state.areas[i].areaId;
                areaName = this.state.areas[i].areaName;
                areaDescription = this.state.areas[i].areaDescription;
            }
        }
            // pag nakita na kung anong areaId, isasave na ngayon sa Edit data sa state. un ung gagamitin pag mag uupdate ng db
            // change the Edit data in state in which contains the data that needs to be updated in the db
        this.setState(prevState => {
            let Edit = Object.assign({}, prevState.Edit);  // creating copy of state variable
            Edit.areaId = areaId;
            Edit.areaName = areaName;
            Edit.areaDescription = areaDescription;
            return { Edit };                                 // return new object object
          })  // saving the edi
    }
    handleCloseModalButton(){
        document.querySelector('.bg-modal3 ').style.display = 'none';
    }
    handleUpdateDB(){
        console.log(this.state.Edit)
        axios.post('/api/UpdateArea', {
            areaId: this.state.Edit.areaId,
            areaDescription:this.state.Edit.areaDescription,
            areaName: this.state.Edit.areaName
        })
        location.reload()
    }
    handlebuttonDelete(id){
        alert("this area "+ id +" is successfully deleted ! ")

        axios.post('/api/DeleteArea', {
            id: id
        })
       location.reload()
    }
    componentDidMount(){
        this._isMounted = true;
        if (localStorage.getItem("username") === null) {
            window.location.replace('/')
        }
        var username = localStorage.getItem('username')
        axios.get("http://"+process.env.MIX_DATA_ROUTES+"/GetAreas",{  params:{
            userId: username,
            }})
            .then(response => {
                var data= response.data;

                this.setState({areas: data});

            })
            .catch(function(error){
                console.log(error);
            })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    handleAddAreaButton(){
        document.querySelector('.bg-modal4').style.display = 'flex';
    }
        ////////// add
    handleCloseAddModalButton(){
        document.querySelector('.bg-modal4').style.display = 'none';
    }
    handleInsertDb(){
        console.log(this.state.Add)
        var username = localStorage.getItem('username')
        axios.post('/api/AddNewArea', {
            areaUser: username,
            areaDescription: this.state.Add.areaDescription,
            areaName   : this.state.Add.areaName
        })
        location.reload()
        // var add = this.state.add


        // var areas = this.state.areas;


        // this.setState(
        //     {
        //         areas: areas
        //     }
        // )

    }


    loadAreasRow(){
        return(
        this.state.areas.map(area => {
            return(

                    <tr key={area.areaId}>
                        <th scope="row" className="text-center">{area.areaName}</th>
                        <td className="text-center">{area.areaDescription}</td>
                        <td className="text-center"><button onClick={() => this.handlebuttonEdit(area.areaId)} className="btn btn-sm btn-outline-success mt-2 ml-1"><i className="far fa-edit"></i></button></td>
                        <td className="text-center"><button onClick={() => this.handlebuttonDelete(area.areaId)} className="btn btn-sm btn-outline-danger mt-2 ml-1"><i className="fas fa-trash-alt"></i></button></td>
                    </tr>

            )
        })
        )
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{color:'white'}}>
                    <div className="row">
                        <div className="col-md-10">
                            <h3 >Manage Areas</h3>
                        </div>
                        <div className="col-md-2 mt-4">
                            <button className="btn btn-lg btn-outline-success" onClick={this.handleAddAreaButton}><i className="fas fa-plus"></i>  Add Area</button>
                        </div>
                    </div>
                    <hr style={{marginLeft:"4px", marginRight:"4px"}}/>
                    <div className="row pl-4 pr-4">
                        <table className="table table-dark">
                            <thead className="text-center ">
                                <tr>
                                <th scope="col">Area</th>
                                <th scope="col">Description</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.loadAreasRow()}

                            </tbody>
                        </table>
                    </div>
                </div>
                {/*  Edit area  */}
                <div className="bg-modal3">
                    <div className="modal-content">
                        <div className="shad pt-4 pb-4 pl-4 pr-4 ">
                            <div className="text-right w-100">
                                <button onClick={this.handleCloseModalButton} className="btn btn-sm btn-outline-danger mt-2 "style={{borderRadius:"50px"}}><i className="fas fa-times"></i></button>
                            </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                            <h3 className="text-center edit-area">Edit Area</h3>
                            <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Area Name</label>
                                <input type="text" className="form-control" id="" placeholder="" onChange={this.handleAreaNameChange} value={this.state.Edit.areaName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Area Description</label>
                                <textarea type="text" className="form-control" id="" placeholder="" onChange={this.handleAreaDescriptionChange} value={this.state.Edit.areaDescription}/>
                            </div>
                            </form>
                            <div className="form-group row">
                                    <div className="col-sm-10">
                                        <button onClick={this.handleUpdateDB} className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* add area */}
                <div className="bg-modal4">
                    <div className="modal-content">
                        <div className="shad pt-4 pb-4 pl-4 pr-4 ">
                            <div className="text-right w-100">
                                <button onClick={this.handleCloseAddModalButton} className="btn btn-sm btn-outline-danger mt-2 "style={{borderRadius:"50px"}}><i className="fas fa-times"></i></button>
                            </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                            <h3 className="text-center edit-area">Add New Area</h3>
                            <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Area Name</label>
                                <input type="text" className="form-control" id="" placeholder="" onChange={this.addAreaName} value={this.state.Add.areaName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Area Description</label>
                                <textarea type="text" className="form-control" id="" placeholder="" onChange={this.addAreaDescription} value={this.state.Add.areaDescription}/>
                            </div>
                            </form>
                            <div className="form-group row">
                                    <div className="col-sm-10">
                                        <button onClick={this.handleInsertDb} className="btn btn-primary">Save</button>
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

export default ManageAreas;
