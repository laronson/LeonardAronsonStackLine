import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeMessage, getGraphData} from '../actions/actions.js';
import ProductBar from './product-bar.js'
import SalesGraph from './sales-graph.js'


class MainPage extends Component {

  //When the main page originally mounts, make the api call to get the product
  //data and save it in the global state tree
  componentDidMount() {
    this.props.dispatch(getGraphData())
  }

  render() {
    return(
      <div id="home-page">
        <div id="header">
          <h2> Stackline </h2>
        </div>
        <div id="main-page">
        {this.props.productData ?
          <div id="product-component-container">
            <ProductBar image={this.props.productData.image}
              tags={this.props.productData.tags}
              subtitle={this.props.productData.subtitle}/>
              <SalesGraph salesData={this.props.productData.sales}/>
          </div>
          :
          <div/>
        }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(MainPage);
