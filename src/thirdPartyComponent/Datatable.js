import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import Tablebutton from '../customComponent/Tablebutton';

var products = [
  {
    id: 1,
    productName: "Apple",
    productPrice: "$20",
    productDescription: "Apple is good food for health.",
    productCode: 258963147,
    status: 'Active',
    actions: ''
  },
  {
    id: 2,
    productName: "Milk",
    productPrice: "$40",
    productDescription: "Milk is good food for health.",
    productCode: 963014852,
    status: 'Dactive',
    actions: ''
  },
  {
    id: 3,
    productName: "Mango",
    productPrice: "$60",
    productDescription: "Mango is good food for health.",
    productCode: 123654789,
    status: 'Pending',
    actions: ''
  },
  {
    id: 4,
    productName: "Fish",
    productPrice: "$45",
    productDescription: "Fish is good food for health.",
    productCode: 951357258,
    status: 'Process',
    actions: ''
  },
  {
    id: 5,
    productName: "Ice Creame",
    productPrice: "$35",
    productDescription: "Ice Creame is good food for health.",
    productCode: 654123987,
    status: 'Active',
    actions: ''
  },
  {
    id: 6,
    productName: "Orange",
    productPrice: "$75",
    productDescription: "Orange is good food for health.",
    productCode: 654123987,
    status: 'Dactive',
    actions: ''
  }
];

class Datatable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],

    }
  }

  componentDidMount() {

  }

  editRow(row) {
    console.log('Row Edit', row);
  }

  viewRow(row) {
    console.log('Row View', row);
  }

  deleteRow(row) {
    console.log('Row Delete', row);
  }

  render() {

    function buttonFormatter(cell, row) {
      return (
        <Tablebutton
          rowData={row}
          editButtonHandlar={this.editRow}
          viewButtonHandlar={this.viewRow}
          deleteButtonHandlar={this.deleteRow} />
      );
    }

    function columnStatusFormat(fieldValue, cell, row) {
      if (fieldValue != null) {
        return fieldValue.replace(" ", "") + '-status';
      }
    }

    return (
      <div>
        <div className="col-md-12">
        <div className="row">
        <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Links
        <a target="_blank" href="http://allenfang.github.io/react-bootstrap-table/index.html">http://allenfang.github.io/react-bootstrap-table/index.html</a>
        <a target="_blank" href="http://allenfang.github.io/react-bootstrap-table/docs.html#propsOnBootstrapTable">http://allenfang.github.io/react-bootstrap-table/docs.html#propsOnBootstrapTable</a>
        </h2>

        <BootstrapTable
          data={products}
          pagination={true}
          search={true}
          containerClass='tableContainer'
          headerContainerClass='tableHeader'
          bodyContainerClass='bodyContainer'
          bordered={false}
          // className="table-responsive"
          striped
          hover>
          <TableHeaderColumn width="50" isKey dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField='productName'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='productPrice'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='productDescription'>Product Description</TableHeaderColumn>
          <TableHeaderColumn dataField='productCode'>Product Code</TableHeaderColumn>
          <TableHeaderColumn dataAlign='center' dataField='status' columnClassName={columnStatusFormat}>Status</TableHeaderColumn>
          <TableHeaderColumn dataAlign='right' dataField='actions' dataFormat={buttonFormatter.bind(this)}>Actions</TableHeaderColumn>
        </BootstrapTable>

          </div>
        </div>
      </div>
    );
  }
}

export default Datatable;
