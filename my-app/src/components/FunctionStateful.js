import React  from 'react';

class StatefulGreeting extends React.Component {
    render() {
        return <h1>Hello from the stateful state {this.props.name}</h1>
    }


}

export default StatefulGreeting