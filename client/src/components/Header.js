import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Wiley Buchanan
                    </a>
                    <ul className="right">
                        <li>
                            <a href='/bio'>About Me</a>
                        </li>
                        <li>
                            <a href='/projects'>Projects</a>
                        </li>
                        <li>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;