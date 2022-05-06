import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class NavComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pathname : window.location.pathname,
    }

  }

  componentDidMount() {
    const menuitems = document.getElementsByClassName('menu-item');

    console.log(menuitems);
  }

  render() {
    const pathname = this.state.pathname
    return (
      <div>
        <header className="site-header">
          <div className="container">
            <a href="#" className="branding">
              <img src="images/logo.png" alt="" className="logo"/>
              <h1 className="site-title">Endtime Intercessors  Fellowship</h1>
            </a>

            <div className="main-navigation">
              <button className="menu-toggle"><i className="fa fa-bars"></i> Menu</button>
              <ul className="menu">
                <li className={pathname ? 'menu-item current-menu-item' : 'menu-item'}><a href="/">Homepage <small>Lorem ipsum</small></a></li>
                <li className={pathname ? 'menu-item current-menu-item' : 'menu-item'}><a href="/about-us">About us <small>Cupidatat non proident</small></a></li>
                <li className={pathname ? 'menu-item current-menu-item' : 'menu-item'}><a href="/sermons">Seremons <small>Laboris nisi aliquip</small></a></li>
                {/*<li className={pathname ? 'menu-item current-menu-item' : 'menu-item'}><a href="events.html">Events <small>Sunt in culpa</small></a></li>*/}
                <li className={pathname ? 'menu-item current-menu-item' : 'menu-item'}><a href="/devotionals">Devotionals <small>Aute irure</small></a></li>
                <li className={pathname ? 'menu-item current-menu-item' : 'menu-item'}><a href="/contact-us">Contact <small>lorem ipsum</small></a></li>
              </ul>
            </div>

            <div className="mobile-navigation"></div>
          </div>
        </header>
      </div>
    )
  }
}
