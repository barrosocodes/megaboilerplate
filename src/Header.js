import React from 'react';
import { Router, Route, Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/trending" activeClassName="active">Trending</Link></li>
              <li><Link to="/contributing" activeClassName="active">Contributing</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="tweet-button">
                <a className="twitter-share-button" href="https://twitter.com/intent/tweet" />
              </li>
              <li>
                <Link to="https://github.com/sahat/boilerplate" className="navbar-icon">
                  <i className="ion-social-github"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
