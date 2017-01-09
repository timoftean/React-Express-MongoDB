var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
      return {input:""};
    },
    render: function(){
        return (
            <div className="'grocery-addItem">
                <form>
                    <input value={this.state.input}/>
                    <button> Add Item</button>
                </form>
            </div>
        )
    }
});