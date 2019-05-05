import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
var moment = require('moment');

class Datetimepicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {

  }

  onChange = date => this.setState({ date }, console.log('select', date))

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
            <a target="_blank" href="https://github.com/wojtekmaj/react-datetime-picker">https://github.com/wojtekmaj/react-datetime-picker</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>Datetime Picker</h2>
              <div className="marginTop">
                <DateTimePicker
                  onChange={this.onChange}
                  value={this.state.date}
                />
                <p className="paddingTop">{moment(this.state.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Datetimepicker;
