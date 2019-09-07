import React, { Component } from 'react'
import TodoItem from './TodoItem'
//importing prop-types to define type of prop(ex. Todos type)
import propTypes from 'prop-types'

//Name of this class is name of html tag<Todos />
export class Todos extends Component {
  render() {
    // here we can access todos from <Todos todos=""><Todos/> property called props (todos="").
   //here in react arrow function works in ()=>(), inst of ()=>{}..
    return this.props.todos.map((todo)=>(
      //instead of writing separate html tags for id,title we can create separate component called todo_item and then display <TodoItem/>
      //todo={todo} - first todo is props and second is value
      // so now we can use todo props in TodoItem to get value 
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
      
    ));
  }
}

//defining proptypes for our Todos array
Todos.propTypes={
  todos: propTypes.array.isRequired
}
export default Todos
