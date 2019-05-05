import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';

class Progressbar extends Component {

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
            <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
            <a target="_blank" href="https://github.com/react-component/progress">https://github.com/react-component/progress</a>
            </h2>
              <div className="overviewBox clearfix">
                <h2>Progress Bar</h2>
                <div className="col-md-3 marginTop">
                  <Line
                    percent="25"
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#D3D3D3"
                    strokeColor="#3f93b0" />
                </div>
                <div className="col-md-3 marginTop">
                  <Line
                    percent="50"
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#D3D3D3"
                    strokeColor="#3f93b0" />
                </div>
                <div className="col-md-3 marginTop">
                  <Circle
                    percent="75"
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#D3D3D3"
                    strokeColor="#3f93b0" />
                </div>
                <div className="col-md-3 marginTop">
                  <Circle
                    percent="25"
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#D3D3D3"
                    strokeColor="#3f93b0" />
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progressbar;
