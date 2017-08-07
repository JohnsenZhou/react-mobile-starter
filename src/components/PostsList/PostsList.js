import React, { Component } from 'react';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componenWillMount() {
    console.log(this.props)
  }

  render() {

    return (
      <div>
        <li></li>
      </div>
    )
  }
}

export default PostsList;