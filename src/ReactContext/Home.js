import React, { useContext } from 'react';
import { MyContext, TestContext } from "./Context"

export default class Home extends React.Component {

    static contextType = MyContext;
    render() {
        return (
            <>
                <h4>Home Component : {this.context.count}</h4>
            </>
        );
    }
}



export const UseContextComponent = () => {

    const myContext = useContext(MyContext);

    const testContext = useContext(TestContext)

  return (
      <>
      UseContext Component
      <br />
      <span>MyContext Value : {myContext.count}</span>
      <br />
      {/* <span>TestContext Value : {testContext.user}</span> */}
      </>
  );
}
