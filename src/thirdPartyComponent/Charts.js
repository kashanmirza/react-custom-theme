import React, { Component } from 'react';
import { Bar, Bubble, Doughnut, HorizontalBar, Pie, Line, Polar, Radar, Scatter } from 'react-chartjs-2';

const donughtOptions = {
  // cutoutPercentage: 92
  // legend: {
  //   position: 'bottom',
  //   display: false,
  // }
  cutoutPercentage: 60,
}

const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data2 = {
  labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{ x: 10, y: 20, r: 5 }]
    }
  ]
};

const data3 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const data4 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data5 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const legendOpts = {
  onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
  onHover: (e, item) => alert(`Item with text ${item.text} and index ${item.index} hovered`),
};

const data6 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data7 = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

const data8 = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

const data9 = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    }
  ]
};

class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      legend: legendOpts
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
          <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
          <a target="_blank" href="http://jerairrest.github.io/react-chartjs-2/">http://jerairrest.github.io/react-chartjs-2/</a>
          </h2>
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Bar Chart</h1>
                <div>
                  <Bar
                    data={data1}
                    width={100}
                    height={300}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Bubble Chart</h1>
                <div>
                  <Bubble
                    height={300}
                    data={data2}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Doughnut Chart</h1>
                <div>
                  <Doughnut
                    height={300}
                    options={donughtOptions}
                    data={data3} />
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>HorizontalBar Chart</h1>
                <div>
                  <HorizontalBar
                    height={300}
                    data={data4} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Pie Chart</h1>
                <div>
                  <Pie
                    height={300}
                    data={data5}
                    legend={this.state.legend} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Line Chart</h1>
                <div>
                  <Line
                    height={300}
                    data={data6} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Polar Chart</h1>
                <div>
                  <Polar
                    height={300}
                    data={data7} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Radar Chart</h1>
                <div>
                  <Radar
                    height={300}
                    data={data8} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="chartBox">
                <h1>Scatter Chart</h1>
                <div>
                  <Scatter
                    height={300}
                    data={data9} />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;




