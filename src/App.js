import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
        this.state = {
          todos:[],
          title:'Share Your Quotes Here',
          counter:0
        };
  }

  addTodo=(e)=>{
    e.preventDefault();
    let author = this.refs.author.value;
    let quote = this.refs.quote.value;
    let counter = this.state.counter;
    
    
    let todo = {
      author,quote,counter
    };

    counter++;

    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos: todos,
      counter:counter
    });

    this.refs.todoForm.reset();
  }

  removeQuote(index){

    let newTodos = [...this.state.todos];
    
    newTodos.splice(index,1);
      this.setState({
        todos: newTodos
      });
      
  }

 


  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div >
        <form ref = "todoForm" className="App">
        <h1>{title}</h1>
        <label>Author  </label>
          <input type = "text" ref = "author" placeholder = "Enter Author Name" autoFocus />
        <br/><br/>

        <label>Quote </label>
          <textarea ref = "quote" placeholder = "Enter quote"/>
        <br/><br/>

          <button className="addBtn" onClick = {this.addTodo}>Add</button>
        </form>

          <ul>
            {this.state.todos.map((todo,index)=>{
              return (

                <li className="list_wrap" key={todo.counter}><div className="myListdata">"{todo.quote}" !</div> 
                <div className="authorsign"> - {todo.author}</div>
                <div className="myBtnrmv">
                  <button className="remove_btn" onClick = {()=>this.removeQuote(index)}>Remove</button>
                </div>
                </li>
              )
            })}

            <div>
            </div>
          </ul>
      </div>
    );
  }
}

export default App;
