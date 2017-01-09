var ReactDOM = require('react-dom');
var React = require('react');


console.log("Hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(<GroceryItemList/>, document.getElementById('app'));