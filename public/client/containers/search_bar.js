import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
      this.setState({term: event.target.value});
  }
  onFormsubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormsubmit} className="input-group">
      
      </form>
    );
  }
}
// 
// <input
//   placeholder="Search for someone"
//   className="form-control"
//   value={this.state.term}
//   onChange={this.onInputChange} />
// <span className="input-group=btn">
//   <button type="submit" className="btn btn-secondary">Submit</button>
// </span>