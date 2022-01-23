import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import Home, { UseContextComponent } from './Home';

import { StateContext, TestContext } from "./Context"

class App extends React.Component {
  constructor() {
    super();
    //Props Examples 
    this.state = {
      name: "Muthukrishnan Perumal",
      msg: "Hello World",
      comment: "Please choose your field",
    }
  }


  render() {
    return (
      <>
        <StateContext>
          <TestContext.Provider value={{ user: "Aadhithya" }}>
            <span>Hello Welcome {this.state.name}</span>
            <br />
            <Hello msg={this.state.msg} />
          </TestContext.Provider>
          <br />
          <Home />
          <br />
          <UseContextComponent />
        </StateContext>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

