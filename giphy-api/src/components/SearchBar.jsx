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

  trending = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=bYFMRHm7P79nLgVnPaLhYwOxbIgn3CdZ`
    )
      .then((response) => response.json())
      .then((response) => {
        this.props.update(response.data);
      })

      .catch((error) => console.error(error));
  };
  render() {
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

        <button onClick={this.trending}>Trending</button>
      </div>
    );
  }
}

export default Search;
