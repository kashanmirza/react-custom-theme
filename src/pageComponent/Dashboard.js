import React, { Component } from 'react';

import auth from './auth';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'

import AppRoutes from '../routes/appRoutes';
import ChildRoutesOne from '../common/menu/childMenuOne';
import ChildRoutesTwo from '../common/menu/childMenuTwo';
import ChildRoutesThree from '../common/menu/childMenuThree';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarCtrl: 'dashboard_Sitebar',
      titleCtrl: 'titleShow',
      selectedMenu: 'item1',
      menuCollapse: false,
      footer:{
        date: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        hours: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds()
      }
    
    }
  }

  sidebarCtrlFunc() {
    this.setState({
      sidebarCtrl: this.state.sidebarCtrl == 'dashboard_Sitebar' ? 'dashboard_Sitebar_Collaps' : 'dashboard_Sitebar',
    })
    this.setState({
      titleCtrl: this.state.titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow',
    })
    this.setState({ menuCollapse: !this.state.menuCollapse });
  }

  menuSelected(menuType) {
    if (this.state.selectedMenu === menuType) {
      this.setState({ selectedMenu: null })
    }
    else {
      this.setState({ selectedMenu: menuType })
    }
  }

  render() {

    return (
      <div>

        <Header sidebarCtrlFunc={this.sidebarCtrlFunc.bind(this)} menuCollapse={this.state.menuCollapse}/>

        <Router>
          <div className={this.state.sidebarCtrl}>
            <ul className="sideMenu">
              <li><Link className={this.state.selectedMenu === 'item1' ? 'active' : ''} onClick={() => this.menuSelected("item1")} to={this.props.match.path + "/"}><i className="icon-eye"></i><title className={this.state.titleCtrl}>Home</title></Link></li>
              <li><Link className={this.state.selectedMenu === 'item2' ? 'active' : ''} onClick={() => this.menuSelected("item2")} to="/Aboutus"><i className="icon-eye"></i><title className={this.state.titleCtrl}>About</title></Link></li>
              <li><Link className={this.state.selectedMenu === 'item3' ? 'active' : ''} onClick={() => this.menuSelected("item3")} to="/Contactus"><i className="icon-eye"></i><title className={this.state.titleCtrl}>Contact</title></Link></li>

              <li><Link className={this.state.selectedMenu === 'item4' ? 'active' : ''} onClick={() => this.menuSelected("item4")} to="/Overview"><i className="icon-eye"></i><title className={this.state.titleCtrl}>Overview</title></Link></li>
              <li><Link className={this.state.selectedMenu === 'item5' ? 'active' : ''} onClick={() => this.menuSelected("item5")}>
                <i className="icon-list"></i><title className={this.state.titleCtrl}>Datamanipulaton</title>
                <img src={this.state.selectedMenu === 'item5' ? '../assets/images/icon2.png' : '../assets/images/icon1.png'} alt="" /></Link>
                
                {this.state.selectedMenu === 'item5' ?
                  <ChildRoutesOne class={this.state.titleCtrl}/>
                  : null}

              </li>
              <li><Link className={this.state.selectedMenu === 'item6' ? 'active' : ''} onClick={() => this.menuSelected("item6")}>
                <i className="icon-support"></i><title className={this.state.titleCtrl}>Custom Components</title>
                <img src={this.state.selectedMenu === 'item6' ? '../assets/images/icon2.png' : '../assets/images/icon1.png'} alt="" /></Link>
               
                {this.state.selectedMenu === 'item6' ?
                  <ChildRoutesTwo class={this.state.titleCtrl}/>
                  : null}

              </li>
              <li><Link className={this.state.selectedMenu === 'item7' ? 'active' : ''} onClick={() => this.menuSelected("item7")}>
                <i className="icon-layers"></i><title className={this.state.titleCtrl}>Third Party Components</title>
                <img src={this.state.selectedMenu === 'item7' ? '../assets/images/icon2.png' : '../assets/images/icon1.png'} alt="" /></Link>
                
                {this.state.selectedMenu === 'item7' ?
                  <ChildRoutesThree class={this.state.titleCtrl}/>
                  : null}

              </li>
            </ul>
          </div>

          <div className="dashboard_Container">
            <p className="breadcrumb">Welcome to / Overview</p>
            <AppRoutes match={this.state.match}/>
          </div>

        </Router>

        <Footer footer={this.state.footer}/>
        
      </div>
    );
  }
}

export default Dashboard;
