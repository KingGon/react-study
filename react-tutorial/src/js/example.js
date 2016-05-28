import React from 'react'
import ReactDOM from 'react-dom'

class Todo extends React.Component {
    _onDelete() {
        console.log(this.props);
        this.props.onDelete(this.props.todo.id);
    }
    render() {
        return (
            <div>
                <span>{this.props.todo.text}</span>
                <button onClick={this._onDelete.bind(this)}>delete</button>
            </div>
        );
    }
}

class TodoList extends React.Component {
    // getInitialState() {
    //     return {
    //         todos : [
    //             {id : 1, text : 'todo 1'},
    //             {id : 2, text : 'todo 2'},
    //             {id : 3, text : 'todo 3'}
    //         ]
    //     }
    // }
    
    constructor(props) {
        super(props);
        this.state = {
            todos : [
                {id : 1, text : 'todo 1'},
                {id : 2, text : 'todo 2'},
                {id : 3, text : 'todo 3'}
            ]
        }
    }
    deleteTodo(id) {
        this.setState({
            todos : this.state.todos.filter((todo) => {
              return todo.id !== id;  
            })
        })
    }
    render() {
        var todoList = this.state.todos.map((todo) => {
            return <li key={todo.id}><Todo onDelete={this.deleteTodo.bind(this)} todo={todo} /></li>;
        });
        return <ul>{todoList}</ul>;
    }
}

// var TodoTest = React.createClass({
//    render : function() {
//        return (
//          <div>HI</div>  
//        );
//    } 
// });

// class TodoTest extends React.Component {
//     render() {
//         return (
//             <div>HI</div>  
//         );
//     }
// }

ReactDOM.render(
    <TodoList />, document.getElementById("main")
)
