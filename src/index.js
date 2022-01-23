import React from "react";
import ReactDOM from "react-dom";

import StateContext from "./MyContext"
import Container from "./Container"

class App extends React.Component {
    render() {
        return (
            <>
               <StateContext>
                   <Container />
               </StateContext>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)