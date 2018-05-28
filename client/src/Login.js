import React from 'react'
import TextField from '@material-ui/core/TextField'
import './welcome.css';

const Login = () => (
    <div className="welcome">
        <header className="welcome__top">
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://xsolve.software"
          >
            xsolve.software
          </a>
        </header>
            <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
            /><br />
    </div>
);

export default Login;

