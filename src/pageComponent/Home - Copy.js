import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { selectFetchItem, changeState, incrementMethod, formdataCtrl } from '../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {

  constructor(props) {
    super(props);

    //this.props.datalistfetch,

    this.state = {
      // datalistfetch: [],
      // selectDefaultCurrent: ''
      lname: '',
    }
  }

  componentDidMount() {

    // var datalistfetch = []

    // this.setState({
    //   datalistfetch: datalistfetch
    // })

    // var selectDefault = datalistfetch[0];
    // this.setState({ datalistfetch: datalistfetch, selectDefaultCurrent: selectDefault });

  }

  _changehandle(e) {
    console.log(e.target.value, 'change value');
    this.setState({
      lname: e.target.value,
    })
  }

  _changeName() {
    this.props.changeStateToReducer(this.state.lname);
  }

  render() {
    return (
      <div className="overviewBox">
        Home is the first page
        <br /><br />
        <p>{this.props.stateManagement.lname}</p>

        <br /><br />
        <input type="text" value={this.state.lname} onChange={this._changehandle.bind(this)} placeholder="lname value" /><br />

        <button onClick={this._changeName.bind(this)} className="btn btn-primary">Change</button>
        <br /><br />




        <p>{this.props.stateManagement.username}</p>
        <p>{this.props.stateManagement.useremail}</p>
        <p>{this.props.stateManagement.usercell}</p>
        <p>{this.props.stateManagement.usercompany}</p>

        <a href="javascript:;" onClick={this.props.changeState.bind(this)}>change user data</a>

        <br />

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



      </div>
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
    changeState: changeState,
    incrementMethod: incrementMethod,

    changeStateToReducer: (updatedlname) => {
      dispatch(formdataCtrl(updatedlname))
    }

  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

