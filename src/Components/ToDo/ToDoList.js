import React, { Component } from 'react';
import {Input, Button} from 'reactstrap';
 
class ToDoList extends Component {
  constructor() { 
    super()
    this.state = {
     list: [],
     addItem: ''
   }
  }

  addFunction(old, newItem) {
    this.setState({list:[...old, {item:newItem,isDone:"not yet"}]})
  }

  completeFunction(index){
    let toUpdate = this.state.list

    toUpdate[index].isDone = 'Done!'
    console.log(toUpdate)
    this.setState({list: toUpdate})
  }
  
  render() {
    return (
      <div>
       <Input onChange={(e) => this.setState({addItem: e.target.value})} id='addToDoItem' placeholder='Add item to list' />
       <Button onClick={()=>this.addFunction(this.state.list, this.state.addItem)} >Add to the list</Button>
       <h2>HoneyDo List:</h2>
       <table style={{width:'90%'}}>
            <thead>
                <tr><td style={{width:'70%'}}>Things To Do</td><td style={{width:'20%'}}>Is it done?</td><td></td></tr>
            </thead>
            <tbody>
                {this.state.list.map((item, num) => {return(<tr key={item.item}><td>{item.item}</td><td>{item.isDone}</td><td><Button onClick={()=>this.completeFunction(num)}>Done</Button></td></tr>)})}
            </tbody>
       </table>
     </div>
    )
  }
}
 
export default ToDoList;
