import React, {Component} from "react";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        object: null,
    }
render() {
    return (
        <div className="container-fluid">
        <SearchBar/>
<h1>Sports and stuff fan site</h1>
        </div>
    )
}
}
export default App;