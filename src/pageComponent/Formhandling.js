import React, { Component } from 'react';
import Textinputcomponent from '../customComponent/Textinputcomponent';
import Textareacomponent from '../customComponent/Textareacomponent';
var sortBy = require('sort-by');

class Formhandling extends Component {

  constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.updateItem = this.updateItem.bind(this);

    this.state = {
      productName: "",
      productCode: "",
      productPrice: "",
      productDescription: "",
      items: [],
      isEdit: false,
      editID: null,
      search: ""

    }
  }

  componentDidMount() {

    var items = [
      { id: 1, productName: 'mouse', productCode: '258963147', productPrice: '$25', productDescription: 'mouse product' },
      { id: 2, productName: 'keyboard', productCode: '258963125', productPrice: '$100', productDescription: 'keyboard product' },
      { id: 3, productName: 'rem', productCode: '258963132', productPrice: '$10', productDescription: 'rame product' },
      { id: 4, productName: 'mathorboard', productCode: '258963195', productPrice: '$50', productDescription: 'mathorboard product' },
      { id: 5, productName: 'harddisk', productCode: '258963112', productPrice: '$18', productDescription: 'harddisk product' },
      { id: 6, productName: 'procecer', productCode: '258963102', productPrice: '$30', productDescription: 'procecer product' },
      { id: 7, productName: 'apple', productCode: '852369741', productPrice: '$65', productDescription: 'apple product' },
      { id: 8, productName: 'mango', productCode: '014785203', productPrice: '$11', productDescription: 'mango product' },
      { id: 9, productName: 'orange', productCode: '951357258', productPrice: '$85', productDescription: 'orange product' },
      { id: 10, productName: 'banana', productCode: '951357258', productPrice: '$08', productDescription: 'banana product' }
    ];


    items.sort(sortBy('productName'));
    this.setState({ items: items });
    //items.sort(sortBy('-id','productName', 'productCode'));

  }

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  AddItem = e => {
    e.preventDefault();
    if (this.state.productName === "") {
      this.setState({ nameError: 'please enter product name' })
    }
    else {
      this.setState({
        nameError: false
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
    if (this.state.productPrice === "") {
      this.setState({ priceError: 'please enter product price' })
    }
    else {
      this.setState({
        priceError: false
      })
    }
    if (this.state.productDescription === "") {
      this.setState({ descError: 'please enter product description' })
    }
    else {
      this.setState({
        descError: false
      })
    }
    if (this.state.productName != '' && this.state.productCode != '' && this.state.productPrice != '' && this.state.productDescription != '') {
      var id = this.state.items.length + 1;
      var productName = this.state.productName;
      var productCode = this.state.productCode;
      var productPrice = this.state.productPrice;
      var productDescription = this.state.productDescription;
      var elements = this.state.items.slice();
      elements.push({ id: id, productName: productName, productCode: productCode, productPrice: productPrice, productDescription: productDescription });
      this.setState({ items: elements, id: "", productName: "", productCode: "", productPrice: "", productDescription: "" });
      console.log('fetch data', elements);
    }
    else {
      return false
    }

  }

  removeItem(item) {
    var index = this.state.items.indexOf(item);
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
  };

  editItem(index, item) {
    this.setState({
      productName: index.productName,
      productCode: index.productCode,
      productPrice: index.productPrice,
      productDescription: index.productDescription,
      editID: index.id,
      item: index
    });
    this.setState({
      isEdit: true
    })
    console.log('edit item', index);
  }

  updateItem(index, item) {
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id == this.state.editID) {
        this.state.items[i].productName = this.state.productName;
        this.state.items[i].productCode = this.state.productCode;
        this.state.items[i].productPrice = this.state.productPrice;
        this.state.items[i].productDescription = this.state.productDescription;
      }
    }
    this.setState({
      editID: null
    })
    this.setState({ productName: '', productCode: '', productPrice: '', productDescription: '' });
    console.log('update item', item);
  }

  cancelUpdate(item) {
    this.setState({
      editID: null
    })
    this.setState({ productName: '', productCode: '', productPrice: '', productDescription: '' });
    console.log('cancel item', item);
  }

  searchTable(e) {
    this.setState({
      search: e.target.value.substr(0.20)
    })
  }

  render() {

    let filterList = this.state.items.filter(
      (list) => {
        return list.productName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="overviewBox clearfix">
        <h2>Add Product</h2>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Textinputcomponent
                inputLable="Product Name"
                inputPlaceholder=""
                inputName="productName"
                inputType="text"
                inputValue={this.state.productName}
                inputDisabled={false}
                inputCalssName="form-control input-sm"
                inputID=""
                inputHandle={e => this.handlechange(e)}
              />
              <p className="errorstyle">{this.state.nameError}</p>
            </div>
            <div className="col-md-3">
              <Textinputcomponent
                inputLable="Product Code"
                inputPlaceholder=""
                inputName="productCode"
                inputType="text"
                inputValue={this.state.productCode}
                inputDisabled={false}
                inputCalssName="form-control input-sm"
                inputID=""
                inputHandle={e => this.handlechange(e)}
              />
              <p className="errorstyle">{this.state.codeError}</p>
            </div>
            <div className="col-md-3">
              <Textinputcomponent
                inputLable="Product Price"
                inputPlaceholder=""
                inputName="productPrice"
                inputType="text"
                inputValue={this.state.productPrice}
                inputDisabled={false}
                inputCalssName="form-control input-sm"
                inputID=""
                inputHandle={e => this.handlechange(e)}
              />
              <p className="errorstyle">{this.state.priceError}</p>
            </div>
            <div className="col-md-3">
              <Textareacomponent
                textareaLable="Product Description"
                textareaCalssName="form-control"
                textareaPlaceholder=""
                textareaName="productDescription"
                textareaRows="3"
                textareaCols="2"
                textareaID=""
                textareaDisabled={false}
                textareaValue={this.state.productDescription}
                textareaHandle={e => this.handlechange(e)}
              />
              <p className="errorstyle">{this.state.descError}</p>
            </div>

            <div className="col-md-12 marginTop ">
              {this.state.editID ?
                null : <button className="btn btn-success btnRight" onClick={e => this.AddItem(e)}>Add Product</button>
              }
            </div>

            <div className="clearfix"></div>
            <div className="col-md-4 pull-right">
              <Textinputcomponent
                inputLable="Product Search"
                inputPlaceholder="Search Here"
                inputName=""
                inputType="text"
                inputValue={this.state.search}
                inputDisabled={false}
                inputCalssName="form-control input-sm"
                inputID=""
                inputHandle={e => this.searchTable(e)}
              />
            </div>
            <div className="clearfix"></div>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Product Price</th>
                    <th>Product Description</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterList.map((item, index) => (
                    <tr key={index.toString()}>
                      <td>{item.id}</td>
                      <td>{item.productName}</td>
                      <td>{item.productCode}</td>
                      <td>{item.productPrice}</td>
                      <td>{item.productDescription}</td>
                      <td>
                        {this.state.editID === item.id ?
                          <div>
                            <a href="javascript:;" onClick={() => this.updateItem(item, index)} title="Update" className="tableActionsBtn"><i className="icon-refresh"></i></a>
                            <a href="javascript:;" onClick={() => this.cancelUpdate(item, index)} title="Cancel" className="tableActionsBtn"><i className="icon-ban"></i></a>
                          </div>
                          :
                          <div>
                            <a href="javascript:;" onClick={() => this.removeItem(item, index)} title="Delete" className="tableActionsBtn"><i className="icon-trash"></i></a>
                            <a href="javascript:;" onClick={() => this.editItem(item, index)} title="Edit" className="tableActionsBtn"><i className="icon-pencil"></i></a>
                          </div>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Formhandling;


