import React from 'react';
import ReactDOM from 'react-dom';

class Name extends React.Component {

    constructor(props) {
        super(props);
        console.log('Rendered ' + this.props.name);
    }

    render() {
        let bing = "www.bing.com";
        return(
            <div>
                {this.props.name} is my Name
                <a href={bing}>GOOGLE</a>
            </div>
        );
    }
}

function Name2(props) {
    return(
            <div>
                <h1>{props.title}</h1>
                {props.name} is my name
            </div>
        );
}

export default Name2;