import React, { Component } from "react";
import routes from "./routes";
import NavBar from './components/Nav';
import AddUser from './components/AddUser';


class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root-container">
           
              <NavBar>
              { window.location.pathname === "/" ?
                <AddUser/>
                : null
              }
            </NavBar>
                {routes}
            </div>
        )
    }
}

export default Root;