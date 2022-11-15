import React from 'react'; 

const FunctionalGreetingProps = (props) => {
    console.log(props);
    return <h1>{props.greeting} {props.name} i see that you are {props.age} old </h1>
    }

export default FunctionalGreetingProps;