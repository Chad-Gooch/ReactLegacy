import React, { Component } from 'react';


class CatList extends Component {

  render() {
    return (
   <div>
     {this.props.breeds.map(cat => {return(<li key={cat}>{cat}</li>)} )}
   </div>
    )
  }
}
 
export default CatList;
