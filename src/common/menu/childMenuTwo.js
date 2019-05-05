import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ChildMenuTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        titleCtrl : props.class
    }
  }

  componentDidMount() {

  }

 

  render() {

    return (

      <div>
                 <ul>
                    <li><Link to="/Icons"><title className={this.state.titleCtrl}>Icons</title></Link></li>
                    <li><Link to="/Portlate"><title className={this.state.titleCtrl}>Portlates</title></Link></li>
                    <li><Link to="/Messages"><title className={this.state.titleCtrl}>Messages</title></Link></li>
                    <li><Link to="/Buttons"><title className={this.state.titleCtrl}>Buttons</title></Link></li>
                    <li><Link to="/Tabs"><title className={this.state.titleCtrl}>Tabs</title></Link></li>
                    <li><Link to="/Modalexample"><title className={this.state.titleCtrl}>Modal</title></Link></li>
                    <li><Link to="/Tooltipexample"><title className={this.state.titleCtrl}>Tooltip</title></Link></li>
                    <li><Link to="/Progressbarcustom"><title className={this.state.titleCtrl}>Progressbar </title></Link></li>
                    <li><Link to="/Form"><title className={this.state.titleCtrl}>Forms</title></Link></li>
                  </ul>
      </div>
    );
  }
}

export default ChildMenuTwo;




