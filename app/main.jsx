var ReactDOM = require('react-dom');
var React = require('react');


console.log("Hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name: "Ice Cream"
}, {
    name: "Waffles"
}, {
    name: "Candy",
    purchased:true
}, {
    name: "Snarks"
}];
ReactDOM.render(<GroceryItemList items={initial} />, document.getElementById('app'));