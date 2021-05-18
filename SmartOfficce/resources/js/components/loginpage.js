import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './jsxobj/sidebar';
import Control from './jsxobj/control';
import Configure from './jsxobj/configure';
import Dashboard from './jsxobj/dashboard';
import AddDevice from './jsxobj/addDevice';
import RemoveDevice from './jsxobj/RemoveDevice';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MyAreas from './jsxobj/myareas';
import ManageAreas from './jsxobj/manageareas';
import Rules from './jsxobj/rules';
import Login from './jsxobj/login';

function LoginPage() {
    return (
        <div className="container-fluid no-gutter">
            <Login></Login>
        </div>
    );
}

export default LoginPage;

if (document.getElementById('root2')) {
    ReactDOM.render(<LoginPage/>, document.getElementById('root2'));
}
