import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            userName : "Muthukrishnan Perumal",
            Email : "muthukrishnanpr@gmail.com",
            dob : "21-01-1998",
            education : "BE - Mechanical Engineering",
            comment : "Hello World"
        }
    }
    render(){
        return(
            <>
            <h3>{this.state.userName}</h3>
            <span>{this.state.Email}</span>
            <br />
            <br />
            <Home dob = {this.state.dob} education = {this.state.education} comment = {this.state.comment}/>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)