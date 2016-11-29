var NewItem= React.createClass({
  handleClick() { 
    var name = this.refs.name.value; 
    var price = this.refs.price.value;
    var description = this.refs.description.value; 
    $.ajax({ 
      url: '/api/v1/items', 
      type: 'POST', 
      data: { item: { name: name, price: price, description: description } }, 
      success: (item) => { this.props.handleSubmit(item); } 
    });
  },

  render() { 
    return ( 
      <div> 
        <h1>new item</h1>
          <input ref='name' placeholder='Enter the name of the item' />&nbsp; 
          <input ref='price' placeholder='Enter the price of the item' />&nbsp;
          <input ref='description' placeholder='Enter a description' />&nbsp;
          <button onClick={this.handleClick}>Submit</button>
      </div> 
    ) 
  } 
});
