import React from "react";
import GifCard from "./GifCard";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      data: [],
    };
  }

  updateSearch = (event) => {
    console.log(event.target.value);
    this.setState({ searchKey: event.target.value });
  };

  random = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=bYFMRHm7P79nLgVnPaLhYwOxbIgn3CdZ`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ data: response.data });
        //update data in parent App component, turn into array to allow mapping
        this.props.update([response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  search = (event) => {
    let searchTerm = event.target.value;
    console.log(searchTerm);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=bYFMRHm7P79nLgVnPaLhYwOxbIgn3CdZ`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ data: response.data });
        //update data in parent App component
        this.props.update(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search a Gif"
          onChange={this.updateSearch}
        />
        <button onClick={this.search} value={this.state.searchKey}>
          Search
        </button>
        <button onClick={this.random} value="random">
          Random GIF
        </button>
      </div>
    );
  }
}

export default Search;
