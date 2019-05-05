import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import Progressbarcomponent from '../customComponent/Progressbarcomponent';

class Progressbarcustom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      accountsList: [],
      currentAccountSelected: '',

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="overviewBox clearfix">
              <h2>Progressbar</h2>

              <Progressbarcomponent
                progressTitle="Orders Received"
                progressValue="50%"
                progressStyle={{
                  backgroundColor: "#8cd958",
                  width: "50%",
                }}
              />

              <Progressbarcomponent
                progressTitle="Total Sales"
                progressValue="75%"
                progressStyle={{
                  backgroundColor: "#75c0f8",
                  width: "25%",
                }}
              />

              <Progressbarcomponent
                progressTitle="Revenue"
                progressValue="60%"
                progressStyle={{
                  backgroundColor: "#edb666",
                  width: "75%",
                }}
              />

              <Progressbarcomponent
                progressTitle="Total Profit"
                progressValue="25%"
                progressStyle={{
                  backgroundColor: "#e9897c",
                  width: "45%",
                }}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progressbarcustom;




