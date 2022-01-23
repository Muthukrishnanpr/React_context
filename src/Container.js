import React from 'react';
import { MyContext } from './MyContext';

export default function Container() {
    return (
        <>
            <MyContext.Consumer>
                {
                    (context) => {
                        return (
                            <>
                                <p>{context.userName}</p>
                                <p>{context.email}</p>
                                <p>{context.dob}</p>
                                <p>{context.education}</p>
                                <p>{context.comment}</p>
                            </>
                        )
                    }
                }
            </MyContext.Consumer>
        </>
    );
}
