import React, { useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './jsxobj/sidebar';
import Control from './jsxobj/control';
import Dashboard from './jsxobj/dashboard';
import AddDevice from './jsxobj/addDevice';
import User from './jsxobj/user';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MyAreas from './jsxobj/myareas';
import ManageAreas from './jsxobj/manageareas';
import Rules from './jsxobj/rules';



function AdminPanelComponent() {
    const [isAuthorized, setAuthorized] = useState(false);
    axios.get("http://"+process.env.MIX_DATA_ROUTES+"/validationRoute",{
            headers: {
                authorization: "Bearer "+window.atob(localStorage.getItem('token'))
            },
            })
            .then(response => {
                //console.log(response)

                setAuthorized(true)
            }).catch((error) => {
                window.location.replace('/');
            });
        if(isAuthorized){
            return (

                <div className="container-fluid">
                    <BrowserRouter>
                        <div className="row">
                            <div className="col-md-2 no-gutter" >
                                <Sidebar/>
                            </div>
                            <div className="col-md-10 ml-0 pl-0 pr-0 mr-0">
                                <Switch>
                                    <Route exact path="/dashboard" component = {Dashboard}/>
                                    <Route  path="/control" component = {Control}/>
                                    <Route  path="/addDevice" component = {AddDevice}/>
                                    <Route  path="/myareas" component = {MyAreas}/>
                                    <Route  path="/manageareas" component = {ManageAreas}/>
                                    <Route  path="/rules" component = {Rules}/>
                                    <Route  path="/User" component = {User}/>
                                </Switch>
                            </div>
                        </div>
                    </BrowserRouter>
                </div>
            );
        }
    return("")
}

export default AdminPanelComponent;

if (document.getElementById('root')) {
    ReactDOM.render(<AdminPanelComponent/>, document.getElementById('root'));
}
