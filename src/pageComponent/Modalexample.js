import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import { Button, Modal } from 'react-bootstrap';

class Modalexample extends React.Component {
  constructor(props) {
    super(props);

    this.handleHideSmall = this.handleHideSmall.bind(this);
    this.handleHideMedium = this.handleHideMedium.bind(this);
    this.handleHideLarge = this.handleHideLarge.bind(this);

    this.state = {
      smallModal: false,
      mediumModal: false,
      largeModal: false,
    }
  }

  componentDidMount() {

  }

  handleHideSmall() {
    this.setState({ smallModal: false });
  }

  handleHideMedium() {
    this.setState({ mediumModal: false });
  }

  handleHideLarge() {
    this.setState({ largeModal: false });
  }

  smallModalOpen() {
    this.setState({
      smallModal: true
    })
  }

  mediumModalOpen() {
    this.setState({
      mediumModal: true
    })
  }

  largeModalOpen() {
    this.setState({
      largeModal: true
    })
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
          <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
            <a target="_blank" href="https://5c507d49471426000887a6a7--react-bootstrap.netlify.com/components/modal/">https://5c507d49471426000887a6a7--react-bootstrap.netlify.com/components/modal/</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>Modal Example</h2>

              <Button className="btn btn-link btn-sm" bsSize="small"
                onClick={() => this.smallModalOpen()}>Small Modal</Button>
              <Modal
                show={this.state.smallModal}
                onHide={this.handleHideSmall}
                bsSize="small"
                container={this}
                aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">
                    Small Modal
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                  ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHideSmall}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Button className="btn btn-link btn-md" bsSize="medium"
                onClick={() => this.mediumModalOpen()}>Medium Modal</Button>
              <Modal
                show={this.state.mediumModal}
                onHide={this.handleHideMedium}
                container={this}
                aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">
                    Medium Modal
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                  ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHideMedium}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Button className="btn btn-link btn-lg" bsSize="large"
                onClick={() => this.largeModalOpen()}>Large Modal</Button>
              <Modal
                show={this.state.largeModal}
                onHide={this.handleHideLarge}
                bsSize="large"
                container={this}
                aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">
                    Large Modal
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                  ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHideLarge}>Close</Button>
                </Modal.Footer>
              </Modal>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modalexample;




