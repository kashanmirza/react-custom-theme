import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import Portlatecomponent from '../customComponent/Portlatecomponent';
import { Scrollbars } from 'react-custom-scrollbars';

var datatable1 = [{
  id: 1,
  name: "junaid",
  email: "junaid_khan@gmail.com",
  cell: "03332589631"
}, {
  id: 2,
  name: "ali",
  email: "ali_khan@gmail.com",
  cell: "03228521597"
}, {
  id: 3,
  name: "hammad",
  email: "hammad_khan@gmail.com",
  cell: "03007896543",
  productname: "product3"
}, {
  id: 4,
  name: "shoaib",
  email: "shoaib_khan@gmail.com",
  cell: "03218996155"
}, {
  id: 5,
  name: "waqas",
  email: "waqas_khan@gmail.com",
  cell: "03222946642"
}, {
  id: 6,
  name: "alber",
  email: "alber_khan@gmail.com",
  cell: "03338453159"
}];

class Portlate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messagesData: [],
    }
  }

  componentDidMount() {

    var messagesData = [
      {
        "id": 1,
        "mesgimg": "assets/images/avatar1.jpg",
        "mesgtitle": "Joel King",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Jan',
        "mesgdate": "01"
      },
      {
        "id": 2,
        "mesgimg": "assets/images/avatar2.jpg",
        "mesgtitle": "Helga Nacsa",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Fab',
        "mesgdate": "02"
      },
      {
        "id": 3,
        "mesgimg": "assets/images/avatar3.jpg",
        "mesgtitle": "Jessica Carus",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Mar',
        "mesgdate": "03"
      },
      {
        "id": 4,
        "mesgimg": "assets/images/avatar1.jpg",
        "mesgtitle": "Pamfil Stavarache",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Apr',
        "mesgdate": "04"
      },
      {
        "id": 5,
        "mesgimg": "assets/images/avatar2.jpg",
        "mesgtitle": "Joel King",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'May',
        "mesgdate": "05"
      },
      {
        "id": 6,
        "mesgimg": "assets/images/avatar3.jpg",
        "mesgtitle": "Helga Nacsa",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Jun',
        "mesgdate": "06"
      },
      {
        "id": 7,
        "mesgimg": "assets/images/avatar1.jpg",
        "mesgtitle": "Joel King",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Jan',
        "mesgdate": "01"
      },
      {
        "id": 8,
        "mesgimg": "assets/images/avatar2.jpg",
        "mesgtitle": "Helga Nacsa",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Fab',
        "mesgdate": "02"
      },
      {
        "id": 9,
        "mesgimg": "assets/images/avatar3.jpg",
        "mesgtitle": "Jessica Carus",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Mar',
        "mesgdate": "03"
      },
      {
        "id": 10,
        "mesgimg": "assets/images/avatar1.jpg",
        "mesgtitle": "Pamfil Stavarache",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Apr',
        "mesgdate": "04"
      },
      {
        "id": 11,
        "mesgimg": "assets/images/avatar2.jpg",
        "mesgtitle": "Joel King",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'May',
        "mesgdate": "05"
      },
      {
        "id": 12,
        "mesgimg": "assets/images/avatar3.jpg",
        "mesgtitle": "Helga Nacsa",
        "message": "Request you to be a part  of the same so that we can work...",
        "mesgmonth": 'Jun',
        "mesgdate": "06"
      }
    ]

    this.setState({ messagesData: messagesData });

  }

  getdata1() {
    return (
      <div>
        <Scrollbars style={{ height: 455 }}>
          {this.state.messagesData.map((item, index) => (
            <a href="javascript:;" key={index.toString()} className="mesgBox">
              <img src={item.mesgimg} alt="" />
              <h5>{item.mesgtitle}</h5>
              <p>{item.message}</p>
              <h6>{item.mesgmonth}<span>{item.mesgdate}</span></h6>
            </a>
          ))}
        </Scrollbars>
      </div>
    )
  }

  getdata2() {
    return (
      <BootstrapTable
        data={datatable1}
        pagination={true}
        search={false}
        containerClass='tableContainer'
        headerContainerClass='tableHeader'
        bodyContainerClass='bodyContainer'
        bordered={false}
        striped
        hover>
        <TableHeaderColumn width='50' isKey dataSort={true} dataField='id'>ID</TableHeaderColumn>
        <TableHeaderColumn width='125' dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn width='200' dataField='email'>Email</TableHeaderColumn>
        <TableHeaderColumn width='125' dataField='cell'>Cell No</TableHeaderColumn>
      </BootstrapTable>
    )
  }

  getdata3() {
    return (
      <div className="fetchData">
        <p>Consumer Name: <span>Muhammad Waqas</span></p>
        <p>Consumer Number: <span>03222946642</span></p>
        <p>Consumer Email: <span>muhammadwaqas@gmail.com</span></p>
        <p>Consumer Address: <span>karachi west</span></p>
      </div>
    )
  }

  getdata4() {
    return (
      <div>
        <h1>About Users</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc eleifend
        tortor elementum tempor sed eget nibh. Maecenas semper blandit mauris, vel luctus nibh
        condimentum id. Nullam nec sem nec tellus sagittis dapibus. Quisque sed felis urna.
        Fusce sit amet tellus augue. Nulla fermentum orci ac augue dignissim, sit amet volutpat
            lorem placerat. Sed non leo et erat pulvinar bibendum.</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="row marginTop">

          <Portlatecomponent
            portlatetitle='Active Users'
            portlatewidth='col-md-6'
            titleicon='icon-bubble'
            portlateContant={this.getdata1()} />

          <Portlatecomponent
            portlatetitle='Users List'
            portlatewidth='col-md-6'
            titleicon='icon-people'
            portlateContant={this.getdata2()} />

          <Portlatecomponent
            portlatetitle='Current User'
            portlatewidth='col-md-6'
            titleicon='icon-emotsmile'
            portlateContant={this.getdata3()} />

          <Portlatecomponent
            portlatetitle='About User'
            portlatewidth='col-md-6'
            titleicon='icon-cup'
            portlateContant={this.getdata4()} />

        </div>
      </div>
    );
  }
}

export default Portlate;



