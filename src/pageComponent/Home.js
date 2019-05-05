import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { selectFetchItem, updateState, incrementMethod, formData1 } from '../redux/actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

      userName: '',
      userEmail: '',
      userCell: '',
      userAge: '',
      userGender: '',

      editData: false,

    }
  }

  componentDidMount() {

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getFormData() {
    this.props.changeStateFormToReducer(
      this.state.userName,
      this.state.userEmail,
      this.state.userCell,
      this.state.userAge,
      this.state.userGender
    );
    this.setState({
      userName: '',
      userEmail: '',
      userCell: '',
      userAge: '',
      userGender: '',
      editData: false
    })
  }

  isEdit() {
    debugger;
    this.setState({
      userName: this.props.stateManagement.userName,
      userEmail: this.props.stateManagement.userEmail,
      userCell: this.props.stateManagement.userCell,
      userAge: this.props.stateManagement.userAge,
      userGender: this.props.stateManagement.userGender,
    })
    this.setState({
      editData: true
    })
    // console.log('eidt data', this.state.userName);
  }

  render() {
    return (
      <div className="overviewBox">

        <div className="col-md-12">
          <h1>Static State With Redux</h1>
          <p>{this.props.stateManagement.employeID}</p>
          <p>{this.props.stateManagement.employeName}</p>
          <p>{this.props.stateManagement.employeEmail}</p>
          <p>{this.props.stateManagement.employeCell}</p>
          <p>{this.props.stateManagement.employeAge}</p>
          <p>{this.props.stateManagement.employeGender}</p>
        </div>

        <div className="col-md-12 marginBottom">
          <h1>Modify State With Redux</h1>
          <p>{this.props.stateManagement.modifyName}</p>
          <p>{this.props.stateManagement.modifyEmail}</p>
          <p>{this.props.stateManagement.modifyCell}</p>
          <p>{this.props.stateManagement.modifyAge}</p>
          <p>{this.props.stateManagement.modifyGender}</p>
          <button onClick={this.props.updateState.bind(this)}>Modify Data</button>
        </div>


        <div className="col-md-4 marginBottom">
          <input type="text"
            className="form-control"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange.bind(this)}
            placeholder="" />
        </div>
        <div className="col-md-4 marginBottom">
          <input type="text"
            className="form-control"
            name="userEmail"
            value={this.state.userEmail}
            onChange={this.handleChange.bind(this)}
            placeholder="" />
        </div>
        <div className="col-md-4 marginBottom">
          <input type="text"
            className="form-control"
            name="userCell"
            value={this.state.userCell}
            onChange={this.handleChange.bind(this)}
            placeholder="" />
        </div>
        <div className="col-md-4 marginBottom">
          <input type="text"
            className="form-control"
            name="userAge"
            value={this.state.userAge}
            onChange={this.handleChange.bind(this)}
            placeholder="" />
        </div>
        <div className="col-md-4 marginBottom">
          <input type="text"
            className="form-control"
            name="userGender"
            value={this.state.userGender}
            onChange={this.handleChange.bind(this)}
            placeholder="" />
        </div>
        <div className="col-md-4 marginBottom">

          <button onClick={this.getFormData.bind(this)} className="btn btn-primary">
            {this.state.editData ? 'Update' : 'Add'} </button>

          {this.state.editData ?
            null:
            <button onClick={this.isEdit.bind(this)} className="btn btn-default">Edit</button>
          }

        </div>

        <div className="col-md-12 marginBottom">
          <p>{this.props.stateManagement.userName}</p>
          <p>{this.props.stateManagement.userEmail}</p>
          <p>{this.props.stateManagement.userCell}</p>
          <p>{this.props.stateManagement.userAge}</p>
          <p>{this.props.stateManagement.userGender}</p>
        </div>

        <div className="clearfix"></div>

        <ul>
          {this.props.datalistfetch.map((item, index) => (
            <li
              key={item.name}
              onClick={() => this.props.selectFetchItem(item)}>
              {item.name}
            </li>
          ))}
        </ul>

        {this.props.selected_item != undefined ?
          <div>
            <p><img src={this.props.selected_item.profileImg} /></p>
            <p>{this.props.selected_item.name}</p>
            <p>{this.props.selected_item.email}</p>
            <p>{this.props.selected_item.cell}</p>
            <p>{this.props.selected_item.description}</p>
          </div>
          : null}

        <p>count: {this.props.stateManagement.count}</p>
        <button onClick={this.props.incrementMethod.bind(this)}>+</button>



      </div >
    );
  }
}




function mapStateToProps(state) {
  return {
    datalistfetch: state.datalistfetch,
    stateManagement: state.stateManagement,
    selected_item: state.itemSelected,
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    selectFetchItem: selectFetchItem,
    updateState: updateState,
    incrementMethod: incrementMethod,
    changeStateFormToReducer: formData1

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

