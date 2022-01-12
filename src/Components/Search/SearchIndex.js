import React, { Component } from 'react';
import {Input, Button} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor() { 
    super()
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     result: [],
     searchEntry: ''
   }
  }

  searchFunction() {
    this.setState({result: this.state.things.filter(search => search.includes(this.state.searchEntry.toLowerCase()))})
  }
  
  render() {
    return (
      <div>
       <Input onChange={(e) => this.setState({searchEntry: e.target.value})} id='searchBar' placeholder='Search Here' />
       <Button onClick={()=>this.searchFunction()} >Search</Button>
       <h3>Results:</h3>
       {this.state.result.map(item => {return(<li key={item}>{item}</li>)})}
     </div>
    )
  }
}
 
export default SearchIndex;
