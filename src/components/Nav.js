import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize';
import {Link} from 'react-router-dom';

export default class NavbarFeatures extends Component {
    //NavBar for Admin and Viewer
    render() {
        return (
            <Navbar brand='Tinda' className="pink" right>
            <NavItem>
                {this.props.children}
            </NavItem>
            <NavItem>
            <Link to="/user">Viewer</Link>
            </NavItem>
            <NavItem>
            <Link to="/">Admin</Link>
            </NavItem>
          </Navbar>
        );
    }
}
