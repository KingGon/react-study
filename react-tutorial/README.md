###ES6로 React 실행하기

## state 초기화
```js
getInitialState() {
        return {
            todos : [
                {id : 1, text : 'todo 1'},
                {id : 2, text : 'todo 2'},
                {id : 3, text : 'todo 3'}
            ]
        }
    }
```
ES6에서 state를 초기하는 방법은 기존과 다르다.
생성자 함수 내에서 this.state를 초기화 한다.

```js
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
```

## 이벤트 함수내에서 props 접근
이벤트 호출시에 기본적으로 셋팅되던 this값이 ES6에서는 전달되지 않는다.
생성자 함수에서 .bind(this)를 설정하던지 이벤트 바인드 시에 .bind(this)를 설정한다.

```js
render() {
    var todoList = this.state.todos.map((todo) => {
        return <li key={todo.id}><Todo onDelete={this.deleteTodo.bind(this)} todo={todo} /></li>;
    });
    return <ul>{todoList}</ul>;
}

//OR 

constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
}
```