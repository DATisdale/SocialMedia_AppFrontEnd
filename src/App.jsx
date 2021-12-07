import React, {Component} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PageLayout from "./components/PageLayout/PageLayout";

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
        <PageLayout/>
        </div>
    )
}
}
export default App;