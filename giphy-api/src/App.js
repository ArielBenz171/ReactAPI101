import React, { Component } from "react";
import "./App.css";
import GifCard from "./components/GifCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
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
      <div className="display">
        {this.state.data.map((item, index) => (
          <GifCard key={index} url={item.images.original.url} />
        ))}
        {/* <img src={this.state.data[0].embed_url} /> */}
      </div>
    );
  }
}

export default App;
