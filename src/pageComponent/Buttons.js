import React, { Component } from 'react';
import Buttonscomponent from '../customComponent/Buttonscomponent';

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {

  }

  buttonFuncCall() {
    console.log('call button function');
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="overviewBox clearfix">
              <h2>Buttons</h2>
              <div className="col-md-12 marginTop">
                <div className="row">
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btnLeft"
                    btnTitle="Basic"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-default btnLeft"
                    btnTitle="Default"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-primary btnLeft"
                    btnTitle="Primary"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-success btnLeft"
                    btnTitle="Success"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-info btnLeft"
                    btnTitle="Info"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-warning btnLeft"
                    btnTitle="Warning"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-danger btnLeft"
                    btnTitle="Danger"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-link btnLeft"
                    btnTitle="Link"
                  />
                </div>
              </div>
              <div className="col-md-12 marginTop">
                <div className="row">
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btnRight"
                    btnTitle="Basic"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-default btnRight"
                    btnTitle="Default"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-primary btnRight"
                    btnTitle="Primary"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-success btnRight"
                    btnTitle="Success"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-info btnRight"
                    btnTitle="Info"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-warning btnRight"
                    btnTitle="Warning"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-danger btnRight"
                    btnTitle="Danger"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-link btnRight"
                    btnTitle="Link"
                  />
                </div>
              </div>
              <div className="col-md-12 marginTop">
                <div className="row">
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-primary btn-lg btnLeft"
                    btnTitle="Primary"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-success btn-md btnLeft"
                    btnTitle="Success"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-info btn-sm btnLeft"
                    btnTitle="Info"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-warning btn-xs btnLeft"
                    btnTitle="Warning"
                  />
                </div>
              </div>
              <div className="col-md-12 marginTop">
                <div className="row">
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-primary active btnLeft"
                    btnTitle="Active Primary"
                  />
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    buttonDisabled={true}
                    btnCalss="btn btn-primary btnLeft"
                    btnTitle="Disabled Primary"
                  />
                </div>
              </div>
              <div className="col-md-12 marginTop">
                <div className="row">
                  <Buttonscomponent
                    buttonFunction={this.buttonFuncCall}
                    btnType="button"
                    btnCalss="btn btn-primary btn-block"
                    btnTitle="Primary"
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

export default Buttons;




