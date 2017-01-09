var ReactDOM = require('react-dom');
var React = require('react');


console.log("Hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = groceryItemStore.getItems();

function render(){
    ReactDOM.render(<GroceryItemList items={initial} />, document.getElementById('app'));
}
groceryItemStore.onChange(function(items){
    initial=items;
    render();
});
render();