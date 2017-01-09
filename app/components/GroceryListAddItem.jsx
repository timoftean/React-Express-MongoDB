var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx');
module.exports = React.createClass({
    getInitialState:function(){
      return {input:""};
    },
    handleInputName: function(e){
        this.setState({input:e.target.value});
    },
    additem:function(e){
        e.preventDefault();
        //console.log("Adding item!",this.state.input);
        action.add({
            name:this.state.input
        });
        this.setState({
            input:""
        })
    },
    render: function(){
        return (
            <div className="grocery-addItem">
                <form onSubmit={this.additem}>
                    <input value={this.state.input} onChange={this.handleInputName} type="text"/>
                    <button> Add Item</button>
                </form>
            </div>
        )
    }
});