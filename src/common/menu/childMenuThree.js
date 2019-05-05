import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ChildMenuThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        titleCtrl : props.class
    }
  }

  render() {

    return (

      <div>
                 <ul>
                    <li><Link to="/Charts"><title className={this.state.titleCtrl}>Charts</title></Link></li>
                    <li><Link to="/Datatable"><title className={this.state.titleCtrl}>Data Table</title></Link></li>
                    <li><Link to="/Switchbutton"><title className={this.state.titleCtrl}>Switch Button</title></Link></li>
                    <li><Link to="/Progressbar"><title className={this.state.titleCtrl}>Progress Bar</title></Link></li>
                    <li><Link to="/Ratingstar"><title className={this.state.titleCtrl}>Star Ratings</title></Link></li>
                    <li><Link to="/Scrollbar"><title className={this.state.titleCtrl}>Scrollbar</title></Link></li>
                    <li><Link to="/Datetimepicker"><title className={this.state.titleCtrl}>Datetime Picker</title></Link></li>
                    <li><Link to="/Reactseletc"><title className={this.state.titleCtrl}>React Seletc </title></Link></li>
                    <li><Link to="/Checkboxradiobutton"><title className={this.state.titleCtrl}>Checkbox Radio Button</title></Link></li>
                    <li><Link to="/Treemenu"><title className={this.state.titleCtrl}>Tree Menu</title></Link></li>
                    <li><Link to="/Qrcode"><title className={this.state.titleCtrl}>QR Code</title></Link></li>
                  </ul>
      </div>
    );
  }
}

export default ChildMenuThree;




