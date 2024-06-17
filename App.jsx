// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a functional component
const App = () => {
    const name = "World";
    
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to learning JSX with React.</p>
        </div>
    );
};

// Render the component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
