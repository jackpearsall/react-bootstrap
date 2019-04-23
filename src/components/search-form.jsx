import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.state.searchText = event.target.value;
  }

  handleSubmit() {
    this.props.updateCity(this.state.searchText);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} type="text" value={this.searchText} />
        <button onClick={this.handleSubmit} type="submit">Search</button>
      </div>
    );
  }
}

export default SearchForm;
