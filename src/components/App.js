import React from "react";
import SearchBar from "./SearchBar";
import Heading from "./Heading";
import unsplash from "../api/unsplash";
import ImgList from "./ImgList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="container">
        <Heading header__text="Find the images" />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImgList images={this.state.images} />
      </div>
    );
  }
}

export default App;
