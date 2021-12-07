import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import SearchBar from "./components/SearchBar/SearchBar";
import PageLayout from "./components/PageLayout/PageLayout";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        object: null,
        user: null
    }

    componentDidMount(){
        /// JWT maybe set other than null
    }
render() {
    return (
        <div className="App">
        <SearchBar/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/profile" render={(props) => {
                if(!this.state.user){
                    return <Redirect to='/login' />
                } else {
                    return <Profile {...props} />
                }
            }}/>
            <Route path="/friends" component={Friends}/>
            <Redirect to='/not-found'/>
        </Switch>
        </div>
    )
}
}
export default App;