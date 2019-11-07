import React from 'react';
import './MyComponent.scss';

class MyComponent extends React.Component {
    render() {
        return <div className="my-component">
          <h2>{this.props.title}{console.log('hello')}</h2>
        </div>
        // return React.createElement('h2',null,`Title: ${this.props.title}`);
    }
}
export default MyComponent;
