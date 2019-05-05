import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ChildMenuOne extends React.Component {
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
                    <li><Link to="/Dml"><title className={this.state.titleCtrl}>Table Handling</title></Link></li>
                    <li><Link to="/Formhandling"><title className={this.state.titleCtrl}>Form Handling</title></Link></li>
                    <li><Link to="/Stepsformhandling"><title className={this.state.titleCtrl}>Steps Form Handling</title></Link></li>
                  </ul>
      </div>
    );
  }
}

export default ChildMenuOne;




