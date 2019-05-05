import React from 'react';

import auth from '../../pageComponent/auth';

import HeaderMenu from '../../pageComponent/Headermenu';

const Header = (props) => {

    let logoArea_Ctrl = props.menuCollapse ? "logoAreaCollapse" : "logoArea";

    return(
        <div className="dashboard_Header">
          <div className={logoArea_Ctrl}>
            <img src="../assets/images/logo.png" className="logo" alt="logo" alt="" />
          </div>
          <a href="javascript:;" onClick={props.sidebarCtrlFunc}>
            <img className="menuIcon" src="../assets/images/menuIcon.png" alt="" />
          </a>
         
          <a href="javascript:;" className="logout" onClick={() => {
            auth.logout(() => {
              this.props.history.push("/");
            })
          }}><i className="icon-power"></i></a>

          <HeaderMenu />

          <div className="btn-group profileMenu">
            <button type="button" className="btn pm-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="../assets/images/avatar3.jpg" alt="" /> M Waqas <i className="caret"></i> </button>
            <ul className="dropdown-menu">
              <li><a href="#_"><i className="fa fa-user"></i> My Profile</a></li>
              <li><a href="#_"><i className="fa fa-calendar"></i> My Calendar</a></li>
              <li><a href="#_"><i className="fa fa-envelope-o"></i> My Inbox 3 </a></li>
              <li><a href="#_"><i className="fa fa-bullhorn"></i> My Tasks 5 </a></li>
              <li><a href="#_"><i className="fa fa-lock"></i> Lock Screen</a></li>
              <li><a href="#_"><i className="glyphicon glyphicon-off"></i> Log Out </a></li>
            </ul>
          </div>
        </div>
    )

}

export default Header;