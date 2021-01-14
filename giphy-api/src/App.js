import React, { Component } from "react";
import "./App.css";
import GifCard from "./components/GifCard";
import Searchbar from "./components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.updateData = this.updateData.bind(this);
  }

  //function to be called from SearchBar component to update the data state
  updateData(newData) {
    this.setState({ data: newData });
  }

  //display trending when component mounts
  componentDidMount() {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=iCou32qYmtidVoNOAQl5QJtlpLVRNfzk`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response.data });
      })

      .catch((error) => console.error(error));
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <div className="nav">
          <Searchbar update={this.updateData} />
        </div>
        <div className="display">
          {this.state.data.map((item, index) => (
            <GifCard key={index} url={item.images.original.url} />
          ))}
        </div>

        {/* {this.state.displayTrending ? this.trendingGifs : <p>nothing</p>} */}

        {/* <img src={this.state.data[0].embed_url} /> */}
      </div>
    );
  }
}

export default App;
