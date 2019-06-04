import React, {Component} from 'react';
import Badge from 'react-bootstrap/Button'
import {FaHome} from 'react-icons/fa';

class ProductBar extends Component {

  //Generate an array of tags for display for the product tag information
  generateTags() {
    var tagArray = []
    this.props.tags.forEach((tag) => {
      tagArray.push(<Badge>{tag}</Badge>)
    })
    return tagArray;
  }

  render() {
    return (
      <div className="item-bar">
        <img height="300px" src={this.props.image}/>
        {this.props.subtitle}
        <hr/>
        <div className="tag-descriptors">
          {this.generateTags()}
        </div>
        <hr/>
        <div className="item-bar-options">
          <div className="page-link">
            <FaHome/> Overview
          </div>
          <div className="page-link">
            <FaHome/> Sales
          </div>
        </div>
      </div>
    )
  }
}

export default ProductBar;
