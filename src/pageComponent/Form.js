import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import Textinputcomponent from '../customComponent/Textinputcomponent';
import Textinputcomponentwithicon from '../customComponent/Textinputcomponentwithicon';
import Textareacomponent from '../customComponent/Textareacomponent';
import Reactselectcomponent from '../customComponent/Reactselectcomponent';
import Checkboxcomponent from '../customComponent/Checkboxcomponent';
import Radiocomponent from '../customComponent/Radiocomponent';
import Reactselectcomponent2 from '../customComponent/Reactselectcomponent2';
var sortBy = require('sort-by');

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      name6: '',
      comments: '',
      selectedValue: '',
      selectedList: [],

      check1: '',
      check2: '',
      check3: '',
      check4: '',
      check5: '',
      check6: '',

      radio1: '',
      radio2: '',

      accountsList: [],
      selectToAccount: '',
      selectFromAccount: '',

    }
  }

  componentDidMount() {

    var selectedList = [
      {
        id: 0,
        lable: 'Select',
        value: '0',
      },
      {
        id: 1,
        lable: 'Nokia',
        value: 'nokia',
      },
      {
        id: 2,
        lable: 'Apple',
        value: 'apple',
      },
      {
        id: 3,
        lable: 'Samsung',
        value: 'samsung',
      },
      {
        id: 4,
        lable: 'Huawei',
        value: 'huawei',
      },
      {
        id: 5,
        lable: 'Oppo',
        value: 'oppo',
      },
    ]

    this.setState({ selectedList: selectedList });

    var accountsList = [
      {
        id: 1,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Muhammad Waqas",
        accountNumber: "8523-9632-7412-7412",
        accountBalance: '$500',
        accountNik: "waqas"
      },
      {
        id: 2,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Alber Khan",
        accountNumber: "0147-8520-7412-7531",
        accountBalance: '$1500',
        accountNik: "alber"
      },
      {
        id: 3,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Ali Khan",
        accountNumber: "7410-7531-9510-0147",
        accountBalance: '$800',
        accountNik: "ali"
      },
      {
        id: 4,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Waseem Khan",
        accountNumber: "8523-7520-0321-1111",
        accountBalance: '$9500',
        accountNik: "waseem"
      },
      {
        id: 5,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Abdal Ahmed",
        accountNumber: "1201-1596-3025-0147",
        accountBalance: '$950',
        accountNik: "abdal"
      },
      {
        id: 6,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Humza Khan",
        accountNumber: "0147-7410-9510-0142",
        accountBalance: '$300',
        accountNik: "humza"
      },
      {
        id: 7,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Arsalan Ahmed",
        accountNumber: "1111-9632-0000-9510",
        accountBalance: '$650',
        accountNik: "arsalan"
      },
      {
        id: 8,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Bilal Khan",
        accountNumber: "9521-0000-1111-2103",
        accountBalance: '$1500',
        accountNik: "bilal"
      },
      {
        id: 8,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Fahad Ahmed",
        accountNumber: "7520-9522-0244-0111",
        accountBalance: '$2500',
        accountNik: "fahad"
      },
      {
        id: 10,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Azeem Ahmed",
        accountNumber: "0321-9520-0088-1100",
        accountBalance: '$1600',
        accountNik: "azeem"
      },
      {
        id: 11,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Umair Khan",
        accountNumber: "7410-9521-2225-0007",
        accountBalance: '$300',
        accountNik: "umair"
      },
      {
        id: 12,
        accountImg: "assets/images/accountHolderImg.png",
        accountTitle: "Wasif Khan",
        accountNumber: "9531-0002-1155-9521",
        accountBalance: '$2300',
        accountNik: "wasif"
      }
    ]
    accountsList.sort(sortBy('accountTitle'));
    
    var toAccountDefault = accountsList[0];
    this.setState({ accountsList: accountsList, selectToAccount: toAccountDefault });

    var fromAccountDefault = accountsList[1];
    this.setState({ accountsList: accountsList, selectFromAccount: fromAccountDefault });

  }

  selectToAccountHandle(item) {
    this.setState({
      selectToAccount: item
    })
    console.log('select account ...', item)
  }

  selectFromAccountHandle(item) {
    this.setState({
      selectFromAccount: item
    })
    console.log('select account ...', item)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="overviewBox clearfix">
              <h2>Custom Input Field Component</h2>
              <div className="col-md-4">
                <Textinputcomponent
                  inputLable="Name1"
                  inputPlaceholder="Enter Your Name1"
                  inputName="name1"
                  inputType="text"
                  inputValue={this.state.name1}
                  inputDisabled={false}
                  inputCalssName="form-control input-sm"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponent
                  inputLable="Name2"
                  inputPlaceholder="Enter Your Name2"
                  inputName="name2"
                  inputType="text"
                  inputValue={this.state.name2}
                  inputDisabled={false}
                  inputCalssName="form-control input-md"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponent
                  inputLable="Name3"
                  inputPlaceholder="Enter Your Name3"
                  inputName="name3"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name3}
                  inputCalssName="form-control input-lg"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponentwithicon
                  inputLable="Name4"
                  inputIcon="glyphicon glyphicon-user"
                  inputPlaceholder="Enter Your Name 4"
                  inputName="name4"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name4}
                  inputCalssName="form-control input-sm"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponentwithicon
                  inputLable="Name5"
                  inputIcon="glyphicon glyphicon-envelope"
                  inputPlaceholder="Enter Your Name 5"
                  inputName="name5"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name5}
                  inputCalssName="form-control input-md"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-4">
                <Textinputcomponentwithicon
                  inputLable="Name6"
                  inputIcon="glyphicon glyphicon-tags"
                  inputPlaceholder="Enter Your Name 6"
                  inputName="name6"
                  inputType="text"
                  inputDisabled={false}
                  inputValue={this.state.name6}
                  inputCalssName="form-control input-lg"
                  inputID=""
                  inputHandle={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="overviewBox clearfix">
              <h2>Custom Textarea Component &amp; Select Component</h2>
              <div className="col-md-6">
                <label className="customLable">Select To Account</label>
                <Reactselectcomponent2
                  dataList={this.state.accountsList}
                  currentAccountSelected={this.state.selectToAccount}
                  selectCurrentAccount={this.selectToAccountHandle.bind(this)}
                />
              </div>
              <div className="col-md-6">
                <label className="customLable">Select From Account</label>
                <Reactselectcomponent2
                  dataList={this.state.accountsList}
                  currentAccountSelected={this.state.selectFromAccount}
                  selectCurrentAccount={this.selectFromAccountHandle.bind(this)}
                />
              </div>
              <div className="col-md-6">
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
              </div>
              <div className="col-md-6">
                <Reactselectcomponent
                  rcSelectCalss="form-control"
                  rcSelectLable="Select List Value"
                  rcSelectFunc={e => this.handleChange(e)}
                  rcSelectVal={this.state.selectedValue}
                  rsSelectID=""
                  rcSelectNam="selectedValue"
                  rcSelectList={this.state.selectedList}
                />
              </div>             
            </div>

            <div className="overviewBox clearfix">
              <h2>Custom Checkbox Component &amp; Radio Component</h2>
              <div className="col-md-6">
                <div className="customCheckboxRadioGroup clearfix">
                  <label className="customLable">Checkbox Inline</label>
                  <Checkboxcomponent
                    checkboxClass="checkbox-inline"
                    checkboxName="check1"
                    checkboxLable="Option 1"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check1 ? '' : 'select check 1'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox-inline"
                    checkboxName="check2"
                    checkboxLable="Option 2"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check2 ? '' : 'select check 2'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox-inline"
                    checkboxName="check3"
                    checkboxLable="Option 3"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check3 ? '' : 'select check 3'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <label className="customLable">Checkbox</label>
                  <Checkboxcomponent
                    checkboxClass="checkbox"
                    checkboxName="check4"
                    checkboxLable="Option 4"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check4 ? '' : 'select check 4'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox"
                    checkboxName="check5"
                    checkboxLable="Option 5"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check5 ? '' : 'select check 5'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                  <Checkboxcomponent
                    checkboxClass="checkbox"
                    checkboxName="check6"
                    checkboxLable="Option 6"
                    checkboxDisabled={false}
                    checkboxValue={this.state.check6 ? '' : 'select check 6'}
                    checkboxHandle={e => this.handleChange(e)}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="customCheckboxRadioGroup clearfix">
                  <label className="customLable">Radio Inline</label>
                  <Radiocomponent
                    radioClass="radio-inline"
                    radioName="radio1"
                    radioLable="radio 1"
                    radioDisabled={false}
                    radioValue={this.state.r1 ? '' : 'select radio 1'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio-inline"
                    radioName="radio1"
                    radioLable="radio 2"
                    radioDisabled={false}
                    radioValue={this.state.r2 ? '' : 'select radio 2'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio-inline"
                    radioName="radio1"
                    radioLable="radio 3"
                    radioDisabled={false}
                    radioValue={this.state.r3 ? '' : 'select radio 3'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <label className="customLable">Radio</label>
                  <Radiocomponent
                    radioClass="radio"
                    radioName="radio2"
                    radioLable="radio 1"
                    radioDisabled={false}
                    radioValue={this.state.rr1 ? '' : 'select radio 1'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio"
                    radioName="radio2"
                    radioLable="radio 2"
                    radioDisabled={false}
                    radioValue={this.state.rr2 ? '' : 'select radio 2'}
                    radioHandle={e => this.handleChange(e)}
                  />
                  <Radiocomponent
                    radioClass="radio"
                    radioName="radio2"
                    radioLable="radio 3"
                    radioDisabled={false}
                    radioValue={this.state.rr3 ? '' : 'select radio 3'}
                    radioHandle={e => this.handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;




