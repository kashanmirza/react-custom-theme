import React, { Component } from 'react';
import Switch from 'react-bootstrap-switch';
import 'react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.css';

class Switchbutton extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  changeStatus(elem, state) {
    console.log('handleSwitch. elem:', elem);
    console.log('name:', elem.props.name);
    console.log('new state:', state);
  }

  render() {

    return (
      <div>
        <div className="col-md-12">
          <div className="row">
          <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
          <a target="_blank" href="https://github.com/Julusian/react-bootstrap-switch">https://github.com/Julusian/react-bootstrap-switch</a>
          </h2>
            <div className="">
              <div className="overviewBox">
                <h2>Switch Button</h2>
                <div className="marginAll">
                  <Switch
                    animate={true}
                    value={this.state.state}
                    state={this.state.state}
                    offColor="danger"
                    onColor="success"
                    bsSize='mini'
                    handleWidth='auto'
                    onText='Active'
                    offText='Deactive'
                    onChange={(el, state) => this.changeStatus(el, state)} name='test' />
                </div>
                <div className="marginAll">
                  <Switch
                    animate={true}
                    value={this.state.state}
                    state={this.state.state}
                    inverse={true}
                    offColor="success"
                    onColor="danger"
                    bsSize='small'
                    handleWidth='auto'
                    onText='Deactive'
                    offText='Active'
                    onChange={(el, state) => this.changeStatus(el, state)} name='test' />
                </div>
                <div className="marginAll">
                  <Switch
                    animate={true}
                    value={this.state.state}
                    state={this.state.state}
                    offColor="danger"
                    onColor="success"
                    bsSize='normal'
                    handleWidth='auto'
                    onText='Active'
                    offText='Deactive'
                    onChange={(el, state) => this.changeStatus(el, state)} name='test' />
                </div>
                <div className="marginAll">
                  <Switch
                    animate={true}
                    value={this.state.state}
                    state={this.state.state}
                    inverse={true}
                    offColor="success"
                    onColor="danger"
                    bsSize='large'
                    handleWidth='auto'
                    onText='Deactive'
                    offText='Active'
                    onChange={(el, state) => this.changeStatus(el, state)} name='test' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div >
    );
  }
}

export default Switchbutton;
