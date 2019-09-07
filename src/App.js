import React,{Component} from "react";
//importing new created component for todos
import Todos from "./components/Todos";
import "./App.css";

class App extends Component{
  //can create any state json object to be used in app here
  state = {
    todos: [
      {
        id: 1,
        title: "First Todo List",
        completed:false
      },
      {
        id: 2,
        title: "Second Todo List",
        completed:true
      },
      {
        id: 3,
        title: "Third Todo List",
        completed:false
      }
    ]
  };
  //method to chnage state of todo
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed= !todo.completed
      }
      return todo;
    })});
  }
  deleteTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter((todo)=>{
      
      return todo.id !== id;
    })]
  });
  }
  render() {
    
    return (
      <div className="App">
        {/* jsx to display Todos component and its props(properties) start tag with Capital(** must be capital)letter */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
