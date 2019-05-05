import React, { Component } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const nodes = [{
  value: 'automobile industry',
  label: 'Automobile Industry',
  children: [
    { value: 'honda', label: 'Honda' },
    { value: 'toyata', label: 'Toyata' },
    { value: 'suzuki', label: 'Suzuki' },
  ],
},
{
  value: 'mobile industry',
  label: 'Mobile Industry',
  children: [
    { value: 'nokia', label: 'Nokia' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'huawei', label: 'Huawei' },
    { value: 'HTC', label: 'HTC' },
    { value: 'apple', label: 'Apple' },
    { value: 'oppo', label: 'Oppo' },
    { value: 'lenovo', label: 'Lenovo' },
  ],
},
];

class Treemenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      expanded: [],
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
            <a target="_blank" href="https://reactjsexample.com/a-simple-and-elegant-checkbox-tree-for-react/">https://reactjsexample.com/a-simple-and-elegant-checkbox-tree-for-react/</a>
              <a target="_blank" href="https://github.com/jakezatecky/react-checkbox-tree">https://github.com/jakezatecky/react-checkbox-tree</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>Tree Menu</h2>
              <div className="marginTop">
                <CheckboxTree
                  nodes={nodes}
                  checked={this.state.checked}
                  expanded={this.state.expanded}
                  onCheck={checked => this.setState({ checked })}
                  onExpand={expanded => this.setState({ expanded })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Treemenu;
