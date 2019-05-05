import React, { Component } from 'react';
import Alertmesgcomponent from '../customComponent/Alertmesgcomponent';
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';
var sortBy = require('sort-by');

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      userList: [],
      response: ''
    }
  }

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
    //   // Handle service success response
    //   console.log(response.data)
    //   const persons = response.data;
    //   this.setState({ persons });
    // })

    var userList = [
      {
        id: 1,
        userTitle: "Muhammad Waqas",
        userFavourite: 1,
      },
      {
        id: 2,
        userTitle: "Alber Khan",
        userFavourite: 0,
      },
      {
        id: 3,
        userTitle: "Ali Khan",
        userFavourite: 1,
      },
      {
        id: 4,
        userTitle: "Waseem Khan",
        userFavourite: 0,
      },
      {
        id: 5,
        userTitle: "Abdal Ahmed",
        userFavourite: 1,
      },
      {
        id: 6,
        userTitle: "Humza Khan",
        userFavourite: 0,
      },
      {
        id: 7,
        userTitle: "Arsalan Ahmed",
        userFavourite: 1,
      },
      {
        id: 8,
        userTitle: "Bilal Khan",
        userFavourite: 0,
      },
      {
        id: 8,
        userTitle: "Fahad Ahmed",
        userFavourite: 1,
      },
      {
        id: 10,
        userTitle: "Azeem Ahmed",
        userFavourite: 0,
      },
      {
        id: 11,
        userTitle: "Umair Khan",
        userFavourite: 1,
      },
      {
        id: 12,
        userTitle: "Wasif Khan",
        userFavourite: 0,
      }
    ]

    this.setState({ userList: userList });
    userList.sort(sortBy('-userFavourite', 'userTitle'));

  }

  favouriteUser(item, index) {
    console.log('Item is = >', item);
    var items = this.state.userList;
    if (item.userFavourite == 0) {
      item.userFavourite = 1;
    }
    else {
      item.userFavourite = 0;
    }
    items[index] = item;
    this.setState({
      userList: items
    });
  }

  render() {
    return (
      <div>
        {/* {this.state.persons.map((person, index) => (
          <div key={index.toString()}>
            <p>{person.userId}</p>
            <p>{person.id}</p>
            <p>{person.title}</p>
            <p>{person.body}</p>
          </div>
        ))} */}
        <div className="col-md-12">
          <div className="row">
            <div className="overviewBox clearfix">
              <h2>Messages</h2>
              <div className="marginTop">

                <Alertmesgcomponent
                  messageClassName="alert alert-success"
                  messageTitle="Success!"
                  messageDescription="This alert box could indicate a successful or positive action."
                />

                <Alertmesgcomponent
                  messageClassName="alert alert-info"
                  messageTitle="Info!"
                  messageDescription="This alert box could indicate a neutral informative change or action."
                />

                <Alertmesgcomponent
                  messageClassName="alert alert-warning"
                  messageTitle="Warning!"
                  messageDescription="This alert box could indicate a warning that might need attention."
                />

                <Alertmesgcomponent
                  messageClassName="alert alert-danger"
                  messageTitle="Danger!"
                  messageDescription="This alert box could indicate a dangerous or potentially negative action."
                />

              </div>
            </div>

            <div className="col-md-4">
              <div class="overviewBox">
                <h2>Favourite List</h2>
                <Scrollbars style={{ height: 200 }}>
                  {this.state.userList.map((item, index) => (
                    <a key={index.toString()} className="favouriteList">
                      {item.userTitle}
                      <a href="javascript:;" className="favouriteStar"
                        onClick={() => this.favouriteUser(item, index)}>
                        {item.userFavourite == 0 ?
                          <span style={{ color: '#ada8a8' }} className="fa fa-star-o"></span>
                          :
                          <span style={{ color: '#f3f31a' }} className="fa fa-star"></span>
                        }
                      </a>
                    </a>
                  ))}
                </Scrollbars>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Messages;




