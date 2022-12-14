const ToDoList = ({ data, title, handleDelete }) => {

    return (
      <div className="todo-list">
        <h2>{ title }</h2>
        {data.map(item => (
          <div className="todo-preview" key={item.id} >
            <h2>{ item.title }</h2>
            <p>Priority: { item.priority }</p>
            <button onClick={()=>{handleDelete(item.id)}}>Delete item</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default ToDoList;