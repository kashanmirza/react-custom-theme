import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import { Tooltip, OverlayTrigger, ButtonToolbar, Button, Popover } from 'react-bootstrap';

class Tooltipexample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  render() {

    const tooltip = (
      <Tooltip id="tooltip">
        <strong>Holy guacamole!</strong> Check this info.
      </Tooltip>
    );

    const popoverLeft = (
      <Popover id="popover-positioned-left" title="Popover left">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverTop = (
      <Popover id="popover-positioned-top" title="Popover top">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverRight = (
      <Popover id="popover-positioned-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );


    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
            <a target="_blank" href="https://5c507d49471426000887a6a7--react-bootstrap.netlify.com/components/tooltips/">https://5c507d49471426000887a6a7--react-bootstrap.netlify.com/components/tooltips/</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>Toottip &amp; Popover Example</h2>
              <div className="marginTop">
                <ButtonToolbar>
                  <OverlayTrigger placement="left" overlay={tooltip}>
                    <Button bsStyle="default">Holy guacamole!</Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={tooltip}>
                    <Button bsStyle="default">Holy guacamole!</Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <Button bsStyle="default">Holy guacamole!</Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="right" overlay={tooltip}>
                    <Button bsStyle="default">Holy guacamole!</Button>
                  </OverlayTrigger>
                </ButtonToolbar>
              </div>
              <div className="marginTop">
                <ButtonToolbar>
                  <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                    <Button>Holy guacamole!</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                    <Button>Holy guacamole!</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                    <Button>Holy guacamole!</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                    <Button>Holy guacamole!</Button>
                  </OverlayTrigger>
                </ButtonToolbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tooltipexample;




