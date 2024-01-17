import TodoItem from "../todoitem/TodoItem";


const TodoList = ({todos}) => {
    return ( 
        <>
            <h1>My Todos</h1>
            {todos.map((todo, index) => {
                return(
                    <ul key={index}>
                       <TodoItem todo = {todo.todos} />
                    </ul>
                )
            })}
        </>
     );
}
 
export default TodoList;