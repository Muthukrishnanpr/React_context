import React from 'react';
import { MyContext, TestContext } from "./Context"

export default function Myapp() {
    return (
        <>
            <MyContext.Consumer>
                {
                    (context) => {
                        return (
                            <TestContext.Consumer>
                                {
                                    (testContext) => {
                                        return (
                                            <>
                                            <h1 style={{textTransform : "uppercase"}}>User Name : {testContext.user}</h1>
                                                <h2>Test Component : {context.count}</h2>
                                                <button onClick={context.increment}>Increment</button>
                                                <button onClick={context.decrement}>Decrement</button>
                                            </>
                                        )
                                    }
                                }

                            </TestContext.Consumer>
                        )
                    }
                }
            </MyContext.Consumer>
        </>
    );
}
