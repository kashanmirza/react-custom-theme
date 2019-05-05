import React, { Component } from 'react';
import $ from 'jquery';
import Tabscomponent from '../customComponent/Tabscomponent';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabData: [],
      selectedTab: "Tab 1",

    }
  }

  componentDidMount() {
    var tabData = [
      { id: 'Tab 1', isActive: true },
      { id: 'Tab 2', isActive: false },
      { id: 'Tab 3', isActive: false }
    ];

    this.setState({ tabData: tabData });

  }

  currentTab(id) {
    this.setState({ selectedTab: id });
  }

  render() {

    var dataTab = [
      {
        id: 0,
        tabname: 'Tab1',
        descriptionTitle: 'Tab1 Description Title',
        description: 'tab description here with dummy data...1'
      },
      {
        id: 1,
        tabname: 'Tab2',
        descriptionTitle: 'Tab2 Description Title',
        description: 'tab description here with dummy data...2'
      },
      {
        id: 2,
        tabname: 'Tab3',
        descriptionTitle: 'Tab3 Description Title',
        description: 'tab description here with dummy data...3'
      },
      {
        id: 3,
        tabname: 'Tab4',
        descriptionTitle: 'Tab4 Description Title',
        description: 'tab description here with dummy data...4'
      }
    ]

    return (

      <div>
        <div className="col-md-12">
          <div className="row">

            <div className="overviewBox clearfix">
              <h2>Bootstrap Tabs</h2>
              <div className="tabbable-panel2 marginTop">
                <div className="tabbable-line2">
                  <ul className="nav nav-tabs ">
                    <li className="active"> <a href="#tab_default_1" data-toggle="tab"><i className="icon-info"></i> tab data 1</a></li>
                    <li> <a href="#tab_default_2" data-toggle="tab"><i className="icon-info"></i> tab data 2</a></li>
                    <li> <a href="#tab_default_3" data-toggle="tab"><i className="icon-info"></i> tab data 3</a></li>
                    <li> <a href="#tab_default_4" data-toggle="tab"><i className="icon-info"></i> tab data 4</a></li>
                    <li> <a href="#tab_default_5" data-toggle="tab"><i className="icon-info"></i> tab data 5</a></li>
                  </ul>
                  <div className="tab-content clearfix">
                    <div className="tab-pane active" id="tab_default_1">
                      <h1>tab1 </h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc eleifend tortor elementum tempor
                        sed eget nibh. Maecenas semper blandit mauris, vel luctus nibh condimentum id. Nullam nec sem nec tellus
                        sagittis dapibus. Quisque sed felis urna. Fusce sit amet tellus augue. Nulla fermentum orci ac augue dignissim,
                        sit amet volutpat lorem placerat. Sed non leo et erat pulvinar bibendum. Mauris consectetur orci in vestibulum
                        efficitur. Nullam tincidunt, lorem a laoreet sollicitudin, lectus tortor varius ipsum, ut feugiat ligula
                        tellus sit amet urna. Fusce pulvinar at lectus ac laoreet. Curabitur vel orci sed mauris laoreet suscipit
                  id rhoncus justo. Sed a nunc congue, maximus erat at, dignissim eros.</p>
                    </div>
                    <div className="tab-pane" id="tab_default_2">
                      <h1>tab2 </h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc eleifend tortor elementum tempor
                        sed eget nibh. Maecenas semper blandit mauris, vel luctus nibh condimentum id. Nullam nec sem nec tellus
                        sagittis dapibus. Quisque sed felis urna. Fusce sit amet tellus augue. Nulla fermentum orci ac augue dignissim,
                        sit amet volutpat lorem placerat. Sed non leo et erat pulvinar bibendum. Mauris consectetur orci in vestibulum
                        efficitur. Nullam tincidunt, lorem a laoreet sollicitudin, lectus tortor varius ipsum, ut feugiat ligula
                        tellus sit amet urna. Fusce pulvinar at lectus ac laoreet. Curabitur vel orci sed mauris laoreet suscipit
                  id rhoncus justo. Sed a nunc congue, maximus erat at, dignissim eros.</p>
                    </div>
                    <div className="tab-pane" id="tab_default_3">
                      <h1>tab3 </h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc eleifend tortor elementum tempor
                        sed eget nibh. Maecenas semper blandit mauris, vel luctus nibh condimentum id. Nullam nec sem nec tellus
                        sagittis dapibus. Quisque sed felis urna. Fusce sit amet tellus augue. Nulla fermentum orci ac augue dignissim,
                        sit amet volutpat lorem placerat. Sed non leo et erat pulvinar bibendum. Mauris consectetur orci in vestibulum
                        efficitur. Nullam tincidunt, lorem a laoreet sollicitudin, lectus tortor varius ipsum, ut feugiat ligula
                        tellus sit amet urna. Fusce pulvinar at lectus ac laoreet. Curabitur vel orci sed mauris laoreet suscipit
                  id rhoncus justo. Sed a nunc congue, maximus erat at, dignissim eros.</p>
                    </div>
                    <div className="tab-pane" id="tab_default_4">
                      <h1>tab4 </h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc eleifend tortor elementum tempor
                        sed eget nibh. Maecenas semper blandit mauris, vel luctus nibh condimentum id. Nullam nec sem nec tellus
                        sagittis dapibus. Quisque sed felis urna. Fusce sit amet tellus augue. Nulla fermentum orci ac augue dignissim,
                        sit amet volutpat lorem placerat. Sed non leo et erat pulvinar bibendum. Mauris consectetur orci in vestibulum
                        efficitur. Nullam tincidunt, lorem a laoreet sollicitudin, lectus tortor varius ipsum, ut feugiat ligula
                        tellus sit amet urna. Fusce pulvinar at lectus ac laoreet. Curabitur vel orci sed mauris laoreet suscipit
                  id rhoncus justo. Sed a nunc congue, maximus erat at, dignissim eros.</p>
                    </div>
                    <div className="tab-pane" id="tab_default_5">
                      <h1>tab5</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc eleifend tortor elementum tempor
                        sed eget nibh. Maecenas semper blandit mauris, vel luctus nibh condimentum id. Nullam nec sem nec tellus
                        sagittis dapibus. Quisque sed felis urna. Fusce sit amet tellus augue. Nulla fermentum orci ac augue dignissim,
                        sit amet volutpat lorem placerat. Sed non leo et erat pulvinar bibendum. Mauris consectetur orci in vestibulum
                        efficitur. Nullam tincidunt, lorem a laoreet sollicitudin, lectus tortor varius ipsum, ut feugiat ligula
                        tellus sit amet urna. Fusce pulvinar at lectus ac laoreet. Curabitur vel orci sed mauris laoreet suscipit
                  id rhoncus justo. Sed a nunc congue, maximus erat at, dignissim eros.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overviewBox clearfix">
              <h2>Daynamic Tabs</h2>
              <div className="clearfix">
                {this.state.tabData.map((tabData, index) => (
                  <a key={index.toString()}
                    className={this.state.selectedTab === tabData.id ? 'tabStyleActive' : 'tabStyle'}
                    onClick={this.currentTab.bind(this, tabData.id)}>{tabData.id}</a>
                ))}
              </div>
              <div className="clearfix">
                {this.state.selectedTab === 'Tab 1' ?
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                  : null}
                {this.state.selectedTab === 'Tab 2' ?
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  : null}
                {this.state.selectedTab === 'Tab 3' ?
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco.</p>
                  </div>
                  : null}
              </div>
            </div>

            <div className="overviewBox clearfix">
              <h2>Tabs Component</h2>
              <Tabscomponent data={dataTab} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;




