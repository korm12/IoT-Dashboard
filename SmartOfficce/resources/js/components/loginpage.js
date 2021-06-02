import React from 'react';
import ReactDOM from 'react-dom';

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
