import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class Reactseletc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption1: null,
      selectedOption2: null,
    }
  }

  componentDidMount() {

  }

  handleChange = (selectedOption1) => {
    this.setState({ selectedOption1 });
    console.log(`Option selected1:`, selectedOption1);
  }

  handleChange2 = (selectedOption2) => {
    this.setState({ selectedOption2 });
    console.log(`Option selected2:`, selectedOption2);
  }

  render() {
    const { selectedOption1, selectedOption2 } = this.state;
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
            <a target="_blank" href="https://github.com/JedWatson/react-select">https://github.com/JedWatson/react-select</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>React Seletc</h2>
              <div className="col-md-6 marginTop">
                <Select
                  placeholder="Select Multi Value"
                  isMulti={true}
                  value={selectedOption1}
                  onChange={this.handleChange}
                  options={options}
                />
              </div>
              <div className="col-md-6 marginTop">
                <Select
                  placeholder="Select Single Value"
                  value={selectedOption2}
                  onChange={this.handleChange2}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reactseletc;
