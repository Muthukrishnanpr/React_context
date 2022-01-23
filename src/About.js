import React from 'react';
import { AboutContext } from './MyContext';

export default class About extends React.Component {
    static contextType = AboutContext;
    render() {
        return (
            <>
                <span>{this.context.test}</span>
            </>
        );
    }
}
