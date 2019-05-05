import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import Tablebutton from '../customComponent/Tablebutton';
import Useravatar from '../customComponent/Useravatar';
import Anchorcomponent from '../customComponent/Anchorcomponent';
import Buttonscomponent from '../customComponent/Buttonscomponent';
import Textinputcomponent from '../customComponent/Textinputcomponent';
import Reactselectcomponent from '../customComponent/Reactselectcomponent';
import { Button, Modal } from 'react-bootstrap';
var sortBy = require('sort-by');

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

products.sort(sortBy('productName'));

class Datatable extends Component {

  constructor(props) {
    super(props);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      products: [],
      selectStatus: [],
      editView: false,
      editID: null,
      show: false,
      modalTitle: ''
    }
  }

  componentDidMount() {

    var selectStatus = [
      {
        id: 0,
        lable: 'Select',
        value: '',
      },
      {
        id: 1,
        lable: 'Active',
        value: 'Active',
      },
      {
        id: 2,
        lable: 'Dactive',
        value: 'Dactive',
      },
      {
        id: 3,
        lable: 'Process',
        value: 'Process',
      },
      {
        id: 4,
        lable: 'Pending',
        value: 'Pending',
      }
    ]

    this.setState({ selectStatus: selectStatus });

  }

  handleHide() {
    this.setState({ show: false });
  }

  addModal() {
    this.setState({
      productName: '',
      productPrice: '',
      productCode: '',
      productDescription: '',
      status: ''
    });
    this.setState({
      show: true,
      editView: true,
      btnText: 'Add Product',
      modalTitle: 'Row Data Add',
    })
  }

  addProduct(row) {
    if (this.state.productName === "") {
      this.setState({ nameError: 'please enter product name' })
    }
    else {
      this.setState({
        nameError: false
      })
    }
    if (this.state.productPrice === "") {
      this.setState({ priceError: 'please enter product price' })
    }
    else {
      this.setState({
        priceError: false
      })
    }
    if (this.state.productDescription === "") {
      this.setState({ descriptionError: 'please enter product Description' })
    }
    else {
      this.setState({
        descriptionError: false
      })
    }
    if (this.state.productCode === "") {
      this.setState({ codeError: 'please enter product code' })
    }
    else {
      this.setState({
        codeError: false
      })
    }
    if (this.state.status === "") {
      this.setState({ statusError: 'please select product status' })
    }
    else {
      this.setState({
        statusError: false
      })
    }
    if (this.state.productName != '' && this.state.productPrice != '' && this.state.productDescription != '' && this.state.productCode != '' && this.state.status != '') {
      var id = products.length + 1;
      var productName = this.state.productName;
      var productPrice = this.state.productPrice;
      var productDescription = this.state.productDescription;
      var productCode = this.state.productCode;
      var status = this.state.status;

      var row = this.state.products.slice();
      products.push({
        id: id,
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productCode: productCode,
        status: status,
      });

      this.setState({
        products: row,
        id: "",
        productName: "",
        productPrice: "",
        productDescription: "",
        productCode: "",
        status: ""
      });
      console.log('added data', row);
    }
    else {
      return false
    }

    this.setState({
      show: false,
      row: row

    })
    console.log('Row Add', row);
  }

  viewRow(row) {
    this.setState({
      show: true,
      editView: false,
      row: row,
      modalTitle: 'Row Data View',
    })
    console.log('Row View', row);
  }

  editRow(row) {
    this.setState({
      show: true,
      editView: true,
      row: row,
      modalTitle: 'Row Data Edit',
      btnText: 'Update',
      productName: row.productName,
      productPrice: row.productPrice,
      productCode: row.productCode,
      productDescription: row.productDescription,
      status: row.status,
      editID: row.id,
    })
    console.log('Row Edit', row);
  }

  updateItem(row) {
    if (this.state.productName === "") {
      this.setState({ nameError: 'please enter product name' })
    }
    else {
      this.setState({
        nameError: false
      })
    }
    if (this.state.productPrice === "") {
      this.setState({ priceError: 'please enter product price' })
    }
    else {
      this.setState({
        priceError: false
      })
    }
    if (this.state.productDescription === "") {
      this.setState({ descriptionError: 'please enter product Description' })
    }
    else {
      this.setState({
        descriptionError: false
      })
    }
    if (this.state.productCode === "") {
      this.setState({ codeError: 'please enter product code' })
    }
    else {
      this.setState({
        codeError: false
      })
    }
    if (this.state.status === "") {
      this.setState({ statusError: 'please select product status' })
    }
    else {
      this.setState({
        statusError: false
      })
    }
    if (this.state.productName != '' && this.state.productPrice != '' && this.state.productDescription != '' && this.state.productCode != '' && this.state.status != '') {
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == this.state.editID) {
          products[i].productName = this.state.productName;
          products[i].productPrice = this.state.productPrice;
          products[i].productCode = this.state.productCode;
          products[i].productDescription = this.state.productDescription;
          products[i].status = this.state.status;
        }
      }
      this.setState({
        editID: null,
        row: row,
        show: false,
      })
      console.log('update item', row);
    }
    else {
      return false
    }
  }

  deleteRow(row) {
    var index = products.indexOf(row);
    products.splice(index, 1);
    this.setState(products);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    function buttonFormatter(cell, row) {
      return (
        <Tablebutton
          rowData={row}
          editButtonHandlar={this.editRow.bind(this)}
          viewButtonHandlar={this.viewRow.bind(this)}
          deleteButtonHandlar={this.deleteRow.bind(this)} />
      );
    }

    function columnStatusFormat(fieldValue, cell, row) {
      if (fieldValue != null) {
        return fieldValue.replace(" ", "") + '-status';
      }
    }

    function avatarFormatter(cell, row) {
      return <Useravatar
        Useravatarname={row.productName}
        rowData={row} />
    }

    function anchorFormatter(cell, row) {
      return <Anchorcomponent
        anchotDisplayName={row.productName}
        rowData={row}
        invokeAnchorButtonhandlar={this.viewRow.bind(this)} />
    }

    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <Modal
              show={this.state.show}
              // bsSize="small"
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  {this.state.modalTitle}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="clearfix">
                {this.state.editView ?
                  <div>
                    <div className="col-md-6">
                      <Textinputcomponent
                        inputLable="Product Name"
                        inputPlaceholder=""
                        inputName="productName"
                        inputType="text"
                        inputValue={this.state.productName}
                        inputDisabled={false}
                        inputCalssName="form-control input-sm"
                        inputID=""
                        inputHandle={e => this.handleChange(e)}
                      />
                      <p className="errorstyle">{this.state.nameError}</p>
                    </div>
                    <div className="col-md-6">
                      <Textinputcomponent
                        inputLable="Product Price"
                        inputPlaceholder=""
                        inputName="productPrice"
                        inputType="text"
                        inputValue={this.state.productPrice}
                        inputDisabled={false}
                        inputCalssName="form-control input-sm"
                        inputID=""
                        inputHandle={e => this.handleChange(e)}
                      />
                      <p className="errorstyle">{this.state.priceError}</p>
                    </div>
                    <div className="col-md-6">
                      <Textinputcomponent
                        inputLable="Product Description"
                        inputPlaceholder=""
                        inputName="productDescription"
                        inputType="text"
                        inputValue={this.state.productDescription}
                        inputDisabled={false}
                        inputCalssName="form-control input-sm"
                        inputID=""
                        inputHandle={e => this.handleChange(e)}
                      />
                      <p className="errorstyle">{this.state.descriptionError}</p>
                    </div>
                    <div className="col-md-6">
                      <Textinputcomponent
                        inputLable="Product Code"
                        inputPlaceholder=""
                        inputName="productCode"
                        inputType="text"
                        inputValue={this.state.productCode}
                        inputDisabled={false}
                        inputCalssName="form-control input-sm"
                        inputID=""
                        inputHandle={e => this.handleChange(e)}
                      />
                      <p className="errorstyle">{this.state.codeError}</p>
                    </div>
                    <div className="col-md-12">
                      <Reactselectcomponent
                        rcSelectCalss="form-control input-sm"
                        rcSelectLable="Select Status"
                        rcSelectFunc={e => this.handleChange(e)}
                        rcSelectVal={this.state.status}
                        rsSelectID=""
                        rcSelectNam="status"
                        rcSelectList={this.state.selectStatus}
                      />
                      <p className="errorstyle">{this.state.statusError}</p>
                    </div>
                  </div>
                  :
                  <div>
                    {this.state.row != undefined ?
                      <div className="fetchData">
                        <p>Product Name: <span>{this.state.row.productName}</span></p>
                        <p>Product Price: <span>{this.state.row.productPrice}</span></p>
                        <p>Product Description: <span>{this.state.row.productDescription}</span></p>
                        <p>Product Code: <span>{this.state.row.productCode}</span></p>
                        <p>Status: <span>{this.state.row.status}</span></p>
                      </div>
                      : null}
                  </div>
                }
              </Modal.Body>
              <Modal.Footer>
                {this.state.editView ?
                  <div>
                    <div className="col-md-6">
                      <Buttonscomponent
                        buttonFunction={this.handleHide.bind(this)}
                        btnType="button"
                        btnCalss="btn btn-primary btn-block"
                        btnTitle="Cancel"
                      />
                    </div>
                    <div className="col-md-6">
                      {this.state.btnText === 'Update' ?
                        <Buttonscomponent
                          buttonFunction={() => this.updateItem()}
                          btnType="button"
                          btnCalss="btn btn-success btn-block"
                          btnTitle={this.state.btnText}
                        />
                        :
                        <Buttonscomponent
                          buttonFunction={() => this.addProduct()}
                          btnType="button"
                          btnCalss="btn btn-success btn-block"
                          btnTitle={this.state.btnText}
                        />
                      }
                    </div>
                  </div>
                  :
                  <div>
                    <Button className="btn btn-primary btn-block" onClick={this.handleHide}>Close</Button>
                  </div>}
              </Modal.Footer>
            </Modal>
            <div className="col-md-12 marginBottom marginTop">
              <div className="row">
                <Buttonscomponent
                  buttonFunction={this.addModal.bind(this)}
                  btnType="button"
                  btnCalss="btn btn-success btnRight"
                  btnTitle="Add Product"
                />
              </div>
            </div>
            <BootstrapTable
              data={products}
              pagination={true}
              search={true}
              containerClass='tableContainer'
              headerContainerClass='tableHeader'
              bodyContainerClass='bodyContainer'
              bordered={false}
              // insertRow 
              // className="table-responsive"
              striped
              hover>
              <TableHeaderColumn width="50" isKey dataField='id'>ID</TableHeaderColumn>
              <TableHeaderColumn width="50" dataFormat={avatarFormatter.bind(this)} dataField='productName'></TableHeaderColumn>
              <TableHeaderColumn dataSort={true} dataFormat={anchorFormatter.bind(this)} dataField='productName'>Product Name</TableHeaderColumn>
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
