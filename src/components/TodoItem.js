import React, { Component } from "react";
//importing prop-types to define type of prop(ex. Todo type)
import propTypes from "prop-types";

export class TodoItem extends Component {
   //function to handle CSS attribute works in camel case
    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding:'1px',
            borderBotton:'1px dotted #ccc',
            marginBottom:'5px',
            textDecoration: this.props.todo.completed ?'line-through':'none'
        }
    }

   
   
  render() {
      
    return (
        //in jsx we use inline style css and inline style goes in {{}} for direct style and single {} for functions or variables
      <div style={this.getStyle()}>
        <p>
        {/* here calling method of parent class by using parents props property */}
        <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>
        {this.props.todo.title}
        <button style={deleteStyle} onClick={this.props.deleteTodo.bind(this,this.props.todo.id)}>X</button>
        </p>
      </div>
    );
  }
}
//defining proptypes for our TodoItem object TodoItem should be name of class name
TodoItem.propTypes = {
//todo is name of props name
  todo: propTypes.object.isRequired
};
const deleteStyle={
    background:'pink',
    color:'#000',
    border:'1px solid #000',
    borderRadius:'30%',
    float:'right'
}
export default TodoItem;
