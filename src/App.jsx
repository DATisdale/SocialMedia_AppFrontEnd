import React, {Component} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import SearchBar from "./components/Searchbar/Searchbar";
import LoginForm from "./components/LoginForm/LoginForm"
import Signup from "./components/Signup/Signup"
import Home from './components/Home/Home'
import jwtDecode from 'jwt-decode'
// import PageLayout from "./components/PageLayout/PageLayout";

class App extends Component {
    constructor(props){
        super(props);
        const jwt=localStorage.getItem('token');
        try{
          const decodedUser= jwtDecode(jwt);
            this.state = {
                user:decodedUser,
            }
        }catch{
            this.state = {
                user:null,
            }
        }

    }

    componentDidMount(){
        /// JWT maybe set other than null
        const jwt=localStorage.getItem('token');
        try{
          const decodedUser= jwtDecode(jwt);
          this.setState({user: decodedUser});
        }catch{
          
        }
    }
render() {
    return (
        <div className="App">
        <SearchBar/>
        <Switch>
            <Route path="/" exact render={(props) => {
                if(!this.state.user){
                    return <Redirect to='/login' />
                } else {
                    return <Home {...props} />
                }
            }}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={LoginForm}/>
            {/* <Route path="/newsFeed" exact Component={NewsFeed}/>
            <Route path="/profile" render={(props) => {
                if(!this.state.user){
                    return <Redirect to='/login' />
                } else {
                    return <Profile {...props} />
                }
            }}/>
            <Route path="/friends" component={Friends}/> */}
            {/* <Redirect to='/not-found'/> */}
        </Switch>
        </div>
    )
}
}
export default App;