import React, { Component } from 'react';
import 'icheck/skins/all.css'; 
import { Checkbox, Radio, RadioGroup } from 'react-icheck';

class Checkboxradiobutton extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Links
            <a target="_blank" href="https://www.npmjs.com/package/react-icheck">https://www.npmjs.com/package/react-icheck</a>
              <a target="_blank" href="http://luqin.xyz/react-icheck/#/?_k=6oo5u0">http://luqin.xyz/react-icheck/#/?_k=6oo5u0</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>Checkbox Radio Button</h2>
              <div className="col-md-3 marginTop">
                <div className="checkStyle">
                  <Checkbox
                    checkboxClass="icheckbox_square-blue"
                    increaseArea="20%"
                    label="Checkbox"
                    name="check1"
                  />
                </div>
              </div>
              <div className="col-md-3 marginTop">
                <div className="radioStyle">
                  <Radio
                    radioClass="iradio_square-blue"
                    increaseArea="20%"
                    label="Radio"
                    name="radio1"
                  />
                </div>
              </div>
              <div className="col-md-6 marginTop">
                <div className="radioGroupStyle">
                  <RadioGroup name="radio" value="3">
                    <Radio
                      value="3"
                      radioClass="iradio_square-blue"
                      increaseArea="20%"
                      label="Radio1"
                    />
                    <Radio
                      value="4"
                      radioClass="iradio_square-blue"
                      increaseArea="20%"
                      label="Radio2"
                    />
                    <Radio
                      value="5"
                      radioClass="iradio_square-blue"
                      increaseArea="20%"
                      label="Radio3"
                      disabled
                    />
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkboxradiobutton;
