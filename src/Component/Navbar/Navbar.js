import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return <div>
            <nav className='NavbarItems'>
                <div className='nav-log-toggle'>
                <h1 className='navbar-logo'>React<i className='fab fa-react'></i> </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                     
                </div>
                </div>
               
                <div className={this.state.clicked ? 'nav-menu active' :
                    'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            
                                <a className={item.cName} href={item.url}  key={index}>
                                

                          
                                {item.title}
                            
                            </a>
                         
                           
                        )
                    })}


                </div>
            </nav>
        </div>;
    }
}
