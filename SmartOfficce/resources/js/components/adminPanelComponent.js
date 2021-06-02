import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './jsxobj/sidebar';
import Control from './jsxobj/control';
import Dashboard from './jsxobj/dashboard';
import AddDevice from './jsxobj/addDevice';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MyAreas from './jsxobj/myareas';
import ManageAreas from './jsxobj/manageareas';
import Rules from './jsxobj/rules';

function AdminPanelComponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <div className="row">
                    <div className="col-md-1 no-gutter" >
                        <Sidebar/>
                    </div>
                    <div className="col-md-11 ml-0 pl-0 pr-0 mr-0">
                        <Switch>
                            <Route exact path="/dashboard" component = {Dashboard}/>
                            <Route  path="/control" component = {Control}/>
                            <Route  path="/addDevice" component = {AddDevice}/>
                            <Route  path="/myareas" component = {MyAreas}/>
                            <Route  path="/manageareas" component = {ManageAreas}/>
                            <Route  path="/rules" component = {Rules}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default AdminPanelComponent;

if (document.getElementById('root')) {
    ReactDOM.render(<AdminPanelComponent/>, document.getElementById('root'));
}
