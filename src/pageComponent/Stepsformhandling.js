import React, { Component } from 'react';
import $ from 'jquery';
import Buttonscomponent from '../customComponent/Buttonscomponent';
import Textinputcomponent from '../customComponent/Textinputcomponent';
import Radiocomponent from '../customComponent/Radiocomponent';
import Checkboxcomponent from '../customComponent/Checkboxcomponent';
import Textareacomponent from '../customComponent/Textareacomponent';
import Reactselectcomponent from '../customComponent/Reactselectcomponent';
import { Checkbox, Radio, RadioGroup } from 'react-icheck';
var moment = require('moment');

class Stepsformhandling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step1: true,
      step2: false,
      step3: false,

    }
  }

  componentWillMount() {

  }

  step3Function() {
    this.setState({
      step1: false,
      step2: false,
      step3: false,
    })
  }

  back1Function() {
    this.setState({
      step1: true,
      step2: false,
      step3: false,
    })
    console.log('call func');
  }

  back2Function() {
    this.setState({
      step1: false,
      step2: true,
      step3: false,
    })
  }

  fetchFirstForm = (firstFormData) => {
    if (firstFormData.firstName != ''
      && firstFormData.lastName != ''
      && firstFormData.email != ''
      && firstFormData.cell != ''
      && firstFormData.address != ''
      && firstFormData.selectedValue != ''
      && firstFormData.gender != ''
      && firstFormData.comments != '') {

      this.setState({ step1: false, step2: true, step3: false });
    }
    else { }
    this.setState({
      firstFormData: firstFormData
    })
  }

  fetchSecondForm = (secondFormData) => {
    if (secondFormData.selectedProgram != ''
      && secondFormData.refrenceName != '') {

      this.setState({ step1: false, step2: false, step3: true });
    }
    else { }
    this.setState({
      secondFormData: secondFormData
    })
  }

  render() {

    return (
      <div>
        <div className="col-md-12">
          <div className="row">

            <div className="overviewBox clearfix">

              {this.state.step1 ?
                <Step1Form sendData={firstFormData => this.fetchFirstForm(firstFormData)} />
                : null}

              {this.state.step2 ?
                <div>
                  {this.state.firstFormData != undefined ?
                    <div className="fetchData">
                      <p>First Name: <span>{this.state.firstFormData.firstName}</span></p>
                      <p>Last Name: <span>{this.state.firstFormData.lastName}</span></p>
                      <p>Email: <span>{this.state.firstFormData.email}</span></p>
                      <p>Cell: <span>{this.state.firstFormData.cell}</span></p>
                      <p>Address: <span>{this.state.firstFormData.address}</span></p>
                      <p>Country: <span>{this.state.firstFormData.selectedValue}</span></p>
                      <p>Gender: <span>{this.state.firstFormData.gender}</span></p>
                      <p>Education: <span>{this.state.firstFormData.matric}, {this.state.firstFormData.enter}, {this.state.firstFormData.graduate}</span></p>
                      <p>Comments: <span>{this.state.firstFormData.comments}</span></p>
                    </div>
                    : null}
                  <Step2Form
                    back1={() => this.back1Function()}
                    sendData2={secondFormData => this.fetchSecondForm(secondFormData)} />
                </div> : null}

              {this.state.step3 ?
                <div>
                  <h2>Step 3</h2>
                  <div className="stepwizard">
                    <div className="stepwizard-row">
                      <div className="stepwizard-step">
                        <button type="button" className="btn btn-primary btn-circle">1</button>
                        <p>Step 1</p>
                      </div>
                      <div className="stepwizard-step">
                        <button type="button" className="btn btn-primary btn-circle">2</button>
                        <p>Step 2</p>
                      </div>
                      <div className="stepwizard-step">
                        <button type="button" className="btn btn-primary btn-circle">3</button>
                        <p>Step 3</p>
                      </div>
                    </div>
                  </div>


                  {this.state.firstFormData != undefined ?
                    <div className="fetchData">
                      <p>First Name: <span>{this.state.firstFormData.firstName}</span></p>
                      <p>Last Name: <span>{this.state.firstFormData.lastName}</span></p>
                      <p>Email: <span>{this.state.firstFormData.email}</span></p>
                      <p>Cell: <span>{this.state.firstFormData.cell}</span></p>
                      <p>Address: <span>{this.state.firstFormData.address}</span></p>
                      <p>Country: <span>{this.state.firstFormData.selectedValue}</span></p>
                      <p>Gender: <span>{this.state.firstFormData.gender}</span></p>
                      <p>Education: <span>{this.state.firstFormData.matric}, {this.state.firstFormData.enter}, {this.state.firstFormData.graduate}</span></p>
                      <p>Comments: <span>{this.state.firstFormData.comments}</span></p>
                    </div>
                    : null}

                  {this.state.secondFormData != undefined ?
                    <div className="fetchData">
                      <p>Program: <span>
                        {this.state.secondFormData.physics} ,
                        {this.state.secondFormData.chemistry} ,
                        {this.state.secondFormData.maths} ,
                        {this.state.secondFormData.english} ,
                        {this.state.secondFormData.calculus} ,
                        {this.state.secondFormData.linearalgebra}</span></p>
                      <p>Select Date: <span>
                        {moment(this.state.secondFormData.selectDate).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                      <p>Program: <span>{this.state.secondFormData.selectedProgram}</span></p>
                      <p>Refrence: <span>{this.state.secondFormData.refrenceName}</span></p>
                    </div>
                    : null}


                  <Buttonscomponent
                    buttonFunction={() => this.back2Function()}
                    btnType="button"
                    btnCalss="btn btn-default btnLeft marginTop"
                    btnTitle="Back"
                  />

                  <Buttonscomponent
                    buttonFunction={() => this.step3Function()}
                    btnType="button"
                    btnCalss="btn btn-success btnRight marginTop"
                    btnTitle="Finished"
                  />
                </div>
                :
                null}

            </div>





          </div>
        </div>
      </div>
    );
  }
}

class Step1Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      selectCountry: [],
      firstName: '',
      lastName: '',
      email: '',
      cell: '',
      address: '',
      comments: '',
      matric: '',
      enter: '',
      graduate: '',
      gender: '',

    }
  }

  componentDidMount() {

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

    // var result = selectCountry[0];
    // this.setState({ selectCountry: selectCountry, value: result });

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onsubmit = e => {
    // e.preventDefault();

    if (this.state.firstName === '') {
      this.setState({
        firstNameError: 'Please Enter First Name'
      })
    }
    else {
      this.setState({
        firstNameError: false
      })
    }

    if (this.state.lastName === '') {
      this.setState({
        lastNameError: 'Please Enter Last Name'
      })
    }
    else {
      this.setState({
        lastNameError: false
      })
    }

    let emailRegx = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/;
    if ((this.state.email) === "" || (emailRegx.test(this.state.email) == false)) {
      this.setState({
        emailError: 'Please Enter Email Valid'
      })
    }
    else {
      this.setState({
        emailError: false
      })
    }

    let numberRegx = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
    if ((this.state.cell) === "" || (numberRegx.test(this.state.cell) == false)) {
      this.setState({
        cellError: 'Please Enter Cell Valid'
      })
    }
    else {
      this.setState({
        cellError: false
      })
    }

    if (this.state.address === '') {
      this.setState({
        addressError: 'Please Enter Address'
      })
    }
    else {
      this.setState({
        addressError: false
      })
    }

    if (this.state.selectedValue === '') {
      this.setState({
        selectCountryError: 'Please Select Country'
      })
    }
    else {
      this.setState({
        selectCountryError: false
      })
    }

    if (this.state.gender === '') {
      this.setState({
        genderError: 'Please Select Gender'
      })
    }
    else {
      this.setState({
        genderError: false
      })
    }

    if (this.state.comments === '') {
      this.setState({
        commentsError: 'Please Select Comments'
      })
    }
    else {
      this.setState({
        commentsError: false
      })
    }

    this.props.sendData(this.state);
    console.log(this.state, 'this data');
  }


  render() {

    return (
      <div>
        <h2>Step 1</h2>
        <div className="stepwizard">
          <div className="stepwizard-row">
            <div className="stepwizard-step">
              <button type="button" className="btn btn-primary btn-circle">1</button>
              <p>Step 1</p>
            </div>
            <div className="stepwizard-step">
              <button type="button" className="btn btn-default btn-circle" disabled="disabled">2</button>
              <p>Step 2</p>
            </div>
            <div className="stepwizard-step">
              <button type="button" className="btn btn-default btn-circle" disabled="disabled">3</button>
              <p>Step 3</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <Textinputcomponent
            inputLable="First Name"
            inputPlaceholder="First Name Enter"
            inputName="firstName"
            inputType="text"
            inputValue={this.state.firstName}
            inputDisabled={false}
            inputCalssName="form-control input-sm"
            inputID=""
            inputHandle={e => this.handleChange(e)}
          />
          <p className="errorstyle">{this.state.firstNameError}</p>
        </div>

        <div className="col-md-4">
          <Textinputcomponent
            inputLable="Last Name"
            inputPlaceholder="Last Name Enter"
            inputName="lastName"
            inputType="text"
            inputValue={this.state.lastName}
            inputDisabled={false}
            inputCalssName="form-control input-sm"
            inputID=""
            inputHandle={e => this.handleChange(e)}
          />
          <p className="errorstyle">{this.state.lastNameError}</p>
        </div>

        <div className="col-md-4">
          <Textinputcomponent
            inputLable="Email"
            inputPlaceholder="Email Enter"
            inputName="email"
            inputType="text"
            inputValue={this.state.email}
            inputDisabled={false}
            inputCalssName="form-control input-sm"
            inputID=""
            inputHandle={e => this.handleChange(e)}
          />
          <p className="errorstyle">{this.state.emailError}</p>
        </div>

        <div className="col-md-4">
          <Textinputcomponent
            inputLable="Cell"
            inputPlaceholder="Cell Enter"
            inputName="cell"
            inputType="text"
            inputValue={this.state.cell}
            inputDisabled={false}
            inputCalssName="form-control input-sm"
            inputID=""
            inputHandle={e => this.handleChange(e)}
          />
          <p className="errorstyle">{this.state.cellError}</p>
        </div>

        <div className="col-md-4">
          <Textinputcomponent
            inputLable="Address"
            inputPlaceholder="Address Enter"
            inputName="address"
            inputType="text"
            inputValue={this.state.address}
            inputDisabled={false}
            inputCalssName="form-control input-sm"
            inputID=""
            inputHandle={e => this.handleChange(e)}
          />
          <p className="errorstyle">{this.state.addressError}</p>
        </div>

        <div className="col-md-4">
          <Reactselectcomponent
            rcSelectCalss="form-control input-sm"
            rcSelectLable="Select Country"
            rcSelectFunc={e => this.handleChange(e)}
            rcSelectVal={this.state.selectedValue}
            rsSelectID=""
            rcSelectNam="selectedValue"
            rcSelectList={this.state.selectCountry}
          />
          <p className="errorstyle">{this.state.selectCountryError}</p>
        </div>

        <div className="col-md-4">
          <div className="customCheckboxRadioGroup clearfix">
            <label className="customLable">Select Gender</label>
            <Radiocomponent
              radioClass="radio-inline"
              radioName="gender"
              radioLable="Male"
              radioDisabled={false}
              radioValue={this.state.male ? '' : 'Male'}
              radioHandle={e => this.handleChange(e)}
            />
            <Radiocomponent
              radioClass="radio-inline"
              radioName="gender"
              radioLable="Female"
              radioDisabled={false}
              radioValue={this.state.female ? '' : 'Female'}
              radioHandle={e => this.handleChange(e)}
            />

          </div>
          <p className="errorstyle">{this.state.genderError}</p>
        </div>

        <div className="col-md-4">
          <div className="customCheckboxRadioGroup clearfix">
            <label className="customLable">Select Education</label>
            <Checkboxcomponent
              checkboxClass="checkbox-inline"
              checkboxName="matric"
              checkboxLable="Matric"
              checkboxDisabled={false}
              checkboxValue={this.state.matric ? '' : 'matric'}
              checkboxHandle={e => this.handleChange(e)}
            />
            <Checkboxcomponent
              checkboxClass="checkbox-inline"
              checkboxName="enter"
              checkboxLable="Enter"
              checkboxDisabled={false}
              checkboxValue={this.state.enter ? '' : 'enter'}
              checkboxHandle={e => this.handleChange(e)}
            />
            <Checkboxcomponent
              checkboxClass="checkbox-inline"
              checkboxName="graduate"
              checkboxLable="Graduate"
              checkboxDisabled={false}
              checkboxValue={this.state.graduate ? '' : 'graduate'}
              checkboxHandle={e => this.handleChange(e)}
            />
          </div>
        </div>

        <div className="col-md-4">
          <Textareacomponent
            textareaLable="Comments Here"
            textareaCalssName="form-control"
            textareaPlaceholder="Comments ..."
            textareaName="comments"
            textareaRows="3"
            textareaCols="2"
            textareaID=""
            textareaDisabled={false}
            textareaValue={this.state.comments}
            textareaHandle={e => this.handleChange(e)}
          />
          <p className="errorstyle">{this.state.commentsError}</p>
        </div>

        <div className="col-md-12">
          <Buttonscomponent
            buttonFunction={e => this.onsubmit(e)}
            btnType="button"
            btnCalss="btn btn-success btnRight marginTop"
            btnTitle="Next"
          />
        </div>
      </div>
    )
  }
}

class Step2Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      physics: '',
      chemistry: '',
      maths: '',
      english: '',
      calculus: '',
      linearalgebra: '',
      selectDate: new Date(),
      programList: [],
      selectedProgram: '',
      refrenceName: '',

    }
  }

  componentDidMount() {

    var programList = [
      {
        id: 0,
        lable: 'Select',
        value: '',
      },
      {
        id: 1,
        lable: 'Masters',
        value: 'masters',
      },
      {
        id: 2,
        lable: 'Bachelors',
        value: 'bachelors',
      },
      {
        id: 3,
        lable: 'Diploma',
        value: 'diploma',
      },
      {
        id: 4,
        lable: 'Six Month Course',
        value: 'sixmonthcourse',
      }
    ]

    this.setState({ programList: programList });
  }

  handleChange2 = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onsubmit2 = e => {
    if (this.state.selectedProgram === '') {
      this.setState({
        programError: 'Please Select Program'
      })
    }
    else {
      this.setState({
        programError: false
      })
    }
    if (this.state.refrenceName === '') {
      this.setState({
        refrenceError: 'Please Enter Refrence'
      })
    }
    else {
      this.setState({
        refrenceError: false
      })
    }
    this.props.sendData2(this.state);
    console.log(this.state, 'this data');
  }

  render() {

    console.log('select course',
      this.state.physics,
      this.state.chemistry,
      this.state.maths,
      this.state.english,
      this.state.calculus,
      this.state.linearalgebra);

    console.log('select date', this.state.selectDate);

    return (
      <div>
        <h2>Step 2</h2>
        <div className="stepwizard">
          <div className="stepwizard-row">
            <div className="stepwizard-step">
              <button type="button" className="btn btn-primary btn-circle">1</button>
              <p>Step 1</p>
            </div>
            <div className="stepwizard-step">
              <button type="button" className="btn btn-primary btn-circle">2</button>
              <p>Step 2</p>
            </div>
            <div className="stepwizard-step">
              <button type="button" className="btn btn-default btn-circle" disabled="disabled">3</button>
              <p>Step 3</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 marginTop">
          <Reactselectcomponent
            rcSelectCalss="form-control input-sm"
            rcSelectLable="Select Program"
            rcSelectFunc={e => this.handleChange2(e)}
            rcSelectVal={this.state.selectedProgram}
            rsSelectID=""
            rcSelectNam="selectedProgram"
            rcSelectList={this.state.programList}
          />
          <p className="errorstyle">{this.state.programError}</p>
        </div>

        <div className="col-md-6 marginTop">
          <div className="customFormGroup clearfix">
            <label className="customLable">Select Addmision Date</label>
            <input
              className="form-control input-sm"
              type="date"
              value={this.state.selectDate.toString()}
              name="selectDate"
              onChange={e => this.handleChange2(e)} />
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="col-md-6">
          <Textinputcomponent
            inputLable="Refrence Name"
            inputPlaceholder="Refrence Name Enter"
            inputName="refrenceName"
            inputType="text"
            inputValue={this.state.refrenceName}
            inputDisabled={false}
            inputCalssName="form-control input-sm"
            inputID=""
            inputHandle={e => this.handleChange2(e)}
          />
          <p className="errorstyle">{this.state.refrenceError}</p>
        </div>

        <div className="col-md-6 marginTop">
          <label className="customLable">Select Course</label>
          <div className="checkStyle">
            <Checkbox
              checkboxClass="icheckbox_minimal-blue"
              increaseArea="20%"
              value={this.state.physics ? '' : 'physics'}
              label="Physics"
              name="physics"
              onChange={e => this.handleChange2(e)}
            />
            <Checkbox
              checkboxClass="icheckbox_minimal-blue"
              increaseArea="20%"
              value={this.state.chemistry ? '' : 'chemistry'}
              label="Chemistry"
              name="chemistry"
              onChange={e => this.handleChange2(e)}
            />
            <Checkbox
              checkboxClass="icheckbox_minimal-blue"
              increaseArea="20%"
              value={this.state.maths ? '' : 'maths'}
              label="Maths"
              name="maths"
              onChange={e => this.handleChange2(e)}
            />
            <Checkbox
              checkboxClass="icheckbox_minimal-blue"
              increaseArea="20%"
              value={this.state.english ? '' : 'english'}
              label="English"
              name="english"
              onChange={e => this.handleChange2(e)}
            />
            <Checkbox
              checkboxClass="icheckbox_minimal-blue"
              increaseArea="20%"
              value={this.state.calculus ? '' : 'calculus'}
              label="Calculus"
              name="calculus"
              onChange={e => this.handleChange2(e)}
            />
            <Checkbox
              checkboxClass="icheckbox_minimal-blue"
              increaseArea="20%"
              value={this.state.linearalgebra ? '' : 'linearalgebra'}
              label="Linearalgebra"
              name="linearalgebra"
              onChange={e => this.handleChange2(e)}
            />
          </div>
        </div>


        <div className="col-md-12 marginTop">
          <Buttonscomponent
            buttonFunction={() => this.props.back1()}
            btnType="button"
            btnCalss="btn btn-default btnLeft marginTop"
            btnTitle="Back"
          />
          <Buttonscomponent
            buttonFunction={() => this.onsubmit2()}
            btnType="button"
            btnCalss="btn btn-success btnRight marginTop"
            btnTitle="Next"
          />
        </div>
      </div>
    )
  }

}

export default Stepsformhandling;




