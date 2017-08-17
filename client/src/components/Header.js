import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Log in with Google</a>
                    </li>
                );
            default:
                return [
                    <li key="1">
                        <Payments />
                    </li>,
                    <li key="3" style={{ margin: '0 20px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2">
                        <a href="/api/logout">Log out</a>
                    </li>
                ];
        }
    }

    render() {
        //console.log(this.props);
        //console.log(this.renderContent());
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        style={{ marginLeft: 20 }}
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        EMAILY
                    </Link>
                    <ul className="right ">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
