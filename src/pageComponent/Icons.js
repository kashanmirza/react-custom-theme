import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';

class Icons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabData: [],
      selectedTab: "Bootstrap  Glyphicons Icons",
    }
  }

  componentDidMount() {
    var tabData = [
      { id: 'Bootstrap  Glyphicons Icons', isActive: true },
      { id: 'Simple line Icons', isActive: false },
      { id: 'Font Awesome', isActive: false }
    ];

    this.setState({ tabData: tabData });

  }

  tabShow(id) {
    this.setState({ selectedTab: id });
    console.log('select tab');
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 clearfix">
              <div className="row">
                {this.state.tabData.map((tabData, index) => (
                  <a key={index.toString()}
                    className={this.state.selectedTab === tabData.id ? 'tabAnchorActive' : 'tabAnchor'}
                    onClick={this.tabShow.bind(this, tabData.id)}>{tabData.id}</a>
                ))}
              </div>
            </div>
              <div className="row">
                {this.state.selectedTab === 'Bootstrap  Glyphicons Icons' ?
                  <div className="clearfix">
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-asterisk"></i> glyphicon glyphicon-asterisk</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-plus"></i> glyphicon glyphicon-plus</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-euro"></i> glyphicon glyphicon-euro</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-eur"></i> glyphicon glyphicon-eur</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-minus"></i> glyphicon glyphicon-minus</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-cloud"></i> glyphicon glyphicon-cloud</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-envelope"></i> glyphicon glyphicon-envelope</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-pencil"></i> glyphicon glyphicon-pencil</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-glass"></i> glyphicon glyphicon-glass</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-music"></i> glyphicon glyphicon-music</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-search"></i> glyphicon glyphicon-search</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-heart"></i> glyphicon glyphicon-heart</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-star"></i> glyphicon glyphicon-star</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-star-empty"></i> glyphicon glyphicon-star-empty</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-user"></i> glyphicon glyphicon-user</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-film"></i> glyphicon glyphicon-film</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-th-large"></i> glyphicon glyphicon-th-large</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-th"></i>glyphicon glyphicon-th</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-th-list"></i> glyphicon glyphicon-th-list</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-ok"></i> glyphicon glyphicon-ok</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-remove"></i> glyphicon glyphicon-remove</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-zoom-in"></i> glyphicon glyphicon-zoom-in</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-zoom-out"></i> glyphicon glyphicon-zoom-out</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-off"></i> glyphicon glyphicon-off</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-signal"></i> glyphicon glyphicon-signal</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-cog"></i> glyphicon glyphicon-cog</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-trash"></i> glyphicon glyphicon-trash</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-home"></i> glyphicon glyphicon-home</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-file"></i> glyphicon glyphicon-file</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-time"></i> glyphicon glyphicon-time</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-road"></i> glyphicon glyphicon-road</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-download-alt"></i> glyphicon glyphicon-download-alt</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-download"></i> glyphicon glyphicon-download</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-upload"></i> glyphicon glyphicon-upload</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-inbox"></i> glyphicon glyphicon-inbox</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-play-circle"></i> glyphicon glyphicon-play-circle</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-repeat"></i> glyphicon glyphicon-repeat</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-refresh"></i> glyphicon glyphicon-refresh</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-list-alt"></i> glyphicon glyphicon-list-alt</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-lock"></i> glyphicon glyphicon-lock</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-flag"></i> glyphicon glyphicon-flag</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-headphones"></i> glyphicon glyphicon-headphones</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-volume-off"></i> glyphicon glyphicon-volume-off</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-volume-down"></i> glyphicon glyphicon-volume-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-volume-up"></i> glyphicon glyphicon-volume-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-qrcode"></i> glyphicon glyphicon-qrcode</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-barcode"></i> glyphicon glyphicon-barcode</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tag"></i> glyphicon glyphicon-tag</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tags"></i> glyphicon glyphicon-tags</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-book"></i> glyphicon glyphicon-book</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-bookmark"></i> glyphicon glyphicon-bookmark</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-print"></i> glyphicon glyphicon-print</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-camera"></i> glyphicon glyphicon-camera</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-font"></i> glyphicon glyphicon-font</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-bold"></i> glyphicon glyphicon-bold</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-italic"></i> glyphicon glyphicon-italic</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-text-height"></i> glyphicon glyphicon-text-height</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-text-width"></i> glyphicon glyphicon-text-width</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-align-left"></i> glyphicon glyphicon-align-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-align-center"></i> glyphicon glyphicon-align-center</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-align-right"></i> glyphicon glyphicon-align-right</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-align-justify"></i> glyphicon glyphicon-align-justify</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-list"></i> glyphicon glyphicon-list</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-indent-left"></i> glyphicon glyphicon-indent-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-indent-right"></i> glyphicon glyphicon-indent-right</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-facetime-video"></i> glyphicon glyphicon-facetime-video</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-picture"></i> glyphicon glyphicon-picture</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-map-marker"></i> glyphicon glyphicon-map-marker</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-adjust"></i> glyphicon glyphicon-adjust</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tint"></i> glyphicon glyphicon-tint</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-edit"></i> glyphicon glyphicon-edit</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-share"></i> glyphicon glyphicon-share</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-check"></i> glyphicon glyphicon-check</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-move"></i> glyphicon glyphicon-move</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-step-backward"></i> glyphicon glyphicon-step-backward</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-fast-backward"></i> glyphicon glyphicon-fast-backward</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-backward"></i> glyphicon glyphicon-backward</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-play"></i> glyphicon glyphicon-play</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-pause"></i> glyphicon glyphicon-pause</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-stop"></i> glyphicon glyphicon-stop</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-forward"></i> glyphicon glyphicon-forward</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-fast-forward"></i> glyphicon glyphicon-fast-forward</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-step-forward"></i> glyphicon glyphicon-step-forward</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-eject"></i> glyphicon glyphicon-eject</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-chevron-left"></i> glyphicon glyphicon-chevron-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-chevron-right"></i> glyphicon glyphicon-chevron-right</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-plus-sign"></i> glyphicon glyphicon-plus-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-minus-sign"></i> glyphicon glyphicon-minus-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-remove-sign"></i> glyphicon glyphicon-remove-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-ok-sign"></i> glyphicon glyphicon-ok-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-question-sign"></i> glyphicon glyphicon-question-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-info-sign"></i> glyphicon glyphicon-info-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-screenshot"></i> glyphicon glyphicon-screenshot</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-remove-circle"></i> glyphicon glyphicon-remove-circle</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-ok-circle"></i> glyphicon glyphicon-ok-circle</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-ban-circle"></i> glyphicon glyphicon-ban-circle</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-arrow-left"></i> glyphicon glyphicon-arrow-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-arrow-right"></i> glyphicon glyphicon-arrow-right</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-arrow-up"></i> glyphicon glyphicon-arrow-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-arrow-down"></i> glyphicon glyphicon-arrow-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-share-alt"></i> glyphicon glyphicon-share-alt</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-resize-full"></i> glyphicon glyphicon-resize-full</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-resize-small"></i> glyphicon glyphicon-resize-small</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-exclamation-sign"></i> glyphicon glyphicon-exclamation-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-gift"></i> glyphicon glyphicon-gift</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-leaf"></i> glyphicon glyphicon-leaf</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-fire"></i> glyphicon glyphicon-fire</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-eye-open"></i> glyphicon glyphicon-eye-open</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-eye-close"></i> glyphicon glyphicon-eye-close</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-warning-sign"></i> glyphicon glyphicon-warning-sign</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-plane"></i> >glyphicon glyphicon-plane</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-calendar"></i> glyphicon glyphicon-calendar</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-random"></i> glyphicon glyphicon-random</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-comment"></i>glyphicon glyphicon-comment</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-magnet"></i> glyphicon glyphicon-magnet</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-chevron-up"></i> glyphicon glyphicon-chevron-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-chevron-down"></i> glyphicon glyphicon-chevron-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-retweet"></i> glyphicon glyphicon-retweet</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-shopping-cart"></i> glyphicon glyphicon-shopping-cart</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-folder-close"></i> glyphicon glyphicon-folder-close</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-folder-open"></i> glyphicon glyphicon-folder-open</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-resize-vertical"></i> glyphicon glyphicon-resize-vertical</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-resize-horizontal"></i> glyphicon glyphicon-resize-horizontal</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-hdd"></i> glyphicon glyphicon-hdd</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-bullhorn"></i> glyphicon glyphicon-bullhorn</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-bell"></i> glyphicon glyphicon-bell</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-certificate"></i> glyphicon glyphicon-certificate</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-thumbs-up"></i> glyphicon glyphicon-thumbs-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-thumbs-down"></i> glyphicon glyphicon-thumbs-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-hand-right"></i>glyphicon glyphicon-hand-right</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-hand-left"></i> glyphicon glyphicon-hand-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-hand-up"></i>glyphicon glyphicon-hand-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-hand-down"></i> glyphicon glyphicon-hand-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-circle-arrow-right"></i> glyphicon-circle-arrow-right </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-circle-arrow-left"></i> glyphicon glyphicon-circle-arrow-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-circle-arrow-up"></i> glyphicon glyphicon-circle-arrow-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-circle-arrow-down"></i> glyphicon glyphicon-circle-arrow-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-globe"></i> glyphicon glyphicon-globe</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-wrench"></i>glyphicon glyphicon-wrench</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tasks"></i> glyphicon glyphicon-tasks</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-filter"></i> glyphicon glyphicon-filter</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-briefcase"></i> glyphicon glyphicon-briefcase</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-fullscreen"></i> glyphicon glyphicon-fullscreen</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-dashboard"></i> glyphicon glyphicon-dashboard</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-paperclip"></i> glyphicon glyphicon-paperclip</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-heart-empty"></i> glyphicon glyphicon-heart-empty</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-link"></i> glyphicon glyphicon-link</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-phone"></i> glyphicon glyphicon-phone</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-pushpin"></i> glyphicon glyphicon-pushpin</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-usd"></i> glyphicon glyphicon-usd</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-gbp"></i> glyphicon glyphicon-gbp</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sort"></i> glyphicon glyphicon-sort</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sort-by-alphabet"></i> glyphicon glyphicon-sort-by-alphabet</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sort-by-alphabet-alt"></i> glyphicon-sort-by-alphabet-alt </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sort-by-order"></i> glyphicon glyphicon-sort-by-order</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sort-by-order-alt"></i> glyphicon glyphicon-sort-by-order-alt</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sort-by-attributes"></i> glyphicon glyphicon-sort-by-attributes</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sort-by-attributes-alt"></i> glyphicon glyphicon-sort-by-attributes-alt</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-unchecked"></i> glyphicon glyphicon-unchecked</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-expand"></i> glyphicon glyphicon-expand</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-collapse-down"></i> glyphicon glyphicon-collapse-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-collapse-up"></i> glyphicon glyphicon-collapse-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-log-in"></i> glyphicon glyphicon-log-in</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-flash"></i> glyphicon glyphicon-flash</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-log-out"></i> glyphicon glyphicon-log-out</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-new-window"></i> glyphicon glyphicon-new-window</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-record"></i> glyphicon glyphicon-record</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-save"></i> glyphicon glyphicon-save</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-open"></i> glyphicon glyphicon-open</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-saved"></i> glyphicon glyphicon-saved</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-import"></i> glyphicon glyphicon-import</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-export"></i> glyphicon glyphicon-export</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-send"></i> glyphicon glyphicon-send</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-floppy-disk"></i> glyphicon glyphicon-floppy-disk</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-floppy-saved"></i>glyphicon glyphicon-floppy-saved</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-floppy-remove"></i> glyphicon glyphicon-floppy-remove</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-floppy-save"></i> glyphicon glyphicon-floppy-save</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-floppy-open"></i> glyphicon glyphicon-floppy-open</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-credit-card"></i> glyphicon glyphicon-credit-card</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-transfer"></i> glyphicon glyphicon-transfer</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-cutlery"></i>glyphicon glyphicon-cutlery</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-header"></i> glyphicon glyphicon-header</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-compressed"></i> glyphicon glyphicon-compressed</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-earphone"></i> glyphicon glyphicon-earphone</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-phone-alt"></i> glyphicon glyphicon-phone-alt</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tower"></i> glyphicon glyphicon-tower</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-stats"></i> glyphicon glyphicon-stats</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sd-video"></i> glyphicon glyphicon-sd-video</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-hd-video"></i> glyphicon glyphicon-hd-video</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-subtitles"></i> glyphicon glyphicon-subtitles</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sound-stereo"></i> glyphicon glyphicon-sound-stereo</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sound-dolby"></i> glyphicon glyphicon-sound-dolby</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sound-5-1"></i> glyphicon glyphicon-sound-5-1</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sound-6-1"></i>glyphicon glyphicon-sound-6-1</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sound-7-1"></i> glyphicon glyphicon-sound-7-1</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-copyright-mark"></i> glyphicon glyphicon-copyright-mark</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-registration-mark"></i> glyphicon glyphicon-registration-mark</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-cloud-download"></i> glyphicon glyphicon-cloud-download</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-cloud-upload"></i> glyphicon glyphicon-cloud-upload</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tree-conifer"></i> glyphicon glyphicon-tree-conifer</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tree-deciduous"></i> glyphicon glyphicon-tree-deciduous</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-cd"></i> glyphicon glyphicon-cd</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-save-file"></i> glyphicon glyphicon-save-file</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-open-file"></i> glyphicon glyphicon-open-file</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-level-up"></i> glyphicon glyphicon-level-up</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-copy"></i> glyphicon glyphicon-copy</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-paste"></i>glyphicon glyphicon-paste</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-alert"></i> glyphicon glyphicon-alert</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-equalizer"></i> glyphicon glyphicon-equalizer</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-king"></i> glyphicon glyphicon-king</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-queen"></i> glyphicon glyphicon-queen</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-pawn"></i> glyphicon glyphicon-pawn</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-bishop"></i> glyphicon glyphicon-bishop</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-knight"></i> glyphicon glyphicon-knight</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-baby-formula"></i> glyphicon glyphicon-baby-formula</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-tent"></i> glyphicon glyphicon-tent</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-blackboard"></i> glyphicon glyphicon-blackboard</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-bed"></i> glyphicon glyphicon-bed</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-apple"></i> glyphicon glyphicon-apple</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-erase"></i> glyphicon glyphicon-erase</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-hourglass"></i> glyphicon glyphicon-hourglass</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-lamp"></i> glyphicon glyphicon-lamp</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-duplicate"></i> glyphicon glyphicon-duplicate</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-piggy-bank"></i> glyphicon glyphicon-piggy-bank</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-scissors"></i> glyphicon glyphicon-scissors</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-bitcoin"></i> glyphicon glyphicon-bitcoin</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-btc"></i> glyphicon glyphicon-btc</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-xbt"></i> glyphicon glyphicon-xbt</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-yen"></i> glyphicon glyphicon-yen</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-jpy"></i> glyphicon glyphicon-jpy</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-ruble"></i> glyphicon glyphicon-ruble</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-rub"></i> glyphicon glyphicon-rub</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-scale"></i> glyphicon glyphicon-scale</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-ice-lolly"></i> glyphicon glyphicon-ice-lolly</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-ice-lolly-tasted"></i> glyphicon glyphicon-ice-lolly-tasted</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-education"></i> glyphicon glyphicon-education</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-option-horizontal"></i> glyphicon glyphicon-option-horizontal</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-option-vertical"></i> glyphicon glyphicon-option-vertical</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-menu-hamburger"></i> glyphicon glyphicon-menu-hamburger</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-modal-window"></i> glyphicon glyphicon-modal-window</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-oil"></i> glyphicon glyphicon-oil</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-grain"></i> glyphicon glyphicon-grain</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-sunglasses"></i> glyphicon glyphicon-sunglasses</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-text-size"></i> glyphicon glyphicon-text-size</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-text-color"></i> glyphicon glyphicon-text-color</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-text-background"></i> glyphicon glyphicon-text-background</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-object-align-top"></i> glyphicon glyphicon-object-align-top</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-object-align-bottom"></i> glyphicon-object-align-bottom </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-object-align-horizontal"></i> glyphicon-object-align-horizontal </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-object-align-left"></i> glyphicon glyphicon-object-align-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-object-align-vertical"></i> glyphicon-object-align-vertical </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-object-align-right"></i> glyphicon-object-align-right </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-triangle-right"></i> glyphicon glyphicon-triangle-right</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-triangle-left"></i> glyphicon glyphicon-triangle-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-triangle-bottom"></i> glyphicon glyphicon-triangle-bottom</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-triangle-top"></i> glyphicon glyphicon-triangle-top</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-console"></i> glyphicon glyphicon-console</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-superscript"></i> glyphicon glyphicon-superscript</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-subscript"></i> glyphicon glyphicon-subscript</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-menu-left"></i> glyphicon glyphicon-menu-left</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-menu-right"></i> glyphicon glyphicon-menu-right</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-menu-down"></i> glyphicon glyphicon-menu-down</div>
                    </div>
                    <div className="col-md-4">
                      <div className="iconBox"> <i className="glyphicon glyphicon-menu-up"></i> glyphicon glyphicon-menu-up</div>
                    </div>
                  </div>
                  : null}
              </div>
              <div className="row">
                {this.state.selectedTab === 'Simple line Icons' ?
                  <div className="clearfix">
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-user"></i>icon-user</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-people"></i>icon-people</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-user-female"></i>icon-user-female</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-user-follow"></i>icon-user-follow</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-user-following"></i>icon-user-following</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-user-unfollow"></i>icon-user-unfollow</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-login"></i>icon-login</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-logout"></i>icon-logout</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-emotsmile"></i>icon-emotsmile</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-phone"></i>icon-phone</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-call-end"></i>icon-call-end</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-call-in"></i>icon-call-in</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-call-out"></i>icon-call-out</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-map"></i>icon-map</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-location-pin"></i>icon-location-pin</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-direction"></i>icon-direction</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-directions"></i>icon-directions</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-compass"></i>icon-compass</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-layers"></i>icon-layers</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-menu"></i>icon-menu</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-list"></i>icon-list</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-options-vertical"></i>icon-options-vertical</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-options"></i>icon-options</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-down"></i>icon-arrow-down</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-left"></i>icon-arrow-left</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-right"></i>icon-arrow-right</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-up"></i>icon-arrow-up</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-up-circle"></i>icon-arrow-up-circle</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-left-circle"></i>icon-arrow-left-circle</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-right-circle"></i>icon-arrow-right-circle</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-arrow-down-circle"></i>icon-arrow-down-circle</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-check"></i>icon-check</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-clock"></i>icon-clock</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-plus"></i>icon-plus</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-minus"></i>icon-minus</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-close"></i>icon-close</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-event"></i>icon-event</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-exclamation"></i>icon-exclamation</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-organization"></i>icon-organization</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-trophy"></i>icon-trophy</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-screen-smartphone"></i>icon-screen-smartphone</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-screen-desktop"></i>icon-screen-desktop</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-plane"></i>icon-plane</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-notebook"></i>icon-notebook</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-mustache"></i>icon-mustache</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-mouse"></i>icon-mouse</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-magnet"></i>icon-magnet</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-energy"></i>icon-energy</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-disc"></i>icon-disc</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-cursor"></i>icon-cursor</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-cursor-move"></i>icon-cursor-move</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-crop"></i>icon-crop</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-chemistry"></i>icon-chemistry</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-speedometer"></i>icon-speedometer</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-shield"></i>icon-shield</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-screen-tablet"></i>icon-screen-tablet</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-magic-wand"></i>icon-magic-wand</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-hourglass"></i>icon-hourglass</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-graduation"></i>icon-graduation</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-ghost"></i>icon-ghost</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-game-controller"></i>icon-game-controller</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-fire"></i>icon-fire</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-eyeglass"></i>icon-eyeglass</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-envelope-open"></i>icon-envelope-open</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-envelope-letter"></i>icon-envelope-letter</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-bell"></i>icon-bell</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-badge"></i>icon-badge</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-anchor"></i>icon-anchor</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-wallet"></i>icon-wallet</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-vector"></i>icon-vector</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-speech"></i>icon-speech</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-puzzle"></i>icon-puzzle</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-printer"></i>icon-printer</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-present"></i>icon-present</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-playlist"></i>icon-playlist</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-pin"></i>icon-pin</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-picture"></i>icon-picture</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-handbag"></i>icon-handbag</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-globe-alt"></i>icon-globe-alt</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-globe"></i>icon-globe</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-folder-alt"></i>icon-folder-alt</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-folder"></i>icon-folder</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-film"></i>icon-film</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-feed"></i>icon-feed</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-drop"></i>icon-drop</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-drawer"></i>icon-drawer</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-docs"></i>icon-docs</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-doc"></i>icon-doc</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-diamond"></i>icon-diamond</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-cup"></i>icon-cup</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-calculator"></i>icon-calculator</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-bubbles"></i>icon-bubbles</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-briefcase"></i>icon-briefcase</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-book-open"></i>icon-book-open</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-basket-loaded"></i>icon-basket-loaded</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-basket"></i>icon-basket</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-bag"></i>icon-bag</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-action-undo"></i>icon-action-undo</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-action-redo"></i>icon-action-redo</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-wrench"></i>icon-wrench</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-umbrella"></i>icon-umbrella</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-trash"></i>icon-trash</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-tag"></i>icon-tag</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-support"></i>icon-support</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-frame"></i>icon-frame</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-size-fullscreen"></i>icon-size-fullscreen</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-size-actual"></i>icon-size-actual</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-shuffle"></i>icon-shuffle</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-share-alt"></i>icon-share-alt</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-share"></i>icon-share</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-rocket"></i>icon-rocket</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-question"></i>icon-question</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-pie-chart"></i>icon-pie-chart</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-pencil"></i>icon-pencil</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-note"></i>icon-note</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-loop"></i>icon-loop</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-home"></i>icon-home</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-grid"></i>icon-grid</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-graph"></i>icon-graph</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-microphone"></i>icon-microphone</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-music-tone-alt"></i>icon-music-tone-alt</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-music-tone"></i>icon-music-tone</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-earphones-alt"></i>icon-earphones-alt</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-earphones"></i>icon-earphones</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-equalizer"></i>icon-equalizer</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-like"></i>icon-like</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-dislike"></i>icon-dislike</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-control-start"></i>icon-control-start</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-control-rewind"></i>icon-control-rewind</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-control-play"></i>icon-control-play</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-control-pause"></i>icon-control-pause</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-control-forward"></i>icon-control-forward</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-control-end"></i>icon-control-end</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-volume-1"></i>icon-volume-1</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-volume-2"></i>icon-volume-2</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-volume-off"></i>icon-volume-off</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-calendar"></i>icon-calendar</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-bulb"></i>icon-bulb</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-chart"></i>icon-chart</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-ban"></i>icon-ban</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-bubble"></i>icon-bubble</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-camrecorder"></i>icon-camrecorder</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-camera"></i>icon-camera</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-cloud-download"></i>icon-cloud-download</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-cloud-upload"></i>icon-cloud-upload</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-envelope"></i>icon-envelope</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-eye"></i>icon-eye</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-flag"></i>icon-flag</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-heart"></i>icon-heart</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-info"></i>icon-info</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-key"></i>icon-key</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-link"></i>icon-link</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-lock"></i>icon-lock</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-lock-open"></i>icon-lock-open</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-magnifier"></i>icon-magnifier</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-magnifier-add"></i>icon-magnifier-add</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-magnifier-remove"></i>icon-magnifier-remove</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-paper-clip"></i>icon-paper-clip</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-paper-plane"></i>icon-paper-plane</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-power"></i>icon-power</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-refresh"></i>icon-refresh</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-reload"></i>icon-reload</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-settings"></i>icon-settings</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-star"></i>icon-star</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-symbol-female"></i>icon-symbol-female</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-symbol-male"></i>icon-symbol-male</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-target"></i>icon-target</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-credit-card"></i>icon-credit-card</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-paypal"></i>icon-paypal</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-tumblr"></i>icon-social-tumblr</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-twitter"></i>icon-social-twitter</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-facebook"></i>icon-social-facebook</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-instagram"></i>icon-social-instagram</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-linkedin"></i>icon-social-linkedin</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-pinterest"></i>icon-social-pinterest</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-github"></i>icon-social-github</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-google"></i>icon-social-google</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-reddit"></i>icon-social-reddit</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-skype"></i>icon-social-skype</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-dribbble"></i>icon-social-dribbble</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-behance"></i>icon-social-behance</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-foursqare"></i>icon-social-foursqare</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-soundcloud"></i>icon-social-soundcloud</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-spotify"></i>icon-social-spotify</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-stumbleupon"></i>icon-social-stumbleupon</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-youtube"></i>icon-social-youtube</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-dropbox"></i>icon-social-dropbox</div></div>
                    <div className="col-md-3"><div className="iconBox"> <i className="icon-social-steam"></i>icon-social-steam</div></div>
                  </div>
                  : null}
              </div>
              <div className="row">
                {this.state.selectedTab === 'Font Awesome' ?
                  <div className="clearfix">
                    <h2 className="headingStyle1"><i className="icon-eye"></i> 41 New Icons in 4.7</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-book"></i> address-book</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-book-o"></i> address-book-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-card"></i> address-card</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-card-o"></i> address-card-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bandcamp"></i> bandcamp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bath"></i> bath</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bathtub"></i> bathtub </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-drivers-license"></i> drivers-license </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-drivers-license-o"></i> drivers-license-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eercast"></i> eercast</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envelope-open"></i> envelope-open</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envelope-open-o"></i> envelope-open-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-etsy"></i> etsy</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-free-code-camp"></i> free-code-camp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-grav"></i> grav</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-handshake-o"></i> handshake-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-id-badge"></i> id-badge</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-id-card"></i> id-card</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-id-card-o"></i> id-card-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-imdb"></i> imdb</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-linode"></i> linode</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-meetup"></i> meetup</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-microchip"></i> microchip</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-podcast"></i> podcast</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-quora"></i> quora</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ravelry"></i> ravelry</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-s15"></i> s15 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shower"></i> shower</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-snowflake-o"></i> snowflake-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-superpowers"></i> superpowers</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-telegram"></i> telegram</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer"></i> thermometer </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-0"></i> thermometer-0 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-1"></i> thermometer-1</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-2"></i> thermometer-2 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-3"></i> thermometer-3 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-4"></i> thermometer-4 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-empty"></i> thermometer-empty</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-full"></i> thermometer-full</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-half"></i> thermometer-half</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-quarter"></i> thermometer-quarter</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-three-quarters"></i> thermometer-three-quarters</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-times-rectangle"></i> times-rectangle </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-times-rectangle-o"></i> times-rectangle-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-circle"></i>user-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-circle-o"></i> user-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-o"></i> user-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vcard"></i> vcard </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vcard-o"></i> vcard-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-close"></i> window-close</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-close-o"></i> window-close-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-maximize"></i> window-maximize</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-minimize"></i> window-minimize</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-restore"></i> window-restore</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wpexplorer"></i> wpexplorer</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Web Application Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-book"></i> address-book</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-book-o"></i> address-book-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-card"></i> address-card</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-address-card-o"></i> address-card-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-adjust"></i> adjust</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-american-sign-language-interpreting"></i> american-sign-language-interpreting</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-anchor"></i> anchor</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-archive"></i> archive</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-area-chart"></i> area-chart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows"></i> arrows</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows-h"></i> arrows-h</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows-v"></i> arrows-v</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-asl-interpreting"></i> asl-interpreting </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-assistive-listening-systems"></i> assistive-listening-systems</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-asterisk"></i> asterisk</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-at"></i> at</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-audio-description"></i> audio-description</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-automobile"></i> automobile </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-balance-scale"></i> balance-scale</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ban"></i> ban</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bank"></i> bank </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bar-chart"></i> bar-chart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bar-chart-o"></i> bar-chart-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-barcode"></i> barcode</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bars"></i> bars</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bath"></i> bath</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bathtub"></i> bathtub </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery"></i> battery </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-0"></i> battery-0 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-1"></i> battery-1 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-2"></i> battery-2 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-3"></i> battery-3 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-4"></i> battery-4 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-empty"></i> battery-empty</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-full"></i> battery-full</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-half"></i> battery-half</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-quarter"></i> battery-quarter</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-battery-three-quarters"></i> battery-three-quarters</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bed"></i> bed</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-beer"></i> beer</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bell"></i> bell</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bell-o"></i> bell-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bell-slash"></i> bell-slash</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bell-slash-o"></i> bell-slash-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bicycle"></i> bicycle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-binoculars"></i> binoculars</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-birthday-cake"></i> birthday-cake</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-blind"></i> blind</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bluetooth"></i> bluetooth</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bluetooth-b"></i> bluetooth-b</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bolt"></i> bolt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bomb"></i> bomb</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-book"></i> book</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bookmark"></i> bookmark</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bookmark-o"></i> bookmark-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-braille"></i> braille</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-briefcase"></i> briefcase</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bug"></i> bug</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-building"></i> building</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-building-o"></i> building-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bullhorn"></i> bullhorn</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bullseye"></i> bullseye</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bus"></i> bus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cab"></i> cab </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-calculator"></i> calculator</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-calendar"></i> calendar</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-calendar-check-o"></i> calendar-check-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-calendar-minus-o"></i> calendar-minus-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-calendar-o"></i> calendar-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-calendar-plus-o"></i> calendar-plus-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-calendar-times-o"></i> calendar-times-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-camera"></i> camera</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-camera-retro"></i> camera-retro</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-car"></i> car</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-down"></i> caret-square-o-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-left"></i> caret-square-o-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-right"></i> caret-square-o-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-up"></i> caret-square-o-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cart-arrow-down"></i> cart-arrow-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cart-plus"></i> cart-plus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc"></i> cc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-certificate"></i> certificate</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-check"></i> check</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-check-circle"></i> check-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-check-circle-o"></i> check-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-check-square"></i> check-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-check-square-o"></i> check-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-child"></i> child</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-circle"></i> circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-circle-o"></i> circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-circle-o-notch"></i> circle-o-notch</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-circle-thin"></i> circle-thin</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-clock-o"></i> clock-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-clone"></i> clone</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-close"></i> close </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cloud"></i> cloud</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cloud-download"></i> cloud-download</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cloud-upload"></i> cloud-upload</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-code"></i> code</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-code-fork"></i> code-fork</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-coffee"></i> coffee</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cog"></i> cog</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cogs"></i> cogs</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-comment"></i> comment</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-comment-o"></i> comment-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-commenting"></i> commenting</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-commenting-o"></i> commenting-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-comments"></i> comments</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-comments-o"></i> comments-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-compass"></i> compass</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-copyright"></i> copyright</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-creative-commons"></i> creative-commons</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-credit-card"></i> credit-card</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-credit-card-alt"></i> credit-card-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-crop"></i> crop</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-crosshairs"></i> crosshairs</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cube"></i> cube</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cubes"></i> cubes</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cutlery"></i> cutlery</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-dashboard"></i> dashboard </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-database"></i> database</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-deaf"></i> deaf</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-deafness"></i> deafness </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-desktop"></i> desktop</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-diamond"></i> diamond</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-dot-circle-o"></i> dot-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-download"></i> download</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-drivers-license"></i> drivers-license </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-drivers-license-o"></i> drivers-license-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-edit"></i> edit </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ellipsis-h"></i> ellipsis-h</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ellipsis-v"></i> ellipsis-v</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envelope"></i> envelope</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envelope-o"></i> envelope-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envelope-open"></i> envelope-open</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envelope-open-o"></i> envelope-open-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envelope-square"></i> envelope-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eraser"></i> eraser</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-exchange"></i> exchange</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-exclamation"></i> exclamation</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-exclamation-circle"></i> exclamation-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-exclamation-triangle"></i> exclamation-triangle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-external-link"></i> external-link</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-external-link-square"></i> external-link-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eye"></i> eye</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eye-slash"></i> eye-slash</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eyedropper"></i> eyedropper</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fax"></i> fax</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-feed"></i> feed </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-female"></i> female</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fighter-jet"></i> fighter-jet</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-archive-o"></i> file-archive-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-audio-o"></i> file-audio-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-code-o"></i> file-code-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-excel-o"></i> file-excel-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-image-o"></i> file-image-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-movie-o"></i> file-movie-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-pdf-o"></i> file-pdf-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-photo-o"></i> file-photo-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-picture-o"></i> file-picture-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-powerpoint-o"></i> file-powerpoint-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-sound-o"></i> file-sound-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-video-o"></i> file-video-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-word-o"></i> file-word-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-zip-o"></i> file-zip-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-film"></i> film</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-filter"></i> filter</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fire"></i> fire</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fire-extinguisher"></i> fire-extinguisher</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-flag"></i> flag</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-flag-checkered"></i> flag-checkered</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-flag-o"></i> flag-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-flash"></i> flash </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-flask"></i> flask</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-folder"></i> folder</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-folder-o"></i> folder-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-folder-open"></i> folder-open</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-folder-open-o"></i> folder-open-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-frown-o"></i> frown-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-futbol-o"></i> futbol-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gamepad"></i> gamepad</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gavel"></i> gavel</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gear"></i> gear </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gears"></i> gears </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gift"></i> gift</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-glass"></i> glass</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-globe"></i> globe</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-graduation-cap"></i> graduation-cap</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-group"></i> group </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-grab-o"></i> hand-grab-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-lizard-o"></i> hand-lizard-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-paper-o"></i> hand-paper-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-peace-o"></i> hand-peace-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-pointer-o"></i> hand-pointer-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-rock-o"></i> hand-rock-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-scissors-o"></i> hand-scissors-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-spock-o"></i> hand-spock-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-stop-o"></i> hand-stop-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-handshake-o"></i> handshake-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hard-of-hearing"></i> hard-of-hearing </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hashtag"></i> hashtag</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hdd-o"></i> hdd-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-headphones"></i> headphones</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-heart"></i> heart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-heart-o"></i> heart-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-heartbeat"></i> heartbeat</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-history"></i> history</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-home"></i> home</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hotel"></i> hotel </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass"></i> hourglass</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass-1"></i> hourglass-1 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass-2"></i> hourglass-2 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass-3"></i> hourglass-3 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass-end"></i> hourglass-end</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass-half"></i> hourglass-half</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass-o"></i> hourglass-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hourglass-start"></i> hourglass-start</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-i-cursor"></i> i-cursor</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-id-badge"></i> id-badge</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-id-card"></i> id-card</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-id-card-o"></i> id-card-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-image"></i> image </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-inbox"></i> inbox</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-industry"></i> industry</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-info"></i> info</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-info-circle"></i> info-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-institution"></i> institution </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-key"></i> key</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-keyboard-o"></i> keyboard-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-language"></i> language</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-laptop"></i> laptop</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-leaf"></i> leaf</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-legal"></i> legal </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-lemon-o"></i> lemon-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-level-down"></i> level-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-level-up"></i> level-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-life-bouy"></i> life-bouy </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-life-buoy"></i> life-buoy </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-life-ring"></i> life-ring</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-life-saver"></i> life-saver </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-lightbulb-o"></i> lightbulb-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-line-chart"></i> line-chart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-location-arrow"></i> location-arrow</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-lock"></i> lock</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-low-vision"></i> low-vision</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-magic"></i> magic</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-magnet"></i> magnet</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mail-forward"></i> mail-forward </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mail-reply"></i> mail-reply </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mail-reply-all"></i> mail-reply-all </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-male"></i> male</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-map"></i> map</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-map-marker"></i> map-marker</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-map-o"></i> map-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-map-pin"></i> map-pin</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-map-signs"></i> map-signs</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-meh-o"></i> meh-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-microchip"></i> microchip</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-microphone"></i> microphone</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-microphone-slash"></i> microphone-slash</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-minus"></i> minus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-minus-circle"></i> minus-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-minus-square"></i> minus-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-minus-square-o"></i> minus-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mobile"></i> mobile</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mobile-phone"></i> mobile-phone </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-money"></i> money</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-moon-o"></i> moon-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mortar-board"></i> mortar-board </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-motorcycle"></i> motorcycle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mouse-pointer"></i> mouse-pointer</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-music"></i> music</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-navicon"></i> navicon </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-newspaper-o"></i> newspaper-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-object-group"></i> object-group</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-object-ungroup"></i> object-ungroup</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-paint-brush"></i> paint-brush</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-paper-plane"></i> paper-plane</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-paper-plane-o"></i> paper-plane-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-paw"></i> paw</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pencil"></i> pencil</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pencil-square"></i> pencil-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pencil-square-o"></i> pencil-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-percent"></i> percent</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-phone"></i> phone</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-phone-square"></i> phone-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-photo"></i> photo </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-picture-o"></i> picture-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pie-chart"></i> pie-chart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plane"></i> plane</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plug"></i> plug</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plus"></i> plus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plus-circle"></i> plus-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plus-square"></i> plus-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plus-square-o"></i> plus-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-podcast"></i> podcast</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-power-off"></i> power-off</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-print"></i> print</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-puzzle-piece"></i> puzzle-piece</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-qrcode"></i> qrcode</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-question"></i> question</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-question-circle"></i> question-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-question-circle-o"></i> question-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-quote-left"></i> quote-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-quote-right"></i> quote-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-random"></i> random</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-recycle"></i> recycle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-refresh"></i> refresh</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-registered"></i> registered</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-remove"></i> remove </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-reorder"></i> reorder </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-reply"></i> reply</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-reply-all"></i> reply-all</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-retweet"></i> retweet</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-road"></i> road</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rocket"></i> rocket</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rss"></i> rss</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rss-square"></i> rss-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-s15"></i> s15 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-search"></i> search</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-search-minus"></i> search-minus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-search-plus"></i> search-plus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-send"></i> send </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-send-o"></i> send-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-server"></i> server</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-share"></i> share</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-share-alt"></i> share-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-share-alt-square"></i> share-alt-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-share-square"></i> share-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-share-square-o"></i> share-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shield"></i> shield</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ship"></i> ship</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shopping-bag"></i> shopping-bag</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shopping-basket"></i> shopping-basket</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shopping-cart"></i> shopping-cart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shower"></i> shower</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sign-in"></i> sign-in</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sign-language"></i> sign-language</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sign-out"></i> sign-out</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-signal"></i> signal</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-signing"></i> signing </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sitemap"></i> sitemap</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sliders"></i> sliders</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-smile-o"></i> smile-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-snowflake-o"></i> snowflake-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-soccer-ball-o"></i> soccer-ball-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort"></i> sort</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-alpha-asc"></i> sort-alpha-asc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-alpha-desc"></i> sort-alpha-desc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-amount-asc"></i> sort-amount-asc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-amount-desc"></i> sort-amount-desc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-asc"></i> sort-asc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-desc"></i> sort-desc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-down"></i> sort-down </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-numeric-asc"></i> sort-numeric-asc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-numeric-desc"></i> sort-numeric-desc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sort-up"></i> sort-up </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-space-shuttle"></i> space-shuttle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-spinner"></i> spinner</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-spoon"></i> spoon</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-square"></i> square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-square-o"></i> square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-star"></i> star</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-star-half"></i> star-half</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-star-half-empty"></i> star-half-empty </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-star-half-full"></i> star-half-full </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-star-half-o"></i> star-half-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-star-o"></i> star-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sticky-note"></i> sticky-note</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sticky-note-o"></i> sticky-note-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-street-view"></i> street-view</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-suitcase"></i> suitcase</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sun-o"></i> sun-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-support"></i> support </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tablet"></i> tablet</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tachometer"></i> tachometer</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tag"></i> tag</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tags"></i> tags</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tasks"></i> tasks</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-taxi"></i> taxi</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-television"></i> television</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-terminal"></i> terminal</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer"></i> thermometer </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-0"></i> thermometer-0 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-1"></i> thermometer-1 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-2"></i> thermometer-2 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-3"></i> thermometer-3 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-4"></i> thermometer-4 </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-empty"></i> thermometer-empty</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-full"></i> thermometer-full</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-half"></i> thermometer-half</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-quarter"></i> thermometer-quarter</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thermometer-three-quarters"></i> thermometer-three-quarters</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumb-tack"></i> thumb-tack</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-down"></i> thumbs-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-o-down"></i> thumbs-o-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-o-up"></i> thumbs-o-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-up"></i> thumbs-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ticket"></i> ticket</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-times"></i> times</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-times-circle"></i> times-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-times-circle-o"></i> times-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-times-rectangle"></i> times-rectangle </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-times-rectangle-o"></i> times-rectangle-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tint"></i> tint</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-down"></i> toggle-down </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-left"></i> toggle-left </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-off"></i> toggle-off</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-on"></i> toggle-on</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-right"></i> toggle-right </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-up"></i> toggle-up </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-trademark"></i> trademark</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-trash"></i> trash</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-trash-o"></i> trash-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tree"></i> tree</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-trophy"></i> trophy</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-truck"></i> truck</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tty"></i> tty</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tv"></i> tv </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-umbrella"></i> umbrella</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-universal-access"></i> universal-access</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-university"></i> university</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-unlock"></i> unlock</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-unlock-alt"></i> unlock-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-unsorted"></i> unsorted </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-upload"></i> upload</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user"></i> user</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-circle"></i> user-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-circle-o"></i> user-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-o"></i> user-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-plus"></i> user-plus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-secret"></i> user-secret</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-times"></i> user-times</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-users"></i> users</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vcard"></i> vcard </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vcard-o"></i> vcard-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-video-camera"></i> video-camera</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-volume-control-phone"></i> volume-control-phone</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-volume-down"></i> volume-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-volume-off"></i> volume-off</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-volume-up"></i> volume-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-warning"></i> warning </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair"></i> wheelchair</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair-alt"></i> wheelchair-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wifi"></i> wifi</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-close"></i> window-close</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-close-o"></i> window-close-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-maximize"></i> window-maximize</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-minimize"></i> window-minimize</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-window-restore"></i> window-restore</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wrench"></i> wrench</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Accessibility Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-american-sign-language-interpreting"></i> american-sign-language-interpreting</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-asl-interpreting"></i> asl-interpreting </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-assistive-listening-systems"></i> assistive-listening-systems</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-audio-description"></i> audio-description</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-blind"></i> blind</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-braille"></i> braille</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc"></i> cc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-deaf"></i> deaf</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-deafness"></i> deafness </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hard-of-hearing"></i> hard-of-hearing </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-low-vision"></i> low-vision</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-question-circle-o"></i> question-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sign-language"></i> sign-language</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-signing"></i> signing </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tty"></i> tty</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-universal-access"></i> universal-access</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-volume-control-phone"></i> volume-control-phone</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair"></i> wheelchair</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair-alt"></i> wheelchair-alt</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Hand Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-grab-o"></i>hand-grab-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-lizard-o"></i>hand-lizard-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-down"></i>hand-o-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-left"></i>hand-o-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-right"></i>hand-o-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-up"></i>hand-o-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-paper-o"></i>hand-paper-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-peace-o"></i>hand-peace-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-pointer-o"></i>hand-pointer-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-rock-o"></i>hand-rock-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-scissors-o"></i>hand-scissors-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-spock-o"></i>hand-spock-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-stop-o"></i>hand-stop-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-down"></i>thumbs-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-o-down"></i>thumbs-o-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-o-up"></i>thumbs-o-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-thumbs-up"></i>thumbs-up</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Transportation Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ambulance"></i> ambulance</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-automobile"></i> automobile </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bicycle"></i> bicycle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bus"></i> bus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cab"></i> cab </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-car"></i> car</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fighter-jet"></i> fighter-jet</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-motorcycle"></i> motorcycle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plane"></i> plane</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rocket"></i> rocket</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ship"></i> ship</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-space-shuttle"></i> space-shuttle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-subway"></i> subway</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-taxi"></i> taxi</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-train"></i> train</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-truck"></i> truck</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair"></i> wheelchair</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair-alt"></i> wheelchair-alt</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Gender Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-genderless"></i> genderless</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-intersex"></i> intersex </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mars"></i> mars</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mars-double"></i> mars-double</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mars-stroke"></i> mars-stroke</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mars-stroke-h"></i> mars-stroke-h</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mars-stroke-v"></i> mars-stroke-v</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mercury"></i> mercury</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-neuter"></i> neuter</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-transgender"></i> transgender</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-transgender-alt"></i> transgender-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-venus"></i> venus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-venus-double"></i> venus-double</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-venus-mars"></i> venus-mars</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> File Type Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file"></i> file</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-archive-o"></i> file-archive-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-audio-o"></i> file-audio-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-code-o"></i> file-code-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-excel-o"></i> file-excel-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-image-o"></i> file-image-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-movie-o"></i> file-movie-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-o"></i> file-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-pdf-o"></i> file-pdf-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-photo-o"></i> file-photo-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-picture-o"></i> file-picture-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-powerpoint-o"></i> file-powerpoint-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-sound-o"></i> file-sound-o </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-text"></i> file-text</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-text-o"></i> file-text-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-video-o"></i> file-video-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-word-o"></i> file-word-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-file-zip-o"></i> file-zip-o </div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Spinner Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-circle-o-notch"></i> circle-o-notch</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cog"></i> cog</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gear"></i> gear </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-refresh"></i> refresh</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-spinner"></i> spinner</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Form Control Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-check-square"></i> check-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-check-square-o"></i> check-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-circle"></i> circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-circle-o"></i> circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-dot-circle-o"></i> dot-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-minus-square"></i> minus-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-minus-square-o"></i> minus-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plus-square"></i> plus-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plus-square-o"></i> plus-square-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-square"></i> square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-square-o"></i> square-o</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Payment Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-amex"></i> cc-amex</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-diners-club"></i> cc-diners-club</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-discover"></i> cc-discover</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-jcb"></i> cc-jcb</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-mastercard"></i> cc-mastercard</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-paypal"></i> cc-paypal</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-stripe"></i> cc-stripe</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-visa"></i> cc-visa</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-credit-card"></i> credit-card</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-credit-card-alt"></i> credit-card-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-google-wallet"></i> google-wallet</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-paypal"></i> paypal</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Chart Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-area-chart"></i> area-chart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bar-chart"></i> bar-chart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bar-chart-o"></i> bar-chart-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-line-chart"></i> line-chart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pie-chart"></i> pie-chart</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Currency Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bitcoin"></i> bitcoin </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-btc"></i> btc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cny"></i> cny </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-dollar"></i> dollar </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eur"></i> eur</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-euro"></i> euro </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gbp"></i> gbp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gg"></i> gg</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gg-circle"></i> gg-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ils"></i> ils</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-inr"></i> inr</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-jpy"></i> jpy</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-krw"></i> krw</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-money"></i> money</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rmb"></i> rmb </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rouble"></i> rouble </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rub"></i> rub</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ruble"></i> ruble </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rupee"></i> rupee </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shekel"></i> shekel </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sheqel"></i> sheqel </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-try"></i> try</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-turkish-lira"></i> turkish-lira </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-usd"></i> usd</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-won"></i> won </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-yen"></i> yen </div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Text Editor Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-align-center"></i> align-center
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-align-justify"></i> align-justify
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-align-left"></i> align-left
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-align-right"></i> align-right
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-bold"></i> bold
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-chain"></i> chain
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-chain-broken"></i> chain-broken
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-clipboard"></i> clipboard
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-columns"></i> columns
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-copy"></i> copy
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-cut"></i> cut
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-dedent"></i> dedent
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-eraser"></i> eraser
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-file"></i> file
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-file-o"></i> file-o
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-file-text"></i> file-text
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-file-text-o"></i> file-text-o
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-files-o"></i> files-o
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-floppy-o"></i> floppy-o
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-font"></i> font
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-header"></i> header
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-indent"></i> indent
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-italic"></i> italic
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-link"></i> link
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-list"></i> list
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-list-alt"></i> list-alt
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-list-ol"></i> list-ol
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-list-ul"></i> list-ul
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-outdent"></i> outdent
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-paperclip"></i> paperclip
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-paragraph"></i> paragraph
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-paste"></i> paste
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-repeat"></i> repeat
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-rotate-left"></i> rotate-left
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-rotate-right"></i> rotate-right
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-save"></i> save
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-scissors"></i> scissors
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-strikethrough"></i> strikethrough
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-subscript"></i> subscript
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-superscript"></i> superscript
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-table"></i> table
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-text-height"></i> text-height
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-text-width"></i> text-width
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-th"></i> th
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-th-large"></i> th-large
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-th-list"></i> th-list
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-underline"></i> underline
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-undo"></i> undo
                      </div></div>
                    <div className="col-md-3">
                      <div className="iconBox">
                        <i className="fa fa-unlink"></i> unlink
                      </div></div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Directional Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-double-down"></i> angle-double-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-double-left"></i> angle-double-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-double-right"></i> angle-double-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-double-up"></i> angle-double-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-down"></i> angle-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-left"></i> angle-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-right"></i> angle-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angle-up"></i> angle-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-down"></i> arrow-circle-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-left"></i> arrow-circle-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-o-down"></i> arrow-circle-o-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-o-left"></i> arrow-circle-o-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-o-right"></i> arrow-circle-o-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-o-up"></i> arrow-circle-o-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-right"></i> arrow-circle-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-circle-up"></i> arrow-circle-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-down"></i> arrow-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-left"></i> arrow-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-right"></i> arrow-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrow-up"></i> arrow-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows"></i> arrows</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows-alt"></i> arrows-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows-h"></i> arrows-h</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows-v"></i> arrows-v</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-down"></i> caret-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-left"></i> caret-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-right"></i> caret-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-down"></i> caret-square-o-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-left"></i> caret-square-o-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-right"></i> caret-square-o-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-square-o-up"></i> caret-square-o-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-caret-up"></i> caret-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-circle-down"></i> chevron-circle-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-circle-left"></i> chevron-circle-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-circle-right"></i> chevron-circle-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-circle-up"></i> chevron-circle-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-down"></i> chevron-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-left"></i> chevron-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-right"></i> chevron-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chevron-up"></i> chevron-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-exchange"></i> exchange</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-down"></i> hand-o-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-left"></i> hand-o-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-right"></i> hand-o-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hand-o-up"></i> hand-o-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-long-arrow-down"></i> long-arrow-down</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-long-arrow-left"></i> long-arrow-left</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-long-arrow-right"></i> long-arrow-right</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-long-arrow-up"></i> long-arrow-up</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-down"></i> toggle-down </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-left"></i> toggle-left </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-right"></i> toggle-right </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-toggle-up"></i> toggle-up </div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Video Player Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-arrows-alt"></i> arrows-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-backward"></i> backward</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-compress"></i> compress</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eject"></i> eject</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-expand"></i> expand</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fast-backward"></i> fast-backward</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fast-forward"></i> fast-forward</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-forward"></i> forward</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pause"></i> pause</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pause-circle"></i> pause-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pause-circle-o"></i> pause-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-play"></i> play</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-play-circle"></i> play-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-play-circle-o"></i> play-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-random"></i> random</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-step-backward"></i> step-backward</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-step-forward"></i> step-forward</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stop"></i> stop</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stop-circle"></i> stop-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stop-circle-o"></i> stop-circle-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-youtube-play"></i> youtube-play</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Brand Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-500px"></i> 500px</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-adn"></i> adn</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-amazon"></i> amazon</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-android"></i> android</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-angellist"></i> angellist</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-apple"></i> apple</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bandcamp"></i> bandcamp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-behance"></i> behance</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-behance-square"></i> behance-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bitbucket"></i> bitbucket</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bitbucket-square"></i> bitbucket-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bitcoin"></i> bitcoin </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-black-tie"></i> black-tie</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bluetooth"></i> bluetooth</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-bluetooth-b"></i> bluetooth-b</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-btc"></i> btc</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-buysellads"></i> buysellads</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-amex"></i> cc-amex</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-diners-club"></i> cc-diners-club</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-discover"></i> cc-discover</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-jcb"></i> cc-jcb</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-mastercard"></i> cc-mastercard</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-paypal"></i> cc-paypal</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-stripe"></i> cc-stripe</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-cc-visa"></i> cc-visa</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-chrome"></i> chrome</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-codepen"></i> codepen</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-codiepie"></i> codiepie</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-connectdevelop"></i> connectdevelop</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-contao"></i> contao</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-css3"></i> css3</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-dashcube"></i> dashcube</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-delicious"></i> delicious</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-deviantart"></i> deviantart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-digg"></i> digg</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-dribbble"></i> dribbble</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-dropbox"></i> dropbox</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-drupal"></i> drupal</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-edge"></i> edge</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-eercast"></i> eercast</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-empire"></i> empire</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-envira"></i> envira</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-etsy"></i> etsy</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-expeditedssl"></i> expeditedssl</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fa"></i> fa </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-facebook"></i> facebook</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-facebook-f"></i> facebook-f </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-facebook-official"></i> facebook-official</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-facebook-square"></i> facebook-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-firefox"></i> firefox</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-first-order"></i> first-order</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-flickr"></i> flickr</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-font-awesome"></i> font-awesome</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fonticons"></i> fonticons</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-fort-awesome"></i> fort-awesome</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-forumbee"></i> forumbee</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-foursquare"></i> foursquare</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-free-code-camp"></i> free-code-camp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ge"></i> ge </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-get-pocket"></i> get-pocket</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gg"></i> gg</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gg-circle"></i> gg-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-git"></i> git</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-git-square"></i> git-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-github"></i> github</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-github-alt"></i> github-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-github-square"></i> github-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gitlab"></i> gitlab</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gittip"></i> gittip </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-glide"></i> glide</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-glide-g"></i> glide-g</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-google"></i> google</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-google-plus"></i> google-plus</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-google-plus-circle"></i> google-plus-circle </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-google-plus-official"></i> google-plus-official</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-google-plus-square"></i> google-plus-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-google-wallet"></i> google-wallet</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-gratipay"></i> gratipay</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-grav"></i> grav</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hacker-news"></i> hacker-news</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-houzz"></i> houzz</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-html5"></i> html5</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-imdb"></i> imdb</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-instagram"></i> instagram</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-internet-explorer"></i> internet-explorer</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ioxhost"></i> ioxhost</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-joomla"></i> joomla</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-jsfiddle"></i> jsfiddle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-lastfm"></i> lastfm</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-lastfm-square"></i> lastfm-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-leanpub"></i> leanpub</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-linkedin"></i> linkedin</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-linkedin-square"></i> linkedin-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-linode"></i> linode</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-linux"></i> linux</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-maxcdn"></i> maxcdn</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-meanpath"></i> meanpath</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-medium"></i> medium</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-meetup"></i> meetup</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-mixcloud"></i> mixcloud</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-modx"></i> modx</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-odnoklassniki"></i> odnoklassniki</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-odnoklassniki-square"></i> odnoklassniki-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-opencart"></i> opencart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-openid"></i> openid</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-opera"></i> opera</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-optin-monster"></i> optin-monster</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pagelines"></i> pagelines</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-paypal"></i> paypal</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pied-piper"></i> pied-piper</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pied-piper-alt"></i> pied-piper-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pied-piper-pp"></i> pied-piper-pp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pinterest"></i> pinterest</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pinterest-p"></i> pinterest-p</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-pinterest-square"></i> pinterest-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-product-hunt"></i> product-hunt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-qq"></i> qq</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-quora"></i> quora</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ra"></i> ra </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ravelry"></i> ravelry</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-rebel"></i> rebel</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-reddit"></i> reddit</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-reddit-alien"></i> reddit-alien</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-reddit-square"></i> reddit-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-renren"></i> renren</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-resistance"></i> resistance </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-safari"></i> safari</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-scribd"></i> scribd</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-sellsy"></i> sellsy</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-share-alt"></i> share-alt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-share-alt-square"></i> share-alt-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-shirtsinbulk"></i> shirtsinbulk</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-simplybuilt"></i> simplybuilt</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-skyatlas"></i> skyatlas</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-skype"></i> skype</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-slack"></i> slack</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-slideshare"></i> slideshare</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-snapchat"></i> snapchat</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-snapchat-ghost"></i> snapchat-ghost</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-snapchat-square"></i> snapchat-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-soundcloud"></i> soundcloud</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-spotify"></i> spotify</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stack-exchange"></i> stack-exchange</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stack-overflow"></i> stack-overflow</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-steam"></i> steam</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-steam-square"></i> steam-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stumbleupon"></i> stumbleupon</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stumbleupon-circle"></i> stumbleupon-circle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-superpowers"></i> superpowers</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-telegram"></i> telegram</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tencent-weibo"></i> tencent-weibo</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-themeisle"></i> themeisle</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-trello"></i> trello</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tripadvisor"></i> tripadvisor</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tumblr"></i> tumblr</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-tumblr-square"></i> tumblr-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-twitch"></i> twitch</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-twitter"></i> twitter</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-twitter-square"></i> twitter-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-usb"></i> usb</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-viacoin"></i> viacoin</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-viadeo"></i> viadeo</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-viadeo-square"></i> viadeo-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vimeo"></i> vimeo</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vimeo-square"></i> vimeo-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vine"></i> vine</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-vk"></i> vk</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wechat"></i> wechat </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-weibo"></i> weibo</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-weixin"></i> weixin</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-whatsapp"></i> whatsapp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wikipedia-w"></i> wikipedia-w</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-windows"></i> windows</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wordpress"></i> wordpress</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wpbeginner"></i> wpbeginner</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wpexplorer"></i> wpexplorer</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wpforms"></i> wpforms</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-xing"></i> xing</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-xing-square"></i> xing-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-y-combinator"></i> y-combinator</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-y-combinator-square"></i> y-combinator-square </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-yahoo"></i> yahoo</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-yc"></i> yc </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-yc-square"></i> yc-square </div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-yelp"></i> yelp</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-yoast"></i> yoast</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-youtube"></i> youtube</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-youtube-play"></i> youtube-play</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-youtube-square"></i> youtube-square</div>
                    </div>
                    <div className="clearfix"></div>
                    <h2 className="headingStyle1"><i className="icon-eye"></i> Medical Icons</h2>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-ambulance"></i> ambulance</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-h-square"></i> h-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-heart"></i> heart</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-heart-o"></i> heart-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-heartbeat"></i> heartbeat</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-hospital-o"></i> hospital-o</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-medkit"></i> medkit</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-plus-square"></i> plus-square</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-stethoscope"></i> stethoscope</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-user-md"></i> user-md</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair"></i> wheelchair</div>
                    </div>
                    <div className="col-md-3">
                      <div className="iconBox"><i className="fa fa-wheelchair-alt"></i> wheelchair-alt</div>
                    </div>
                  </div>
                  : null}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;




