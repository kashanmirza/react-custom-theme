import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Ratingstar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating1: 3,
      rating2: 2,
    }
  }

  componentDidMount() {

  }

  onStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating2: nextValue });
  }

  render() {
    const { rating1, rating2 } = this.state;
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <h2 className="headingStyle1 marginMinusLeftRight"><i className="icon-eye"></i> Complete Guide Link
            <a target="_blank" href="https://www.npmjs.com/package/react-star-rating-component">https://www.npmjs.com/package/react-star-rating-component</a>
            </h2>
            <div className="overviewBox clearfix">
              <h2>Rating Star</h2>
              <div className="marginTop">
                <div className="col-md-3">
                  <div className="row">
                    <p>Without Editable {this.state.rating1} ):</p>
                    <div className="starStyle">
                      <StarRatingComponent
                        name="rate1"
                        emptyStarColor="#ccc"
                        editing={true}
                        starCount={5}
                        value={rating1} />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                  <p>Editable with handlers {this.state.rating2} ):</p>
                  <div className="starStyle">
                    <StarRatingComponent
                      name="rate2"
                      emptyStarColor="#ccc"
                      starCount={10}
                      value={this.state.rating2}
                      onStarClick={this.onStarClick.bind(this)} />
                  </div>
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

export default Ratingstar;
