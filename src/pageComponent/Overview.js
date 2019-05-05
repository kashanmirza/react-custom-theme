import React, { Component } from 'react';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import { Scrollbars } from 'react-custom-scrollbars';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scoreData: [],
      messagesData: [],
      rating: 3
    }
  }

  componentDidMount() {

    var scoreData = [
      {
        "id": 1,
        "maintitle": 'Orders Received',
        "mainvalue": '486',
        "sabtitle": 'Completed Orders',
        "sabvalue": '351',
        "Iconclassname": 'icon-basket-loaded',
        "boxcolor": {
          'backgroundColor': '#8cd958',
        },
      },
      {
        "id": 2,
        "maintitle": 'Total Sales',
        "mainvalue": '1641',
        "sabtitle": 'This Month',
        "sabvalue": '213',
        "Iconclassname": 'icon-tag',
        "boxcolor": {
          'backgroundColor': '#75c0f8',
        },
      },
      {
        "id": 3,
        "maintitle": 'Revenue',
        "mainvalue": '$42,552',
        "sabtitle": 'This Month',
        "sabvalue": '$5,032',
        "Iconclassname": 'icon-refresh',
        "boxcolor": {
          'backgroundColor': '#edb666',
        },
      },
      {
        "id": 4,
        "maintitle": 'Total Profit',
        "mainvalue": '$9,552',
        "sabtitle": 'This Month',
        "sabvalue": '$542',
        "Iconclassname": 'icon-wallet',
        "boxcolor": {
          'backgroundColor': '#e9897c',
        },
      }

    ]

    this.setState({ scoreData: scoreData });

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

  render() {

    const { rating } = this.state;

    return (
      <div>
        <div className="row">
          {this.state.scoreData.map((item, index) => (
            <div key={index.toString()} className="col-lg-3 col-md-6 col-sm-12">
              <div className="scoreBox clearfix" style={item.boxcolor}>
                <h1>{item.maintitle}<span>{item.mainvalue}</span></h1>
                <i className={item.Iconclassname}></i>
                <p>{item.sabtitle}<span>{item.sabvalue}</span></p>
              </div>
            </div>
          ))}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="overviewBox">
              <h2>Profile</h2>
              <div className="profileBox">
                <img src="assets/images/profile.jpg" alt="" />
                <h3>Muhammad Waqas<span>Application User</span></h3>
                <div className="col-md-6">
                  <div className="row">
                    <StarRatingComponent name="rate1" starCount={5} value={rating} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="profileBoxSocial clearfix">
                      <a href="javascript:;"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="javascript:;"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                      <a href="javascript:;"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="profileDetailBox clearfix">
                  <h4><i className="icon-info" aria-hidden="true"></i>Contact Information</h4>
                  <p>Email Address <a href="javascript:;">muhammadwaqas@gmail.com</a></p>
                  <p>Cell Number <a href="javascript:;">+920322946642</a></p>
                  <p>Fax Number <a href="javascript:;">+9203222946642</a></p>
                  <p>Address <a>b/47 west karachi pakistan 74600</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="overviewBox">
              <h2>Messages</h2>
              <div style={{'marginLeft': '-10px','marginRight': '-10px'}}>
                <Scrollbars style={{ height: 470 }}>
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
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="overviewBox">
              <h2>Settings</h2>
              <a href="javascript:;" className="linkList"><i className="icon-pencil"></i> Edit Profile</a>
              <a href="javascript:;" className="linkList"><i className="icon-lock"></i> Change Password</a>
              <a href="javascript:;" className="linkList"><i className="icon-star"></i> Change qa</a>
              <a href="javascript:;" className="linkList"><i className="icon-pin"></i> generate FPIN</a>
              <a href="javascript:;" className="linkList"><i className="icon-clock"></i> Expire FPIN</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;




