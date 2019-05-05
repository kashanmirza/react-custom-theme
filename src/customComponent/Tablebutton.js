import React, { Component } from 'react';

class Tablebutton extends React.Component {
  constructor(props) {
    super(props);

    this.editButton = this.editButton.bind(this);
    this.viewButton = this.viewButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);

    this.state = {

    }
  }

  editButton() {
    this.props.editButtonHandlar(this.props.rowData);
  }

  viewButton() {
    this.props.viewButtonHandlar(this.props.rowData);
  }

  deleteButton() {
    this.props.deleteButtonHandlar(this.props.rowData);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <a href="javascript:;" title="Delete" className="tableActionsBtn" onClick={this.deleteButton}><i className="icon-trash"></i></a>
        <a href="javascript:;" title="View" className="tableActionsBtn" onClick={this.viewButton}><i className="icon-eye"></i></a>
        <a href="javascript:;" title="Edit" className="tableActionsBtn" onClick={this.editButton}><i className="icon-pencil"></i></a>
      </div>
    );
  }
}

export default Tablebutton;




