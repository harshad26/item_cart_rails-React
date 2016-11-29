var Item = React.createClass({ 

  getInitialState() { 
    return {editable: false} 
  }, 



  handleEdit() { 
    if(this.state.editable) 
      { 
        var name = this.refs.name.value; 
        var price = this.refs.price.value;
        var id = this.props.item.id; 
        var description = this.refs.description.value; 
        var item = {id: id , name: name , price: price, description: description}; 
        this.props.handleUpdate(item);
      } 
    this.setState({ editable: !this.state.editable })
  },
  
  render() { 
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>; 
    var price = this.state.editable ? <input type='text' ref='price' defaultValue={this.props.item.price} /> : <p>{this.props.item.price}</p>; 
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
    return ( 
      <div> 
        {name} 
        {price}
        {description} 
        <button onClick={this.props.handleDelete} >Delete</button>&nbsp; 
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }  </button>
      </div> 
    ) 
  } 
});
