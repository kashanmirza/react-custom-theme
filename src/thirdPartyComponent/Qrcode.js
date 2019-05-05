import React, { Component } from 'react';
var QRCode = require('qrcode.react');

class Qrcode extends Component {

  constructor(props) {
    super(props);
    //this.showQRcode = this.showQRcode.bind(this);
    this.state = {
      QRString: "",
    }
  }

  onHandleChange() {
    console.log('State is ', this.state.QRString);
  }

  showQRcode() {

    var mValue = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      cell: this.refs.cell.value,
      address: this.refs.address.value,
      country: this.refs.country.value
    };
    var msg = JSON.stringify(mValue);
    const newState = {
      QRString: JSON.stringify(mValue),
    };

    this.setState(newState, () => {
      this.onHandleChange()
    });
    let nextState = Object.assign({},
      this.state,
      { QRString: msg });

    // console.log('State is ', this.state.QRString);
    // console.log('Value is ', mValue);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
            <a target="_blank" href="https://github.com/zpao/qrcode.react">https://github.com/zpao/qrcode.react</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>QR Code</h2>
              <div className="col-md-8">
                <div className="row">
                  <div className="customFormGroup clearfix">
                    <label>Name</label>
                    <input type="text" ref="name" className="form-control input-sm" placeholder="Name" id="name" />
                  </div>
                  <div className="customFormGroup clearfix">
                    <label>Email</label>
                    <input type="email" ref="email" className="form-control input-sm" placeholder="Email" id="email" />
                  </div>
                  <div className="customFormGroup clearfix">
                    <label>Cell</label>
                    <input type="text" ref="cell" className="form-control input-sm" placeholder="Cell" id="cell" />
                  </div>
                  <div className="customFormGroup clearfix">
                    <label>Address</label>
                    <input type="text" ref="address" className="form-control input-sm" placeholder="Address" id="address" />
                  </div>
                  <div className="customFormGroup clearfix">
                    <label>Country</label>
                    <input type="text" ref="country" className="form-control input-sm" placeholder="Country" id="country" />
                  </div>
                  <div className="marginTop">
                    <input type="button" className="btn btn-primary btnRight" onClick={this.showQRcode.bind(this)} value="Generate" />
                    <input type="button" className="btn btn-default btnRight" value="RESET" />
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{textAlign:'center',marginTop:'50px'}}>
                <QRCode value={this.state.QRString} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qrcode;
