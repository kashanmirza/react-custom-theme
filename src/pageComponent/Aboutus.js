import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { stepFromData } from '../redux/actions/index';
import { bindActionCreators } from 'redux';
var moment = require('moment');
class Aboutus extends Component {

  constructor(props) {
    super(props);

    this.state = {

      stepForm1: true,
      stepForm2: false,
      stepForm3: false,

      eName: '',
      eLastName: '',
      eEmail: '',
      eCell: '',
      eAddress: '',
      eComments: '',

      eRegisterationDate: new Date(),
      eGender: '',
      eCity: '',
      eState: '',
      eCountry: '',
      matric: '',
      enter: '',
      graduate: '',

      selectCountry: [],
      selectCity: [],
      selectState: []

    }
  }

  componentDidMount() {

    var selectCity = [
      {
        id: 0,
        lable: 'Select',
        value: '',
      },
      {
        id: 1,
        lable: 'Karachi',
        value: 'karachi',
      },
      {
        id: 2,
        lable: 'Lahore',
        value: 'lahore',
      },
      {
        id: 3,
        lable: 'Islamabad',
        value: 'islamabad',
      },
      {
        id: 4,
        lable: 'Quetta',
        value: 'quetta',
      },
      {
        id: 5,
        lable: 'London',
        value: 'london',
      },
      {
        id: 6,
        lable: 'California',
        value: 'california',
      },
    ]

    this.setState({ selectCity: selectCity });

    var selectState = [
      {
        id: 0,
        lable: 'Select',
        value: '',
      },
      {
        id: 1,
        lable: 'Sindh',
        value: 'sindh',
      },
      {
        id: 2,
        lable: 'Punjab',
        value: 'punjab',
      },
      {
        id: 3,
        lable: 'Balochistan',
        value: 'balochistan',
      },
      {
        id: 4,
        lable: 'KPK',
        value: 'kpk',
      }
    ]

    this.setState({ selectState: selectState });

    var selectCountry = [
      {
        id: 0,
        lable: 'Select',
        value: '',
      },
      {
        id: 1,
        lable: 'Pakistan',
        value: 'pakistan',
      },
      {
        id: 2,
        lable: 'Australia',
        value: 'australia',
      },
      {
        id: 3,
        lable: 'United Kingdom',
        value: 'unitedkingdom',
      },
      {
        id: 4,
        lable: 'America',
        value: 'america',
      },
      {
        id: 5,
        lable: 'Germany',
        value: 'germany',
      },
      {
        id: 6,
        lable: 'Sri Lanka',
        value: 'srilanka',
      },
    ]

    this.setState({ selectCountry: selectCountry });

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  next1() {
    if (this.state.eName === '') {
      this.setState({
        eNameError: 'Please Enter First eName'
      })
    }

    else {
      this.setState({
        eNameError: false
      })
    }

    if (this.state.eLastName === '') {
      this.setState({
        eLastNameError: 'Please Enter Last eLastName'
      })
    }
    else {
      this.setState({
        eLastNameError: false
      })
    }

    let emailRegx = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/;
    if ((this.state.eEmail) === "" || (emailRegx.test(this.state.eEmail) == false)) {
      this.setState({
        eEmailError: 'Please Enter eEmail Valid'
      })
    }
    else {
      this.setState({
        eEmailError: false
      })
    }

    let numberRegx = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
    if ((this.state.eCell) === "" || (numberRegx.test(this.state.eCell) == false)) {
      this.setState({
        eCellError: 'Please Enter eCell Valid'
      })
    }
    else {
      this.setState({
        eCellError: false
      })
    }

    if (this.state.eAddress === '') {
      this.setState({
        eAddressError: 'Please Enter eAddress'
      })
    }
    else {
      this.setState({
        eAddressError: false
      })
    }

    if (this.state.eComments === '') {
      this.setState({
        eCommentsError: 'Please Enter eComments'
      })
    }
    else {
      this.setState({
        eCommentsError: false
      })
    }

    if (this.state.eName != '' &&
      this.state.eLastName != '' &&
      this.state.eEmail != '' &&
      this.state.eCell != '' &&
      this.state.eAddress != '' &&
      this.state.eComments != '') {

      this.props.changeStateFormToReducer(
        this.state.eName,
        this.state.eLastName,
        this.state.eEmail,
        this.state.eCell,
        this.state.eAddress,
        this.state.eComments
      );
      this.setState({
        stepForm1: false, stepForm2: true, stepForm3: false
      })
    }
    else {
      return false
    }
  }

  next2() {
    if (this.state.eCity === '') {
      this.setState({
        eCityError: 'Please Select eCity'
      })
    }
    else {
      this.setState({
        eCityError: false
      })
    }
    if (this.state.eState === '') {
      this.setState({
        eStateError: 'Please Select eState'
      })
    }
    else {
      this.setState({
        eStateError: false
      })
    }
    if (this.state.eCountry === '') {
      this.setState({
        eCountryError: 'Please Select eCountry'
      })
    }
    else {
      this.setState({
        eCountryError: false
      })
    }

    if (this.state.eCity != '' &&
      this.state.eState != '' &&
      this.state.eCountry != '') {

      this.props.changeStateFormToReducer(
        this.state.eName,
        this.state.eLastName,
        this.state.eEmail,
        this.state.eCell,
        this.state.eAddress,
        this.state.eComments,
        this.state.eRegisterationDate,
        this.state.eGender,
        this.state.eCity,
        this.state.eState,
        this.state.eCountry,
        this.state.matric,
        this.state.enter,
        this.state.graduate,
      );
      this.setState({
        stepForm1: false,
        stepForm2: false,
        stepForm3: true
      })
      this.setState({ isChecked: !this.state.isChecked });
    }
    else {
      return false
    }
  }

  isEditStep1() {
    this.setState({
      eName: this.props.stateManagement.eName,
      eLastName: this.props.stateManagement.eLastName,
      eEmail: this.props.stateManagement.eEmail,
      eCell: this.props.stateManagement.eCell,
      eAddress: this.props.stateManagement.eAddress,
      eComments: this.props.stateManagement.eComments,
    })
    this.setState({
      stepForm1: true,
      stepForm2: false,
      stepForm3: false,
    })
  }

  isEditStep2() {
    this.setState({
      eRegisterationDate: this.props.stateManagement.eRegisterationDate,
      eGender: this.props.stateManagement.eGender,
      eCity: this.props.stateManagement.eCity,
      eState: this.props.stateManagement.eState,
      eCountry: this.props.stateManagement.eCountry,
      matric: this.props.stateManagement.matric,
      enter: this.props.stateManagement.enter,
      graduate: this.props.stateManagement.graduate,
    })
    this.setState({
      stepForm1: false,
      stepForm2: true,
      stepForm3: false,
    })
  }

  render() {

    return (
      <div className="overviewBox clearfix">

        {this.state.stepForm1 ?
          <div>
            <h2>Step 1</h2>
            <div className="col-md-4 customFormGroup">
              <label>eName</label>
              <input type="text"
                className="form-control"
                name="eName"
                value={this.state.eName}
                onChange={this.handleChange.bind(this)}
                placeholder="Enetr eName" />
              <p className="errorstyle">{this.state.eNameError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eLastName</label>
              <input type="text"
                className="form-control"
                name="eLastName"
                value={this.state.eLastName}
                onChange={this.handleChange.bind(this)}
                placeholder="Enetr eLastName" />
              <p className="errorstyle">{this.state.eLastNameError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eEmail</label>
              <input type="text"
                className="form-control"
                name="eEmail"
                value={this.state.eEmail}
                onChange={this.handleChange.bind(this)}
                placeholder="Enetr eEmail" />
              <p className="errorstyle">{this.state.eEmailError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eCell</label>
              <input type="text"
                className="form-control"
                name="eCell"
                value={this.state.eCell}
                onChange={this.handleChange.bind(this)}
                placeholder="Enetr eCell" />
              <p className="errorstyle">{this.state.eCellError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eAddress</label>
              <input type="text"
                className="form-control"
                name="eAddress"
                value={this.state.eAddress}
                onChange={this.handleChange.bind(this)}
                placeholder="Enetr eAddress" />
              <p className="errorstyle">{this.state.eAddressError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eComments</label>
              <textarea
                className="form-control"
                name="eComments"
                value={this.state.eComments}
                onChange={this.handleChange.bind(this)}
                placeholder="Enetr eComments" ></textarea>
              <p className="errorstyle">{this.state.eCommentsError}</p>
            </div>

            <div className="col-md-12">
              <button onClick={this.next1.bind(this)} className="btn btn-primary btnRight">Next</button>
            </div>
          </div>
          : null}

        {this.state.stepForm2 ?
          <div>
            <h2>Step 2</h2>
            <div className="fetchData">
              <p>eName: <span>{this.props.stateManagement.eName}</span></p>
              <p>eLastName: <span>{this.props.stateManagement.eLastName}</span></p>
              <p>eEmail: <span>{this.props.stateManagement.eEmail}</span></p>
              <p>eCell: <span>{this.props.stateManagement.eCell}</span></p>
              <p>eAddress: <span>{this.props.stateManagement.eAddress}</span></p>
              <p>eComments: <span>{this.props.stateManagement.eComments}</span></p>
            </div>

            <div className="clearfix"></div>
            <div className="col-md-4 customFormGroup">
              <label>eCity</label>
              <select
                className="form-control"
                onChange={this.handleChange.bind(this)}
                value={this.state.eCity}
                name="eCity">
                {this.state.selectCity.map((item, index) => {
                  return <option
                    key={index.toString()}
                    value={item.value}>{item.lable}</option>;
                })}
              </select>
              <p className="errorstyle">{this.state.eCityError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eState</label>
              <select
                className="form-control"
                onChange={this.handleChange.bind(this)}
                value={this.state.eState}
                name="eState">
                {this.state.selectState.map((item, index) => {
                  return <option
                    key={index.toString()}
                    value={item.value}>{item.lable}</option>;
                })}
              </select>
              <p className="errorstyle">{this.state.eStateError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eCountry</label>
              <select
                className="form-control"
                onChange={this.handleChange.bind(this)}
                value={this.state.eCountry}
                name="eCountry">
                {this.state.selectCountry.map((item, index) => {
                  return <option
                    key={index.toString()}
                    value={item.value}>{item.lable}</option>;
                })}
              </select>
              <p className="errorstyle">{this.state.eCountryError}</p>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eRegisterationDate</label>
              <input
                className="form-control"
                type="date"
                value={this.state.eRegisterationDate.toString()}
                name="eRegisterationDate"
                onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col-md-4 customFormGroup">
              <label>eGender</label>
              <label>Male <input type="radio"
                name="eGender"
                onChange={this.handleChange.bind(this)}
                value={this.state.male ? '' : 'Male'}
              /></label>
              <label>Female <input type="radio"
                name="eGender"
                onChange={this.handleChange.bind(this)}
                value={this.state.female ? '' : 'Female'}
              />
              </label>
            </div>
            <div className="col-md-4 customFormGroup">
              <label>Qualification</label>
              <label>Matric <input type="checkbox"
                name="matric"
                checked={this.state.matric ? 'checked' : ''}
                onChange={this.handleChange.bind(this)}
                value={this.state.matric ? '' : 'matric'}
              /></label>
              <label>Enter <input type="checkbox"
                name="enter"
                checked={this.state.enter ? 'checked' : ''}
                onChange={this.handleChange.bind(this)}
                value={this.state.enter ? '' : 'enter'}
              />
              </label>
              <label>Graduate <input type="checkbox"
                name="graduate"
                checked={this.state.graduate ? 'checked' : ''}
                onChange={this.handleChange.bind(this)}
                value={this.state.graduate ? '' : 'graduate'}
              />
              </label>
            </div>
            <button onClick={this.isEditStep1.bind(this)} className="btn btn-default btnLeft">Back</button>
            <button onClick={this.next2.bind(this)} className="btn btn-default btnRight">Next</button>
          </div>
          : null}

        {this.state.stepForm3 ?
          <div>
            <h2>Step 3</h2>
            <div className="fetchData">
              <p>eName: <span>{this.props.stateManagement.eName}</span></p>
              <p>eLastName: <span>{this.props.stateManagement.eLastName}</span></p>
              <p>eEmail: <span>{this.props.stateManagement.eEmail}</span></p>
              <p>eCell: <span>{this.props.stateManagement.eCell}</span></p>
              <p>eAddress: <span>{this.props.stateManagement.eAddress}</span></p>
              <p>eComments: <span>{this.props.stateManagement.eComments}</span></p>
            </div>
            <div className="fetchData">
              <p>eRegisterationDate: <span>{moment(this.props.stateManagement.eRegisterationDate).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
              <p>eGender: <span>{this.props.stateManagement.eGender}</span></p>
              <p>eCity: <span>{this.props.stateManagement.eCity}</span></p>
              <p>eState: <span>{this.props.stateManagement.eState}</span></p>
              <p>eCountry: <span>{this.props.stateManagement.eCountry}</span></p>
              <p>qualification:
                <span>{this.props.stateManagement.matric}</span><br />
                <span>{this.props.stateManagement.enter}</span><br />
                <span>{this.props.stateManagement.graduate}</span></p>
            </div>
            <button onClick={this.isEditStep2.bind(this)} className="btn btn-default btnLeft">Back</button>
          </div>
          : null}

      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    stateManagement: state.stateManagement,
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    changeStateFormToReducer: stepFromData

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aboutus);
